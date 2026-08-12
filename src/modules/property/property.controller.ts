import type {
  Request,
  Response,
} from "express";


import {
  createPropertyValidationSchema,
} from "./property.validation";


import {
  createProperty,
} from "./property.service";



export const createPropertyController =

async (

  req: Request,

  res: Response

) => {


  try {


    const validatedData =

      createPropertyValidationSchema.parse(

        req.body

      );



    const landlordId =

      req.user?.id;



    if (!landlordId) {


      return res.status(401).json({

        success: false,

        message:
          "User not authenticated",

      });


    }



    const property =

      await createProperty(

        validatedData,

        landlordId

      );



    res.status(201).json({

      success: true,

      message:
        "Property created successfully",

      data:
        property,

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