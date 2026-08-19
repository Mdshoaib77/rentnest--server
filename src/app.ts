// // // // // // // // // // import express from "express";


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









// // =======================
// // ROUTES
// // =======================


// app.use(

//   "/api/auth",

//   authRouter

// );



// app.use(

//   "/api/properties",

//   propertyRouter

// );



// app.use(

//   "/api/bookings",

//   bookingRouter

// );



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

//           "Database connection failed",


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
// // LANDLORD TEST
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
// // ADMIN TEST
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
// // LAST
// // =======================


// app.use(

//   errorHandler

// );








// export default app;

// import express from "express";


// import helmet from "helmet";

// import cors from "cors";

// import rateLimit from "express-rate-limit";

// import swaggerUi from "swagger-ui-express";


// import prisma from "./lib/prisma";


// import {
//   swaggerSpec,
// } from "./config/swagger";


// import {
//   env,
// } from "./config/env.validation";



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



// // Trust proxy for production


// app.set(

//   "trust proxy",

//   1

// );







// // Helmet Security Headers


// app.use(

//   helmet({

//     contentSecurityPolicy:

//       env.NODE_ENV === "production",


//   })

// );









// // CORS Configuration


// app.use(

//   cors({

//     origin:

//       env.FRONTEND_URL,


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









// // Rate Limiting


// const limiter = rateLimit({

//   windowMs:

//     15 * 60 * 1000,


//   max:

//     env.RATE_LIMIT_MAX,


//   message:{


//     success:false,


//     message:

//       "Too many requests, please try again later",

//   },

// });





// app.use(

//   limiter

// );









// // Body Parser


// app.use(

//   express.json({

//     limit:

//       "10kb",

//   })

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











// // =======================
// // ROUTES
// // =======================


// app.use(

//   "/api/auth",

//   authRouter

// );



// app.use(

//   "/api/properties",

//   propertyRouter

// );



// app.use(

//   "/api/bookings",

//   bookingRouter

// );



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

//           "Database connection failed",


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
// // LANDLORD TEST
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
// // ADMIN TEST
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
// // LAST
// // =======================


// app.use(

//   errorHandler

// );









// export default app;


// import express from "express";


// import helmet from "helmet";

// import cors from "cors";

// import rateLimit from "express-rate-limit";

// import swaggerUi from "swagger-ui-express";


// import prisma from "./lib/prisma";


// import {
//   swaggerSpec,
// } from "./config/swagger";


// import {
//   env,
// } from "./config/env.validation";



// import apiV1Router from "./routes/v1";



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



// // Trust proxy for production


// app.set(

//   "trust proxy",

//   1

// );









// // Helmet Security Headers


// app.use(

//   helmet({

//     contentSecurityPolicy:

//       env.NODE_ENV === "production",


//   })

// );











// // CORS Configuration


// app.use(

//   cors({


//     origin:

//       env.FRONTEND_URL,


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











// // Rate Limiting


// const limiter = rateLimit({


//   windowMs:

//     15 * 60 * 1000,



//   max:

//     env.RATE_LIMIT_MAX,



//   message:{



//     success:false,



//     message:

//       "Too many requests, please try again later",



//   },


// });






// app.use(

//   limiter

// );











// // Body Parser


// app.use(

//   express.json({

//     limit:

//       "10kb",

//   })

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












// // =======================
// // API VERSION 1 ROUTES
// // =======================


// app.use(

//   "/api/v1",

//   apiV1Router

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

//           "Database connection failed",



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
// // LANDLORD TEST
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
// // ADMIN TEST
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
// // LAST
// // =======================


// app.use(

//   errorHandler

// );









// export default app;


import express from "express";


import helmet from "helmet";

import cors from "cors";

import rateLimit from "express-rate-limit";

import swaggerUi from "swagger-ui-express";


import prisma from "./lib/prisma";


import {
  swaggerSpec,
} from "./config/swagger";


import {
  env,
} from "./config/env.validation";



import apiV1Router from "./routes/v1";



import {
  authMiddleware,
} from "./middlewares/auth.middleware";


import {
  authorizeRole,
} from "./middlewares/role.middleware";


import {
  errorHandler,
} from "./middlewares/error.middleware";


import {
  httpLogger,
} from "./middlewares/logger.middleware";









const app = express();












// =======================
// SECURITY MIDDLEWARE
// =======================



// Trust proxy for production


app.set(

  "trust proxy",

  1

);












// Helmet Security Headers


app.use(

  helmet({

    contentSecurityPolicy:

      env.NODE_ENV === "production",


  })

);












// HTTP REQUEST LOGGER


app.use(

  httpLogger

);













// CORS Configuration


app.use(

  cors({


    origin:

      env.FRONTEND_URL,


    methods:[

      "GET",

      "POST",

      "PATCH",

      "PUT",

      "DELETE",

    ],


    allowedHeaders:[

      "Content-Type",

      "Authorization",

    ],


  })

);












// Rate Limiting


const limiter = rateLimit({


  windowMs:

    15 * 60 * 1000,



  max:

    env.RATE_LIMIT_MAX,



  message:{



    success:false,



    message:

      "Too many requests, please try again later",



  },


});






app.use(

  limiter

);











// Body Parser


app.use(

  express.json({

    limit:

      "10kb",

  })

);
















// =======================
// SWAGGER DOCUMENTATION
// =======================


app.use(

  "/api-docs",

  swaggerUi.serve,

  swaggerUi.setup(

    swaggerSpec

  )

);
















// =======================
// API VERSION 1 ROUTES
// =======================


app.use(

  "/api/v1",

  apiV1Router

);
















// =======================
// HOME ROUTE
// =======================


app.get(

  "/",

  (req,res)=>{


    res.send(

      "RentNest Backend Running 🚀"

    );


  }

);
















// =======================
// DATABASE HEALTH CHECK
// =======================


app.get(

  "/api/health",

  async(req,res)=>{


    try{


      const userCount =

        await prisma.user.count();



      const propertyCount =

        await prisma.property.count();



      const bookingCount =

        await prisma.booking.count();






      res.status(200).json({



        success:true,



        message:

          "RentNest API and database are healthy",




        data:{



          database:

            "connected",




          totalUsers:

            userCount,




          totalProperties:

            propertyCount,




          totalBookings:

            bookingCount,



        },



      });








    }catch(error){



      res.status(500).json({



        success:false,



        message:

          "Database connection failed",



      });



    }



  }

);
















// =======================
// PROFILE ROUTE
// =======================


app.get(

  "/api/profile",

  authMiddleware,



  (req,res)=>{



    res.status(200).json({



      success:true,



      message:

        "Protected route accessed",




      user:

        req.user,



    });



  }

);
















// =======================
// LANDLORD TEST
// =======================


app.get(

  "/api/landlord-test",

  authMiddleware,



  authorizeRole(

    "LANDLORD"

  ),



  (req,res)=>{



    res.status(200).json({



      success:true,



      message:

        "Welcome Landlord! Property management access granted",




      user:

        req.user,



    });



  }

);
















// =======================
// ADMIN TEST
// =======================


app.get(

  "/api/admin-test",

  authMiddleware,



  authorizeRole(

    "ADMIN"

  ),



  (req,res)=>{



    res.status(200).json({



      success:true,



      message:

        "Welcome Admin!",




      user:

        req.user,



    });



  }

);
















// =======================
// GLOBAL ERROR HANDLER
// LAST
// =======================


app.use(

  errorHandler

);











export default app;