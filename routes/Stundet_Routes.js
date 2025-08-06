import express from 'express';
import {
  getAllStudents,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent
} from '../controller/student.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Studentlar bilan ishlash
 */

/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Barcha studentlarni olish
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: Studentlar ro'yxati muvaffaqiyatli olindi
 */
router.get('/', getAllStudents);

/**
 * @swagger
 * /api/students:
 *   post:
 *     summary: Yangi student qo‘shish
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - lastname
 *             properties:
 *               name:
 *                 type: string
 *               lastname:
 *                 type: string
 *               class:
 *                 type: string
 *               phone:
 *                 type: string
 *               img:
 *                 type: string
 *     responses:
 *       201:
 *         description: Student muvaffaqiyatli yaratildi
 */
router.post('/', createStudent);

/**
 * @swagger
 * /api/students/{id}:
 *   get:
 *     summary: ID bo‘yicha bitta studentni olish
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Student ID
 *     responses:
 *       200:
 *         description: Student topildi
 *       404:
 *         description: Student topilmadi
 */
router.get('/:id', getStudentById);

/**
 * @swagger
 * /api/students/{id}:
 *   put:
 *     summary: ID bo‘yicha studentni yangilash
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Student ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               lastname:
 *                 type: string
 *               class:
 *                 type: string
 *               phone:
 *                 type: string
 *               img:
 *                 type: string
 *     responses:
 *       200:
 *         description: Student muvaffaqiyatli yangilandi
 *       404:
 *         description: Student topilmadi
 */
router.put('/:id', updateStudent);

/**
 * @swagger
 * /api/students/{id}:
 *   delete:
 *     summary: ID bo‘yicha studentni o‘chirish
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Student ID
 *     responses:
 *       200:
 *         description: Student muvaffaqiyatli o‘chirildi
 *       404:
 *         description: Student topilmadi
 */
router.delete('/:id', deleteStudent);

export default router;
