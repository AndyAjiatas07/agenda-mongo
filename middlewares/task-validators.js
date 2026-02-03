import { body, param } from 'express-validator';
import { checkValidators } from './check-validators.js';

// Crear tarea
export const validateCreateTask = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('El nombre de la tarea es requerido')
    .isLength({ max: 150 })
    .withMessage('El nombre no puede exceder 150 caracteres'),

  body('priority')
    .notEmpty()
    .withMessage('La prioridad es requerida')
    .isIn(['ALTA', 'MEDIA', 'BAJA'])
    .withMessage('Prioridad no válida'),

  checkValidators,
];

// Actualizar tarea
export const validateUpdateTask = [
  param('id')
    .isMongoId()
    .withMessage('ID debe ser un ObjectId válido de MongoDB'),

  body('name')
    .optional()
    .trim()
    .isLength({ max: 150 })
    .withMessage('El nombre no puede exceder 150 caracteres'),

  body('priority')
    .optional()
    .isIn(['ALTA', 'MEDIA', 'BAJA'])
    .withMessage('Prioridad no válida'),

  checkValidators,
];

// Eliminar tarea / obtener por ID
export const validateTaskById = [
  param('id')
    .isMongoId()
    .withMessage('ID debe ser un ObjectId válido de MongoDB'),
  checkValidators,
];
