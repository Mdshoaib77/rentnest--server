// import { z } from "zod";


// export const createPropertyValidationSchema =
//   z.object({

//     title: z
//       .string()
//       .min(
//         3,
//         "Title must be at least 3 characters"
//       ),


//     description: z
//       .string()
//       .min(
//         10,
//         "Description must be at least 10 characters"
//       ),


//     location: z
//       .string()
//       .min(
//         2,
//         "Location is required"
//       ),


//     price: z
//       .number()
//       .positive(
//         "Price must be positive"
//       ),


//     bedrooms: z
//       .number()
//       .int()
//       .nonnegative(),


//     bathrooms: z
//       .number()
//       .int()
//       .nonnegative(),


//   });



// export type CreatePropertyInput =
//   z.infer<
//     typeof createPropertyValidationSchema
//   >;

import { z } from "zod";




// CREATE PROPERTY VALIDATION

export const createPropertyValidationSchema =
  z.object({

    title: z
      .string()
      .min(
        3,
        "Title must be at least 3 characters"
      ),


    description: z
      .string()
      .min(
        10,
        "Description must be at least 10 characters"
      ),


    location: z
      .string()
      .min(
        2,
        "Location is required"
      ),


    price: z
      .number()
      .positive(
        "Price must be positive"
      ),


    bedrooms: z
      .number()
      .int()
      .nonnegative(),


    bathrooms: z
      .number()
      .int()
      .nonnegative(),

  });





// UPDATE PROPERTY VALIDATION

export const updatePropertyValidationSchema =

  z.object({

    title: z.string().min(3).optional(),


    description: z.string().min(10).optional(),


    location: z.string().min(2).optional(),


    price: z.number().positive().optional(),


    bedrooms: z.number().int().nonnegative().optional(),


    bathrooms: z.number().int().nonnegative().optional(),

  });





export type CreatePropertyInput =

  z.infer<
    typeof createPropertyValidationSchema
  >;



export type UpdatePropertyInput =

  z.infer<
    typeof updatePropertyValidationSchema
  >;