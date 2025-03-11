import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const client = new PrismaClient();

app.get("/users", async (req, res) => {
  const users = await client.user.findMany();
  res.json({
    users,
  });
});

app.get("/todos/:id", async (req, res) => {
  const id = req.params.id;
  const users = await client.user.findFirst({
    where: {
      id: Number(id),
    },
    select: {
      todos: true,
      username: true,
      password: true,
    },
  });
  res.json({
    users,
  });
});

app.listen(3000);

const createUser = async () => {
  const user = await client.user.findFirst({
    where: {
      id: 2,
    },
    include: {
      todos: true,
    },
  });
  console.log(user);
};

// createUser();
