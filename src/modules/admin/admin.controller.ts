// // // import type {
// // //   Request,
// // //   Response,
// // // } from "express";


// // // import {
// // //   getAdminStats,
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


// // import type {
// //   Request,
// //   Response,
// // } from "express";


// // import {
// //   getAdminStats,
// //   getAllUsers,
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

// import type {
//   Request,
//   Response,
// } from "express";


// import {
//   getAdminStats,
//   getAllUsers,
//   getAllProperties,
// } from "./admin.service";




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





//     res.status(200).json({


//       success: true,


//       message:

//         "Admin dashboard stats fetched successfully",



//       data:

//         stats,


//     });





//   } catch (error) {


//     res.status(500).json({


//       success: false,


//       message:

//         error instanceof Error

//         ? error.message

//         : "Failed to fetch admin stats",


//     });



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





//     res.status(200).json({


//       success: true,


//       message:

//         "Users fetched successfully",



//       data:

//         users,


//     });





//   } catch (error) {


//     res.status(500).json({


//       success: false,


//       message:

//         error instanceof Error

//         ? error.message

//         : "Failed to fetch users",


//     });



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





//     res.status(200).json({


//       success: true,


//       message:

//         "Properties fetched successfully",



//       data:

//         properties,


//     });





//   } catch (error) {


//     res.status(500).json({


//       success: false,


//       message:

//         error instanceof Error

//         ? error.message

//         : "Failed to fetch properties",


//     });



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
} from "./admin.service";




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





    res.status(200).json({


      success: true,


      message:

        "Admin dashboard stats fetched successfully",



      data:

        stats,


    });





  } catch (error) {


    res.status(500).json({


      success: false,


      message:

        error instanceof Error

        ? error.message

        : "Failed to fetch admin stats",


    });



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





    res.status(200).json({


      success: true,


      message:

        "Users fetched successfully",



      data:

        users,


    });





  } catch (error) {


    res.status(500).json({


      success: false,


      message:

        error instanceof Error

        ? error.message

        : "Failed to fetch users",


    });



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





    res.status(200).json({


      success: true,


      message:

        "Properties fetched successfully",



      data:

        properties,


    });





  } catch (error) {


    res.status(500).json({


      success: false,


      message:

        error instanceof Error

        ? error.message

        : "Failed to fetch properties",


    });



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





    res.status(200).json({


      success: true,


      message:

        "Bookings fetched successfully",



      data:

        bookings,


    });





  } catch (error) {


    res.status(500).json({


      success: false,


      message:

        error instanceof Error

        ? error.message

        : "Failed to fetch bookings",


    });



  }


};