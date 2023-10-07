import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';

dotenv.config();

const client = new MongoClient(process.env.DDBB);
const db = client.db('PronosticoDelTiempo');
const pronostico_actual = db.collection('pronostico_actual');

const getData = async ( req, res ) =>{
    try {
        await client.connect();
        const info = await pronostico_actual.aggregate([
            {
                $lookup:{
                    from: "ciudad_ubicacion",
                    localField: "ciudad_y_ubicacion",
                    foreignField: "_id",
                    as: "ciudad_y_ubicacion"
                }
            },
            {
                $lookup:{
                    from: "pronostico_corto_plazo",
                    localField: "pronostico_corto_plazo",
                    foreignField: "_id",
                    as: "pronostico_corto_plazo"
                }
            },
            {
                $lookup:{
                    from: "pronostico_largo_plazo",
                    localField: "pronostico_largo_plazo",
                    foreignField: "_id",
                    as: "pronostico_largo_plazo"
                }
            },
            {
                $lookup:{
                    from: "alerta_meteorologica",
                    localField: "alertas_meteorologicas",
                    foreignField: "_id",
                    as: "alertas_meteorologicas"
                }
            }
        ]).toArray();
        res.json(info);
        client.close();
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const insertData = async (req, res) => {
    try {
        await client.connect();
        const data = req.body;
        data.ciudad_y_ubicacion = new ObjectId(data.ciudad_y_ubicacion);
        data.pronostico_corto_plazo = new ObjectId(data.pronostico_corto_plazo);
        data.pronostico_largo_plazo = new ObjectId(data.pronostico_largo_plazo);
        data.alertas_meteorologicas = new ObjectId(data.alertas_meteorologicas);
        const response = await pronostico_actual.insertOne(data);
        res.json({
            response,
            data
        });
        client.close();
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const deleteData = async (req, res) => {
    try {
        await client.connect();
        const id = req.params.id;
        const response = await pronostico_actual.deleteOne({_id: new ObjectId(id)})
        res.json(response)
        client.close();
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const updateData = async (req, res) => {
    try {
        await client.connect();
        const data = req.body;
        data.ciudad_y_ubicacion = new ObjectId(data.ciudad_y_ubicacion);
        data.pronostico_corto_plazo = new ObjectId(data.pronostico_corto_plazo);
        data.pronostico_largo_plazo = new ObjectId(data.pronostico_largo_plazo);
        data.alertas_meteorologicas = new ObjectId(data.alertas_meteorologicas);
        const id = req.params.id;
        await pronostico_actual.findOneAndUpdate({ _id: new ObjectId(id) }, { $set: data });
        res.send(data)
        client.close();
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export { getData, insertData, deleteData, updateData };