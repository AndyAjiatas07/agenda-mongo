'use strict';

import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre de la tarea es requerido'],
    trim: true,
    maxLength: [150, 'El nombre de la tarea no puede exceder 150 caracteres'],
  },

  priority: {
    type: String,
    required: [true, 'La prioridad es requerida'],
    enum: {
      values: ['ALTA', 'MEDIA', 'BAJA'],
      message: 'Prioridad no válida',
    },
  },
});

// Índices
taskSchema.index({ priority: 1 });

export default mongoose.model('Task', taskSchema);
