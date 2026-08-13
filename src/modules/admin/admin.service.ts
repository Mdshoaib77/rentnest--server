// // // // import prisma from "../../lib/prisma";




// // // // // =======================
// // // // // GET ADMIN DASHBOARD STATS
// // // // // =======================

// // // // export const getAdminStats = async () => {


// // // //   const totalUsers =

// // // //     await prisma.user.count();




// // // //   const totalProperties =

// // // //     await prisma.property.count();




// // // //   const totalBookings =

// // // //     await prisma.booking.count();




// // // //   const pendingBookings =

// // // //     await prisma.booking.count({

// // // //       where: {


// // // //         status: "PENDING",


// // // //       },


// // // //     });





// // // //   const acceptedBookings =

// // // //     await prisma.booking.count({

// // // //       where: {


// // // //         status: "ACCEPTED",


// // // //       },


// // // //     });






// // // //   const rejectedBookings =

// // // //     await prisma.booking.count({

// // // //       where: {


// // // //         status: "REJECTED",


// // // //       },


// // // //     });







// // // //   return {


// // // //     totalUsers,


// // // //     totalProperties,


// // // //     totalBookings,


// // // //     pendingBookings,


// // // //     acceptedBookings,


// // // //     rejectedBookings,


// // // //   };


// // // // };


// // // import prisma from "../../lib/prisma";




// // // // =======================
// // // // GET ADMIN DASHBOARD STATS
// // // // =======================

// // // export const getAdminStats = async () => {


// // //   const totalUsers =

// // //     await prisma.user.count();




// // //   const totalProperties =

// // //     await prisma.property.count();




// // //   const totalBookings =

// // //     await prisma.booking.count();




// // //   const pendingBookings =

// // //     await prisma.booking.count({

// // //       where: {

// // //         status: "PENDING",

// // //       },

// // //     });





// // //   const acceptedBookings =

// // //     await prisma.booking.count({

// // //       where: {

// // //         status: "ACCEPTED",

// // //       },

// // //     });





// // //   const rejectedBookings =

// // //     await prisma.booking.count({

// // //       where: {

// // //         status: "REJECTED",

// // //       },

// // //     });







// // //   return {


// // //     totalUsers,


// // //     totalProperties,


// // //     totalBookings,


// // //     pendingBookings,


// // //     acceptedBookings,


// // //     rejectedBookings,


// // //   };


// // // };









// // // // =======================
// // // // GET ALL USERS
// // // // ADMIN ONLY
// // // // =======================

// // // export const getAllUsers = async () => {


// // //   const users =

// // //     await prisma.user.findMany({

// // //       select: {


// // //         id: true,


// // //         name: true,


// // //         email: true,


// // //         role: true,


// // //         createdAt: true,


// // //         updatedAt: true,


// // //       },


// // //       orderBy: {


// // //         createdAt: "desc",


// // //       },


// // //     });





// // //   return users;


// // // };


// // import prisma from "../../lib/prisma";




// // // =======================
// // // GET ADMIN DASHBOARD STATS
// // // =======================

// // export const getAdminStats = async () => {


// //   const totalUsers =

// //     await prisma.user.count();




// //   const totalProperties =

// //     await prisma.property.count();




// //   const totalBookings =

// //     await prisma.booking.count();




// //   const pendingBookings =

// //     await prisma.booking.count({

// //       where: {

// //         status: "PENDING",

// //       },

// //     });





// //   const acceptedBookings =

// //     await prisma.booking.count({

// //       where: {

// //         status: "ACCEPTED",

// //       },

// //     });





// //   const rejectedBookings =

// //     await prisma.booking.count({

// //       where: {

// //         status: "REJECTED",

// //       },

// //     });







// //   return {


// //     totalUsers,


// //     totalProperties,


// //     totalBookings,


// //     pendingBookings,


// //     acceptedBookings,


// //     rejectedBookings,


// //   };


// // };









// // // =======================
// // // GET ALL USERS
// // // ADMIN ONLY
// // // =======================

