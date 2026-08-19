// import morgan from "morgan";


// import {
//   logger,
// } from "../utils/logger";




// // =======================
// // HTTP REQUEST LOGGER
// // =======================


// export const httpLogger =

// morgan(

//   "combined",

//   {


//     stream: {


//       write:

//       (message: string) => {


//         logger.info(

//           message.trim()

//         );


//       },


//     },


//   }

// );


import morgan from "morgan";


import {
  logger,
} from "../utils/logger";




// =======================
// HTTP REQUEST LOGGER
// =======================


export const httpLogger =

morgan(

  "combined",

  {


    stream: {


      write:

      (message: string) => {


        logger.info(

          message.trim()

        );


      },


    },


  }

);