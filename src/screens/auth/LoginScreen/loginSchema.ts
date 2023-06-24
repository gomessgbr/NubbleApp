import {z} from 'zod';

export const loginSchema = z.object({
  email: z.string().email('email inválido'),
  password: z.string().min(1, 'password inválido'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