// // export const getAllUsers = async () => {


// //   const users =

// //     await prisma.user.findMany({

// //       select: {


// //         id: true,


// //         name: true,


// //         email: true,


// //         role: true,


// //         createdAt: true,


// //         updatedAt: true,


// //       },


// //       orderBy: {


// //         createdAt: "desc",


// //       },


// //     });





// //   return users;


// // };









// // // =======================
// // // GET ALL PROPERTIES
// // // ADMIN ONLY
// // // =======================

// // export const getAllProperties = async () => {


// //   const properties =

// //     await prisma.property.findMany({

// //       include: {


// //         landlord: {


// //           select: {


// //             id: true,


// //             name: true,


// //             email: true,


// //           },


// //         },


// //       },


// //       orderBy: {


// //         createdAt: "desc",


// //       },


// //     });





// //   return properties;


// // };


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









// // =======================
// // GET ALL USERS
// // ADMIN ONLY
// // =======================

// export const getAllUsers = async () => {


//   const users =

//     await prisma.user.findMany({

//       select: {


//         id: true,


//         name: true,


//         email: true,


//         role: true,


//         createdAt: true,


//         updatedAt: true,


//       },


//       orderBy: {


//         createdAt: "desc",


//       },


//     });





//   return users;


// };









// // =======================
// // GET ALL PROPERTIES
// // ADMIN ONLY
// // =======================

// export const getAllProperties = async () => {


//   const properties =

//     await prisma.property.findMany({

//       include: {


//         landlord: {


//           select: {


//             id: true,


//             name: true,


//             email: true,


//           },


//         },


//       },


//       orderBy: {


//         createdAt: "desc",


//       },


//     });





//   return properties;


// };









// // =======================
// // GET ALL BOOKINGS
// // ADMIN ONLY
// // =======================

// export const getAllBookings = async () => {


//   const bookings =

//     await prisma.booking.findMany({

//       include: {


//         property: {


//           select: {


//             id: true,


//             title: true,


//             location: true,


//             price: true,


//             landlord: {


//               select: {


//                 id: true,


//                 name: true,


//                 email: true,


//               },


//             },


//           },


//         },



//         tenant: {


//           select: {


//             id: true,


//             name: true,


//             email: true,


//           },


//         },


//       },


//       orderBy: {


//         createdAt: "desc",


//       },


//     });





//   return bookings;


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









// =======================
// GET ALL PROPERTIES
// ADMIN ONLY
// =======================

export const getAllProperties = async () => {


  const properties =

    await prisma.property.findMany({

      include: {


        landlord: {


          select: {


            id: true,


            name: true,


            email: true,


          },


        },


      },


      orderBy: {


        createdAt: "desc",


      },


    });





  return properties;


};









// =======================
// GET ALL BOOKINGS
// ADMIN ONLY
// =======================

export const getAllBookings = async () => {


  const bookings =

    await prisma.booking.findMany({

      include: {


        property: {


          select: {


            id: true,


            title: true,


            location: true,


            price: true,


            landlord: {


              select: {


                id: true,


                name: true,


                email: true,


              },


            },


          },


        },



        tenant: {


          select: {


            id: true,


            name: true,


            email: true,


          },


        },


      },


      orderBy: {


        createdAt: "desc",


      },


    });





  return bookings;


};









// =======================
// DELETE USER
// ADMIN ONLY
// =======================

export const deleteUser = async (

  userId: string,

  adminId: string

) => {


  if (

    userId === adminId

  ) {


    throw new Error(

      "Admin cannot delete own account"

    );


  }





  const user =

    await prisma.user.findUnique({

      where: {


        id: userId,


      },


    });





  if (!user) {


    throw new Error(

      "User not found"

    );


  }





  const deletedUser =

    await prisma.user.delete({

      where: {


        id: userId,


      },


      select: {


        id: true,


        name: true,


        email: true,


        role: true,


      },


    });





  return deletedUser;


};