import { ApplicationError } from '@/core/application';

interface ErrorInfo {
  errorCode: number;
}

export class ErrorResponse {
  public message: string;
  public errorType: "ApplicationError" | "InternalServerError";
  public errorInfo: ErrorInfo;

  private readonly systemErrorCode = 999;

  public constructor(error: Error | ApplicationError) {
    this.message = error.message;
    this.errorType = error instanceof ApplicationError ? "ApplicationError" : "InternalServerError";
    this.errorInfo = {
      errorCode: error instanceof ApplicationError ? error.errorCode : this.systemErrorCode
    };
  }
}
