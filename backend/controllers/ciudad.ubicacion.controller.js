import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';

dotenv.config();

const client = new MongoClient(process.env.DDBB);
const db = client.db('PronosticoDelTiempo');
const ciudad_ubicacion = db.collection('ciudad_ubicacion');

const getData = async (req, res) =>{
    try {
        await client.connect();
        const info = await ciudad_ubicacion.find().toArray();
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
        const response = await ciudad_ubicacion.insertOne(data);
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
        const response = await ciudad_ubicacion.deleteOne({_id: new ObjectId(id)})
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
        await ciudad_ubicacion.findOneAndUpdate({ _id: new ObjectId(id) }, { $set: data });
        res.send(data)
        client.close();
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export { getData, insertData, deleteData, updateData };