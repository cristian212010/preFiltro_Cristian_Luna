import express from 'express';
import dotenv from 'dotenv';
import pronosticoActualRoutes from './routes/pronostico.actual.routes.js';
import ciudadRoutes from './routes/ciudad.ubicacion.routes.js';
import pronosticoCortoRoutes from './routes/pronostico.corto.routes.js';
import pronosticoLargoRoutes from './routes/pronostico.largo.routes.js';
import alertaRoutes from './routes/alerta.meteorologica.routes.js';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Swagger
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info:{
            title: "Pronostico del Tiempo",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:6996"
            }
        ]
    },
    apis: [`${path.join(__dirname, './routes/*.js')}`]
}

dotenv.config();

const app = express();
const port = process.env.PORT;

//Middlewares
app.use(cors());
app.use(express.json());
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

app.use('/api/pronostico', pronosticoActualRoutes);
app.use('/api/ciudad', ciudadRoutes);
app.use('/api/pronosticoCorto', pronosticoCortoRoutes);
app.use('/api/pronosticoLargo', pronosticoLargoRoutes);
app.use('/api/alerta', alertaRoutes);


app.listen(port, ()=>{
    console.log(`Server running on port http://localhost:${port}`);
});