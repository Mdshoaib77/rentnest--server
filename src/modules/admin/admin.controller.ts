// // // // // // // // import type {
// // // // // // // //   Request,
// // // // // // // //   Response,
// // // // // // // // } from "express";


// // // // // // // // import {
// // // // // // // //   getAdminStats,
// // // // // // // // } from "./admin.service";




// // // // // // // // // =======================
// // // // // // // // // GET ADMIN DASHBOARD STATS
// // // // // // // // // =======================

// // // // // // // // export const getAdminStatsController =

// // // // // // // // async (

// // // // // // // //   req: Request,

// // // // // // // //   res: Response

// // // // // // // // ) => {


// // // // // // // //   try {


// // // // // // // //     const stats =

// // // // // // // //       await getAdminStats();





// // // // // // // //     res.status(200).json({


// // // // // // // //       success: true,


// // // // // // // //       message:

// // // // // // // //         "Admin dashboard stats fetched successfully",



// // // // // // // //       data:

// // // // // // // //         stats,


// // // // // // // //     });





// // // // // // // //   } catch (error) {


// // // // // // // //     res.status(500).json({


// // // // // // // //       success: false,


// // // // // // // //       message:

// // // // // // // //         error instanceof Error

// // // // // // // //         ? error.message

// // // // // // // //         : "Failed to fetch admin stats",


// // // // // // // //     });



// // // // // // // //   }


// // // // // // // // };


// // // // // // // import type {
// // // // // // //   Request,
// // // // // // //   Response,
// // // // // // // } from "express";


// // // // // // // import {
// // // // // // //   getAdminStats,
// // // // // // //   getAllUsers,
// // // // // // // } from "./admin.service";




// // // // // // // // =======================
// // // // // // // // GET ADMIN DASHBOARD STATS
// // // // // // // // =======================

// // // // // // // export const getAdminStatsController =

// // // // // // // async (

// // // // // // //   req: Request,

// // // // // // //   res: Response

// // // // // // // ) => {


// // // // // // //   try {


// // // // // // //     const stats =

// // // // // // //       await getAdminStats();





// // // // // // //     res.status(200).json({


// // // // // // //       success: true,


// // // // // // //       message:

// // // // // // //         "Admin dashboard stats fetched successfully",



// // // // // // //       data:

// // // // // // //         stats,


// // // // // // //     });





// // // // // // //   } catch (error) {


// // // // // // //     res.status(500).json({


// // // // // // //       success: false,


// // // // // // //       message:

// // // // // // //         error instanceof Error

// // // // // // //         ? error.message

// // // // // // //         : "Failed to fetch admin stats",


// // // // // // //     });



// // // // // // //   }


// // // // // // // };









// // // // // // // // =======================
// // // // // // // // GET ALL USERS
// // // // // // // // ADMIN ONLY
// // // // // // // // =======================

// // // // // // // export const getAllUsersController =

// // // // // // // async (

// // // // // // //   req: Request,

// // // // // // //   res: Response

// // // // // // // ) => {


// // // // // // //   try {


// // // // // // //     const users =

// // // // // // //       await getAllUsers();





// // // // // // //     res.status(200).json({


// // // // // // //       success: true,


// // // // // // //       message:

// // // // // // //         "Users fetched successfully",



// // // // // // //       data:

// // // // // // //         users,


// // // // // // //     });





// // // // // // //   } catch (error) {


// // // // // // //     res.status(500).json({


// // // // // // //       success: false,


// // // // // // //       message:

// // // // // // //         error instanceof Error

// // // // // // //         ? error.message

// // // // // // //         : "Failed to fetch users",


// // // // // // //     });



// // // // // // //   }


// // // // // // // };

// // // // // // import type {
// // // // // //   Request,
// // // // // //   Response,
// // // // // // } from "express";


// // // // // // import {
// // // // // //   getAdminStats,
// // // // // //   getAllUsers,
// // // // // //   getAllProperties,
// // // // // // } from "./admin.service";




// // // // // // // =======================
// // // // // // // GET ADMIN DASHBOARD STATS
// // // // // // // =======================

// // // // // // export const getAdminStatsController =

// // // // // // async (

// // // // // //   req: Request,

// // // // // //   res: Response

// // // // // // ) => {


// // // // // //   try {


// // // // // //     const stats =

// // // // // //       await getAdminStats();





// // // // // //     res.status(200).json({


// // // // // //       success: true,


// // // // // //       message:

// // // // // //         "Admin dashboard stats fetched successfully",



// // // // // //       data:

// // // // // //         stats,


// // // // // //     });





// // // // // //   } catch (error) {


// // // // // //     res.status(500).json({


// // // // // //       success: false,


// // // // // //       message:

// // // // // //         error instanceof Error

// // // // // //         ? error.message

// // // // // //         : "Failed to fetch admin stats",


// // // // // //     });



// // // // // //   }


// // // // // // };









