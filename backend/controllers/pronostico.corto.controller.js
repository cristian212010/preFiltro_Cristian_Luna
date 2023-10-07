import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';

dotenv.config();

const client = new MongoClient(process.env.DDBB);
const db = client.db('PronosticoDelTiempo');
const pronostico_corto_plazo = db.collection('pronostico_corto_plazo');

const getData = async (req, res) =>{
    try {
        await client.connect();
        const info = await pronostico_corto_plazo.find().toArray();
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
        const response = await pronostico_corto_plazo.insertOne(data);
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
        const response = await pronostico_corto_plazo.deleteOne({_id: new ObjectId(id)})
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
        const id = req.params.id;
        await pronostico_corto_plazo.findOneAndUpdate({ _id: new ObjectId(id) }, { $set: data });
        res.send(data)
        client.close();
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export { getData, insertData, deleteData, updateData };