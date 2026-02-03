import Task from './task.model.js';

// Listar tareas con paginación y filtros
export const getTasks = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10, 
      priority,
    } = req.query;

const filter = {};

    if (priority) filter.priority = priority;

    const tasks = await Task.find(filter)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ priority: 1, name: 1 });

    const total = await Task.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: tasks,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalRecords: total,
        limit,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener las tareas',
      error: error.message,
    });
  }
};

// Crear tarea
export const createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();

    res.status(201).json({
      success: true,
      message: 'Tarea creada exitosamente',
      data: task,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error al crear la tarea',
      error: error.message,
    });
  }
};

// Actualizar tarea
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Tarea no encontrada',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Tarea actualizada exitosamente',
      data: task,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error al actualizar la tarea',
      error: error.message,
    });
  }
};

// Eliminar tarea (hard delete)
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Tarea no encontrada',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Tarea eliminada exitosamente',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar la tarea',
      error: error.message,
    });
  }
};
