import type {
  Request,
  Response,
  NextFunction,
} from "express";

import jwt from "jsonwebtoken";


interface JwtPayload {
  id: string;
  email: string;
  role: "TENANT" | "LANDLORD" | "ADMIN";
}



declare global {
  namespace Express {

    interface Request {

      user?: JwtPayload;

    }

  }
}



const jwtSecret =
  process.env.JWT_SECRET;



if (!jwtSecret) {

  throw new Error(
    "JWT_SECRET is not defined"
  );

}



export const authMiddleware = (

  req: Request,

  res: Response,

  next: NextFunction

) => {


  try {


    const authHeader =
      req.headers.authorization;



    if (!authHeader) {

      return res.status(401).json({

        success: false,

        message:
          "Authorization token missing",

      });

    }



    const token =
      authHeader.split(" ")[1];



    if (!token) {

      return res.status(401).json({

        success: false,

        message:
          "Invalid token format",

      });

    }



    const decoded =
      jwt.verify(
        token,
        jwtSecret
      ) as JwtPayload;



    req.user = decoded;



    next();



  } catch (error) {


    return res.status(401).json({

      success: false,

      message:
        "Invalid or expired token",

    });


  }

};