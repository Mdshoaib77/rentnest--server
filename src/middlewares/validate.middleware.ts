// // // // // import type {
// // // // //   Request,
// // // // //   Response,
// // // // //   NextFunction,
// // // // // } from "express";


// // // // // import type {
// // // // //   AnyZodObject,
// // // // // } from "zod";




// // // // // // =======================
// // // // // // ZOD VALIDATION MIDDLEWARE
// // // // // // =======================

// // // // // export const validate = (

// // // // //   schema: AnyZodObject

// // // // // ) => {


// // // // //   return (

// // // // //     req: Request,

// // // // //     res: Response,

// // // // //     next: NextFunction

// // // // //   ) => {


// // // // //     try {


// // // // //       schema.parse({

// // // // //         body: req.body,

// // // // //         params: req.params,

// // // // //         query: req.query,

// // // // //       });





// // // // //       next();





// // // // //     } catch (error) {


// // // // //       next(error);


// // // // //     }


// // // // //   };


// // // // // };

// // // // import type {
// // // //   Request,
// // // //   Response,
// // // //   NextFunction,
// // // // } from "express";

// // // // import {
// // // //   ZodSchema,
// // // // } from "zod";




// // // // // =======================
// // // // // ZOD VALIDATION MIDDLEWARE
// // // // // =======================

// // // // export const validate = (

// // // //   schema: ZodSchema

// // // // ) => {


// // // //   return (

// // // //     req: Request,

// // // //     res: Response,

// // // //     next: NextFunction

// // // //   ) => {


// // // //     try {


// // // //       schema.parse({

// // // //         body: req.body,

// // // //         params: req.params,

// // // //         query: req.query,

// // // //       });


// // // //       next();


// // // //     } catch(error) {


// // // //       next(error);


// // // //     }


// // // //   };


// // // // };



// // // import type {
// // //   Request,
// // //   Response,
// // //   NextFunction,
// // // } from "express";


// // // import type {
// // //   ZodType,
// // // } from "zod";




// // // // =======================
// // // // ZOD VALIDATION MIDDLEWARE
// // // // =======================

// // // export const validate = (

// // //   schema: ZodType

// // // ) => {


// // //   return (

// // //     req: Request,

// // //     res: Response,

// // //     next: NextFunction

// // //   ) => {


// // //     try {


// // //       if (!schema) {

// // //         throw new Error(
// // //           "Validation schema is missing"
// // //         );

// // //       }





// // //       schema.parse({

// // //         body: req.body,

// // //         params: req.params,

// // //         query: req.query,

// // //       });





// // //       next();




// // //     } catch(error) {


// // //       next(error);


// // //     }


// // //   };


// // // };


// // import type {
// //   Request,
// //   Response,
// //   NextFunction,
// // } from "express";


// // import {
// //   ZodType,
// // } from "zod";




// // // =======================
// // // ZOD VALIDATION MIDDLEWARE
// // // =======================

// // export const validate = (

// //   schema: ZodType

// // ) => {


// //   return (

// //     req: Request,

// //     res: Response,

// //     next: NextFunction

// //   ) => {


// //     try {


// //       if (!schema) {


// //         throw new Error(
// //           "Validation schema is missing"
// //         );


// //       }





// //       schema.parse({

// //         body: req.body,

// //         params: req.params,

// //         query: req.query,

// //       });





// //       next();





// //     } catch(error) {


// //       next(error);


// //     }


// //   };


// // };

// import type {
//   Request,
//   Response,
//   NextFunction,
// } from "express";

// import {
//   ZodType,
// } from "zod";




// // =======================
// // ZOD VALIDATION MIDDLEWARE
// // =======================

// export const validate = (

//   schema: ZodType

// ) => {


//   return (

//     req: Request,

//     res: Response,

//     next: NextFunction

//   ) => {


//     const result = schema.safeParse({

//       body: req.body,

//       params: req.params,

//       query: req.query,

//     });





//     if (!result.success) {


//       return res.status(400).json({


//         success: false,


//         message:

//           result.error.issues[0]?.message

//           || "Validation failed",


//         errors:

//           result.error.issues,


//       });


//     }





//     req.body = result.data.body;





//     next();


//   };


// };


import type {
  Request,
  Response,
  NextFunction,
} from "express";


import {
  ZodType,
} from "zod";




// =======================
// ZOD VALIDATION MIDDLEWARE
// =======================

export const validate = (

  schema: ZodType<any>

) => {


  return (

    req: Request,

    res: Response,

    next: NextFunction

  ) => {


    const result = schema.safeParse({

      body: req.body,

      params: req.params,

      query: req.query,

    });





    if (!result.success) {


      return res.status(400).json({


        success: false,


        message:

          result.error.issues[0]?.message

          || "Validation failed",



        errors:

          result.error.issues,


      });


    }





    if (result.data.body) {


      req.body = result.data.body;


    }





    if (result.data.params) {


      req.params = result.data.params;


    }





    if (result.data.query) {


      req.query = result.data.query;


    }





    next();


  };


};