// // import bcrypt from "bcrypt";
// // import prisma from "../../lib/prisma";
// // import type { RegisterInput } from "./auth.validation";


// // export const registerUser = async (
// //   payload: RegisterInput
// // ) => {

// //   const existingUser = await prisma.user.findUnique({
// //     where: {
// //       email: payload.email,
// //     },
// //   });


// //   if (existingUser) {
// //     throw new Error("User already exists");
// //   }


// //   const hashedPassword = await bcrypt.hash(
// //     payload.password,
// //     10
// //   );


// //   const user = await prisma.user.create({
// //     data: {
// //       name: payload.name,
// //       email: payload.email,
// //       password: hashedPassword,
// //       role: payload.role ?? "TENANT",
// //     },
// //   });


// //   return user;
// // };

// import bcrypt from "bcrypt";
// import prisma from "../../lib/prisma";
// import type { RegisterInput } from "./auth.validation";


// export const registerUser = async (
//   payload: RegisterInput
// ) => {

//   const existingUser = await prisma.user.findUnique({
//     where: {
//       email: payload.email,
//     },
//   });


//   if (existingUser) {
//     throw new Error("User already exists");
//   }


//   const hashedPassword = await bcrypt.hash(
//     payload.password,
//     10
//   );


//   const user = await prisma.user.create({
//     data: {
//       name: payload.name,
//       email: payload.email,
//       password: hashedPassword,
//       role: payload.role ?? "TENANT",
//     },
//   });


//   const { password, ...safeUser } = user;


//   return safeUser;
// };


import bcrypt from "bcrypt";

import prisma from "../../lib/prisma";

import type {
  RegisterInput,
  LoginInput,
} from "./auth.validation";

import { generateToken } from "../../utils/jwt";


// Register User

export const registerUser = async (
  payload: RegisterInput
) => {


  const existingUser =
    await prisma.user.findUnique({

      where: {
        email: payload.email,
      },

    });



  if (existingUser) {

    throw new Error(
      "User already exists"
    );

  }



  const hashedPassword =
    await bcrypt.hash(
      payload.password,
      10
    );



  const user =
    await prisma.user.create({

      data: {

        name: payload.name,

        email: payload.email,

        password: hashedPassword,

        role:
          payload.role ??
          "TENANT",

      },

    });



  const {
    password,
    ...safeUser
  } = user;



  return safeUser;

};





// Login User

export const loginUser = async (
  payload: LoginInput
) => {


  const user =
    await prisma.user.findUnique({

      where: {

        email: payload.email,

      },

    });



  if (!user) {

    throw new Error(
      "User not found"
    );

  }




  const isPasswordMatch =
    await bcrypt.compare(

      payload.password,

      user.password

    );




  if (!isPasswordMatch) {

    throw new Error(
      "Invalid password"
    );

  }




  const token =
    generateToken({

      id: user.id,

      email: user.email,

      role: user.role,

    });





  const {
    password,
    ...safeUser
  } = user;




  return {

    user: safeUser,

    token,

  };


};