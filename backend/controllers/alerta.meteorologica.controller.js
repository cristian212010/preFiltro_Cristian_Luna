import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';

dotenv.config();

const client = new MongoClient(process.env.DDBB);
const db = client.db('PronosticoDelTiempo');
const alerta_meteorologica = db.collection('alerta_meteorologica');

const getData = async (req, res) =>{
    try {
        await client.connect();
        const info = await alerta_meteorologica.find().toArray();
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
        const response = await alerta_meteorologica.insertOne(data);
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
        const response = await alerta_meteorologica.deleteOne({_id: new ObjectId(id)})
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
        await alerta_meteorologica.findOneAndUpdate({ _id: new ObjectId(id) }, { $set: data });
        res.send(data)
        client.close();
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export { getData, insertData, deleteData, updateData };