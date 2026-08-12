import { z } from "zod";


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



export type CreatePropertyInput =
  z.infer<
    typeof createPropertyValidationSchema
  >;