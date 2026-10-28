import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().trim().min(1, "required"),
  lastName: z.string().trim().min(1, "required"),
  email: z.string().trim().min(1, "required").pipe(z.email("email")),
  phone: z
    .string()
    .trim()
    .min(1, "required")
    .regex(/^[+\d][\d\s-]{6,}$/, "phone"),
  message: z.string().trim().optional(),
  trial: z.boolean().optional(),
});

export type ContactForm = z.infer<typeof contactSchema>;
