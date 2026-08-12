import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";
import type { RegisterInput } from "./auth.validation";


export const registerUser = async (
  payload: RegisterInput
) => {

  const existingUser = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });


  if (existingUser) {
    throw new Error("User already exists");
  }


  const hashedPassword = await bcrypt.hash(
    payload.password,
    10
  );


  const user = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
      role: payload.role ?? "TENANT",
    },
  });


  return user;
};