// // // // // // // =======================
// // // // // // // GET ALL USERS
// // // // // // // ADMIN ONLY
// // // // // // // =======================

// // // // // // export const getAllUsersController =

// // // // // // async (

// // // // // //   req: Request,

// // // // // //   res: Response

// // // // // // ) => {


// // // // // //   try {


// // // // // //     const users =

// // // // // //       await getAllUsers();





// // // // // //     res.status(200).json({


// // // // // //       success: true,


// // // // // //       message:

// // // // // //         "Users fetched successfully",



// // // // // //       data:

// // // // // //         users,


// // // // // //     });





// // // // // //   } catch (error) {


// // // // // //     res.status(500).json({


// // // // // //       success: false,


// // // // // //       message:

// // // // // //         error instanceof Error

// // // // // //         ? error.message

// // // // // //         : "Failed to fetch users",


// // // // // //     });



// // // // // //   }


// // // // // // };









// // // // // // // =======================
// // // // // // // GET ALL PROPERTIES
// // // // // // // ADMIN ONLY
// // // // // // // =======================

// // // // // // export const getAllPropertiesController =

// // // // // // async (

// // // // // //   req: Request,

// // // // // //   res: Response

// // // // // // ) => {


// // // // // //   try {


// // // // // //     const properties =

// // // // // //       await getAllProperties();





// // // // // //     res.status(200).json({


// // // // // //       success: true,


// // // // // //       message:

// // // // // //         "Properties fetched successfully",



// // // // // //       data:

// // // // // //         properties,


// // // // // //     });





// // // // // //   } catch (error) {


// // // // // //     res.status(500).json({


// // // // // //       success: false,


// // // // // //       message:

// // // // // //         error instanceof Error

// // // // // //         ? error.message

// // // // // //         : "Failed to fetch properties",


// // // // // //     });



// // // // // //   }


// // // // // // };


// // // // // import type {
// // // // //   Request,
// // // // //   Response,
// // // // // } from "express";


// // // // // import {
// // // // //   getAdminStats,
// // // // //   getAllUsers,
// // // // //   getAllProperties,
// // // // //   getAllBookings,
// // // // // } from "./admin.service";




// // // // // // =======================
// // // // // // GET ADMIN DASHBOARD STATS
// // // // // // =======================

// // // // // export const getAdminStatsController =

// // // // // async (

// // // // //   req: Request,

// // // // //   res: Response

// // // // // ) => {


// // // // //   try {


// // // // //     const stats =

// // // // //       await getAdminStats();





// // // // //     res.status(200).json({


// // // // //       success: true,


// // // // //       message:

// // // // //         "Admin dashboard stats fetched successfully",



// // // // //       data:

// // // // //         stats,


// // // // //     });





// // // // //   } catch (error) {


// // // // //     res.status(500).json({


// // // // //       success: false,


// // // // //       message:

// // // // //         error instanceof Error

// // // // //         ? error.message

// // // // //         : "Failed to fetch admin stats",


// // // // //     });



// // // // //   }


// // // // // };









// // // // // // =======================
// // // // // // GET ALL USERS
// // // // // // ADMIN ONLY
// // // // // // =======================

// // // // // export const getAllUsersController =

// // // // // async (

// // // // //   req: Request,

// // // // //   res: Response

// // // // // ) => {


// // // // //   try {


// // // // //     const users =

// // // // //       await getAllUsers();





// // // // //     res.status(200).json({


// // // // //       success: true,


// // // // //       message:

// // // // //         "Users fetched successfully",



// // // // //       data:

// // // // //         users,


// // // // //     });





// // // // //   } catch (error) {


// // // // //     res.status(500).json({


// // // // //       success: false,


// // // // //       message:

// // // // //         error instanceof Error

// // // // //         ? error.message

// // // // //         : "Failed to fetch users",


// // // // //     });



// // // // //   }


// // // // // };









// // // // // // =======================
// // // // // // GET ALL PROPERTIES
// // // // // // ADMIN ONLY
// // // // // // =======================

// // // // // export const getAllPropertiesController =

// // // // // async (

// // // // //   req: Request,

// // // // //   res: Response

// // // // // ) => {


// // // // //   try {


// // // // //     const properties =

// // // // //       await getAllProperties();





// // // // //     res.status(200).json({


// // // // //       success: true,


// // // // //       message:

// // // // //         "Properties fetched successfully",



// // // // //       data:

// // // // //         properties,


// // // // //     });





// // // // //   } catch (error) {


// // // // //     res.status(500).json({


// // // // //       success: false,


// // // // //       message:

// // // // //         error instanceof Error

// // // // //         ? error.message

// // // // //         : "Failed to fetch properties",


// // // // //     });



// // // // //   }


// // // // // };









// // // // // // =======================
// // // // // // GET ALL BOOKINGS
// // // // // // ADMIN ONLY
// // // // // // =======================

// // // // // export const getAllBookingsController =

