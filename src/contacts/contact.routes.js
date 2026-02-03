import { Router } from 'express';
import {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} from './contact.controller.js';

import {
  validateCreateContact,
  validateUpdateContact,
  validateContactById,
} from '../../middlewares/contact-validators.js';

import { uploadContactPhoto } from '../../middlewares/file-uploader.js';

const router = Router();

// GET
router.get('/', getContacts);

// POST
router.post(
  '/',
  uploadContactPhoto.single('profilePhoto'),
  validateCreateContact,
  createContact
);

// PUT
router.put(
  '/:id',
  uploadContactPhoto.single('profilePhoto'),
  validateUpdateContact,
  updateContact
);

// DELETE
router.delete('/:id', validateContactById, deleteContact);

export default router;
