import type {
  Request,
  Response,
} from "express";


import {
  createBookingValidationSchema,
} from "./booking.validation";


import {
  createBooking,
} from "./booking.service";




// =======================
// CREATE BOOKING
// =======================

export const createBookingController =

async (

  req: Request,

  res: Response

) => {


  try {


    // Validation

    const validatedData =

      createBookingValidationSchema.parse(

        req.body

      );





    // Logged in user

    const tenantId =

      req.user?.id;





    if (!tenantId) {


      return res.status(401).json({

        success:false,

        message:
          "User not authenticated",

      });


    }





    // Create booking

    const booking =

      await createBooking(

        validatedData,

        tenantId

      );






    res.status(201).json({

      success:true,

      message:
        "Booking created successfully",

      data:
        booking,

    });






  } catch(error) {



    res.status(400).json({

      success:false,

      message:

        error instanceof Error

        ? error.message

        : "Booking failed",

    });



  }


};