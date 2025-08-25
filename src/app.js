import { adicionarRotas } from "./rotas.js";
import cors from "cors";
import express from 'express';

const api = express();
api.use(express.json());
api.use(cors());

adicionarRotas(api);

api.listen(5010, () => console.log('API rodando com sucesso!'));