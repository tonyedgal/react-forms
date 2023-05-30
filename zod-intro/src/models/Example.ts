import { z } from "zod";

// creating a schema for strings
const mySchema = z.string();

// parsing
mySchema.parse("Tony"); // => "Tony"
mySchema.parse(42); // throws ZodError

// "safe" parsing (does not throw error if validation fails), it returns an object
mySchema.safeParse("Tony"); // => { success: true, data: "Tony" }
mySchema.safeParse(42); // => { success: false, error: ZodError }

// you can also use "coerce" to force a data type
const schema = z.coerce.string();
schema.parse("Tony"); // => "Tony"
schema.parse(31); // => "31"
schema.parse(true); // => "true"
