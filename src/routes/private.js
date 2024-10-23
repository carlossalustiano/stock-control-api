import express, { request, response } from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router(); // Resgatando rotas do Express.
const prisma = new PrismaClient(); // Inicializando o Prisma.

export default router;

// Criar um novo produto.

router.post("/criar", async (request, response) => {
  try {
    await prisma.produtos.create({
      data: {
        name: request.body.name,
        quantity: request.body.quantity,
        value: request.body.value
      }
    });
    response.status(201).json({ message: 'Produto criado com sucesso.' });
  } catch (error) {
    response.status(500).json({ message: 'Error no servidor, tente novamente.' });
  }
});

// Listar todos os produtos ou um específico.

router.get('/produtos', async (request, response) => {
  try {
    let produtos = [];
    
    if (request.query) {
      produtos = await prisma.produtos.findMany({
        where: {
          name: request.query.name
        }
      })
    } else {
      produtos = await prisma.produtos.findMany();
    }
    response.status(200).json(produtos);
  } catch (error) {
    response.status(500).json({ message: 'Error no servidor, tente novamente.' });
  }
});

// Atualizar informações de um produto.

router.put('/produtos/:name', async (request, response) => {
  try {
    await prisma.produtos.update({
      where: {
        name: request.params.name
      },
      data: {
        name: request.body.name,
        quantity: request.body.quantity,
        value: request.body.value
      }
    })
    response.status(201).json({ message: 'Informações do produto atualizadas.' });
  } catch (error) {
    response.status(500).json({ message: 'Error no servidor, tente novamente.' });
  }
});

// Deletar um produto do estoque.

router.delete('/produtos/:name', async (request, response) => {
  try {
    await prisma.produtos.delete({
      where: {
        name: request.params.name
      }
    })
    response.status(200).json({ message: 'Produto removido do estoque.' })
  } catch (error) {
    response.status(500).json({ message: 'Error no servidor, tente novamente.' });
  }
});