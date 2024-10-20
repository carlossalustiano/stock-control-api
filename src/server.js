import express from 'express'
import cors from 'cors'

const app = express() // Inicializando servidor.

app.use(express.json()) // Converter o body para json.

app.use(cors()) // Liberado para qualquer página acessar.

app.listen(3000, () => console.warn('Server is running  in http://localhost:3000')) // Servidor rodando em http://localhost:3000