import { isBefore, parseISO } from 'date-fns';
import { body, check } from 'express-validator';
import { ValidationMiddleware } from '../../middlewares/ValidationMiddleware';

const validations = [
  body('transportId').isUUID(),
  body('amountPeople').isInt(),
  body('departDate').isDate(),
  body('retureDate').isDate(),
  body('destination').isString(),
  body('from').isString(),
  body('name').isString(),
  check('departDate', 'Depart date is after reture date').custom(
    (value, { req }) =>
      isBefore(parseISO(value), parseISO(req.body.retureDate)),
  ),
];

const StoreQuoteRequest = ValidationMiddleware(validations);

export { StoreQuoteRequest };
