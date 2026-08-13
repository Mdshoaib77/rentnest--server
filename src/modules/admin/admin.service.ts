import prisma from "../../lib/prisma";




// =======================
// GET ADMIN DASHBOARD STATS
// =======================

export const getAdminStats = async () => {


  const totalUsers =

    await prisma.user.count();




  const totalProperties =

    await prisma.property.count();




  const totalBookings =

    await prisma.booking.count();




  const pendingBookings =

    await prisma.booking.count({

      where: {


        status: "PENDING",


      },


    });





  const acceptedBookings =

    await prisma.booking.count({

      where: {


        status: "ACCEPTED",


      },


    });






  const rejectedBookings =

    await prisma.booking.count({

      where: {


        status: "REJECTED",


      },


    });







  return {


    totalUsers,


    totalProperties,


    totalBookings,


    pendingBookings,


    acceptedBookings,


    rejectedBookings,


  };


};