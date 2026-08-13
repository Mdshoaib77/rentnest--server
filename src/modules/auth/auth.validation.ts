// // // // import { z } from "zod";


// // // // export const registerValidationSchema = z.object({
// // // //   name: z
// // // //     .string()
// // // //     .min(2, "Name must be at least 2 characters"),

// // // //   email: z
// // // //     .string()
// // // //     .email("Invalid email address"),

// // // //   password: z
// // // //     .string()
// // // //     .min(6, "Password must be at least 6 characters"),

// // // //   role: z
// // // //     .enum(["TENANT", "LANDLORD", "ADMIN"])
// // // //     .optional(),
// // // // });


// // // // export type RegisterInput = z.infer<
// // // //   typeof registerValidationSchema
// // // // >;


// // // import { z } from "zod";


// // // export const registerValidationSchema = z.object({

// // //   name: z
// // //     .string()
// // //     .min(2, "Name must be at least 2 characters"),


// // //   email: z
// // //     .string()
// // //     .email("Invalid email address"),


// // //   password: z
// // //     .string()
// // //     .min(6, "Password must be at least 6 characters"),


// // //   role: z
// // //     .enum([
// // //       "TENANT",
// // //       "LANDLORD",
// // //       "ADMIN",
// // //     ])
// // //     .optional(),

// // // });


// // // export type RegisterInput =
// // //   z.infer<
// // //     typeof registerValidationSchema
// // //   >;



// // // // Login Validation

// // // export const loginValidationSchema = z.object({

// // //   email: z
// // //     .string()
// // //     .email("Invalid email address"),


// // //   password: z
// // //     .string()
// // //     .min(6, "Password must be at least 6 characters"),

// // // });


// // // export type LoginInput =
// // //   z.infer<
// // //     typeof loginValidationSchema
// // //   >;


// // import { z } from "zod";




// // // =======================
// // // REGISTER VALIDATION
// // // =======================

// // export const registerSchema = z.object({

// //   body: z.object({

// //     name: z
// //       .string()
// //       .min(
// //         2,
// //         "Name must be at least 2 characters"
// //       ),



// //     email: z
// //       .string()
// //       .email(
// //         "Invalid email address"
// //       ),



// //     password: z
// //       .string()
// //       .min(
// //         6,
// //         "Password must be at least 6 characters"
// //       ),



// //     role: z
// //       .enum([
// //         "TENANT",
// //         "LANDLORD",
// //         "ADMIN",
// //       ])
// //       .optional(),


// //   }),


// // });









// // // =======================
// // // LOGIN VALIDATION
// // // =======================

// // export const loginSchema = z.object({

// //   body: z.object({


// //     email: z
// //       .string()
// //       .email(
// //         "Invalid email address"
// //       ),



// //     password: z
// //       .string()
// //       .min(
// //         1,
// //         "Password is required"
// //       ),


// //   }),


// // });


// import {
//   z,
// } from "zod";




// // =======================
// // REGISTER VALIDATION
// // =======================

// export const registerSchema = z.object({

//   body: z.object({


//     name: z
//       .string()
//       .min(
//         2,
//         "Name must be at least 2 characters"
//       ),



//     email: z
//       .string()
//       .email(
//         "Invalid email address"
//       ),



//     password: z
//       .string()
//       .min(
//         6,
//         "Password must be at least 6 characters"
//       ),



//     role: z
//       .enum([

//         "TENANT",

//         "LANDLORD",

//         "ADMIN",

//       ])
//       .optional(),


//   }),


// });









// // =======================
// // LOGIN VALIDATION
// // =======================

// export const loginSchema = z.object({

//   body: z.object({


//     email: z
//       .string()
//       .email(
//         "Invalid email address"
//       ),



//     password: z
//       .string()
//       .min(
//         1,
//         "Password is required"
//       ),


//   }),


// });


import {
  z,
} from "zod";




// =======================
// REGISTER VALIDATION
// =======================

export const registerSchema = z.object({

  body: z.object({

    name: z
      .string()
      .min(
        2,
        "Name must be at least 2 characters"
      ),



    email: z
      .string()
      .email(
        "Invalid email address"
      ),



    password: z
      .string()
      .min(
        6,
        "Password must be at least 6 characters"
      ),



    role: z
      .enum([

        "TENANT",

        "LANDLORD",

        "ADMIN",

      ])
      .optional(),


  }),

});









// =======================
// LOGIN VALIDATION
// =======================

export const loginSchema = z.object({

  body: z.object({

    email: z
      .string()
      .email(
        "Invalid email address"
      ),



    password: z
      .string()
      .min(
        1,
        "Password is required"
      ),


  }),

});