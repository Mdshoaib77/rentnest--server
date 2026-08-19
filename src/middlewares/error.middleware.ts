// // import type {
// //   Request,
// //   Response,
// //   NextFunction,
// // } from "express";




// // // =======================
// // // GLOBAL ERROR HANDLER
// // // =======================

// // export const errorHandler = (

// //   error: any,

// //   req: Request,

// //   res: Response,

// //   next: NextFunction

// // ) => {



// //   console.error(

// //     "GLOBAL ERROR:",

// //     error

// //   );





// //   // Prisma Known Error

// //   if (

// //     error.code === "P2002"

// //   ) {


// //     return res.status(400).json({


// //       success: false,


// //       message:

// //         "Duplicate data already exists",


// //       error:

// //         error.meta,


// //     });


// //   }





// //   // Prisma Not Found Error

// //   if (

// //     error.code === "P2025"

// //   ) {


// //     return res.status(404).json({


// //       success: false,


// //       message:

// //         "Requested data not found",


// //     });


// //   }








// //   // Custom Error

// //   if (

// //     error.message

// //   ) {


// //     return res.status(

// //       error.statusCode || 500

// //     ).json({


// //       success: false,


// //       message:

// //         error.message,


// //     });


// //   }








// //   // Unknown Error

// //   return res.status(500).json({


// //     success: false,


// //     message:

// //       "Internal Server Error",


// //   });



// // };


// import type {
//   Request,
//   Response,
//   NextFunction,
// } from "express";


// import {
//   ZodError,
// } from "zod";


// import {
//   Prisma,
// } from "@prisma/client";


// import {
//   JsonWebTokenError,
//   TokenExpiredError,
// } from "jsonwebtoken";


// import {
//   AppError,
// } from "../utils/AppError";









// // =======================
// // GLOBAL ERROR HANDLER
// // =======================

// export const errorHandler = (

//   error: unknown,

//   req: Request,

//   res: Response,

//   next: NextFunction

// ) => {




//   console.error(

//     "GLOBAL ERROR:",

//     error

//   );









//   // =======================
//   // ZOD VALIDATION ERROR
//   // =======================


//   if (

//     error instanceof ZodError

//   ) {


//     return res.status(400).json({


//       success:false,


//       message:

//         "Validation failed",



//       errors:

//         error.issues.map(

//           (issue) => ({


//             field:

//               issue.path.join("."),


//             message:

//               issue.message,


//           })

//         ),


//     });


//   }









//   // =======================
//   // PRISMA KNOWN ERROR
//   // =======================


//   if (

//     error instanceof Prisma.PrismaClientKnownRequestError

//   ) {




//     // Duplicate data


//     if (

//       error.code === "P2002"

//     ) {


//       return res.status(400).json({


//         success:false,


//         message:

//           "Duplicate data already exists",



//         error:

//           error.meta,


//       });


//     }






//     // Not Found


//     if (

//       error.code === "P2025"

//     ) {


//       return res.status(404).json({


//         success:false,


//         message:

//           "Requested data not found",


//       });


//     }



//   }









//   // =======================
//   // JWT ERROR
//   // =======================


//   if (

//     error instanceof TokenExpiredError

//   ) {


//     return res.status(401).json({


//       success:false,


//       message:

//         "Token expired, please login again",


//     });


//   }






//   if (

//     error instanceof JsonWebTokenError

//   ) {


//     return res.status(401).json({


//       success:false,


//       message:

//         "Invalid token",


//     });


//   }









//   // =======================
//   // CUSTOM ERROR
//   // =======================


//   if (

//     error instanceof AppError

//   ) {


//     return res.status(

//       error.statusCode

//     ).json({


//       success:false,


//       message:

//         error.message,


//     });


//   }









//   // =======================
//   // UNKNOWN ERROR
//   // =======================


//   return res.status(500).json({


//     success:false,


//     message:

//       "Internal Server Error",


//   });



// };

import type {

  Request,

  Response,

  NextFunction,

} from "express";


import {

  Prisma,

} from "@prisma/client";


import {

  sendErrorResponse,

} from "../utils/apiResponse";









// =======================
// GLOBAL ERROR HANDLER
// =======================


export const errorHandler = (

  error: unknown,

  req: Request,

  res: Response,

  next: NextFunction

) => {



  console.error(

    "GLOBAL ERROR:",

    error

  );








  // =======================
  // PRISMA DUPLICATE ERROR
  // =======================


  if (

    error instanceof Prisma.PrismaClientKnownRequestError

    &&

    error.code === "P2002"

  ) {


    return sendErrorResponse(

      res,

      400,

      "Duplicate data already exists",

      {

        field:

          error.meta,

      }

    );


  }









  // =======================
  // PRISMA NOT FOUND ERROR
  // =======================


  if (

    error instanceof Prisma.PrismaClientKnownRequestError

    &&

    error.code === "P2025"

  ) {


    return sendErrorResponse(

      res,

      404,

      "Requested data not found"

    );


  }









  // =======================
  // CUSTOM ERROR
  // =======================


  if (

    error instanceof Error

  ) {


    return sendErrorResponse(

      res,

      500,

      error.message

    );


  }









  // =======================
  // UNKNOWN ERROR
  // =======================


  return sendErrorResponse(

    res,

    500,

    "Internal Server Error"

  );


};