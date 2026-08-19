import winston from "winston";

import {
  env,
} from "../config/env.validation";




// =======================
// LOGGER CONFIGURATION
// =======================


export const logger = winston.createLogger({


  level:

    "info",



  format:

    winston.format.combine(

      winston.format.timestamp(),

      winston.format.json()

    ),




  transports: [


    new winston.transports.File({

      filename:

        "logs/error.log",

      level:

        "error",

    }),





    new winston.transports.File({

      filename:

        "logs/combined.log",

    }),


  ],


});








// Development Console Logger


if (

  env.NODE_ENV !== "production"

) {


  logger.add(

    new winston.transports.Console({

      format:

        winston.format.combine(

          winston.format.colorize(),

          winston.format.simple()

        ),

    })

  );


}