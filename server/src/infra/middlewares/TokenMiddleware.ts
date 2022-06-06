import { NextFunction, Request, Response } from 'express';
import { TOKEN } from '../../config';

export async function TokenMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  if (TOKEN != request.headers.authorization) {
    return response.status(401).json();
  }

  return next();
}
