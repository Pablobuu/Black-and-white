import express from 'express';
import Jimp from 'jimp';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const router = express.Router();
const __dirname = path.resolve();

router.get('/', (req, res) => { 
    res.sendFile(__dirname + '/views/index.html');
});

router.get("/styles",(req, res)=>{
    res.sendFile(__dirname + '/assets/css/style.css')
})

router.post('/editar', async (req, res) => {
    const image = req.body;
    const id = uuidv4().slice(-6);
    const imgName = `${id}.jpg`;
    const img = await Jimp.read(image);
    await img
    .resize(350, Jimp.AUTO)
    .grayscale()
    .writeAsync(__dirname + `/assets/uploads/${imgName}`)

    res.sendFile(__dirname + `/assets/uploads/${imgName}`);
})

export default router;