// // // // // async (

// // // // //   req: Request,

// // // // //   res: Response

// // // // // ) => {


// // // // //   try {


// // // // //     const bookings =

// // // // //       await getAllBookings();





// // // // //     res.status(200).json({


// // // // //       success: true,


// // // // //       message:

// // // // //         "Bookings fetched successfully",



// // // // //       data:

// // // // //         bookings,


// // // // //     });





// // // // //   } catch (error) {


// // // // //     res.status(500).json({


// // // // //       success: false,


// // // // //       message:

// // // // //         error instanceof Error

// // // // //         ? error.message

// // // // //         : "Failed to fetch bookings",


// // // // //     });



// // // // //   }


// // // // // };

// // // // import type {
// // // //   Request,
// // // //   Response,
// // // // } from "express";


// // // // import {
// // // //   getAdminStats,
// // // //   getAllUsers,
// // // //   getAllProperties,
// // // //   getAllBookings,
// // // //   deleteUser,
// // // // } from "./admin.service";




// // // // // =======================
// // // // // GET ADMIN DASHBOARD STATS
// // // // // =======================

// // // // export const getAdminStatsController =

// // // // async (

// // // //   req: Request,

// // // //   res: Response

// // // // ) => {


// // // //   try {


// // // //     const stats =

// // // //       await getAdminStats();





// // // //     res.status(200).json({


// // // //       success: true,


// // // //       message:

// // // //         "Admin dashboard stats fetched successfully",



// // // //       data:

// // // //         stats,


// // // //     });





// // // //   } catch (error) {


// // // //     res.status(500).json({


// // // //       success: false,


// // // //       message:

// // // //         error instanceof Error

// // // //         ? error.message

// // // //         : "Failed to fetch admin stats",


// // // //     });



// // // //   }


// // // // };









// // // // // =======================
// // // // // GET ALL USERS
// // // // // ADMIN ONLY
// // // // // =======================

// // // // export const getAllUsersController =

// // // // async (

// // // //   req: Request,

// // // //   res: Response

// // // // ) => {


// // // //   try {


// // // //     const users =

// // // //       await getAllUsers();





// // // //     res.status(200).json({


// // // //       success: true,


// // // //       message:

// // // //         "Users fetched successfully",



// // // //       data:

// // // //         users,


// // // //     });





// // // //   } catch (error) {


// // // //     res.status(500).json({


// // // //       success: false,


// // // //       message:

// // // //         error instanceof Error

// // // //         ? error.message

// // // //         : "Failed to fetch users",


// // // //     });



// // // //   }


// // // // };









// // // // // =======================
// // // // // GET ALL PROPERTIES
// // // // // ADMIN ONLY
// // // // // =======================

// // // // export const getAllPropertiesController =

// // // // async (

// // // //   req: Request,

// // // //   res: Response

// // // // ) => {


// // // //   try {


// // // //     const properties =

// // // //       await getAllProperties();





// // // //     res.status(200).json({


// // // //       success: true,


// // // //       message:

// // // //         "Properties fetched successfully",



// // // //       data:

// // // //         properties,


// // // //     });





// // // //   } catch (error) {


// // // //     res.status(500).json({


// // // //       success: false,


// // // //       message:

// // // //         error instanceof Error

// // // //         ? error.message

// // // //         : "Failed to fetch properties",


// // // //     });



// // // //   }


// // // // };









// // // // // =======================
// // // // // GET ALL BOOKINGS
// // // // // ADMIN ONLY
// // // // // =======================

// // // // export const getAllBookingsController =

// // // // async (

// // // //   req: Request,

// // // //   res: Response

// // // // ) => {


// // // //   try {


// // // //     const bookings =

// // // //       await getAllBookings();





// // // //     res.status(200).json({


// // // //       success: true,


// // // //       message:

// // // //         "Bookings fetched successfully",



// // // //       data:

// // // //         bookings,


// // // //     });





// // // //   } catch (error) {


// // // //     res.status(500).json({


// // // //       success: false,


// // // //       message:

// // // //         error instanceof Error

// // // //         ? error.message

// // // //         : "Failed to fetch bookings",


// // // //     });



// // // //   }


// // // // };









// // // // // =======================
// // // // // DELETE USER
// // // // // ADMIN ONLY
// // // // // =======================

// // // // export const deleteUserController =

// // // // async (

// // // //   req: Request,

// // // //   res: Response

// // // // ) => {


// // // //   try {


// // // //     const userId =

// // // //       req.params.id;




// // // //     const adminId =

// // // //       req.user?.id;





// // // //     if (!adminId) {


// // // //       return res.status(401).json({


// // // //         success: false,


// // // //         message:

// // // //           "Unauthorized user",


// // // //       });


// // // //     }





// // // //     const deletedUser =

// // // //       await deleteUser(

// // // //         userId,

// // // //         adminId

// // // //       );





// // // //     res.status(200).json({


