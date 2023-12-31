/* eslint-disable indent */

import { TaskModel } from '../models/TASKS.js';
export const getTasks = async (_req, res) => {
    try {
        const Tasks = await TaskModel.find({
            isActive: true
        });
        if (!Tasks.length > 0) {
            return res.status(202).json({
                message: 'No se encuentran tareas registradas.',
                tasks: []
            });
        }
        return res.json({
            message: `Número de tareas encontradas ${Tasks.length}`,
            tasks: Tasks
        });
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
};

export const postTask = async (req, res) => {
    try {
        const {
            title,
            description
        } = req.body;
        if (title.length < 6 || description.length < 6) {
            return res.status(205).json({
                message: 'No se registró la tarea, titulo o descripción muy corto.'
            });
        }
        const newTask = new TaskModel({
            title,
            description
        });
        await newTask.save();
        return res.status(201).json({
            message: 'Tarea Guardada correctamente.'
        });
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
};

export const deteleTask = async (req, res) => {
    try {
        const idTask = req.params.idTask;
        const task = await TaskModel.findOne({
            $and: [
                {
                    _id: idTask
                },
                {
                    isActive: true
                }
            ]
        });
        if (!task) {
            return res.status(204).json({
                message: 'La tarea ya no existe.'
            });
        }
        await task.updateOne({
            isActive: false
        });
        return res.json({
            message: 'Tarea eliminada correctamente.',
            tasks: []
        });
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
};

export const markTask = async (req, res) => {
    try {
        const idTask = req.params.idTask;
        const task = await TaskModel.findOne({
            $and: [
                {
                    _id: idTask
                },
                {
                    isActive: true
                }
            ]
        });

        if (!task) {
            return res.status(204).json({
                message: 'La tarea ya no existe.'
            });
        }
        await task.updateOne({
            completed: !task.completed
        });
        return res.json({
            message: 'Tarea marcada/desmarcada correctamente.'
        });
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
};
