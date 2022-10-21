import { Prisma } from "@prisma/client";
import db from "~/db";
import { CreateUserInput } from "./inputs";

export const getAllUsers = () => {
  return db.user.findMany();
};

export const getUserById = (id: number) => {
  return db.user.findUniqueOrThrow({ where: { id } });
};

export const createNewUser = (data: Prisma.UserCreateInput) => {
  return db.user.create({ data });
};
