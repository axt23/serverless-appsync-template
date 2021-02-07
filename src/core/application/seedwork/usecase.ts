import { Request } from "./request";
import { Response } from "./response";

export interface Usecase<TRequest extends Request, TResponse extends Response> {
  handle(request: TRequest): Promise<TResponse>;
}