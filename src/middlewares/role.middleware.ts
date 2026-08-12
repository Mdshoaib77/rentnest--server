import type {
  Request,
  Response,
  NextFunction,
} from "express";


export const authorizeRole = (
  ...allowedRoles: (
    "TENANT" |
    "LANDLORD" |
    "ADMIN"
  )[]
) => {


  return (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {


    if (!req.user) {

      return res.status(401).json({

        success: false,

        message:
          "User not authenticated",

      });

    }



    if (
      !allowedRoles.includes(
        req.user.role
      )
    ) {

      return res.status(403).json({

        success: false,

        message:
          "You do not have permission to access this resource",

      });

    }



    next();

  };


};