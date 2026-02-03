import * as z from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .optional()
    .refine(
      (val) =>
        !val ||
        /^(\+?61|0)[2-478](?:[ -]?[0-9]){8}$/.test(val.replace(/\s/g, "")),
      { message: "Please enter a valid Australian phone number" }
    ),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000, { message: "Message must be less than 2000 characters" }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
