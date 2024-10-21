import express from "express";
import cors from "cors";
import privateRoutes from "./routes/private.js"

const app = express(); // Inicializando servidor.

app.use(express.json()); // Converter o body para json.

app.use(cors()); // Liberado para qualquer página acessar.

app.use('/', privateRoutes); // Rotas privadas.

app.listen(3000, () => console.warn('Server is running  in http://localhost:3000')); // Servidor rodando em http://localhost:3000 