import { z } from "zod";

export const LoginInput = z.object({
  email: z.string().email(),
  password: z.string().min(4).max(26),
});

export type LoginInput = z.infer<typeof LoginInput>;