// // // //       success: true,


// // // //       message:

// // // //         "User deleted successfully",



// // // //       data:

// // // //         deletedUser,


// // // //     });





// // // //   } catch (error) {


// // // //     res.status(500).json({


// // // //       success: false,


// // // //       message:

// // // //         error instanceof Error

// // // //         ? error.message

// // // //         : "Failed to delete user",


// // // //     });



// // // //   }


// // // // };

// // // import type {
// // //   Request,
// // //   Response,
// // // } from "express";


// // // import {
// // //   getAdminStats,
// // //   getAllUsers,
// // //   getAllProperties,
// // //   getAllBookings,
// // //   deleteUser,
// // //   deleteProperty,
// // // } from "./admin.service";




// // // // =======================
// // // // GET ADMIN DASHBOARD STATS
// // // // =======================

// // // export const getAdminStatsController =

// // // async (

// // //   req: Request,

// // //   res: Response

// // // ) => {


// // //   try {


// // //     const stats =

// // //       await getAdminStats();





// // //     res.status(200).json({


// // //       success: true,


// // //       message:

// // //         "Admin dashboard stats fetched successfully",



// // //       data:

// // //         stats,


// // //     });





// // //   } catch (error) {


// // //     res.status(500).json({


// // //       success: false,


// // //       message:

// // //         error instanceof Error

// // //         ? error.message

// // //         : "Failed to fetch admin stats",


// // //     });



// // //   }


// // // };









// // // // =======================
// // // // GET ALL USERS
// // // // ADMIN ONLY
// // // // =======================

// // // export const getAllUsersController =

// // // async (

// // //   req: Request,

// // //   res: Response

// // // ) => {


// // //   try {


// // //     const users =

// // //       await getAllUsers();





// // //     res.status(200).json({


// // //       success: true,


// // //       message:

// // //         "Users fetched successfully",



// // //       data:

// // //         users,


// // //     });





// // //   } catch (error) {


// // //     res.status(500).json({


// // //       success: false,


// // //       message:

// // //         error instanceof Error

// // //         ? error.message

// // //         : "Failed to fetch users",


// // //     });



// // //   }


// // // };









// // // // =======================
// // // // GET ALL PROPERTIES
// // // // ADMIN ONLY
// // // // =======================

// // // export const getAllPropertiesController =

// // // async (

// // //   req: Request,

// // //   res: Response

// // // ) => {


// // //   try {


// // //     const properties =

// // //       await getAllProperties();





// // //     res.status(200).json({


// // //       success: true,


// // //       message:

// // //         "Properties fetched successfully",



// // //       data:

// // //         properties,


// // //     });





// // //   } catch (error) {


// // //     res.status(500).json({


// // //       success: false,


// // //       message:

// // //         error instanceof Error

// // //         ? error.message

// // //         : "Failed to fetch properties",


// // //     });



// // //   }


// // // };









// // // // =======================
// // // // GET ALL BOOKINGS
// // // // ADMIN ONLY
// // // // =======================

// // // export const getAllBookingsController =

// // // async (

// // //   req: Request,

// // //   res: Response

// // // ) => {


// // //   try {


// // //     const bookings =

// // //       await getAllBookings();





// // //     res.status(200).json({


// // //       success: true,


// // //       message:

// // //         "Bookings fetched successfully",



// // //       data:

// // //         bookings,


// // //     });





// // //   } catch (error) {


// // //     res.status(500).json({


// // //       success: false,


// // //       message:

// // //         error instanceof Error

// // //         ? error.message

// // //         : "Failed to fetch bookings",


// // //     });



// // //   }


// // // };









// // // // =======================
// // // // DELETE USER
// // // // ADMIN ONLY
// // // // =======================

// // // export const deleteUserController =

// // // async (

// // //   req: Request,

// // //   res: Response

// // // ) => {


// // //   try {


// // //     const userId =

// // //       req.params.id;




// // //     const adminId =

// // //       req.user?.id;





// // //     if (!adminId) {


// // //       return res.status(401).json({


// // //         success: false,


// // //         message:

// // //           "Unauthorized user",


// // //       });


// // //     }





// // //     const deletedUser =

// // //       await deleteUser(

// // //         userId,

// // //         adminId

// // //       );





// // //     res.status(200).json({


// // //       success: true,


// // //       message:

// // //         "User deleted successfully",



// // //       data:

// // //         deletedUser,


// // //     });





// // //   } catch (error) {


// // //     res.status(500).json({


// // //       success: false,


// // //       message:

// // //         error instanceof Error

// // //         ? error.message

// // //         : "Failed to delete user",


// // //     });



// // //   }


// // // };









// // // // =======================
// // // // DELETE PROPERTY
// // // // ADMIN ONLY
// // // // =======================

// // // export const deletePropertyController =

// // // async (

// // //   req: Request,

// // //   res: Response

// // // ) => {


// // //   try {


