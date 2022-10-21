import Context from "baojs/dist/context";
import { decode } from "jsonwebtoken";

export const protect = () => {
  return (ctx: Context) => {
    const header = ctx.headers.get("Authorization");
    if (!header) return ctx;

    const token = header.split(" ")[1]; // Bearer 1239283
    const user = decode(token);
    ctx.extra.user = user;
  };
};
