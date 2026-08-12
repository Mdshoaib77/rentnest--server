// // // // // // // // import express from "express";


// // // // // // // // const app = express();


// // // // // // // // app.use(express.json());


// // // // // // // // app.get("/", (req, res) => {
// // // // // // // //   res.send("RentNest Backend Running 🚀");
// // // // // // // // });


// // // // // // // // export default app;


// // // // // // // import express from "express";
// // // // // // // import prisma from "./lib/prisma";

// // // // // // // const app = express();

// // // // // // // app.use(express.json());

// // // // // // // app.get("/", (req, res) => {
// // // // // // //   res.send("RentNest Backend Running 🚀");
// // // // // // // });

// // // // // // // app.get("/api/health", async (req, res) => {
// // // // // // //   try {
// // // // // // //     const userCount = await prisma.user.count();

// // // // // // //     res.status(200).json({
// // // // // // //       success: true,
// // // // // // //       message: "RentNest API and database are healthy",
// // // // // // //       data: {
// // // // // // //         database: "connected",
// // // // // // //         totalUsers: userCount,
// // // // // // //       },
// // // // // // //     });
// // // // // // //   } catch (error) {
// // // // // // //     res.status(500).json({
// // // // // // //       success: false,
// // // // // // //       message: "Database connection failed",
// // // // // // //       errorDetails:
// // // // // // //         error instanceof Error ? error.message : "Unknown error occurred",
// // // // // // //     });
// // // // // // //   }
// // // // // // // });

// // // // // // // export default app;


// // // // // // import express from "express";
// // // // // // import prisma from "./lib/prisma";
// // // // // // import authRouter from "./modules/auth/auth.route";


// // // // // // const app = express();


// // // // // // app.use(express.json());


// // // // // // app.use(
// // // // // //   "/api/auth",
// // // // // //   authRouter
// // // // // // );


// // // // // // app.get("/", (req, res) => {
// // // // // //   res.send(
// // // // // //     "RentNest Backend Running 🚀"
// // // // // //   );
// // // // // // });


// // // // // // app.get("/api/health", async (req, res) => {

// // // // // //   try {

// // // // // //     const userCount =
// // // // // //       await prisma.user.count();


// // // // // //     res.status(200).json({
// // // // // //       success: true,
// // // // // //       message:
// // // // // //         "RentNest API and database are healthy",
// // // // // //       data: {
// // // // // //         database: "connected",
// // // // // //         totalUsers: userCount,
// // // // // //       },
// // // // // //     });


// // // // // //   } catch (error) {

// // // // // //     res.status(500).json({
// // // // // //       success: false,
// // // // // //       message:
// // // // // //         "Database connection failed",
// // // // // //     });

// // // // // //   }

// // // // // // });


// // // // // // export default app;


// // // // // import express from "express";

// // // // // import prisma from "./lib/prisma";

// // // // // import authRouter from "./modules/auth/auth.route";

// // // // // import {
// // // // //   authMiddleware,
// // // // // } from "./middlewares/auth.middleware";


// // // // // const app = express();


// // // // // app.use(express.json());



// // // // // app.use(
// // // // //   "/api/auth",
// // // // //   authRouter
// // // // // );



// // // // // app.get("/", (req, res) => {

// // // // //   res.send(
// // // // //     "RentNest Backend Running 🚀"
// // // // //   );

// // // // // });



// // // // // app.get(
// // // // //   "/api/profile",
// // // // //   authMiddleware,
// // // // //   async (req, res) => {


// // // // //     res.status(200).json({

// // // // //       success: true,

// // // // //       message:
// // // // //         "Protected route accessed",

// // // // //       user:
// // // // //         req.user,

// // // // //     });


// // // // //   }
// // // // // );



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



// // // // // export default app;


// // // // import express from "express";

// // // // import prisma from "./lib/prisma";

// // // // import authRouter from "./modules/auth/auth.route";

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
// // // // // HOME ROUTE
// // // // // =======================

// // // // app.get("/", (req, res) => {

// // // //   res.send(
// // // //     "RentNest Backend Running 🚀"
// // // //   );

// // // // });




// // // // // =======================
// // // // // DATABASE HEALTH CHECK
// // // // // =======================

// // // // app.get(
// // // //   "/api/health",
// // // //   async (req, res) => {


// // // //     try {


// // // //       const userCount =
// // // //         await prisma.user.count();



// // // //       res.status(200).json({

// // // //         success: true,

// // // //         message:
// // // //           "RentNest API and database are healthy",


// // // //         data: {

// // // //           database:
// // // //             "connected",

// // // //           totalUsers:
// // // //             userCount,

// // // //         },

// // // //       });



// // // //     } catch (error) {


// // // //       res.status(500).json({

// // // //         success: false,

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

// // // //       success: true,

// // // //       message:
// // // //         "Protected route accessed",


// // // //       user:
// // // //         req.user,


// // // //     });


// // // //   }

// // // // );






// // // // // =======================
// // // // // LANDLORD ONLY ROUTE
// // // // // =======================

// // // // app.get(

// // // //   "/api/landlord-test",

// // // //   authMiddleware,


// // // //   authorizeRole(
// // // //     "LANDLORD"
// // // //   ),


// // // //   (req, res) => {


// // // //     res.status(200).json({

// // // //       success: true,


// // // //       message:
// // // //         "Welcome Landlord! Property management access granted",


// // // //       user:
// // // //         req.user,


// // // //     });


// // // //   }

// // // // );






// // // // // =======================
// // // // // ADMIN ONLY ROUTE
// // // // // =======================

// // // // app.get(

// // // //   "/api/admin-test",

// // // //   authMiddleware,


