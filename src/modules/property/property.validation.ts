// // // import { z } from "zod";


// // // export const createPropertyValidationSchema =
// // //   z.object({

// // //     title: z
// // //       .string()
// // //       .min(
// // //         3,
// // //         "Title must be at least 3 characters"
// // //       ),


// // //     description: z
// // //       .string()
// // //       .min(
// // //         10,
// // //         "Description must be at least 10 characters"
// // //       ),


// // //     location: z
// // //       .string()
// // //       .min(
// // //         2,
// // //         "Location is required"
// // //       ),


// // //     price: z
// // //       .number()
// // //       .positive(
// // //         "Price must be positive"
// // //       ),


// // //     bedrooms: z
// // //       .number()
// // //       .int()
// // //       .nonnegative(),


// // //     bathrooms: z
// // //       .number()
// // //       .int()
// // //       .nonnegative(),


// // //   });



// // // export type CreatePropertyInput =
// // //   z.infer<
// // //     typeof createPropertyValidationSchema
// // //   >;

// // import { z } from "zod";




// // // CREATE PROPERTY VALIDATION

// // export const createPropertyValidationSchema =
// //   z.object({

// //     title: z
// //       .string()
// //       .min(
// //         3,
// //         "Title must be at least 3 characters"
// //       ),


// //     description: z
// //       .string()
// //       .min(
// //         10,
// //         "Description must be at least 10 characters"
// //       ),


// //     location: z
// //       .string()
// //       .min(
// //         2,
// //         "Location is required"
// //       ),


// //     price: z
// //       .number()
// //       .positive(
// //         "Price must be positive"
// //       ),


// //     bedrooms: z
// //       .number()
// //       .int()
// //       .nonnegative(),


// //     bathrooms: z
// //       .number()
// //       .int()
// //       .nonnegative(),

// //   });





// // // UPDATE PROPERTY VALIDATION

// // export const updatePropertyValidationSchema =

// //   z.object({

// //     title: z.string().min(3).optional(),


// //     description: z.string().min(10).optional(),


// //     location: z.string().min(2).optional(),


// //     price: z.number().positive().optional(),


// //     bedrooms: z.number().int().nonnegative().optional(),


// //     bathrooms: z.number().int().nonnegative().optional(),

// //   });





// // export type CreatePropertyInput =

// //   z.infer<
// //     typeof createPropertyValidationSchema
// //   >;



// // export type UpdatePropertyInput =

// //   z.infer<
// //     typeof updatePropertyValidationSchema
// //   >;

// // import {
// //   z,
// // } from "zod";




// // // =======================
// // // CREATE PROPERTY VALIDATION
// // // =======================

// // export const createPropertySchema = z.object({

// //   body: z.object({


// //     title: z
// //       .string()
// //       .min(
// //         3,
// //         "Title must be at least 3 characters"
// //       ),



// //     description: z
// //       .string()
// //       .min(
// //         10,
// //         "Description must be at least 10 characters"
// //       ),



// //     location: z
// //       .string()
// //       .min(
// //         2,
// //         "Location is required"
// //       ),



// //     price: z
// //       .number({

// //         message:
// //           "Price must be a number",

// //       })
// //       .positive(
// //         "Price must be greater than zero"
// //       ),



// //     bedrooms: z
// //       .number({

// //         message:
// //           "Bedrooms must be a number",

// //       })
// //       .int(
// //         "Bedrooms must be an integer"
// //       )
// //       .nonnegative(
// //         "Bedrooms cannot be negative"
// //       ),



// //     bathrooms: z
// //       .number({

// //         message:
// //           "Bathrooms must be a number",

// //       })
// //       .int(
// //         "Bathrooms must be an integer"
// //       )
// //       .nonnegative(
// //         "Bathrooms cannot be negative"
// //       ),



// //   }),


// // });









// // // =======================
// // // UPDATE PROPERTY VALIDATION
// // // =======================

// // export const updatePropertySchema = z.object({

// //   body: z.object({


// //     title: z
// //       .string()
// //       .min(
// //         3,
// //         "Title must be at least 3 characters"
// //       )
// //       .optional(),



// //     description: z
// //       .string()
// //       .min(
// //         10,
// //         "Description must be at least 10 characters"
// //       )
// //       .optional(),



// //     location: z
// //       .string()
// //       .min(
// //         2,
// //         "Location is required"
// //       )
// //       .optional(),



// //     price: z
// //       .number({

// //         message:
// //           "Price must be a number",

