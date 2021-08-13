import express from 'express'; 
import {getStudents} from '../controllers/student.js';
import { createStudent } from '../controllers/student.js';
//import student from '../models/student.js';

const router = express.Router();

router.get('/', getStudents);
router.post('/', createStudent);

export default router; 
