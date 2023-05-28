import { z } from "zod";

export const BasicUserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be 2 or more characters long" }),
  username: z
    .string()
    .trim()
    .toLowerCase()
    .min(4, { message: "Username must be 4 or more characters long" }),
  email: z.string().email().trim().toLowerCase(),
  phone: z
    .string()
    .min(10, { message: "Phone numbers are a minimum of 10 digits" }),
  // .regex(/^[0-9]+$/, { message: "Only numbers are allowed" })
  // .length(10, { message: "Ten numbers are required" })
  // .transform((value) => `(${value.slice(0, 3)})-${value.slice(3, 6)}-${value.slice(6)}`),

  // these are optional properties you can use in your personal  ↑
  // schema, they would not work for the jsonplaceholder api     ↓

  // website: z.string().url().trim().toLowerCase().optional(),
  website: z
    .string()
    .trim()
    .toLowerCase()
    .min(5, { message: "URLs must be a minimum of 5 characters" })
    .refine((value) => value.indexOf(".") !== 1, {
      message: "Invalid URL",
    })
    .optional(),
  company: z.object({
    name: z
      .string()
      .trim()
      .min(5, { message: "Company name must be 5 or more characters long" }),
    catchPhrase: z.string().optional(),
  }),
});
