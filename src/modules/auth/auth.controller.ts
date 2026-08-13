// // import type { Request, Response } from "express";
// // import {
// //   registerValidationSchema,
// // } from "./auth.validation";

// // import {
// //   registerUser,
// // } from "./auth.service";


// // export const registerController = async (
// //   req: Request,
// //   res: Response
// // ) => {

// //   try {

// //     const validatedData =
// //       registerValidationSchema.parse(req.body);


// //     const user =
// //       await registerUser(validatedData);


// //     res.status(201).json({
// //       success: true,
// //       message: "User registered successfully",
// //       data: user,
// //     });


// //   } catch (error) {

// //     res.status(400).json({
// //       success: false,
// //       message:
// //         error instanceof Error
// //           ? error.message
// //           : "Something went wrong",
// //     });

// //   }

// // };


// import type {
//   Request,
//   Response,
// } from "express";


// import {

//   registerValidationSchema,

//   loginValidationSchema,

// } from "./auth.validation";



// import {

//   registerUser,

//   loginUser,

// } from "./auth.service";





// // Register Controller

// export const registerController =
// async (

//   req: Request,

//   res: Response

// ) => {


//   try {


//     const validatedData =

//       registerValidationSchema.parse(

//         req.body

//       );




//     const user =

//       await registerUser(

//         validatedData

//       );





//     res.status(201).json({

//       success: true,

//       message:
//         "User registered successfully",

//       data: user,

//     });




//   } catch (error) {



//     res.status(400).json({

//       success: false,

//       message:

//         error instanceof Error

//           ? error.message

//           : "Something went wrong",

//     });


//   }


// };







// // Login Controller

// export const loginController =
// async (

//   req: Request,

//   res: Response

// ) => {



//   try {


//     const validatedData =

//       loginValidationSchema.parse(

//         req.body

//       );





//     const result =

//       await loginUser(

//         validatedData

//       );





//     res.status(200).json({

//       success: true,

//       message:

//         "Login successful",


//       data: result,


//     });




//   } catch (error) {



//     res.status(400).json({

//       success: false,

//       message:

//         error instanceof Error

//           ? error.message

//           : "Login failed",

//     });



//   }


// };


import type {
  Request,
  Response,
} from "express";


import {

  registerUser,

  loginUser,

} from "./auth.service";









// =======================
// REGISTER CONTROLLER
// =======================

export const registerController =

async (

  req: Request,

  res: Response

) => {


  try {


    const user =

      await registerUser(

        req.body

      );





    res.status(201).json({


      success: true,


      message:

        "User registered successfully",



      data: user,


    });





  } catch (error) {



    res.status(400).json({


      success: false,


      message:


        error instanceof Error

        ? error.message

        : "Something went wrong",


    });



  }


};











// =======================
// LOGIN CONTROLLER
// =======================

export const loginController =

async (

  req: Request,

  res: Response

) => {



  try {



    const result =

      await loginUser(

        req.body

      );





    res.status(200).json({


      success: true,


      message:

        "Login successful",



      data: result,


    });





  } catch (error) {



    res.status(400).json({


      success: false,


      message:


        error instanceof Error

        ? error.message

        : "Login failed",


    });



  }


};