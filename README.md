# serverless-appsync-template

This is ServerlessFramework + AWS AppSync (+ AWS Lambda) template.

## Descriptions

Code structure is inspired by [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).

## Requirements

- node 14.15.1+
- npm 6.14.8+

## Installation

```sh
$ npm install
```

## Usage

### Debug in local

```sh
$ npm run local
```

You can access `http://localhost:20002/` and try API.

### How to deploy

```sh
$ npx serverless deploy --stage={YOUR_ENVIRONMENT_NAME}
```