// // //     const propertyId =

// // //       req.params.id;





// // //     const deletedProperty =

// // //       await deleteProperty(

// // //         propertyId

// // //       );





// // //     res.status(200).json({


// // //       success: true,


// // //       message:

// // //         "Property deleted successfully",



// // //       data:

// // //         deletedProperty,


// // //     });





// // //   } catch (error) {


// // //     res.status(500).json({


// // //       success: false,


// // //       message:

// // //         error instanceof Error

// // //         ? error.message

// // //         : "Failed to delete property",


// // //     });



// // //   }


// // // };


// // import type {
// //   Request,
// //   Response,
// // } from "express";


// // import {
// //   getAdminStats,
// //   getAllUsers,
// //   getAllProperties,
// //   getAllBookings,
// //   deleteUser,
// //   deleteProperty,
// //   updateBookingStatus,
// // } from "./admin.service";




// // // =======================
// // // GET ADMIN DASHBOARD STATS
// // // =======================

// // export const getAdminStatsController =

// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const stats =

// //       await getAdminStats();





// //     res.status(200).json({


// //       success: true,


// //       message:

// //         "Admin dashboard stats fetched successfully",



// //       data:

// //         stats,


// //     });





// //   } catch (error) {


// //     res.status(500).json({


// //       success: false,


// //       message:

// //         error instanceof Error

// //         ? error.message

// //         : "Failed to fetch admin stats",


// //     });



// //   }


// // };









// // // =======================
// // // GET ALL USERS
// // // ADMIN ONLY
// // // =======================

// // export const getAllUsersController =

// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const users =

// //       await getAllUsers();





// //     res.status(200).json({


// //       success: true,


// //       message:

// //         "Users fetched successfully",



// //       data:

// //         users,


// //     });





// //   } catch (error) {


// //     res.status(500).json({


// //       success: false,


// //       message:

// //         error instanceof Error

// //         ? error.message

// //         : "Failed to fetch users",


// //     });



// //   }


// // };









// // // =======================
// // // GET ALL PROPERTIES
// // // ADMIN ONLY
// // // =======================

// // export const getAllPropertiesController =

// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const properties =

// //       await getAllProperties();





// //     res.status(200).json({


// //       success: true,


// //       message:

// //         "Properties fetched successfully",



// //       data:

// //         properties,


// //     });





// //   } catch (error) {


// //     res.status(500).json({


// //       success: false,


// //       message:

// //         error instanceof Error

// //         ? error.message

// //         : "Failed to fetch properties",


// //     });



// //   }


// // };









// // // =======================
// // // GET ALL BOOKINGS
// // // ADMIN ONLY
// // // =======================

// // export const getAllBookingsController =

// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const bookings =

// //       await getAllBookings();





// //     res.status(200).json({


// //       success: true,


// //       message:

// //         "Bookings fetched successfully",



// //       data:

// //         bookings,


// //     });





// //   } catch (error) {


// //     res.status(500).json({


// //       success: false,


// //       message:

// //         error instanceof Error

// //         ? error.message

// //         : "Failed to fetch bookings",


// //     });



// //   }


// // };









// // // =======================
// // // DELETE USER
// // // ADMIN ONLY
// // // =======================

// // export const deleteUserController =

// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const userId =

// //       req.params.id;




// //     const adminId =

// //       req.user?.id;





// //     if (!adminId) {


// //       return res.status(401).json({


// //         success: false,


// //         message:

// //           "Unauthorized user",


// //       });


// //     }





// //     const deletedUser =

// //       await deleteUser(

// //         userId,

// //         adminId

// //       );





// //     res.status(200).json({


// //       success: true,


// //       message:

// //         "User deleted successfully",



// //       data:

// //         deletedUser,


// //     });





// //   } catch (error) {


// //     res.status(500).json({


// //       success: false,


// //       message:

// //         error instanceof Error

// //         ? error.message

// //         : "Failed to delete user",


// //     });



// //   }


// // };









// // // =======================
// // // DELETE PROPERTY
// // // ADMIN ONLY
// // // =======================

// // export const deletePropertyController =

// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const propertyId =

// //       req.params.id;





// //     const deletedProperty =

// //       await deleteProperty(

// //         propertyId

// //       );





// //     res.status(200).json({


// //       success: true,


// //       message:

// //         "Property deleted successfully",



// //       data:

// //         deletedProperty,


// //     });





// //   } catch (error) {


// //     res.status(500).json({


// //       success: false,


// //       message:

// //         error instanceof Error

// //         ? error.message

// //         : "Failed to delete property",


// //     });



// //   }


// // };









// // // =======================
// // // UPDATE BOOKING STATUS
// // // ADMIN ONLY
// // // =======================

// // export const updateBookingStatusController =

// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const bookingId =

// //       req.params.id;




// //     const {

// //       status,

// //     } = req.body;





// //     if (!status) {


// //       return res.status(400).json({


