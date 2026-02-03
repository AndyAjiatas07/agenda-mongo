'use strict';

import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  profilePhoto: {
    type: String,
    default: 'contacts/default_profile_photo',
  },

  alias: {
    type: String,
    trim: true,
    maxLength: [50, 'El alias no puede exceder 50 caracteres'],
  },

  phone1: {
    type: String,
    required: [true, 'El teléfono principal es requerido'],
    trim: true,
    maxLength: [20, 'El teléfono no puede exceder 20 caracteres'],
  },

  phone2: {
    type: String,
    trim: true,
    maxLength: [20, 'El teléfono no puede exceder 20 caracteres'],
  },

  name: {
    type: String,
    required: [true, 'El nombre es requerido'],
    trim: true,
    maxLength: [100, 'El nombre no puede exceder 100 caracteres'],
  },

  location: {
    type: String,
    trim: true,
    maxLength: [150, 'La ubicación no puede exceder 150 caracteres'],
  },

  type: {
    type: String,
    required: [true, 'El tipo de contacto es requerido'],
    enum: {
      values: ['PERSONAL', 'TRABAJO', 'FAMILIAR', 'OTRO'],
      message: 'Tipo de contacto no válido',
    },
  },

  isActive: {
    type: Boolean,
    default: true,
  },
});

// Índices
contactSchema.index({ isActive: 1 });
contactSchema.index({ name: 1 });
contactSchema.index({ name: 1, isActive: 1 });
contactSchema.index({ phone1: 1 });

export default mongoose.model('Contact', contactSchema);
