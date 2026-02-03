import { body, param } from 'express-validator';
import { checkValidators } from './check-validators.js';

// Crear contacto
export const validateCreateContact = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('El nombre es requerido')
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre debe tener entre 2 y 100 caracteres'),

  body('alias')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('El alias no puede exceder 50 caracteres'),

  body('phone1')
    .trim()
    .notEmpty()
    .withMessage('El teléfono principal es requerido')
    .isLength({ max: 20 })
    .withMessage('El teléfono no puede exceder 20 caracteres'),

  body('phone2')
    .optional()
    .trim()
    .isLength({ max: 20 })
    .withMessage('El teléfono no puede exceder 20 caracteres'),

  body('location')
    .optional()
    .trim()
    .isLength({ max: 150 })
    .withMessage('La ubicación no puede exceder 150 caracteres'),

  body('type')
    .notEmpty()
    .withMessage('El tipo de contacto es requerido')
    .isIn(['PERSONAL', 'TRABAJO', 'FAMILIAR', 'OTRO'])
    .withMessage('Tipo de contacto no válido'),

  checkValidators,
];

// Actualizar contacto
export const validateUpdateContact = [
  param('id')
    .isMongoId()
    .withMessage('ID debe ser un ObjectId válido de MongoDB'),

  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre debe tener entre 2 y 100 caracteres'),

  body('alias')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('El alias no puede exceder 50 caracteres'),

  body('phone1')
    .optional()
    .trim()
    .isLength({ max: 20 })
    .withMessage('El teléfono no puede exceder 20 caracteres'),

  body('phone2')
    .optional()
    .trim()
    .isLength({ max: 20 })
    .withMessage('El teléfono no puede exceder 20 caracteres'),

  body('location')
    .optional()
    .trim()
    .isLength({ max: 150 })
    .withMessage('La ubicación no puede exceder 150 caracteres'),

  body('type')
    .optional()
    .isIn(['PERSONAL', 'TRABAJO', 'FAMILIAR', 'OTRO'])
    .withMessage('Tipo de contacto no válido'),

  checkValidators,
];

// Eliminar contacto
export const validateContactById = [
  param('id')
    .isMongoId()
    .withMessage('ID debe ser un ObjectId válido de MongoDB'),
  checkValidators,
];