// //         success: false,


// //         message:

// //           "Status is required",


// //       });


// //     }





// //     const updatedBooking =

// //       await updateBookingStatus(

// //         bookingId,

// //         status

// //       );





// //     res.status(200).json({


// //       success: true,


// //       message:

// //         "Booking status updated successfully",



// //       data:

// //         updatedBooking,


// //     });





// //   } catch (error) {


// //     res.status(500).json({


// //       success: false,


// //       message:

// //         error instanceof Error

// //         ? error.message

// //         : "Failed to update booking status",


// //     });



// //   }


// // };

// // import type {
// //   Request,
// //   Response,
// // } from "express";


// // import {
// //   getAdminStats,
// //   getAllUsers,
// //   getAllProperties,
// //   getAllBookings,
// //   deleteUser,
// //   deleteProperty,
// //   updateBookingStatus,
// // } from "./admin.service";




// // // =======================
// // // GET ADMIN DASHBOARD STATS
// // // =======================

// // export const getAdminStatsController =

// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const stats =

// //       await getAdminStats();





// //     res.status(200).json({


// //       success: true,


// //       message:

// //         "Admin dashboard stats fetched successfully",



// //       data:

// //         stats,


// //     });





// //   } catch (error) {


// //     res.status(500).json({


// //       success: false,


// //       message:

// //         error instanceof Error

// //         ? error.message

// //         : "Failed to fetch admin stats",


// //     });



// //   }


// // };











// // // =======================
// // // GET ALL USERS
// // // ADMIN ONLY
// // // =======================

// // export const getAllUsersController =

// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const users =

// //       await getAllUsers();





// //     res.status(200).json({


// //       success: true,


// //       message:

// //         "Users fetched successfully",



// //       data:

// //         users,


// //     });





// //   } catch (error) {


// //     res.status(500).json({


// //       success: false,


// //       message:

// //         error instanceof Error

// //         ? error.message

// //         : "Failed to fetch users",


// //     });



// //   }


// // };











// // // =======================
// // // GET ALL PROPERTIES
// // // ADMIN ONLY
// // // =======================

// // export const getAllPropertiesController =

// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const properties =

// //       await getAllProperties();





// //     res.status(200).json({


// //       success: true,


// //       message:

// //         "Properties fetched successfully",



// //       data:

// //         properties,


// //     });





// //   } catch (error) {


// //     res.status(500).json({


// //       success: false,


// //       message:

// //         error instanceof Error

// //         ? error.message

// //         : "Failed to fetch properties",


// //     });



// //   }


// // };











// // // =======================
// // // GET ALL BOOKINGS
// // // ADMIN ONLY
// // // =======================

// // export const getAllBookingsController =

// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const bookings =

// //       await getAllBookings();





// //     res.status(200).json({


// //       success: true,


// //       message:

// //         "Bookings fetched successfully",



// //       data:

// //         bookings,


// //     });





// //   } catch (error) {


// //     res.status(500).json({


// //       success: false,


// //       message:

// //         error instanceof Error

// //         ? error.message

// //         : "Failed to fetch bookings",


// //     });



// //   }


// // };











// // // =======================
// // // DELETE USER
// // // ADMIN ONLY
// // // =======================

// // export const deleteUserController =

// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const userId =

// //       req.params.id as string;





// //     const adminId =

// //       req.user?.id;





// //     if (!adminId) {


// //       return res.status(401).json({


// //         success: false,


// //         message:

// //           "Unauthorized user",


// //       });


// //     }







// //     const deletedUser =

// //       await deleteUser(

// //         userId,

// //         adminId

// //       );





// //     res.status(200).json({


// //       success: true,


// //       message:

// //         "User deleted successfully",



// //       data:

// //         deletedUser,


// //     });





// //   } catch (error) {


// //     res.status(500).json({


// //       success: false,


// //       message:

// //         error instanceof Error

// //         ? error.message

// //         : "Failed to delete user",


// //     });



// //   }


// // };











// // // =======================
// // // DELETE PROPERTY
// // // ADMIN ONLY
// // // =======================

// // export const deletePropertyController =

// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const propertyId =

// //       req.params.id as string;





// //     const deletedProperty =

// //       await deleteProperty(

// //         propertyId

// //       );





// //     res.status(200).json({


// //       success: true,


// //       message:

// //         "Property deleted successfully",



// //       data:

// //         deletedProperty,


// //     });





// //   } catch (error) {


// //     res.status(500).json({


// //       success: false,


// //       message:

// //         error instanceof Error

// //         ? error.message

// //         : "Failed to delete property",


// //     });



// //   }


// // };











// // // =======================
// // // UPDATE BOOKING STATUS
// // // ADMIN ONLY
// // // =======================

// // export const updateBookingStatusController =

// // async (

// //   req: Request,

// //   res: Response

// // ) => {


// //   try {


// //     const bookingId =

// //       req.params.id as string;





