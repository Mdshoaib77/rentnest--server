// // // import jwt from "jsonwebtoken";


// // // const jwtSecret = process.env.JWT_SECRET;

// // // if (!jwtSecret) {
// // //   throw new Error(
// // //     "JWT_SECRET is not defined"
// // //   );
// // // }


// // // export const generateToken = (
// // //   payload: object
// // // ) => {

// // //   return jwt.sign(
// // //     payload,
// // //     jwtSecret,
// // //     {
// // //       expiresIn:
// // //         process.env.JWT_EXPIRES_IN || "7d",
// // //     }
// // //   );

// // // };


// // import jwt from "jsonwebtoken";


// // const jwtSecret =
// //   process.env.JWT_SECRET;



// // if (!jwtSecret) {

// //   throw new Error(
// //     "JWT_SECRET is not defined"
// //   );

// // }



// // export const generateToken = (

// //   payload: object

// // ) => {


// //   return jwt.sign(

// //     payload,

// //     jwtSecret,

// //     {

// //       expiresIn:

// //         process.env.JWT_EXPIRES_IN ??

// //         "7d",

// //     }

// //   );


// // };


// import jwt from "jsonwebtoken";


// const jwtSecret = process.env.JWT_SECRET;


// if (!jwtSecret) {
//   throw new Error(
//     "JWT_SECRET is not defined"
//   );
// }


// export const generateToken = (
//   payload: object
// ) => {

//   return jwt.sign(
//     payload,
//     jwtSecret,
//     {
//       expiresIn: "7d",
//     }
//   );

// };


import jwt from "jsonwebtoken";


import {
  env,
} from "../config/env.validation";







// =======================
// GENERATE JWT TOKEN
// =======================

export const generateToken = (

  payload: object

) => {


  return jwt.sign(

    payload,

    env.JWT_SECRET,

    {

      expiresIn:

        env.JWT_EXPIRES_IN,

    }

  );


};