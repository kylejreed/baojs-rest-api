import { z } from "zod";

export const CreateUserInput = z.object({
  email: z.string().email(),
  name: z.string(),
});

export type CreateUserInput = z.infer<typeof CreateUserInput>;