// //     const {

// //       status,

// //     } = req.body;





// //     if (!status) {


// //       return res.status(400).json({


// //         success: false,


// //         message:

// //           "Status is required",


// //       });


// //     }







// //     const updatedBooking =

// //       await updateBookingStatus(

// //         bookingId,

// //         status

// //       );





// //     res.status(200).json({


// //       success: true,


// //       message:

// //         "Booking status updated successfully",



// //       data:

// //         updatedBooking,


// //     });





// //   } catch (error) {


// //     res.status(500).json({


// //       success: false,


// //       message:

// //         error instanceof Error

// //         ? error.message

// //         : "Failed to update booking status",


// //     });



// //   }


// // };


// import type {
//   Request,
//   Response,
// } from "express";


// import {
//   getAdminStats,
//   getAllUsers,
//   getAllProperties,
//   getAllBookings,
//   deleteUser,
//   deleteProperty,
//   updateBookingStatus,
// } from "./admin.service";


// import {
//   sendResponse,
//   sendErrorResponse,
// } from "../../utils/apiResponse";




// // =======================
// // GET ADMIN DASHBOARD STATS
// // =======================

// export const getAdminStatsController =

// async (

//   req: Request,

//   res: Response

// ) => {


//   try {


//     const stats =

//       await getAdminStats();





//     return sendResponse(

//       res,

//       200,

//       "Admin dashboard stats fetched successfully",

//       stats

//     );





//   } catch (error) {


//     return sendErrorResponse(

//       res,

//       500,

//       error instanceof Error

//       ? error.message

//       : "Failed to fetch admin stats"

//     );



//   }


// };











// // =======================
// // GET ALL USERS
// // ADMIN ONLY
// // =======================

// export const getAllUsersController =

// async (

//   req: Request,

//   res: Response

// ) => {


//   try {


//     const users =

//       await getAllUsers();





//     return sendResponse(

//       res,

//       200,

//       "Users fetched successfully",

//       users

//     );





//   } catch (error) {


//     return sendErrorResponse(

//       res,

//       500,

//       error instanceof Error

//       ? error.message

//       : "Failed to fetch users"

//     );



//   }


// };











// // =======================
// // GET ALL PROPERTIES
// // ADMIN ONLY
// // =======================

// export const getAllPropertiesController =

// async (

//   req: Request,

//   res: Response

// ) => {


//   try {


//     const properties =

//       await getAllProperties();





//     return sendResponse(

//       res,

//       200,

//       "Properties fetched successfully",

//       properties

//     );





//   } catch (error) {


//     return sendErrorResponse(

//       res,

//       500,

//       error instanceof Error

//       ? error.message

//       : "Failed to fetch properties"

//     );



//   }


// };











// // =======================
// // GET ALL BOOKINGS
// // ADMIN ONLY
// // =======================

// export const getAllBookingsController =

// async (

//   req: Request,

//   res: Response

// ) => {


//   try {


//     const bookings =

//       await getAllBookings();





//     return sendResponse(

//       res,

//       200,

//       "Bookings fetched successfully",

//       bookings

//     );





//   } catch (error) {


//     return sendErrorResponse(

//       res,

//       500,

//       error instanceof Error

//       ? error.message

//       : "Failed to fetch bookings"

//     );



//   }


// };











// // =======================
// // DELETE USER
// // ADMIN ONLY
// // =======================

// export const deleteUserController =

// async (

//   req: Request,

//   res: Response

// ) => {


//   try {


//     const userId =

//       req.params.id as string;





//     const adminId =

//       req.user?.id;





//     if (!adminId) {


//       return sendErrorResponse(

//         res,

//         401,

//         "Unauthorized user"

//       );


//     }







//     const deletedUser =

//       await deleteUser(

//         userId,

//         adminId

//       );





//     return sendResponse(

//       res,

//       200,

//       "User deleted successfully",

//       deletedUser

//     );





//   } catch (error) {


//     return sendErrorResponse(

//       res,

//       500,

//       error instanceof Error

//       ? error.message

//       : "Failed to delete user"

//     );



//   }


// };











// // =======================
// // DELETE PROPERTY
// // ADMIN ONLY
// // =======================

// export const deletePropertyController =

// async (

//   req: Request,

//   res: Response

// ) => {


//   try {


//     const propertyId =

//       req.params.id as string;





//     const deletedProperty =

//       await deleteProperty(

//         propertyId

//       );





//     return sendResponse(

//       res,

//       200,

//       "Property deleted successfully",

//       deletedProperty

//     );





//   } catch (error) {


//     return sendErrorResponse(

//       res,

//       500,

//       error instanceof Error

//       ? error.message

//       : "Failed to delete property"

//     );



//   }


// };











// // =======================
// // UPDATE BOOKING STATUS
// // ADMIN ONLY
// // =======================

// export const updateBookingStatusController =

// async (

//   req: Request,

//   res: Response

