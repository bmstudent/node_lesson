import express from "express";
import { getAllTeacher } from "../controller/teacher.controller.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Teacher:
 *       type: object
 *       required:
 *         - name
 *         - lastname
 *         - subject
 *       properties:
 *         id:
 *           type: string
 *           description: Teacher ID
 *         name:
 *           type: string
 *           description: Teacher's first name
 *         lastname:
 *           type: string
 *           description: Teacher's last name
 *         subject:
 *           type: string
 *           description: Subject the teacher teaches
 *         phone:
 *           type: string
 *           description: Teacher's phone number
 *         img:
 *           type: string
 *           description: Image URL of the teacher
 *       example:
 *         name: Ali
 *         lastname: Karimov
 *         subject: Mathematics
 *         phone: "+998901234567"
 *         img: "https://example.com/ali.jpg"
 */

/**
 * @swagger
 * tags:
 *   name: Teachers
 *   description: Teacher management API
 */

/**
 * @swagger
 * /api/teachers:
 *   get:
 *     summary: Get all teachers
 *     tags: [Teachers]
 *     responses:
 *       200:
 *         description: List of teachers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Teacher'
 */
router.get("/", getAllTeacher);

export default router;
