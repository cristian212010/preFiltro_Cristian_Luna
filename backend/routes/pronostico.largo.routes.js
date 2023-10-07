import { Router } from 'express';
import { getData, insertData, deleteData, updateData } from '../controllers/pronostico.largo.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Pronóstico Largo Plazo
 *   description: API para administrar pronósticos a largo plazo.
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      pronostico_largo:
 *          type: object
 *          properties:
 *              fecha:
 *                  type: string
 *                  format: date
 *                  description: Fecha del pronóstico a largo plazo.
 *              temperatura_maxima:
 *                  type: number
 *                  description: Temperatura máxima del pronóstico a largo plazo.
 *              temperatura_minima:
 *                  type: number
 *                  description: Temperatura mínima del pronóstico a largo plazo.
 *              condicion:
 *                  type: string
 *                  description: Condición meteorológica del pronóstico a largo plazo.
 *          required:
 *              - fecha
 *              - temperatura_maxima
 *              - temperatura_minima
 *              - condicion
 *          example:
 *              fecha: "2023-09-26"
 *              temperatura_maxima: 28
 *              temperatura_minima: 20
 *              condicion: "Soleado"
 */

/**
 * @swagger
 * /api/pronosticoLargo/all:
 *   get:
 *     summary: Obtener todos los pronósticos a largo plazo.
 *     tags: [Pronóstico Largo Plazo]
 *     responses:
 *       200:
 *         description: Lista de pronósticos a largo plazo.
 */

router.get('/all', getData);

/**
 * @swagger
 * /api/pronosticoLargo/insert:
 *   post:
 *     summary: Crear un nuevo pronóstico a largo plazo.
 *     tags: [Pronóstico Largo Plazo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/pronostico_largo'
 *     responses:
 *       200:
 *         description: Nuevo pronóstico a largo plazo creado.
 */

router.post('/insert', insertData);

/**
 * @swagger
 * /api/pronosticoLargo/delete/{id}:
 *   delete:
 *     summary: Eliminar un pronóstico a largo plazo por ID.
 *     tags: [Pronóstico Largo Plazo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del pronóstico a largo plazo a eliminar.
 *     responses:
 *       200:
 *         description: Pronóstico a largo plazo eliminado correctamente.
 */

router.delete('/delete/:id', deleteData);

/**
 * @swagger
 * /api/pronosticoLargo/update/{id}:
 *   put:
 *     summary: Actualizar un pronóstico a largo plazo por ID.
 *     tags: [Pronóstico Largo Plazo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del pronóstico a largo plazo a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/pronostico_largo'
 *     responses:
 *       200:
 *         description: Pronóstico a largo plazo actualizado correctamente.
 */

router.put('/update/:id', updateData);

export default router;