// ) => {


//   try {


//     const bookingId =

//       req.params.id as string;





//     const {

//       status,

//     } = req.body;





//     if (!status) {


//       return sendErrorResponse(

//         res,

//         400,

//         "Status is required"

//       );


//     }







//     const updatedBooking =

//       await updateBookingStatus(

//         bookingId,

//         status

//       );





//     return sendResponse(

//       res,

//       200,

//       "Booking status updated successfully",

//       updatedBooking

//     );





//   } catch (error) {


//     return sendErrorResponse(

//       res,

//       500,

//       error instanceof Error

//       ? error.message

//       : "Failed to update booking status"

//     );



//   }


// };


import type {
  Request,
  Response,
} from "express";


import {
  getAdminStats,
  getAllUsers,
  getAllProperties,
  getAllBookings,
  deleteUser,
  deleteProperty,
  updateBookingStatus,
} from "./admin.service";


import {
  sendResponse,
  sendErrorResponse,
} from "../../utils/apiResponse";









// =======================
// GET ADMIN DASHBOARD STATS
// =======================

export const getAdminStatsController =

async (

  req: Request,

  res: Response

) => {


  try {


    const stats =

      await getAdminStats();






    return sendResponse(

      res,

      200,

      "Admin dashboard stats fetched successfully",

      stats

    );






  } catch (error) {


    return sendErrorResponse(

      res,

      500,

      error instanceof Error

      ? error.message

      : "Failed to fetch admin stats"

    );



  }


};











// =======================
// GET ALL USERS
// ADMIN ONLY
// =======================

export const getAllUsersController =

async (

  req: Request,

  res: Response

) => {


  try {


    const users =

      await getAllUsers();






    return sendResponse(

      res,

      200,

      "Users fetched successfully",

      users

    );






  } catch (error) {


    return sendErrorResponse(

      res,

      500,

      error instanceof Error

      ? error.message

      : "Failed to fetch users"

    );



  }


};











// =======================
// GET ALL PROPERTIES
// ADMIN ONLY
// =======================

export const getAllPropertiesController =

async (

  req: Request,

  res: Response

) => {


  try {


    const properties =

      await getAllProperties();






    return sendResponse(

      res,

      200,

      "Properties fetched successfully",

      properties

    );






  } catch (error) {


    return sendErrorResponse(

      res,

      500,

      error instanceof Error

      ? error.message

      : "Failed to fetch properties"

    );



  }


};











// =======================
// GET ALL BOOKINGS
// ADMIN ONLY
// =======================

export const getAllBookingsController =

async (

  req: Request,

  res: Response

) => {


  try {


    const bookings =

      await getAllBookings();






    return sendResponse(

      res,

      200,

      "Bookings fetched successfully",

      bookings

    );






  } catch (error) {


    return sendErrorResponse(

      res,

      500,

      error instanceof Error

      ? error.message

      : "Failed to fetch bookings"

    );



  }


};











// =======================
// DELETE USER
// ADMIN ONLY
// =======================

export const deleteUserController =

async (

  req: Request,

  res: Response

) => {


  try {


    const userId =

      req.params.id as string;






    const adminId =

      req.user?.id;






    if (!adminId) {


      return sendErrorResponse(

        res,

        401,

        "Unauthorized user"

      );


    }








    const deletedUser =

      await deleteUser(

        userId,

        adminId

      );






    return sendResponse(

      res,

      200,

      "User deleted successfully",

      deletedUser

    );






  } catch (error) {


    return sendErrorResponse(

      res,

      500,

      error instanceof Error

      ? error.message

      : "Failed to delete user"

    );



  }


};











// =======================
// DELETE PROPERTY
// ADMIN ONLY
// =======================

export const deletePropertyController =

async (

  req: Request,

  res: Response

) => {


  try {


    const propertyId =

      req.params.id as string;






    const deletedProperty =

      await deleteProperty(

        propertyId

      );






    return sendResponse(

      res,

      200,

      "Property deleted successfully",

      deletedProperty

    );






  } catch (error) {


    return sendErrorResponse(

      res,

      500,

      error instanceof Error

      ? error.message

      : "Failed to delete property"

    );



  }


};











// =======================
// UPDATE BOOKING STATUS
// ADMIN ONLY
// =======================

export const updateBookingStatusController =

async (

  req: Request,

  res: Response

) => {


  try {


    const bookingId =

      req.params.id as string;






    const {

      status,

    } = req.body;






    if (!status) {


      return sendErrorResponse(

        res,

        400,

        "Status is required"

      );


    }








    const updatedBooking =

      await updateBookingStatus(

        bookingId,

        status

      );






    return sendResponse(

      res,

      200,

      "Booking status updated successfully",

      updatedBooking

    );






  } catch (error) {


    return sendErrorResponse(

      res,

      500,

      error instanceof Error

      ? error.message

      : "Failed to update booking status"

    );



  }


};