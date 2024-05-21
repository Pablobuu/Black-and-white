import express from 'express';
import routes from './routes/routes.js';

const app = express();
const PORT = 3000;

app.use(express.static('assets'));

app.use(express.json())


app.use("/", routes);

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));