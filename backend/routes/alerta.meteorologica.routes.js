import { Router } from 'express';
import { getData, insertData, deleteData, updateData } from '../controllers/alerta.meteorologica.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Alerta Meteorológica
 *   description: API para administrar alertas meteorológicas.
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      alerta_meteorologica:
 *          type: object
 *          properties:   
 *              tipo:
 *                  type: string
 *                  description: Tipo o nombre de alerta.
 *              descripcion:
 *                  type: string
 *                  description: Descripción de la alerta.
 *          required: 
 *              - tipo
 *              - descripcion
 *          example:
 *              tipo: Niebla suave
 *              descripcion: Visibilidad levemente afectada
 */

/**
 * @swagger
 * /api/alerta/all:
 *   get:
 *     summary: Obtener todas las alertas meteorológicas.
 *     tags: [Alerta Meteorológica]
 *     responses:
 *       200:
 *         description: Lista de alertas meteorológicas.
 */

router.get('/all', getData);

/**
 * @swagger
 * /api/alerta/insert:
 *   post:
 *     summary: Crear una nueva alerta meteorológica.
 *     tags: [Alerta Meteorológica]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/alerta_meteorologica'
 *     responses:
 *       200:
 *         description: Nueva alerta meteorológica creada.
 */

router.post('/insert', insertData);

/**
 * @swagger
 * /api/alerta/delete/{id}:
 *   delete:
 *     summary: Eliminar una alerta meteorológica por ID.
 *     tags: [Alerta Meteorológica]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la alerta meteorológica a eliminar.
 *     responses:
 *       200:
 *         description: Alerta meteorológica eliminada correctamente.
 */

router.delete('/delete/:id', deleteData);

/**
 * @swagger
 * /api/alerta/update/{id}:
 *   put:
 *     summary: Actualizar una alerta meteorológica por ID.
 *     tags: [Alerta Meteorológica]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la alerta meteorológica a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/alerta_meteorologica'
 *     responses:
 *       200:
 *         description: Alerta meteorológica actualizada correctamente.
 */

router.put('/update/:id', updateData);

export default router;
