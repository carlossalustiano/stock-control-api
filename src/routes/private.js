import express, { request, response } from "express";
import { PrismaClient } from '@prisma/client'

const router = express.Router(); // Resgatando rotas do Express.
const prisma = new PrismaClient(); // Inicializando o Prisma.

export default router;

