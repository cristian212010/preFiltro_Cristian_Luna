import { Router } from 'express';
import { getData, insertData, deleteData, updateData } from '../controllers/pronostico.actual.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Pronóstico Meteorológico
 *   description: API para administrar pronósticos meteorológicos actuales.
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      pronostico_actual:
 *          type: object
 *          properties:   
 *              temperatura_actual:
 *                  type: number
 *                  description: Temperatura actual del ambiente.
 *              humedad:
 *                  type: integer
 *                  description: Humedad del ambiente.
 *              velocidad_del_viento:
 *                  type: integer
 *                  description: Velocidad del viento actual.
 *              direccion_del_viento:
 *                  type: string
 *                  description: Sentido del viento.
 *              ciudad_y_ubicacion:
 *                  type: string
 *                  description: ID de la ciudad del pronóstico.
 *              presion_atmosferica:
 *                  type: integer
 *                  description: Presión atmosférica.
 *              visibilidad:
 *                  type: integer
 *                  description: Visibilidad.
 *              condicion_meteorologica:
 *                  type: string
 *                  description: Condición del ambiente.
 *              fecha_y_hora:
 *                  type: string
 *                  description: Fecha y hora actual.
 *              pronostico_corto_plazo:
 *                  type: string
 *                  description: ID del pronóstico a corto plazo.
 *              pronostico_largo_plazo:
 *                  type: string
 *                  description: ID del pronóstico a largo plazo.
 *              alertas_meteorologicas: 
 *                  type: string
 *                  description: ID de la alerta meteorológica.
 *              fuente_de_datos: 
 *                  type: string
 *                  description: Fuente de los datos.
 *          required: 
 *              - temperatura_actual
 *              - velocidad_del_viento
 *              - ciudad_y_ubicacion
 *              - condicion_meteorologica
 *              - pronostico_corto_plazo
 *              - pronostico_largo_plazo
 *              - alertas_meteorologicas
 *              - fuente_de_datos
 *          example:
 *              temperatura_actual: 25.5
 *              humedad: 60
 *              velocidad_del_viento: 10
 *              direccion_del_viento: Norte
 *              ciudad_y_ubicacion: 65123492f468a9b3fc9d6437
 *              presion_atmosferica: 1013
 *              visibilidad: 10
 *              condicion_meteorologica: Soleado
 *              fecha_y_hora: 2023-09-25T14:30:00
 *              pronostico_corto_plazo: 651234f2f468a9b3fc9d643b
 *              pronostico_largo_plazo: 651234d3f468a9b3fc9d6438
 *              alertas_meteorologicas: 6512346af468a9b3fc9d642f
 *              fuente_de_datos: Servicio Meteorológico Nacional
 */

/**
 * @swagger
 * /api/pronostico/all:
 *   get:
 *     summary: Obtener todos los pronósticos meteorológicos actuales.
 *     tags: [Pronóstico Meteorológico]
 *     responses:
 *       200:
 *         description: Lista de pronósticos meteorológicos actuales.
 */

router.get('/all', getData);

/**
 * @swagger
 * /api/pronostico/insert:
 *   post:
 *     summary: Crear un nuevo pronóstico meteorológico actual.
 *     tags: [Pronóstico Meteorológico]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/pronostico_actual'
 *     responses:
 *       200:
 *         description: Nuevo pronóstico meteorológico creado.
 */

router.post('/insert', insertData);

/**
 * @swagger
 * /api/pronostico/delete/{id}:
 *   delete:
 *     summary: Eliminar un pronóstico meteorológico actual por ID.
 *     tags: [Pronóstico Meteorológico]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del pronóstico meteorológico a eliminar.
 *     responses:
 *       200:
 *         description: Pronóstico meteorológico eliminado correctamente.
 */

router.delete('/delete/:id', deleteData);

/**
 * @swagger
 * /api/pronostico/update/{id}:
 *   put:
 *     summary: Actualizar un pronóstico meteorológico actual por ID.
 *     tags: [Pronóstico Meteorológico]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del pronóstico meteorológico a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/pronostico_actual'
 *     responses:
 *       200:
 *         description: Pronóstico meteorológico actualizado correctamente.
 */

router.put('/update/:id', updateData);

export default router;
