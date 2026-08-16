// import {
//   z,
// } from "zod";



// import dotenv from "dotenv";



// dotenv.config();





// const envSchema = z.object({

//   PORT: z
//     .string()
//     .default("5000"),



//   DATABASE_URL: z
//     .string()
//     .min(
//       1,
//       "DATABASE_URL is required"
//     ),



//   JWT_SECRET: z
//     .string()
//     .min(
//       10,
//       "JWT_SECRET must be at least 10 characters"
//     ),



// });






// export const env =

//   envSchema.parse(

//     process.env

//   );


import {
  z,
} from "zod";


import dotenv from "dotenv";


dotenv.config();





const envSchema = z.object({


  PORT: z
    .string()
    .default("5000"),



  DATABASE_URL: z
    .string()
    .min(
      1,
      "DATABASE_URL is required"
    ),



  JWT_SECRET: z
    .string()
    .min(
      10,
      "JWT_SECRET must be at least 10 characters"
    ),



  JWT_EXPIRES_IN: z
    .string()
    .default("7d"),



});





export const env =

  envSchema.parse(

    process.env

  );