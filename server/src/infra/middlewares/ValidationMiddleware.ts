import { NextFunction, Request, Response } from 'express';
import { ValidationChain, validationResult } from 'express-validator';

export function ValidationMiddleware(validations: Array<ValidationChain>) {
  return async (request: Request, response: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(request)));

    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    return next();
  };
}
