import swaggerJsdoc from "swagger-jsdoc";


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
          "http://localhost:5000",


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


  },


  apis: [

    "./src/modules/**/*.route.ts",

  ],


};





export const swaggerSpec =

  swaggerJsdoc(

    swaggerOptions

  );