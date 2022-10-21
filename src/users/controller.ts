import Context from "baojs/dist/context";
import * as userService from "./service";
import { CreateUserInput } from "./inputs";

export const getAllUsers = async (ctx: Context) => {
  const users = await userService.getAllUsers();
  return ctx.sendJson(users);
};

export const getUserById = async (ctx: Context) => {
  const id = +ctx.params.id;
  const user = await userService.getUserById(id);
  return ctx.sendJson(user);
};

export const createUser = async (ctx: Context) => {
  const body = await ctx.req.json();
  const input = await CreateUserInput.parseAsync(body);
  const newUser = await userService.createNewUser(input);
  return ctx.sendJson(newUser);
};
