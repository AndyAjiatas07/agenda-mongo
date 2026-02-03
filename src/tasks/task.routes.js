import { Router } from 'express';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from './task.controller.js';

import {
  validateCreateTask,
  validateUpdateTask,
  validateTaskById,
} from '../../middlewares/task-validators.js';

const router = Router();

// GET
router.get('/', getTasks);

// POST
router.post('/', validateCreateTask, createTask);

// PUT
router.put('/:id', validateUpdateTask, updateTask);

// DELETE
router.delete('/:id', validateTaskById, deleteTask);

export default router;
