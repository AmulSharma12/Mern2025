const { z } = require("zod");

//creating an object schema
const signupSchema = z.object({
  username: z
    .string({ required_error: "Username must be filled" })
    .trim()
    .min(3, { message: "username must have 3 characters" })
    .max(255, { message: "username must  have 255 characters" }),
  email: z
    .string({ required_error: "Email must be filled" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "email must have atleast 3 characters" })
    .max(255, { message: "email must have atleast 255 characters" }),
  phone: z
    .string({ required_error: "Phone number must be filled" })
    .trim()
    .min(10, { message: "Phone number must have atleast 10 letters" })
    .max(20, { message: "Phone number not be more than 20 letters" }),
  password: z
    .string({ required_error: "password must be filled" })
    .trim()
    .min(7, { message: "password must have 7 character" })
    .max(1024, {
      message: "password doesn't exceed more than 1024 characters",
    }),
});

//creating login object schema using zod
const loginSchema = z.object({
  email: z
    .string({ required_error: "Must fill the email field" })
    .trim()
    .email({ required_error: "Invalid email address" })
    .min(3, { message: "Email field must have 3 character" })
    .max(255, { message: "Email field should not exceed by 255 characters" }),

  password: z
    .string({ required_error: "Must fill the password field" })
    .trim()
    .min(7, { message: "password must have 7 characters" })
    .max(1024, { message: "password must have 1024 characters" }),
});

module.exports = { signupSchema, loginSchema };
