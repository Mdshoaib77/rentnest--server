import type { Request, Response } from "express";
import {
  registerValidationSchema,
} from "./auth.validation";

import {
  registerUser,
} from "./auth.service";


export const registerController = async (
  req: Request,
  res: Response
) => {

  try {

    const validatedData =
      registerValidationSchema.parse(req.body);


    const user =
      await registerUser(validatedData);


    res.status(201).json({
      success: true,
      message: "User registered successfully",
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