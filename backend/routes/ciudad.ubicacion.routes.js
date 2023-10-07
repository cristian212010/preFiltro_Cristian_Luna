import { Router } from 'express';
import { getData, insertData, deleteData, updateData } from '../controllers/ciudad.ubicacion.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Ciudad y Ubicación
 *   description: API para administrar información de la ciudad y su ubicación.
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      ciudad_ubicacion:
 *          type: object
 *          properties:
 *              nombre:
 *                  type: string
 *                  description: Nombre de la ciudad.
 *              pais:
 *                  type: string
 *                  description: País de la ciudad.
 *              coordenadas_geograficas:
 *                  type: object
 *                  properties:
 *                      latitud:
 *                          type: number
 *                          description: Latitud de la ubicación de la ciudad.
 *                      longitud:
 *                          type: number
 *                          description: Longitud de la ubicación de la ciudad.
 *          required:
 *              - nombre
 *              - pais
 *              - coordenadas_geograficas
 *          example:
 *              nombre: Ciudad de México
 *              pais: México
 *              coordenadas_geograficas:
 *                  latitud: 19.4326
 *                  longitud: -99.1332
 */

/**
 * @swagger
 * /api/ciudad/all:
 *   get:
 *     summary: Obtener todas las ciudades y ubicaciones.
 *     tags: [Ciudad y Ubicación]
 *     responses:
 *       200:
 *         description: Lista de ciudades y ubicaciones.
 */

router.get('/all', getData);

/**
 * @swagger
 * /api/ciudad/insert:
 *   post:
 *     summary: Crear una nueva ciudad y ubicación.
 *     tags: [Ciudad y Ubicación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ciudad_ubicacion'
 *     responses:
 *       200:
 *         description: Nueva ciudad y ubicación creada.
 */

router.post('/insert', insertData);

/**
 * @swagger
 * /api/ciudad/delete/{id}:
 *   delete:
 *     summary: Eliminar una ciudad y ubicación por ID.
 *     tags: [Ciudad y Ubicación]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la ciudad y ubicación a eliminar.
 *     responses:
 *       200:
 *         description: Ciudad y ubicación eliminada correctamente.
 */

router.delete('/delete/:id', deleteData);

/**
 * @swagger
 * /api/ciudad/update/{id}:
 *   put:
 *     summary: Actualizar una ciudad y ubicación por ID.
 *     tags: [Ciudad y Ubicación]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la ciudad y ubicación a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ciudad_ubicacion'
 *     responses:
 *       200:
 *         description: Ciudad y ubicación actualizada correctamente.
 */

router.put('/update/:id', updateData);

export default router;
