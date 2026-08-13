import type {
  Request,
  Response,
} from "express";


import {
  getAdminStats,
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