// //       })
// //       .positive(
// //         "Price must be greater than zero"
// //       )
// //       .optional(),



// //     bedrooms: z
// //       .number({

// //         message:
// //           "Bedrooms must be a number",

// //       })
// //       .int(
// //         "Bedrooms must be an integer"
// //       )
// //       .nonnegative(
// //         "Bedrooms cannot be negative"
// //       )
// //       .optional(),



// //     bathrooms: z
// //       .number({

// //         message:
// //           "Bathrooms must be a number",

// //       })
// //       .int(
// //         "Bathrooms must be an integer"
// //       )
// //       .nonnegative(
// //         "Bathrooms cannot be negative"
// //       )
// //       .optional(),



// //   }),


// // });









// // // =======================
// // // PROPERTY ID VALIDATION
// // // =======================

// // export const propertyIdSchema = z.object({

// //   params: z.object({

// //     id: z
// //       .string()
// //       .uuid(
// //         "Invalid property id"
// //       ),

// //   }),

// // });


// import {
//   z,
// } from "zod";




// // =======================
// // CREATE PROPERTY VALIDATION
// // =======================

// export const createPropertySchema = z.object({

//   body: z.object({


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
//       .number({

//         message:
//           "Price must be a number",

//       })
//       .positive(
//         "Price must be greater than zero"
//       ),



//     bedrooms: z
//       .number({

//         message:
//           "Bedrooms must be a number",

//       })
//       .int(
//         "Bedrooms must be an integer"
//       )
//       .nonnegative(
//         "Bedrooms cannot be negative"
//       ),



//     bathrooms: z
//       .number({

//         message:
//           "Bathrooms must be a number",

//       })
//       .int(
//         "Bathrooms must be an integer"
//       )
//       .nonnegative(
//         "Bathrooms cannot be negative"
//       ),



//   }),


// });











// // =======================
// // UPDATE PROPERTY VALIDATION
// // =======================

// export const updatePropertySchema = z.object({

//   body: z.object({


//     title: z
//       .string()
//       .min(
//         3,
//         "Title must be at least 3 characters"
//       )
//       .optional(),



//     description: z
//       .string()
//       .min(
//         10,
//         "Description must be at least 10 characters"
//       )
//       .optional(),



//     location: z
//       .string()
//       .min(
//         2,
//         "Location is required"
//       )
//       .optional(),



//     price: z
//       .number({

//         message:
//           "Price must be a number",

//       })
//       .positive(
//         "Price must be greater than zero"
//       )
//       .optional(),



//     bedrooms: z
//       .number({

//         message:
//           "Bedrooms must be a number",

//       })
//       .int(
//         "Bedrooms must be an integer"
//       )
//       .nonnegative(
//         "Bedrooms cannot be negative"
//       )
//       .optional(),



//     bathrooms: z
//       .number({

//         message:
//           "Bathrooms must be a number",

//       })
//       .int(
//         "Bathrooms must be an integer"
//       )
//       .nonnegative(
//         "Bathrooms cannot be negative"
//       )
//       .optional(),



//   }),


// });











// // =======================
// // PROPERTY ID VALIDATION
// // =======================

// export const propertyIdSchema = z.object({

//   params: z.object({

//     id: z
//       .string()
//       .uuid(
//         "Invalid property id"
//       ),

//   }),

// });











// // =======================
// // TYPES
// // =======================


// export type CreatePropertyInput =

//   z.infer<

//     typeof createPropertySchema

//   >;



// export type UpdatePropertyInput =

//   z.infer<

//     typeof updatePropertySchema

//   >;


// import {
//   z,
// } from "zod";




// // =======================
// // CREATE PROPERTY VALIDATION
// // =======================

// export const createPropertySchema = z.object({

//   body: z.object({


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
//       .number({

//         message:
//           "Price must be a number",

//       })
//       .positive(
//         "Price must be greater than zero"
//       ),



//     bedrooms: z
//       .number({

//         message:
//           "Bedrooms must be a number",

//       })
//       .int(
//         "Bedrooms must be an integer"
//       )
//       .nonnegative(
//         "Bedrooms cannot be negative"
//       ),



//     bathrooms: z
//       .number({

//         message:
//           "Bathrooms must be a number",

//       })
//       .int(
//         "Bathrooms must be an integer"
//       )
//       .nonnegative(
//         "Bathrooms cannot be negative"
//       ),



//   }),


// });











// // =======================
// // UPDATE PROPERTY VALIDATION
// // =======================

// export const updatePropertySchema = z.object({

//   body: z.object({


