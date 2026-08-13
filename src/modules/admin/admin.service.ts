// import prisma from "../../lib/prisma";




// // =======================
// // GET ADMIN DASHBOARD STATS
// // =======================

// export const getAdminStats = async () => {


//   const totalUsers =

//     await prisma.user.count();




//   const totalProperties =

//     await prisma.property.count();




//   const totalBookings =

//     await prisma.booking.count();




//   const pendingBookings =

//     await prisma.booking.count({

//       where: {


//         status: "PENDING",


//       },


//     });





//   const acceptedBookings =

//     await prisma.booking.count({

//       where: {


//         status: "ACCEPTED",


//       },


//     });






//   const rejectedBookings =

//     await prisma.booking.count({

//       where: {


//         status: "REJECTED",


//       },


//     });







//   return {


//     totalUsers,


//     totalProperties,


//     totalBookings,


//     pendingBookings,


//     acceptedBookings,


//     rejectedBookings,


//   };


// };


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









// =======================
// GET ALL USERS
// ADMIN ONLY
// =======================

export const getAllUsers = async () => {


  const users =

    await prisma.user.findMany({

      select: {


        id: true,


        name: true,


        email: true,


        role: true,


        createdAt: true,


        updatedAt: true,


      },


      orderBy: {


        createdAt: "desc",


      },


    });





  return users;


};