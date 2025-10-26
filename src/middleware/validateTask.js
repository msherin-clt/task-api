import { body, param } from 'express-validator';
import { checkValidationResults } from './handleValidationErrors.js';

export const validateTask = [
  body('title')
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Title is required')
    .bail()
    .isLength({ min: 3, max: 100 })
    .withMessage('Title must be at least 3 and at most 100 characters'),

  body('completed')
    .optional()
    .isBoolean()
    .withMessage('completed must be true or false'),

  checkValidationResults,
];

export const validateTaskId = [
  param('id')
    .trim()
    .escape()
    .notEmpty()
    .withMessage('id is required')
    .bail()
    .isInt()
    .withMessage('id must be an number')
    .bail()
    .isInt({ min: 1 })
    .withMessage('id must be greater than 0'),
  checkValidationResults,
];
