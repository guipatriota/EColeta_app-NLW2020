import express from 'express';
import cors from 'cors';
import routes from './routes'; // importação do arquivo que contém as rotas.
import path from 'path';
import {errors} from 'celebrate';

const app = express(); // por padrão o express não entende que estamos fazendo uma API JSON, ele entende todos os tipos de linguagens. Precisamos definir.

app.use(cors());
app.use(express.json()); // fixamos o plugin do express para json.
app.use(routes); // Uso das rotas do arquivo routes.ts

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app. listen(3333);