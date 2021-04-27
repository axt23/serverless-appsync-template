FROM node:14.15.4-buster AS runtime

RUN apt-get update \
 && apt-get install -y --no-install-recommends \
    libssl1.1 \
 && rm -rf /var/lib/apt/lists/*

FROM runtime AS builder

RUN apt-get update \
 && apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    openssl \
 && rm -rf /var/lib/apt/lists/*

RUN apt-get update \
 && apt-get install -y --no-install-recommends \
    automake \
    autoconf \
    build-essential \
    libtool \
    libssl-dev \
    pkg-config \
    python-dev \
 && rm -rf /var/lib/apt/lists/*

ENV WATCHMAN_VERSION=4.9.0 \
    WATCHMAN_SHA256=1f6402dc70b1d056fffc3748f2fdcecff730d8843bb6936de395b3443ce05322

RUN cd /tmp \
 && curl --silent --location --output watchman.tar.gz "https://github.com/facebook/watchman/archive/v${WATCHMAN_VERSION}.tar.gz" \
 && echo "$WATCHMAN_SHA256 *watchman.tar.gz" | sha256sum -c - \
 && tar -xz -f watchman.tar.gz -C /tmp/ \
 && rm -rf watchman.tar.gz

RUN cd /tmp/watchman-${WATCHMAN_VERSION} \
 && ./autogen.sh \
 && ./configure --enable-lenient \
 && make \
 && make install \
 && cd $HOME \
 && rm -rf /tmp/*

FROM runtime AS release

COPY --from=builder /usr/local/bin/watchman* /usr/local/bin/

COPY --from=builder /usr/local/share/doc/watchman-4.9.0 /usr/local/share/doc/watchman-4.9.0

COPY --from=builder /usr/local/var/run/watchman /usr/local/var/run/watchman

WORKDIR /app

ENV NODE_ENV=development

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 20002

CMD [ "npx", "serverless", "offline", "start" ]