//     title: z
//       .string()
//       .min(
//         3,
//         "Title must be at least 3 characters"
//       )
//       .optional(),



//     description: z
//       .string()
//       .min(
//         10,
//         "Description must be at least 10 characters"
//       )
//       .optional(),



//     location: z
//       .string()
//       .min(
//         2,
//         "Location is required"
//       )
//       .optional(),



//     price: z
//       .number({

//         message:
//           "Price must be a number",

//       })
//       .positive(
//         "Price must be greater than zero"
//       )
//       .optional(),



//     bedrooms: z
//       .number({

//         message:
//           "Bedrooms must be a number",

//       })
//       .int(
//         "Bedrooms must be an integer"
//       )
//       .nonnegative(
//         "Bedrooms cannot be negative"
//       )
//       .optional(),



//     bathrooms: z
//       .number({

//         message:
//           "Bathrooms must be a number",

//       })
//       .int(
//         "Bathrooms must be an integer"
//       )
//       .nonnegative(
//         "Bathrooms cannot be negative"
//       )
//       .optional(),



//   }),


// });











// // =======================
// // PROPERTY ID VALIDATION
// // =======================

// export const propertyIdSchema = z.object({

//   params: z.object({


//     id: z
//       .string()
//       .uuid(
//         "Invalid property id"
//       ),


//   }),


// });











// // =======================
// // TYPES
// // =======================


// export type CreatePropertyInput =

//   z.infer<

//     typeof createPropertySchema

//   >["body"];





// export type UpdatePropertyInput =

//   z.infer<

//     typeof updatePropertySchema

//   >["body"];


// import {
//   z,
// } from "zod";








// // =======================
// // CREATE PROPERTY VALIDATION
// // =======================

// export const createPropertySchema = z.object({

//   body: z.object({


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
//       .number({

//         message:
//           "Price must be a number",

//       })
//       .positive(
//         "Price must be greater than zero"
//       ),



//     bedrooms: z
//       .number({

//         message:
//           "Bedrooms must be a number",

//       })
//       .int(
//         "Bedrooms must be an integer"
//       )
//       .nonnegative(
//         "Bedrooms cannot be negative"
//       ),



//     bathrooms: z
//       .number({

//         message:
//           "Bathrooms must be a number",

//       })
//       .int(
//         "Bathrooms must be an integer"
//       )
//       .nonnegative(
//         "Bathrooms cannot be negative"
//       ),



//   }),


// });













// // =======================
// // UPDATE PROPERTY VALIDATION
// // =======================

// export const updatePropertySchema = z.object({

//   body: z.object({


//     title: z
//       .string()
//       .min(
//         3,
//         "Title must be at least 3 characters"
//       )
//       .optional(),



//     description: z
//       .string()
//       .min(
//         10,
//         "Description must be at least 10 characters"
//       )
//       .optional(),



//     location: z
//       .string()
//       .min(
//         2,
//         "Location is required"
//       )
//       .optional(),



//     price: z
//       .number({

//         message:
//           "Price must be a number",

//       })
//       .positive(
//         "Price must be greater than zero"
//       )
//       .optional(),



//     bedrooms: z
//       .number({

//         message:
//           "Bedrooms must be a number",

//       })
//       .int(
//         "Bedrooms must be an integer"
//       )
//       .nonnegative(
//         "Bedrooms cannot be negative"
//       )
//       .optional(),



//     bathrooms: z
//       .number({

//         message:
//           "Bathrooms must be a number",

//       })
//       .int(
//         "Bathrooms must be an integer"
//       )
//       .nonnegative(
//         "Bathrooms cannot be negative"
//       )
//       .optional(),



//   }),


// });












// // =======================
// // PROPERTY SEARCH QUERY VALIDATION
// // =======================

// export const propertyQuerySchema = z.object({

//   query: z.object({


//     search: z
//       .string()
//       .optional(),



//     location: z
//       .string()
//       .optional(),



//     minPrice: z
//       .string()
//       .transform(

//         (value) => Number(value)

//       )
//       .optional(),



//     maxPrice: z
//       .string()
//       .transform(

//         (value) => Number(value)

//       )
//       .optional(),



//     bedrooms: z
//       .string()
//       .transform(

//         (value) => Number(value)

//       )
//       .optional(),



//     bathrooms: z
//       .string()
//       .transform(

//         (value) => Number(value)

//       )
//       .optional(),



//     landlordId: z
//       .string()
//       .uuid(
//         "Invalid landlord id"
//       )
//       .optional(),




