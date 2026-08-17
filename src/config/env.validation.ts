// // import {
// //   z,
// // } from "zod";



// // import dotenv from "dotenv";



// // dotenv.config();





// // const envSchema = z.object({

// //   PORT: z
// //     .string()
// //     .default("5000"),



// //   DATABASE_URL: z
// //     .string()
// //     .min(
// //       1,
// //       "DATABASE_URL is required"
// //     ),



// //   JWT_SECRET: z
// //     .string()
// //     .min(
// //       10,
// //       "JWT_SECRET must be at least 10 characters"
// //     ),



// // });






// // export const env =

// //   envSchema.parse(

// //     process.env

// //   );


// // import {
// //   z,
// // } from "zod";


// // import dotenv from "dotenv";


// // dotenv.config();





// // const envSchema = z.object({


// //   PORT: z
// //     .string()
// //     .default("5000"),



// //   DATABASE_URL: z
// //     .string()
// //     .min(
// //       1,
// //       "DATABASE_URL is required"
// //     ),



// //   JWT_SECRET: z
// //     .string()
// //     .min(
// //       10,
// //       "JWT_SECRET must be at least 10 characters"
// //     ),



// //   JWT_EXPIRES_IN: z
// //     .string()
// //     .default("7d"),



// // });





// // export const env =

// //   envSchema.parse(

// //     process.env

// //   );


// import {
//   z,
// } from "zod";


// import dotenv from "dotenv";


// dotenv.config();







// // =======================
// // ENV VALIDATION SCHEMA
// // =======================

// const envSchema = z.object({




//   NODE_ENV: z

//     .enum([

//       "development",

//       "production",

//       "test",

//     ])

//     .default(

//       "development"

//     ),







//   PORT: z

//     .string()

//     .default(

//       "5000"

//     )

//     .transform(

//       (value) => Number(value)

//     ),







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







//   JWT_EXPIRES_IN: z

//     .string()

//     .default(

//       "7d"

//     ),




// });









// // =======================
// // EXPORT VALIDATED ENV
// // =======================

// export const env =

//   envSchema.parse(

//     process.env

//   );

// import {
//   z,
// } from "zod";


// import dotenv from "dotenv";


// dotenv.config();







// // =======================
// // ENV VALIDATION SCHEMA
// // =======================

// const envSchema = z.object({




//   NODE_ENV: z

//     .enum([

//       "development",

//       "production",

//       "test",

//     ])

//     .default(

//       "development"

//     ),







//   PORT: z

//     .string()

//     .default(

//       "5000"

//     )

//     .transform(

//       (value) => Number(value)

//     ),







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







//   JWT_EXPIRES_IN: z

//     .string()

//     .default(

//       "7d"

//     ),







//   FRONTEND_URL: z

//     .string()

//     .default(

//       "http://localhost:3000"

//     ),







//   RATE_LIMIT_MAX: z

//     .string()

//     .default(

//       "100"

//     )

//     .transform(

//       (value) => Number(value)

//     ),




// });









// // =======================
// // EXPORT VALIDATED ENV
// // =======================

// export const env =

//   envSchema.parse(

//     process.env

//   );


import {
  z,
} from "zod";


import dotenv from "dotenv";


dotenv.config();








// =======================
// ENV VALIDATION SCHEMA
// =======================

const envSchema = z.object({






  NODE_ENV: z

    .enum([

      "development",

      "production",

      "test",

    ])

    .default(

      "development"

    ),











  PORT: z

    .string()

    .default(

      "5000"

    )

    .transform(

      (value) => Number(value)

    )

    .refine(

      (value) =>

        value > 0,

      {

        message:

          "PORT must be greater than zero",

      }

    ),











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

    .default(

      "7d"

    ),











  FRONTEND_URL: z

    .string()

    .url(

      "Invalid FRONTEND_URL"

    )

    .default(

      "http://localhost:3000"

    ),











  RATE_LIMIT_MAX: z

    .string()

    .default(

      "100"

    )

    .transform(

      (value) => Number(value)

    )

    .refine(

      (value) =>

        value > 0,

      {

        message:

          "RATE_LIMIT_MAX must be greater than zero",

      }

    ),






});











// =======================
// EXPORT VALIDATED ENV
// =======================

export const env =

  envSchema.parse(

    process.env

  );