// // // //   authorizeRole(
// // // //     "ADMIN"
// // // //   ),


// // // //   (req, res) => {


// // // //     res.status(200).json({

// // // //       success: true,


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
// // // // HOME ROUTE
// // // // =======================

// // // app.get("/", (req, res) => {

// // //   res.send(
// // //     "RentNest Backend Running 🚀"
// // //   );

// // // });






// // // // =======================
// // // // DATABASE HEALTH CHECK
// // // // =======================

// // // app.get(
// // //   "/api/health",
// // //   async (req, res) => {


// // //     try {


// // //       const userCount =
// // //         await prisma.user.count();



// // //       res.status(200).json({

// // //         success: true,


// // //         message:
// // //           "RentNest API and database are healthy",


// // //         data: {

// // //           database:
// // //             "connected",


// // //           totalUsers:
// // //             userCount,

// // //         },


// // //       });



// // //     } catch (error) {


// // //       res.status(500).json({

// // //         success: false,


// // //         message:
// // //           "Database connection failed",

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

// // //       success: true,


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

// // //       success: true,


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

// // //       success: true,


// // //       message:
// // //         "Welcome Admin!",


// // //       user:
// // //         req.user,


// // //     });


// // //   }

// // // );





// // // export default app;


// // import express from "express";


// // import prisma from "./lib/prisma";



// // import authRouter from "./modules/auth/auth.route";


// // import propertyRouter from "./modules/property/property.route";


// // import bookingRouter from "./modules/booking/booking.route";



// // import {
// //   authMiddleware,
// // } from "./middlewares/auth.middleware";



// // import {
// //   authorizeRole,
// // } from "./middlewares/role.middleware";





// // const app = express();





// // app.use(express.json());







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


// //         success: true,


// //         message:

// //           "RentNest API and database are healthy",




// //         data: {


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



// //       res.status(500).json({


// //         success:false,


// //         message:

// //           "Database connection failed",


// //       });



// //     }


// //   }

// // );









// // // =======================
// // // PROTECTED PROFILE ROUTE
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
// // // LANDLORD ONLY TEST ROUTE
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
// // // ADMIN ONLY TEST ROUTE
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








// // export default app;



// import express from "express";


// import prisma from "./lib/prisma";



// import authRouter from "./modules/auth/auth.route";

// import propertyRouter from "./modules/property/property.route";

// import bookingRouter from "./modules/booking/booking.route";



// import {
//   authMiddleware,
// } from "./middlewares/auth.middleware";


// import {
//   authorizeRole,
// } from "./middlewares/role.middleware";





// const app = express();





// app.use(express.json());






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
// // HOME ROUTE
// // =======================

// app.get(

//   "/",

//   (req, res) => {


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

//   async (req, res) => {


//     try {


//       const userCount =

//         await prisma.user.count();




//       const propertyCount =

//         await prisma.property.count();




//       const bookingCount =

//         await prisma.booking.count();






//       res.status(200).json({


//         success: true,


//         message:

//           "RentNest API and database are healthy",




//         data: {


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




//     } catch(error) {



//       console.error(

//         "HEALTH ERROR:",

//         error

//       );




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
// // PROTECTED PROFILE ROUTE
// // =======================

// app.get(

//   "/api/profile",


//   authMiddleware,



//   (req, res) => {



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
// // LANDLORD ONLY TEST ROUTE
// // =======================

// app.get(

//   "/api/landlord-test",



//   authMiddleware,



//   authorizeRole(

//     "LANDLORD"

//   ),



//   (req, res) => {



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
// // ADMIN ONLY TEST ROUTE
// // =======================

// app.get(

//   "/api/admin-test",



//   authMiddleware,



//   authorizeRole(

//     "ADMIN"

//   ),



//   (req, res) => {



//     res.status(200).json({



//       success:true,



//       message:

//         "Welcome Admin!",



//       user:

//         req.user,



//     });



//   }

// );








// export default app;


import express from "express";


import prisma from "./lib/prisma";



import authRouter from "./modules/auth/auth.route";

import propertyRouter from "./modules/property/property.route";

import bookingRouter from "./modules/booking/booking.route";



import {
  authMiddleware,
} from "./middlewares/auth.middleware";


import {
  authorizeRole,
} from "./middlewares/role.middleware";





const app = express();





app.use(express.json());




// Prisma Debug

console.log(
  "Prisma keys:",
  Object.keys(prisma)
);








// =======================
// AUTH ROUTES
// =======================

app.use(

  "/api/auth",

  authRouter

);








// =======================
// PROPERTY ROUTES
// =======================

app.use(

  "/api/properties",

  propertyRouter

);








// =======================
// BOOKING ROUTES
// =======================

app.use(

  "/api/bookings",

  bookingRouter

);









// =======================
// HOME ROUTE
// =======================

app.get(

  "/",

  (req, res) => {


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

  async (req, res) => {


    try {


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



        data: {


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





    } catch(error) {



      console.error(

        "HEALTH ERROR:",

        error

      );




      res.status(500).json({

        success:false,


        message:

          error instanceof Error

          ? error.message

          : "Database connection failed",


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



  (req, res) => {


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
// LANDLORD TEST ROUTE
// =======================

app.get(

  "/api/landlord-test",


  authMiddleware,


  authorizeRole(

    "LANDLORD"

  ),


  (req, res) => {


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
// ADMIN TEST ROUTE
// =======================

app.get(

  "/api/admin-test",


  authMiddleware,


  authorizeRole(

    "ADMIN"

  ),


  (req, res) => {


    res.status(200).json({


      success:true,


      message:

        "Welcome Admin!",



      user:

        req.user,


    });



  }

);






export default app;