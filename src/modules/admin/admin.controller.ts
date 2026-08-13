// import type {
//   Request,
//   Response,
// } from "express";


// import {
//   getAdminStats,
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


import type {
  Request,
  Response,
} from "express";


import {
  getAdminStats,
  getAllUsers,
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