"use strict";
// // // // // // // // // // import express from "express";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // // // // // // // // // const app = express();
// // // // // // // // // // app.use(express.json());
// // // // // // // // // // app.get("/", (req, res) => {
// // // // // // // // // //   res.send("RentNest Backend Running 🚀");
// // // // // // // // // // });
// // // // // // // // // // export default app;
// // // // // // // // // import express from "express";
// // // // // // // // // import prisma from "./lib/prisma";
// // // // // // // // // const app = express();
// // // // // // // // // app.use(express.json());
// // // // // // // // // app.get("/", (req, res) => {
// // // // // // // // //   res.send("RentNest Backend Running 🚀");
// // // // // // // // // });
// // // // // // // // // app.get("/api/health", async (req, res) => {
// // // // // // // // //   try {
// // // // // // // // //     const userCount = await prisma.user.count();
// // // // // // // // //     res.status(200).json({
// // // // // // // // //       success: true,
// // // // // // // // //       message: "RentNest API and database are healthy",
// // // // // // // // //       data: {
// // // // // // // // //         database: "connected",
// // // // // // // // //         totalUsers: userCount,
// // // // // // // // //       },
// // // // // // // // //     });
// // // // // // // // //   } catch (error) {
// // // // // // // // //     res.status(500).json({
// // // // // // // // //       success: false,
// // // // // // // // //       message: "Database connection failed",
// // // // // // // // //       errorDetails:
// // // // // // // // //         error instanceof Error ? error.message : "Unknown error occurred",
// // // // // // // // //     });
// // // // // // // // //   }
// // // // // // // // // });
// // // // // // // // // export default app;
// // // // // // // // import express from "express";
// // // // // // // // import prisma from "./lib/prisma";
// // // // // // // // import authRouter from "./modules/auth/auth.route";
// // // // // // // // const app = express();
// // // // // // // // app.use(express.json());
// // // // // // // // app.use(
// // // // // // // //   "/api/auth",
// // // // // // // //   authRouter
// // // // // // // // );
// // // // // // // // app.get("/", (req, res) => {
// // // // // // // //   res.send(
// // // // // // // //     "RentNest Backend Running 🚀"
// // // // // // // //   );
// // // // // // // // });
// // // // // // // // app.get("/api/health", async (req, res) => {
// // // // // // // //   try {
// // // // // // // //     const userCount =
// // // // // // // //       await prisma.user.count();
// // // // // // // //     res.status(200).json({
// // // // // // // //       success: true,
// // // // // // // //       message:
// // // // // // // //         "RentNest API and database are healthy",
// // // // // // // //       data: {
// // // // // // // //         database: "connected",
// // // // // // // //         totalUsers: userCount,
// // // // // // // //       },
// // // // // // // //     });
// // // // // // // //   } catch (error) {
// // // // // // // //     res.status(500).json({
// // // // // // // //       success: false,
// // // // // // // //       message:
// // // // // // // //         "Database connection failed",
// // // // // // // //     });
// // // // // // // //   }
// // // // // // // // });
// // // // // // // // export default app;
// // // // // // // import express from "express";
// // // // // // // import prisma from "./lib/prisma";
// // // // // // // import authRouter from "./modules/auth/auth.route";
// // // // // // // import {
// // // // // // //   authMiddleware,
// // // // // // // } from "./middlewares/auth.middleware";
// // // // // // // const app = express();
// // // // // // // app.use(express.json());
// // // // // // // app.use(
// // // // // // //   "/api/auth",
// // // // // // //   authRouter
// // // // // // // );
// // // // // // // app.get("/", (req, res) => {
// // // // // // //   res.send(
// // // // // // //     "RentNest Backend Running 🚀"
// // // // // // //   );
// // // // // // // });
// // // // // // // app.get(
// // // // // // //   "/api/profile",
// // // // // // //   authMiddleware,
// // // // // // //   async (req, res) => {
// // // // // // //     res.status(200).json({
// // // // // // //       success: true,
// // // // // // //       message:
// // // // // // //         "Protected route accessed",
// // // // // // //       user:
// // // // // // //         req.user,
// // // // // // //     });
// // // // // // //   }
// // // // // // // );
// // // // // // // app.get(
// // // // // // //   "/api/health",
// // // // // // //   async (req, res) => {
// // // // // // //     try {
// // // // // // //       const userCount =
// // // // // // //         await prisma.user.count();
// // // // // // //       res.status(200).json({
// // // // // // //         success: true,
// // // // // // //         message:
// // // // // // //           "RentNest API and database are healthy",
// // // // // // //         data: {
// // // // // // //           database:
// // // // // // //             "connected",
// // // // // // //           totalUsers:
// // // // // // //             userCount,
// // // // // // //         },
// // // // // // //       });
// // // // // // //     } catch (error) {
// // // // // // //       res.status(500).json({
// // // // // // //         success: false,
// // // // // // //         message:
// // // // // // //           "Database connection failed",
// // // // // // //       });
// // // // // // //     }
// // // // // // //   }
// // // // // // // );
// // // // // // // export default app;
// // // // // // import express from "express";
// // // // // // import prisma from "./lib/prisma";
// // // // // // import authRouter from "./modules/auth/auth.route";
// // // // // // import {
// // // // // //   authMiddleware,
// // // // // // } from "./middlewares/auth.middleware";
// // // // // // import {
// // // // // //   authorizeRole,
// // // // // // } from "./middlewares/role.middleware";
// // // // // // const app = express();
// // // // // // app.use(express.json());
// // // // // // // =======================
// // // // // // // AUTH ROUTES
// // // // // // // =======================
// // // // // // app.use(
// // // // // //   "/api/auth",
// // // // // //   authRouter
// // // // // // );
// // // // // // // =======================
// // // // // // // HOME ROUTE
// // // // // // // =======================
// // // // // // app.get("/", (req, res) => {
// // // // // //   res.send(
// // // // // //     "RentNest Backend Running 🚀"
// // // // // //   );
// // // // // // });
// // // // // // // =======================
// // // // // // // DATABASE HEALTH CHECK
// // // // // // // =======================
// // // // // // app.get(
// // // // // //   "/api/health",
// // // // // //   async (req, res) => {
// // // // // //     try {
// // // // // //       const userCount =
// // // // // //         await prisma.user.count();
// // // // // //       res.status(200).json({
// // // // // //         success: true,
// // // // // //         message:
// // // // // //           "RentNest API and database are healthy",
// // // // // //         data: {
// // // // // //           database:
// // // // // //             "connected",
// // // // // //           totalUsers:
// // // // // //             userCount,
// // // // // //         },
// // // // // //       });
// // // // // //     } catch (error) {
// // // // // //       res.status(500).json({
// // // // // //         success: false,
// // // // // //         message:
// // // // // //           "Database connection failed",
// // // // // //       });
// // // // // //     }
// // // // // //   }
// // // // // // );
// // // // // // // =======================
// // // // // // // PROTECTED PROFILE ROUTE
// // // // // // // =======================
// // // // // // app.get(
// // // // // //   "/api/profile",
// // // // // //   authMiddleware,
// // // // // //   (req, res) => {
// // // // // //     res.status(200).json({
// // // // // //       success: true,
// // // // // //       message:
// // // // // //         "Protected route accessed",
// // // // // //       user:
// // // // // //         req.user,
// // // // // //     });
// // // // // //   }
// // // // // // );
// // // // // // // =======================
// // // // // // // LANDLORD ONLY ROUTE
// // // // // // // =======================
// // // // // // app.get(
// // // // // //   "/api/landlord-test",
// // // // // //   authMiddleware,
// // // // // //   authorizeRole(
// // // // // //     "LANDLORD"
// // // // // //   ),
// // // // // //   (req, res) => {
// // // // // //     res.status(200).json({
// // // // // //       success: true,
// // // // // //       message:
// // // // // //         "Welcome Landlord! Property management access granted",
// // // // // //       user:
// // // // // //         req.user,
// // // // // //     });
// // // // // //   }
// // // // // // );
// // // // // // // =======================
// // // // // // // ADMIN ONLY ROUTE
// // // // // // // =======================
// // // // // // app.get(
// // // // // //   "/api/admin-test",
// // // // // //   authMiddleware,
// // // // // //   authorizeRole(
// // // // // //     "ADMIN"
// // // // // //   ),
// // // // // //   (req, res) => {
// // // // // //     res.status(200).json({
// // // // // //       success: true,
// // // // // //       message:
// // // // // //         "Welcome Admin!",
// // // // // //       user:
// // // // // //         req.user,
// // // // // //     });
// // // // // //   }
// // // // // // );
// // // // // // export default app;
// // // // // import express from "express";
// // // // // import prisma from "./lib/prisma";
// // // // // import authRouter from "./modules/auth/auth.route";
// // // // // import propertyRouter from "./modules/property/property.route";
// // // // // import {
// // // // //   authMiddleware,
// // // // // } from "./middlewares/auth.middleware";
// // // // // import {
// // // // //   authorizeRole,
// // // // // } from "./middlewares/role.middleware";
// // // // // const app = express();
// // // // // app.use(express.json());
// // // // // // =======================
// // // // // // AUTH ROUTES
// // // // // // =======================
// // // // // app.use(
// // // // //   "/api/auth",
// // // // //   authRouter
// // // // // );
// // // // // // =======================
// // // // // // PROPERTY ROUTES
// // // // // // =======================
// // // // // app.use(
// // // // //   "/api/properties",
// // // // //   propertyRouter
// // // // // );
// // // // // // =======================
// // // // // // HOME ROUTE
// // // // // // =======================
// // // // // app.get("/", (req, res) => {
// // // // //   res.send(
// // // // //     "RentNest Backend Running 🚀"
// // // // //   );
// // // // // });
// // // // // // =======================
// // // // // // DATABASE HEALTH CHECK
// // // // // // =======================
// // // // // app.get(
// // // // //   "/api/health",
// // // // //   async (req, res) => {
// // // // //     try {
// // // // //       const userCount =
// // // // //         await prisma.user.count();
// // // // //       res.status(200).json({
// // // // //         success: true,
// // // // //         message:
// // // // //           "RentNest API and database are healthy",
// // // // //         data: {
// // // // //           database:
// // // // //             "connected",
// // // // //           totalUsers:
// // // // //             userCount,
// // // // //         },
// // // // //       });
// // // // //     } catch (error) {
// // // // //       res.status(500).json({
// // // // //         success: false,
// // // // //         message:
// // // // //           "Database connection failed",
// // // // //       });
// // // // //     }
// // // // //   }
// // // // // );
// // // // // // =======================
// // // // // // PROTECTED PROFILE ROUTE
// // // // // // =======================
// // // // // app.get(
// // // // //   "/api/profile",
// // // // //   authMiddleware,
// // // // //   (req, res) => {
// // // // //     res.status(200).json({
// // // // //       success: true,
// // // // //       message:
// // // // //         "Protected route accessed",
// // // // //       user:
// // // // //         req.user,
// // // // //     });
// // // // //   }
// // // // // );
// // // // // // =======================
// // // // // // LANDLORD ONLY TEST ROUTE
// // // // // // =======================
// // // // // app.get(
// // // // //   "/api/landlord-test",
// // // // //   authMiddleware,
// // // // //   authorizeRole(
// // // // //     "LANDLORD"
// // // // //   ),
// // // // //   (req, res) => {
// // // // //     res.status(200).json({
// // // // //       success: true,
// // // // //       message:
// // // // //         "Welcome Landlord! Property management access granted",
// // // // //       user:
// // // // //         req.user,
// // // // //     });
// // // // //   }
// // // // // );
// // // // // // =======================
// // // // // // ADMIN ONLY TEST ROUTE
// // // // // // =======================
// // // // // app.get(
// // // // //   "/api/admin-test",
// // // // //   authMiddleware,
// // // // //   authorizeRole(
// // // // //     "ADMIN"
// // // // //   ),
// // // // //   (req, res) => {
// // // // //     res.status(200).json({
// // // // //       success: true,
// // // // //       message:
// // // // //         "Welcome Admin!",
// // // // //       user:
// // // // //         req.user,
// // // // //     });
// // // // //   }
// // // // // );
// // // // // export default app;
// // // // import express from "express";
// // // // import prisma from "./lib/prisma";
// // // // import authRouter from "./modules/auth/auth.route";
// // // // import propertyRouter from "./modules/property/property.route";
// // // // import bookingRouter from "./modules/booking/booking.route";
// // // // import {
// // // //   authMiddleware,
// // // // } from "./middlewares/auth.middleware";
// // // // import {
// // // //   authorizeRole,
// // // // } from "./middlewares/role.middleware";
// // // // const app = express();
// // // // app.use(express.json());
// // // // // =======================
// // // // // AUTH ROUTES
// // // // // =======================
// // // // app.use(
// // // //   "/api/auth",
// // // //   authRouter
// // // // );
// // // // // =======================
// // // // // PROPERTY ROUTES
// // // // // =======================
// // // // app.use(
// // // //   "/api/properties",
// // // //   propertyRouter
// // // // );
// // // // // =======================
// // // // // BOOKING ROUTES
// // // // // =======================
// // // // app.use(
// // // //   "/api/bookings",
// // // //   bookingRouter
// // // // );
// // // // // =======================
// // // // // HOME ROUTE
// // // // // =======================
// // // // app.get(
// // // //   "/",
// // // //   (req, res) => {
// // // //     res.send(
// // // //       "RentNest Backend Running 🚀"
// // // //     );
// // // //   }
// // // // );
// // // // // =======================
// // // // // DATABASE HEALTH CHECK
// // // // // =======================
// // // // app.get(
// // // //   "/api/health",
// // // //   async (req, res) => {
// // // //     try {
// // // //       const userCount =
// // // //         await prisma.user.count();
// // // //       const propertyCount =
// // // //         await prisma.property.count();
// // // //       const bookingCount =
// // // //         await prisma.booking.count();
// // // //       res.status(200).json({
// // // //         success: true,
// // // //         message:
// // // //           "RentNest API and database are healthy",
// // // //         data: {
// // // //           database:
// // // //             "connected",
// // // //           totalUsers:
// // // //             userCount,
// // // //           totalProperties:
// // // //             propertyCount,
// // // //           totalBookings:
// // // //             bookingCount,
// // // //         },
// // // //       });
// // // //     } catch(error) {
// // // //       res.status(500).json({
// // // //         success:false,
// // // //         message:
// // // //           "Database connection failed",
// // // //       });
// // // //     }
// // // //   }
// // // // );
// // // // // =======================
// // // // // PROTECTED PROFILE ROUTE
// // // // // =======================
// // // // app.get(
// // // //   "/api/profile",
// // // //   authMiddleware,
// // // //   (req, res) => {
// // // //     res.status(200).json({
// // // //       success:true,
// // // //       message:
// // // //         "Protected route accessed",
// // // //       user:
// // // //         req.user,
// // // //     });
// // // //   }
// // // // );
// // // // // =======================
// // // // // LANDLORD ONLY TEST ROUTE
// // // // // =======================
// // // // app.get(
// // // //   "/api/landlord-test",
// // // //   authMiddleware,
// // // //   authorizeRole(
// // // //     "LANDLORD"
// // // //   ),
// // // //   (req, res) => {
// // // //     res.status(200).json({
// // // //       success:true,
// // // //       message:
// // // //         "Welcome Landlord! Property management access granted",
// // // //       user:
// // // //         req.user,
// // // //     });
// // // //   }
// // // // );
// // // // // =======================
// // // // // ADMIN ONLY TEST ROUTE
// // // // // =======================
// // // // app.get(
// // // //   "/api/admin-test",
// // // //   authMiddleware,
// // // //   authorizeRole(
// // // //     "ADMIN"
// // // //   ),
// // // //   (req, res) => {
// // // //     res.status(200).json({
// // // //       success:true,
// // // //       message:
// // // //         "Welcome Admin!",
// // // //       user:
// // // //         req.user,
// // // //     });
// // // //   }
// // // // );
// // // // export default app;
// // // import express from "express";
// // // import prisma from "./lib/prisma";
// // // import authRouter from "./modules/auth/auth.route";
// // // import propertyRouter from "./modules/property/property.route";
// // // import bookingRouter from "./modules/booking/booking.route";
// // // import {
// // //   authMiddleware,
// // // } from "./middlewares/auth.middleware";
// // // import {
// // //   authorizeRole,
// // // } from "./middlewares/role.middleware";
// // // const app = express();
// // // app.use(express.json());
// // // // =======================
// // // // AUTH ROUTES
// // // // =======================
// // // app.use(
// // //   "/api/auth",
// // //   authRouter
// // // );
// // // // =======================
// // // // PROPERTY ROUTES
// // // // =======================
// // // app.use(
// // //   "/api/properties",
// // //   propertyRouter
// // // );
// // // // =======================
// // // // BOOKING ROUTES
// // // // =======================
// // // app.use(
// // //   "/api/bookings",
// // //   bookingRouter
// // // );
// // // // =======================
// // // // HOME ROUTE
// // // // =======================
// // // app.get(
// // //   "/",
// // //   (req, res) => {
// // //     res.send(
// // //       "RentNest Backend Running 🚀"
// // //     );
// // //   }
// // // );
// // // // =======================
// // // // DATABASE HEALTH CHECK
// // // // =======================
// // // app.get(
// // //   "/api/health",
// // //   async (req, res) => {
// // //     try {
// // //       const userCount =
// // //         await prisma.user.count();
// // //       const propertyCount =
// // //         await prisma.property.count();
// // //       const bookingCount =
// // //         await prisma.booking.count();
// // //       res.status(200).json({
// // //         success: true,
// // //         message:
// // //           "RentNest API and database are healthy",
// // //         data: {
// // //           database:
// // //             "connected",
// // //           totalUsers:
// // //             userCount,
// // //           totalProperties:
// // //             propertyCount,
// // //           totalBookings:
// // //             bookingCount,
// // //         },
// // //       });
// // //     } catch(error) {
// // //       console.error(
// // //         "HEALTH ERROR:",
// // //         error
// // //       );
// // //       res.status(500).json({
// // //         success:false,
// // //         message:
// // //           error instanceof Error
// // //           ? error.message
// // //           : "Database connection failed",
// // //       });
// // //     }
// // //   }
// // // );
// // // // =======================
// // // // PROTECTED PROFILE ROUTE
// // // // =======================
// // // app.get(
// // //   "/api/profile",
// // //   authMiddleware,
// // //   (req, res) => {
// // //     res.status(200).json({
// // //       success:true,
// // //       message:
// // //         "Protected route accessed",
// // //       user:
// // //         req.user,
// // //     });
// // //   }
// // // );
// // // // =======================
// // // // LANDLORD ONLY TEST ROUTE
// // // // =======================
// // // app.get(
// // //   "/api/landlord-test",
// // //   authMiddleware,
// // //   authorizeRole(
// // //     "LANDLORD"
// // //   ),
// // //   (req, res) => {
// // //     res.status(200).json({
// // //       success:true,
// // //       message:
// // //         "Welcome Landlord! Property management access granted",
// // //       user:
// // //         req.user,
// // //     });
// // //   }
// // // );
// // // // =======================
// // // // ADMIN ONLY TEST ROUTE
// // // // =======================
// // // app.get(
// // //   "/api/admin-test",
// // //   authMiddleware,
// // //   authorizeRole(
// // //     "ADMIN"
// // //   ),
// // //   (req, res) => {
// // //     res.status(200).json({
// // //       success:true,
// // //       message:
// // //         "Welcome Admin!",
// // //       user:
// // //         req.user,
// // //     });
// // //   }
// // // );
// // // export default app;
// // // import express from "express";
// // // import prisma from "./lib/prisma";
// // // import authRouter from "./modules/auth/auth.route";
// // // import propertyRouter from "./modules/property/property.route";
// // // import bookingRouter from "./modules/booking/booking.route";
// // // import {
// // //   authMiddleware,
// // // } from "./middlewares/auth.middleware";
// // // import {
// // //   authorizeRole,
// // // } from "./middlewares/role.middleware";
// // // const app = express();
// // // app.use(express.json());
// // // // Prisma Debug
// // // console.log(
// // //   "Prisma keys:",
// // //   Object.keys(prisma)
// // // );
// // // // =======================
// // // // AUTH ROUTES
// // // // =======================
// // // app.use(
// // //   "/api/auth",
// // //   authRouter
// // // );
// // // // =======================
// // // // PROPERTY ROUTES
// // // // =======================
// // // app.use(
// // //   "/api/properties",
// // //   propertyRouter
// // // );
// // // // =======================
// // // // BOOKING ROUTES
// // // // =======================
// // // app.use(
// // //   "/api/bookings",
// // //   bookingRouter
// // // );
// // // // =======================
// // // // HOME ROUTE
// // // // =======================
// // // app.get(
// // //   "/",
// // //   (req, res) => {
// // //     res.send(
// // //       "RentNest Backend Running 🚀"
// // //     );
// // //   }
// // // );
// // // // =======================
// // // // DATABASE HEALTH CHECK
// // // // =======================
// // // app.get(
// // //   "/api/health",
// // //   async (req, res) => {
// // //     try {
// // //       const userCount =
// // //         await prisma.user.count();
// // //       const propertyCount =
// // //         await prisma.property.count();
// // //       const bookingCount =
// // //         await prisma.booking.count();
// // //       res.status(200).json({
// // //         success:true,
// // //         message:
// // //           "RentNest API and database are healthy",
// // //         data: {
// // //           database:
// // //             "connected",
// // //           totalUsers:
// // //             userCount,
// // //           totalProperties:
// // //             propertyCount,
// // //           totalBookings:
// // //             bookingCount,
// // //         },
// // //       });
// // //     } catch(error) {
// // //       console.error(
// // //         "HEALTH ERROR:",
// // //         error
// // //       );
// // //       res.status(500).json({
// // //         success:false,
// // //         message:
// // //           error instanceof Error
// // //           ? error.message
// // //           : "Database connection failed",
// // //       });
// // //     }
// // //   }
// // // );
// // // // =======================
// // // // PROFILE ROUTE
// // // // =======================
// // // app.get(
// // //   "/api/profile",
// // //   authMiddleware,
// // //   (req, res) => {
// // //     res.status(200).json({
// // //       success:true,
// // //       message:
// // //         "Protected route accessed",
// // //       user:
// // //         req.user,
// // //     });
// // //   }
// // // );
// // // // =======================
// // // // LANDLORD TEST ROUTE
// // // // =======================
// // // app.get(
// // //   "/api/landlord-test",
// // //   authMiddleware,
// // //   authorizeRole(
// // //     "LANDLORD"
// // //   ),
// // //   (req, res) => {
// // //     res.status(200).json({
// // //       success:true,
// // //       message:
// // //         "Welcome Landlord! Property management access granted",
// // //       user:
// // //         req.user,
// // //     });
// // //   }
// // // );
// // // // =======================
// // // // ADMIN TEST ROUTE
// // // // =======================
// // // app.get(
// // //   "/api/admin-test",
// // //   authMiddleware,
// // //   authorizeRole(
// // //     "ADMIN"
// // //   ),
// // //   (req, res) => {
// // //     res.status(200).json({
// // //       success:true,
// // //       message:
// // //         "Welcome Admin!",
// // //       user:
// // //         req.user,
// // //     });
// // //   }
// // // );
// // // export default app;
// // // import express from "express";
// // // import prisma from "./lib/prisma";
// // // import authRouter from "./modules/auth/auth.route";
// // // import propertyRouter from "./modules/property/property.route";
// // // import bookingRouter from "./modules/booking/booking.route";
// // // import adminRouter from "./modules/admin/admin.route";
// // // import {
// // //   authMiddleware,
// // // } from "./middlewares/auth.middleware";
// // // import {
// // //   authorizeRole,
// // // } from "./middlewares/role.middleware";
// // // const app = express();
// // // app.use(express.json());
// // // // Prisma Debug
// // // console.log(
// // //   "Prisma keys:",
// // //   Object.keys(prisma)
// // // );
// // // // =======================
// // // // AUTH ROUTES
// // // // =======================
// // // app.use(
// // //   "/api/auth",
// // //   authRouter
// // // );
// // // // =======================
// // // // PROPERTY ROUTES
// // // // =======================
// // // app.use(
// // //   "/api/properties",
// // //   propertyRouter
// // // );
// // // // =======================
// // // // BOOKING ROUTES
// // // // =======================
// // // app.use(
// // //   "/api/bookings",
// // //   bookingRouter
// // // );
// // // // =======================
// // // // ADMIN ROUTES
// // // // =======================
// // // app.use(
// // //   "/api/admin",
// // //   adminRouter
// // // );
// // // // =======================
// // // // HOME ROUTE
// // // // =======================
// // // app.get(
// // //   "/",
// // //   (req, res) => {
// // //     res.send(
// // //       "RentNest Backend Running 🚀"
// // //     );
// // //   }
// // // );
// // // // =======================
// // // // DATABASE HEALTH CHECK
// // // // =======================
// // // app.get(
// // //   "/api/health",
// // //   async (req, res) => {
// // //     try {
// // //       const userCount =
// // //         await prisma.user.count();
// // //       const propertyCount =
// // //         await prisma.property.count();
// // //       const bookingCount =
// // //         await prisma.booking.count();
// // //       res.status(200).json({
// // //         success:true,
// // //         message:
// // //           "RentNest API and database are healthy",
// // //         data: {
// // //           database:
// // //             "connected",
// // //           totalUsers:
// // //             userCount,
// // //           totalProperties:
// // //             propertyCount,
// // //           totalBookings:
// // //             bookingCount,
// // //         },
// // //       });
// // //     } catch(error) {
// // //       console.error(
// // //         "HEALTH ERROR:",
// // //         error
// // //       );
// // //       res.status(500).json({
// // //         success:false,
// // //         message:
// // //           error instanceof Error
// // //           ? error.message
// // //           : "Database connection failed",
// // //       });
// // //     }
// // //   }
// // // );
// // // // =======================
// // // // PROFILE ROUTE
// // // // =======================
// // // app.get(
// // //   "/api/profile",
// // //   authMiddleware,
// // //   (req, res) => {
// // //     res.status(200).json({
// // //       success:true,
// // //       message:
// // //         "Protected route accessed",
// // //       user:
// // //         req.user,
// // //     });
// // //   }
// // // );
// // // // =======================
// // // // LANDLORD TEST ROUTE
// // // // =======================
// // // app.get(
// // //   "/api/landlord-test",
// // //   authMiddleware,
// // //   authorizeRole(
// // //     "LANDLORD"
// // //   ),
// // //   (req, res) => {
// // //     res.status(200).json({
// // //       success:true,
// // //       message:
// // //         "Welcome Landlord! Property management access granted",
// // //       user:
// // //         req.user,
// // //     });
// // //   }
// // // );
// // // // =======================
// // // // ADMIN TEST ROUTE
// // // // =======================
// // // app.get(
// // //   "/api/admin-test",
// // //   authMiddleware,
// // //   authorizeRole(
// // //     "ADMIN"
// // //   ),
// // //   (req, res) => {
// // //     res.status(200).json({
// // //       success:true,
// // //       message:
// // //         "Welcome Admin!",
// // //       user:
// // //         req.user,
// // //     });
// // //   }
// // // );
// // // export default app;
// // // import express from "express";
// // // import prisma from "./lib/prisma";
// // // import authRouter from "./modules/auth/auth.route";
// // // import propertyRouter from "./modules/property/property.route";
// // // import bookingRouter from "./modules/booking/booking.route";
// // // import adminRouter from "./modules/admin/admin.route";
// // // import {
// // //   authMiddleware,
// // // } from "./middlewares/auth.middleware";
// // // import {
// // //   authorizeRole,
// // // } from "./middlewares/role.middleware";
// // // import {
// // //   errorHandler,
// // // } from "./middlewares/error.middleware";
// // // const app = express();
// // // app.use(express.json());
// // // // Prisma Debug
// // // console.log(
// // //   "Prisma keys:",
// // //   Object.keys(prisma)
// // // );
// // // // =======================
// // // // AUTH ROUTES
// // // // =======================
// // // app.use(
// // //   "/api/auth",
// // //   authRouter
// // // );
// // // // =======================
// // // // PROPERTY ROUTES
// // // // =======================
// // // app.use(
// // //   "/api/properties",
// // //   propertyRouter
// // // );
// // // // =======================
// // // // BOOKING ROUTES
// // // // =======================
// // // app.use(
// // //   "/api/bookings",
// // //   bookingRouter
// // // );
// // // // =======================
// // // // ADMIN ROUTES
// // // // =======================
// // // app.use(
// // //   "/api/admin",
// // //   adminRouter
// // // );
// // // // =======================
// // // // HOME ROUTE
// // // // =======================
// // // app.get(
// // //   "/",
// // //   (req, res) => {
// // //     res.send(
// // //       "RentNest Backend Running 🚀"
// // //     );
// // //   }
// // // );
// // // // =======================
// // // // DATABASE HEALTH CHECK
// // // // =======================
// // // app.get(
// // //   "/api/health",
// // //   async (req, res) => {
// // //     try {
// // //       const userCount =
// // //         await prisma.user.count();
// // //       const propertyCount =
// // //         await prisma.property.count();
// // //       const bookingCount =
// // //         await prisma.booking.count();
// // //       res.status(200).json({
// // //         success:true,
// // //         message:
// // //           "RentNest API and database are healthy",
// // //         data: {
// // //           database:
// // //             "connected",
// // //           totalUsers:
// // //             userCount,
// // //           totalProperties:
// // //             propertyCount,
// // //           totalBookings:
// // //             bookingCount,
// // //         },
// // //       });
// // //     } catch(error) {
// // //       console.error(
// // //         "HEALTH ERROR:",
// // //         error
// // //       );
// // //       res.status(500).json({
// // //         success:false,
// // //         message:
// // //           error instanceof Error
// // //           ? error.message
// // //           : "Database connection failed",
// // //       });
// // //     }
// // //   }
// // // );
// // // // =======================
// // // // PROFILE ROUTE
// // // // =======================
// // // app.get(
// // //   "/api/profile",
// // //   authMiddleware,
// // //   (req, res) => {
// // //     res.status(200).json({
// // //       success:true,
// // //       message:
// // //         "Protected route accessed",
// // //       user:
// // //         req.user,
// // //     });
// // //   }
// // // );
// // // // =======================
// // // // LANDLORD TEST ROUTE
// // // // =======================
// // // app.get(
// // //   "/api/landlord-test",
// // //   authMiddleware,
// // //   authorizeRole(
// // //     "LANDLORD"
// // //   ),
// // //   (req, res) => {
// // //     res.status(200).json({
// // //       success:true,
// // //       message:
// // //         "Welcome Landlord! Property management access granted",
// // //       user:
// // //         req.user,
// // //     });
// // //   }
// // // );
// // // // =======================
// // // // ADMIN TEST ROUTE
// // // // =======================
// // // app.get(
// // //   "/api/admin-test",
// // //   authMiddleware,
// // //   authorizeRole(
// // //     "ADMIN"
// // //   ),
// // //   (req, res) => {
// // //     res.status(200).json({
// // //       success:true,
// // //       message:
// // //         "Welcome Admin!",
// // //       user:
// // //         req.user,
// // //     });
// // //   }
// // // );
// // // // =======================
// // // // GLOBAL ERROR HANDLER
// // // // MUST BE LAST
// // // // =======================
// // // app.use(
// // //   errorHandler
// // // );
// // // export default app;
// // import express from "express";
// // import helmet from "helmet";
// // import cors from "cors";
// // import rateLimit from "express-rate-limit";
// // import prisma from "./lib/prisma";
// // import authRouter from "./modules/auth/auth.route";
// // import propertyRouter from "./modules/property/property.route";
// // import bookingRouter from "./modules/booking/booking.route";
// // import adminRouter from "./modules/admin/admin.route";
// // import {
// //   authMiddleware,
// // } from "./middlewares/auth.middleware";
// // import {
// //   authorizeRole,
// // } from "./middlewares/role.middleware";
// // import {
// //   errorHandler,
// // } from "./middlewares/error.middleware";
// // const app = express();
// // // =======================
// // // SECURITY MIDDLEWARE
// // // =======================
// // // Helmet Security Headers
// // app.use(
// //   helmet()
// // );
// // // CORS Configuration
// // app.use(
// //   cors({
// //     origin:
// //       "*",
// //     methods:[
// //       "GET",
// //       "POST",
// //       "PATCH",
// //       "PUT",
// //       "DELETE",
// //     ],
// //     allowedHeaders:[
// //       "Content-Type",
// //       "Authorization",
// //     ],
// //   })
// // );
// // // Rate Limiting
// // const limiter = rateLimit({
// //   windowMs:
// //     15 * 60 * 1000,
// //   max:
// //     100,
// //   message:{
// //     success:false,
// //     message:
// //       "Too many requests, please try again later",
// //   },
// // });
// // app.use(
// //   limiter
// // );
// // // Body Parser
// // app.use(
// //   express.json()
// // );
// // // Prisma Debug
// // console.log(
// //   "Prisma keys:",
// //   Object.keys(prisma)
// // );
// // // =======================
// // // AUTH ROUTES
// // // =======================
// // app.use(
// //   "/api/auth",
// //   authRouter
// // );
// // // =======================
// // // PROPERTY ROUTES
// // // =======================
// // app.use(
// //   "/api/properties",
// //   propertyRouter
// // );
// // // =======================
// // // BOOKING ROUTES
// // // =======================
// // app.use(
// //   "/api/bookings",
// //   bookingRouter
// // );
// // // =======================
// // // ADMIN ROUTES
// // // =======================
// // app.use(
// //   "/api/admin",
// //   adminRouter
// // );
// // // =======================
// // // HOME ROUTE
// // // =======================
// // app.get(
// //   "/",
// //   (req, res) => {
// //     res.send(
// //       "RentNest Backend Running 🚀"
// //     );
// //   }
// // );
// // // =======================
// // // DATABASE HEALTH CHECK
// // // =======================
// // app.get(
// //   "/api/health",
// //   async (req, res) => {
// //     try {
// //       const userCount =
// //         await prisma.user.count();
// //       const propertyCount =
// //         await prisma.property.count();
// //       const bookingCount =
// //         await prisma.booking.count();
// //       res.status(200).json({
// //         success:true,
// //         message:
// //           "RentNest API and database are healthy",
// //         data:{
// //           database:
// //             "connected",
// //           totalUsers:
// //             userCount,
// //           totalProperties:
// //             propertyCount,
// //           totalBookings:
// //             bookingCount,
// //         },
// //       });
// //     } catch(error) {
// //       console.error(
// //         "HEALTH ERROR:",
// //         error
// //       );
// //       res.status(500).json({
// //         success:false,
// //         message:
// //           error instanceof Error
// //           ? error.message
// //           : "Database connection failed",
// //       });
// //     }
// //   }
// // );
// // // =======================
// // // PROFILE ROUTE
// // // =======================
// // app.get(
// //   "/api/profile",
// //   authMiddleware,
// //   (req, res) => {
// //     res.status(200).json({
// //       success:true,
// //       message:
// //         "Protected route accessed",
// //       user:
// //         req.user,
// //     });
// //   }
// // );
// // // =======================
// // // LANDLORD TEST ROUTE
// // // =======================
// // app.get(
// //   "/api/landlord-test",
// //   authMiddleware,
// //   authorizeRole(
// //     "LANDLORD"
// //   ),
// //   (req, res) => {
// //     res.status(200).json({
// //       success:true,
// //       message:
// //         "Welcome Landlord! Property management access granted",
// //       user:
// //         req.user,
// //     });
// //   }
// // );
// // // =======================
// // // ADMIN TEST ROUTE
// // // =======================
// // app.get(
// //   "/api/admin-test",
// //   authMiddleware,
// //   authorizeRole(
// //     "ADMIN"
// //   ),
// //   (req, res) => {
// //     res.status(200).json({
// //       success:true,
// //       message:
// //         "Welcome Admin!",
// //       user:
// //         req.user,
// //     });
// //   }
// // );
// // // =======================
// // // GLOBAL ERROR HANDLER
// // // MUST BE LAST
// // // =======================
// // app.use(
// //   errorHandler
// // );
// // export default app;
// import express from "express";
// import helmet from "helmet";
// import cors from "cors";
// import rateLimit from "express-rate-limit";
// import swaggerUi from "swagger-ui-express";
// import prisma from "./lib/prisma";
// import {
//   swaggerSpec,
// } from "./config/swagger";
// import authRouter from "./modules/auth/auth.route";
// import propertyRouter from "./modules/property/property.route";
// import bookingRouter from "./modules/booking/booking.route";
// import adminRouter from "./modules/admin/admin.route";
// import {
//   authMiddleware,
// } from "./middlewares/auth.middleware";
// import {
//   authorizeRole,
// } from "./middlewares/role.middleware";
// import {
//   errorHandler,
// } from "./middlewares/error.middleware";
// const app = express();
// // =======================
// // SECURITY MIDDLEWARE
// // =======================
// app.use(
//   helmet()
// );
// app.use(
//   cors({
//     origin:"*",
//     methods:[
//       "GET",
//       "POST",
//       "PATCH",
//       "PUT",
//       "DELETE",
//     ],
//     allowedHeaders:[
//       "Content-Type",
//       "Authorization",
//     ],
//   })
// );
// const limiter = rateLimit({
//   windowMs:
//     15 * 60 * 1000,
//   max:
//     100,
//   message:{
//     success:false,
//     message:
//       "Too many requests, please try again later",
//   },
// });
// app.use(
//   limiter
// );
// app.use(
//   express.json()
// );
// // =======================
// // SWAGGER DOCUMENTATION
// // =======================
// app.use(
//   "/api-docs",
//   swaggerUi.serve,
//   swaggerUi.setup(
//     swaggerSpec
//   )
// );
// // Prisma Debug
// console.log(
//   "Prisma keys:",
//   Object.keys(prisma)
// );
// // =======================
// // AUTH ROUTES
// // =======================
// app.use(
//   "/api/auth",
//   authRouter
// );
// // =======================
// // PROPERTY ROUTES
// // =======================
// app.use(
//   "/api/properties",
//   propertyRouter
// );
// // =======================
// // BOOKING ROUTES
// // =======================
// app.use(
//   "/api/bookings",
//   bookingRouter
// );
// // =======================
// // ADMIN ROUTES
// // =======================
// app.use(
//   "/api/admin",
//   adminRouter
// );
// // =======================
// // HOME ROUTE
// // =======================
// app.get(
//   "/",
//   (req,res)=>{
//     res.send(
//       "RentNest Backend Running 🚀"
//     );
//   }
// );
// // =======================
// // DATABASE HEALTH CHECK
// // =======================
// app.get(
//   "/api/health",
//   async(req,res)=>{
//     try{
//       const userCount =
//         await prisma.user.count();
//       const propertyCount =
//         await prisma.property.count();
//       const bookingCount =
//         await prisma.booking.count();
//       res.status(200).json({
//         success:true,
//         message:
//           "RentNest API and database are healthy",
//         data:{
//           database:
//             "connected",
//           totalUsers:
//             userCount,
//           totalProperties:
//             propertyCount,
//           totalBookings:
//             bookingCount,
//         },
//       });
//     }catch(error){
//       res.status(500).json({
//         success:false,
//         message:
//           error instanceof Error
//           ? error.message
//           : "Database connection failed",
//       });
//     }
//   }
// );
// // =======================
// // PROFILE ROUTE
// // =======================
// app.get(
//   "/api/profile",
//   authMiddleware,
//   (req,res)=>{
//     res.status(200).json({
//       success:true,
//       message:
//         "Protected route accessed",
//       user:
//         req.user,
//     });
//   }
// );
// // =======================
// // LANDLORD TEST ROUTE
// // =======================
// app.get(
//   "/api/landlord-test",
//   authMiddleware,
//   authorizeRole(
//     "LANDLORD"
//   ),
//   (req,res)=>{
//     res.status(200).json({
//       success:true,
//       message:
//         "Welcome Landlord! Property management access granted",
//       user:
//         req.user,
//     });
//   }
// );
// // =======================
// // ADMIN TEST ROUTE
// // =======================
// app.get(
//   "/api/admin-test",
//   authMiddleware,
//   authorizeRole(
//     "ADMIN"
//   ),
//   (req,res)=>{
//     res.status(200).json({
//       success:true,
//       message:
//         "Welcome Admin!",
//       user:
//         req.user,
//     });
//   }
// );
// // =======================
// // GLOBAL ERROR HANDLER
// // MUST BE LAST
// // =======================
// app.use(
//   errorHandler
// );
// export default app;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const prisma_1 = __importDefault(require("./lib/prisma"));
const swagger_1 = require("./config/swagger");
const auth_route_1 = __importDefault(require("./modules/auth/auth.route"));
const property_route_1 = __importDefault(require("./modules/property/property.route"));
const booking_route_1 = __importDefault(require("./modules/booking/booking.route"));
const admin_route_1 = __importDefault(require("./modules/admin/admin.route"));
const auth_middleware_1 = require("./middlewares/auth.middleware");
const role_middleware_1 = require("./middlewares/role.middleware");
const error_middleware_1 = require("./middlewares/error.middleware");
const app = (0, express_1.default)();
// =======================
// SECURITY MIDDLEWARE
// =======================
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: "*",
    methods: [
        "GET",
        "POST",
        "PATCH",
        "PUT",
        "DELETE",
    ],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
    ],
}));
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        success: false,
        message: "Too many requests, please try again later",
    },
});
app.use(limiter);
app.use(express_1.default.json());
// =======================
// SWAGGER DOCUMENTATION
// =======================
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
// =======================
// ROUTES
// =======================
app.use("/api/auth", auth_route_1.default);
app.use("/api/properties", property_route_1.default);
app.use("/api/bookings", booking_route_1.default);
app.use("/api/admin", admin_route_1.default);
// =======================
// HOME ROUTE
// =======================
app.get("/", (req, res) => {
    res.send("RentNest Backend Running 🚀");
});
// =======================
// DATABASE HEALTH CHECK
// =======================
app.get("/api/health", async (req, res) => {
    try {
        const userCount = await prisma_1.default.user.count();
        const propertyCount = await prisma_1.default.property.count();
        const bookingCount = await prisma_1.default.booking.count();
        res.status(200).json({
            success: true,
            message: "RentNest API and database are healthy",
            data: {
                database: "connected",
                totalUsers: userCount,
                totalProperties: propertyCount,
                totalBookings: bookingCount,
            },
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Database connection failed",
        });
    }
});
// =======================
// PROFILE ROUTE
// =======================
app.get("/api/profile", auth_middleware_1.authMiddleware, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Protected route accessed",
        user: req.user,
    });
});
// =======================
// LANDLORD TEST
// =======================
app.get("/api/landlord-test", auth_middleware_1.authMiddleware, (0, role_middleware_1.authorizeRole)("LANDLORD"), (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome Landlord! Property management access granted",
        user: req.user,
    });
});
// =======================
// ADMIN TEST
// =======================
app.get("/api/admin-test", auth_middleware_1.authMiddleware, (0, role_middleware_1.authorizeRole)("ADMIN"), (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome Admin!",
        user: req.user,
    });
});
// =======================
// GLOBAL ERROR HANDLER
// LAST
// =======================
app.use(error_middleware_1.errorHandler);
exports.default = app;