//     page: z
//       .string()
//       .transform(

//         (value) => Number(value)

//       )
//       .optional(),




//     limit: z
//       .string()
//       .transform(

//         (value) => Number(value)

//       )
//       .optional(),




//     sortBy: z
//       .enum([

//         "price",

//         "createdAt",

//         "bedrooms",

//       ])
//       .optional(),




//     sortOrder: z
//       .enum([

//         "asc",

//         "desc",

//       ])
//       .optional(),



//   }),


// });












// // =======================
// // PROPERTY ID VALIDATION
// // =======================

// export const propertyIdSchema = z.object({

//   params: z.object({


//     id: z
//       .string()
//       .uuid(
//         "Invalid property id"
//       ),


//   }),


// });












// // =======================
// // TYPES
// // =======================


// export type CreatePropertyInput =

//   z.infer<

//     typeof createPropertySchema

//   >["body"];







// export type UpdatePropertyInput =

//   z.infer<

//     typeof updatePropertySchema

//   >["body"];







// export type PropertyQueryInput =

//   z.infer<

//     typeof propertyQuerySchema

//   >["query"];

import {
  z,
} from "zod";




// =======================
// CREATE PROPERTY VALIDATION
// =======================

export const createPropertySchema = z.object({

  body: z.object({


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
      .number({
        message:
          "Price must be a number",
      })
      .positive(
        "Price must be greater than zero"
      ),



    bedrooms: z
      .number({
        message:
          "Bedrooms must be a number",
      })
      .int(
        "Bedrooms must be an integer"
      )
      .nonnegative(
        "Bedrooms cannot be negative"
      ),



    bathrooms: z
      .number({
        message:
          "Bathrooms must be a number",
      })
      .int(
        "Bathrooms must be an integer"
      )
      .nonnegative(
        "Bathrooms cannot be negative"
      ),


  }),

});









// =======================
// UPDATE PROPERTY VALIDATION
// =======================

export const updatePropertySchema = z.object({

  body: z.object({


    title: z
      .string()
      .min(
        3,
        "Title must be at least 3 characters"
      )
      .optional(),



    description: z
      .string()
      .min(
        10,
        "Description must be at least 10 characters"
      )
      .optional(),



    location: z
      .string()
      .min(
        2,
        "Location is required"
      )
      .optional(),



    price: z
      .number({
        message:
          "Price must be a number",
      })
      .positive(
        "Price must be greater than zero"
      )
      .optional(),



    bedrooms: z
      .number({
        message:
          "Bedrooms must be a number",
      })
      .int(
        "Bedrooms must be an integer"
      )
      .nonnegative(
        "Bedrooms cannot be negative"
      )
      .optional(),



    bathrooms: z
      .number({
        message:
          "Bathrooms must be a number",
      })
      .int(
        "Bathrooms must be an integer"
      )
      .nonnegative(
        "Bathrooms cannot be negative"
      )
      .optional(),


  }),

});











// =======================
// PROPERTY SEARCH QUERY VALIDATION
// =======================

export const propertyQuerySchema = z.object({

  query: z.object({


    search:

      z.string()
      .optional(),



    location:

      z.string()
      .optional(),



    minPrice:

      z.coerce
      .number()
      .optional(),



    maxPrice:

      z.coerce
      .number()
      .optional(),



    bedrooms:

      z.coerce
      .number()
      .optional(),



    bathrooms:

      z.coerce
      .number()
      .optional(),



    landlordId:

      z.string()
      .uuid(
        "Invalid landlord id"
      )
      .optional(),



    page:

      z.coerce
      .number()
      .default(1),



    limit:

      z.coerce
      .number()
      .default(10),



    sortBy:

      z.enum([

        "price",

        "createdAt",

        "bedrooms",

      ])
      .default(
        "createdAt"
      ),



    sortOrder:

      z.enum([

        "asc",

        "desc",

      ])
      .default(
        "desc"
      ),



  }),

});












// =======================
// PROPERTY ID VALIDATION
// =======================

export const propertyIdSchema = z.object({

  params: z.object({


    id:

      z.string()
      .uuid(
        "Invalid property id"
      ),


  }),

});












// =======================
// TYPES
// =======================


export type CreatePropertyInput =

  z.infer<

    typeof createPropertySchema

  >["body"];





export type UpdatePropertyInput =

  z.infer<

    typeof updatePropertySchema

  >["body"];





export type PropertyQueryInput =

  z.infer<

    typeof propertyQuerySchema

  >["query"];