import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const createUser = async () => {
  const response = await client.user.findFirst({
    where: {
      id: 2,
    },
  });
  console.log(response);
};

createUser();
