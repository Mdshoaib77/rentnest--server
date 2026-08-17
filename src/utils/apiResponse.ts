// import type {
//   Response,
// } from "express";




// // =======================
// // SUCCESS RESPONSE
// // =======================

// export const sendResponse = (

//   res: Response,

//   statusCode: number,

//   message: string,

//   data?: unknown,

//   meta?: Record<string, unknown>

// ) => {


//   const response: {

//     success: boolean;

//     message: string;

//     data?: unknown;

//     meta?: Record<string, unknown>;

//   } = {


//     success:true,


//     message,


//   };



//   if (data !== undefined) {

//     response.data = data;

//   }



//   if (meta !== undefined) {

//     response.meta = meta;

//   }



//   return res

//     .status(statusCode)

//     .json(response);


// };











// // =======================
// // ERROR RESPONSE
// // =======================

// export const sendErrorResponse = (

//   res: Response,

//   statusCode: number,

//   message: string,

//   errors?: unknown

// ) => {



//   const response: {

//     success:boolean;

//     message:string;

//     errors?:unknown;

//   } = {


//     success:false,


//     message,


//   };




//   if (errors !== undefined) {

//     response.errors = errors;

//   }



//   return res

//     .status(statusCode)

//     .json(response);


// };

import type {
  Response,
} from "express";




// =======================
// SUCCESS RESPONSE
// =======================

export const sendResponse = (

  res: Response,

  statusCode: number,

  message: string,

  data?: unknown,

  meta?: Record<string, unknown>

) => {


  const response: {

    success: boolean;

    message: string;

    data?: unknown;

    meta?: Record<string, unknown>;

  } = {


    success:true,


    message,


  };




  if (data !== undefined) {


    response.data = data;


  }




  if (meta !== undefined) {


    response.meta = meta;


  }




  return res

    .status(statusCode)

    .json(response);


};











// =======================
// ERROR RESPONSE
// =======================

export const sendErrorResponse = (

  res: Response,

  statusCode: number,

  message: string,

  errors?: unknown

) => {


  const response: {

    success:boolean;

    message:string;

    errors?:unknown;

  } = {


    success:false,


    message,


  };





  if(errors !== undefined){


    response.errors = errors;


  }





  return res

    .status(statusCode)

    .json(response);


};