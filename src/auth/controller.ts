import Context from "baojs/dist/context";
import { LoginInput } from "./inputs";
import * as authService from "./serivce";

export const login = async (ctx: Context) => {
  const body = await ctx.req.json();
  const { email, password } = await LoginInput.parseAsync(body);
  const result = authService.login(email, password);
  return ctx.sendJson(result);
};

export const register = (ctx: Context) => {
  return ctx;
};
