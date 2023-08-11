/* eslint-disable camelcase */
/* eslint-disable indent */
import { model, Schema } from 'mongoose';
import { RequiredString6, BooleanDefault, BooleanTrue, KeyFalse_TimestampsTrue } from '../types/types.js';

const TaskSchema = new Schema({
    title: RequiredString6,
    completed: BooleanDefault,
    isActive: BooleanTrue,
    description: { ...RequiredString6, max: 40 }
}, KeyFalse_TimestampsTrue);

export const TaskModel = model('Tasks', TaskSchema);
