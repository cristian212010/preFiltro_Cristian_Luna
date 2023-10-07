import { Router } from 'express';
import { getData, insertData, deleteData, updateData } from '../controllers/pronostico.corto.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Pronóstico Corto Plazo
 *   description: API para administrar pronósticos a corto plazo.
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      pronostico_corto:
 *          type: object
 *          properties:
 *              hora:
 *                  type: string
 *                  description: Hora del pronóstico corto.
 *              temperatura:
 *                  type: number
 *                  description: Temperatura del pronóstico corto.
 *              condicion:
 *                  type: string
 *                  description: Condición meteorológica del pronóstico corto.
 *          required:
 *              - hora
 *              - temperatura
 *              - condicion
 *          example:
 *              hora: "15:00"
 *              temperatura: 26
 *              condicion: "Soleado"
 */


/**
 * @swagger
 * /api/pronosticoCorto/all:
 *   get:
 *     summary: Obtener todos los pronósticos a corto plazo.
 *     tags: [Pronóstico Corto Plazo]
 *     responses:
 *       200:
 *         description: Lista de pronósticos a corto plazo.
 */

router.get('/all', getData);

/**
 * @swagger
 * /api/pronosticoCorto/insert:
 *   post:
 *     summary: Crear un nuevo pronóstico a corto plazo.
 *     tags: [Pronóstico Corto Plazo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/pronostico_corto'
 *     responses:
 *       200:
 *         description: Nuevo pronóstico a corto plazo creado.
 */

router.post('/insert', insertData);

/**
 * @swagger
 * /api/pronosticoCorto/delete/{id}:
 *   delete:
 *     summary: Eliminar un pronóstico a corto plazo por ID.
 *     tags: [Pronóstico Corto Plazo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del pronóstico a corto plazo a eliminar.
 *     responses:
 *       200:
 *         description: Pronóstico a corto plazo eliminado correctamente.
 */

router.delete('/delete/:id', deleteData);

/**
 * @swagger
 * /api/pronosticoCorto/update/{id}:
 *   put:
 *     summary: Actualizar un pronóstico a corto plazo por ID.
 *     tags: [Pronóstico Corto Plazo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del pronóstico a corto plazo a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/pronostico_corto'
 *     responses:
 *       200:
 *         description: Pronóstico a corto plazo actualizado correctamente.
 */

router.put('/update/:id', updateData);

export default router;
