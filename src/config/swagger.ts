// // import swaggerJsdoc from "swagger-jsdoc";


// // const swaggerOptions = {

// //   definition: {

// //     openapi: "3.0.0",


// //     info: {

// //       title:
// //         "RentNest API",


// //       version:
// //         "1.0.0",


// //       description:
// //         "RentNest Rental Management Backend API Documentation",


// //     },



// //     servers: [

// //       {

// //         url:
// //           "http://localhost:5000",


// //         description:
// //           "Local Development Server",

// //       },

// //     ],



// //     components: {

// //       securitySchemes: {

// //         bearerAuth: {

// //           type:
// //             "http",


// //           scheme:
// //             "bearer",


// //           bearerFormat:
// //             "JWT",


// //         },

// //       },

// //     },


// //   },


// //   apis: [

// //     "./src/modules/**/*.route.ts",

// //   ],


// // };





// // export const swaggerSpec =

// //   swaggerJsdoc(

// //     swaggerOptions

// //   );

// import swaggerJsdoc from "swagger-jsdoc";






// const swaggerOptions = {


//   definition: {


//     openapi: "3.0.0",





//     info: {


//       title:

//         "RentNest API",



//       version:

//         "1.0.0",




//       description:

//         "RentNest Rental Management Backend API Documentation - Version 1",



//     },







//     servers: [



//       {


//         url:

//           "http://localhost:5000/api/v1",



//         description:

//           "Local Development Server API v1",



//       },


//     ],







//     components: {



//       securitySchemes: {



//         bearerAuth: {



//           type:

//             "http",





//           scheme:

//             "bearer",





//           bearerFormat:

//             "JWT",



//         },



//       },



//     },





//     security: [



//       {

//         bearerAuth: [],

//       },



//     ],



//   },







//   apis: [



//     "./src/modules/**/*.route.ts",



//   ],




// };









// export const swaggerSpec =

//   swaggerJsdoc(

//     swaggerOptions

//   );


import swaggerJsdoc from "swagger-jsdoc";

import {
  env,
} from "./env.validation";




const swaggerOptions = {


  definition: {


    openapi: "3.0.0",



    info: {


      title:

        "RentNest API",



      version:

        "1.0.0",



      description:

        "RentNest Rental Management Backend API Documentation",


    },





    servers: [


      {


        url:

          `http://localhost:${env.PORT}/api/v1`,



        description:

          "Local Development Server",


      },


    ],







    components: {


      securitySchemes: {


        bearerAuth: {


          type:

            "http",



          scheme:

            "bearer",



          bearerFormat:

            "JWT",


        },


      },


    },





    security: [


      {


        bearerAuth: [],


      },


    ],



  },





  apis: [


    "./src/modules/**/*.route.ts",


  ],



};







export const swaggerSpec =


  swaggerJsdoc(

    swaggerOptions

  );