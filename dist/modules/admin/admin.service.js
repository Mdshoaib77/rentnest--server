"use strict";
// // // // // // import prisma from "../../lib/prisma";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookingStatus = exports.deleteProperty = exports.deleteUser = exports.getAllBookings = exports.getAllProperties = exports.getAllUsers = exports.getAdminStats = void 0;
// // // // // // // =======================
// // // // // // // GET ADMIN DASHBOARD STATS
// // // // // // // =======================
// // // // // // export const getAdminStats = async () => {
// // // // // //   const totalUsers =
// // // // // //     await prisma.user.count();
// // // // // //   const totalProperties =
// // // // // //     await prisma.property.count();
// // // // // //   const totalBookings =
// // // // // //     await prisma.booking.count();
// // // // // //   const pendingBookings =
// // // // // //     await prisma.booking.count({
// // // // // //       where: {
// // // // // //         status: "PENDING",
// // // // // //       },
// // // // // //     });
// // // // // //   const acceptedBookings =
// // // // // //     await prisma.booking.count({
// // // // // //       where: {
// // // // // //         status: "ACCEPTED",
// // // // // //       },
// // // // // //     });
// // // // // //   const rejectedBookings =
// // // // // //     await prisma.booking.count({
// // // // // //       where: {
// // // // // //         status: "REJECTED",
// // // // // //       },
// // // // // //     });
// // // // // //   return {
// // // // // //     totalUsers,
// // // // // //     totalProperties,
// // // // // //     totalBookings,
// // // // // //     pendingBookings,
// // // // // //     acceptedBookings,
// // // // // //     rejectedBookings,
// // // // // //   };
// // // // // // };
// // // // // import prisma from "../../lib/prisma";
// // // // // // =======================
// // // // // // GET ADMIN DASHBOARD STATS
// // // // // // =======================
// // // // // export const getAdminStats = async () => {
// // // // //   const totalUsers =
// // // // //     await prisma.user.count();
// // // // //   const totalProperties =
// // // // //     await prisma.property.count();
// // // // //   const totalBookings =
// // // // //     await prisma.booking.count();
// // // // //   const pendingBookings =
// // // // //     await prisma.booking.count({
// // // // //       where: {
// // // // //         status: "PENDING",
// // // // //       },
// // // // //     });
// // // // //   const acceptedBookings =
// // // // //     await prisma.booking.count({
// // // // //       where: {
// // // // //         status: "ACCEPTED",
// // // // //       },
// // // // //     });
// // // // //   const rejectedBookings =
// // // // //     await prisma.booking.count({
// // // // //       where: {
// // // // //         status: "REJECTED",
// // // // //       },
// // // // //     });
// // // // //   return {
// // // // //     totalUsers,
// // // // //     totalProperties,
// // // // //     totalBookings,
// // // // //     pendingBookings,
// // // // //     acceptedBookings,
// // // // //     rejectedBookings,
// // // // //   };
// // // // // };
// // // // // // =======================
// // // // // // GET ALL USERS
// // // // // // ADMIN ONLY
// // // // // // =======================
// // // // // export const getAllUsers = async () => {
// // // // //   const users =
// // // // //     await prisma.user.findMany({
// // // // //       select: {
// // // // //         id: true,
// // // // //         name: true,
// // // // //         email: true,
// // // // //         role: true,
// // // // //         createdAt: true,
// // // // //         updatedAt: true,
// // // // //       },
// // // // //       orderBy: {
// // // // //         createdAt: "desc",
// // // // //       },
// // // // //     });
// // // // //   return users;
// // // // // };
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
// // // // // =======================
// // // // // GET ALL USERS
// // // // // ADMIN ONLY
// // // // // =======================
// // // // export const getAllUsers = async () => {
// // // //   const users =
// // // //     await prisma.user.findMany({
// // // //       select: {
// // // //         id: true,
// // // //         name: true,
// // // //         email: true,
// // // //         role: true,
// // // //         createdAt: true,
// // // //         updatedAt: true,
// // // //       },
// // // //       orderBy: {
// // // //         createdAt: "desc",
// // // //       },
// // // //     });
// // // //   return users;
// // // // };
// // // // // =======================
// // // // // GET ALL PROPERTIES
// // // // // ADMIN ONLY
// // // // // =======================
// // // // export const getAllProperties = async () => {
// // // //   const properties =
// // // //     await prisma.property.findMany({
// // // //       include: {
// // // //         landlord: {
// // // //           select: {
// // // //             id: true,
// // // //             name: true,
// // // //             email: true,
// // // //           },
// // // //         },
// // // //       },
// // // //       orderBy: {
// // // //         createdAt: "desc",
// // // //       },
// // // //     });
// // // //   return properties;
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
// // // // =======================
// // // // GET ALL PROPERTIES
// // // // ADMIN ONLY
// // // // =======================
// // // export const getAllProperties = async () => {
// // //   const properties =
// // //     await prisma.property.findMany({
// // //       include: {
// // //         landlord: {
// // //           select: {
// // //             id: true,
// // //             name: true,
// // //             email: true,
// // //           },
// // //         },
// // //       },
// // //       orderBy: {
// // //         createdAt: "desc",
// // //       },
// // //     });
// // //   return properties;
// // // };
// // // // =======================
// // // // GET ALL BOOKINGS
// // // // ADMIN ONLY
// // // // =======================
// // // export const getAllBookings = async () => {
// // //   const bookings =
// // //     await prisma.booking.findMany({
// // //       include: {
// // //         property: {
// // //           select: {
// // //             id: true,
// // //             title: true,
// // //             location: true,
// // //             price: true,
// // //             landlord: {
// // //               select: {
// // //                 id: true,
// // //                 name: true,
// // //                 email: true,
// // //               },
// // //             },
// // //           },
// // //         },
// // //         tenant: {
// // //           select: {
// // //             id: true,
// // //             name: true,
// // //             email: true,
// // //           },
// // //         },
// // //       },
// // //       orderBy: {
// // //         createdAt: "desc",
// // //       },
// // //     });
// // //   return bookings;
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
// // // =======================
// // // GET ALL BOOKINGS
// // // ADMIN ONLY
// // // =======================
// // export const getAllBookings = async () => {
// //   const bookings =
// //     await prisma.booking.findMany({
// //       include: {
// //         property: {
// //           select: {
// //             id: true,
// //             title: true,
// //             location: true,
// //             price: true,
// //             landlord: {
// //               select: {
// //                 id: true,
// //                 name: true,
// //                 email: true,
// //               },
// //             },
// //           },
// //         },
// //         tenant: {
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
// //   return bookings;
// // };
// // // =======================
// // // DELETE USER
// // // ADMIN ONLY
// // // =======================
// // export const deleteUser = async (
// //   userId: string,
// //   adminId: string
// // ) => {
// //   if (
// //     userId === adminId
// //   ) {
// //     throw new Error(
// //       "Admin cannot delete own account"
// //     );
// //   }
// //   const user =
// //     await prisma.user.findUnique({
// //       where: {
// //         id: userId,
// //       },
// //     });
// //   if (!user) {
// //     throw new Error(
// //       "User not found"
// //     );
// //   }
// //   const deletedUser =
// //     await prisma.user.delete({
// //       where: {
// //         id: userId,
// //       },
// //       select: {
// //         id: true,
// //         name: true,
// //         email: true,
// //         role: true,
// //       },
// //     });
// //   return deletedUser;
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
//   return await prisma.user.findMany({
//     select: {
//       id: true,
//       name: true,
//       email: true,
//       role: true,
//       createdAt: true,
//       updatedAt: true,
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });
// };
// // =======================
// // GET ALL PROPERTIES
// // ADMIN ONLY
// // =======================
// export const getAllProperties = async () => {
//   return await prisma.property.findMany({
//     include: {
//       landlord: {
//         select: {
//           id: true,
//           name: true,
//           email: true,
//         },
//       },
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });
// };
// // =======================
// // GET ALL BOOKINGS
// // ADMIN ONLY
// // =======================
// export const getAllBookings = async () => {
//   return await prisma.booking.findMany({
//     include: {
//       property: {
//         select: {
//           id: true,
//           title: true,
//           location: true,
//           price: true,
//           landlord: {
//             select: {
//               id: true,
//               name: true,
//               email: true,
//             },
//           },
//         },
//       },
//       tenant: {
//         select: {
//           id: true,
//           name: true,
//           email: true,
//         },
//       },
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });
// };
// // =======================
// // DELETE USER
// // ADMIN ONLY
// // =======================
// export const deleteUser = async (
//   userId: string,
//   adminId: string
// ) => {
//   if (userId === adminId) {
//     throw new Error(
//       "Admin cannot delete own account"
//     );
//   }
//   const user =
//     await prisma.user.findUnique({
//       where: {
//         id: userId,
//       },
//     });
//   if (!user) {
//     throw new Error(
//       "User not found"
//     );
//   }
//   return await prisma.user.delete({
//     where: {
//       id: userId,
//     },
//     select: {
//       id: true,
//       name: true,
//       email: true,
//       role: true,
//     },
//   });
// };
// // =======================
// // DELETE PROPERTY
// // ADMIN ONLY
// // =======================
// export const deleteProperty = async (
//   propertyId: string
// ) => {
//   const property =
//     await prisma.property.findUnique({
//       where: {
//         id: propertyId,
//       },
//       include: {
//         bookings: true,
//       },
//     });
//   if (!property) {
//     throw new Error(
//       "Property not found"
//     );
//   }
//   if (property.bookings.length > 0) {
//     throw new Error(
//       "Cannot delete property with existing bookings"
//     );
//   }
//   return await prisma.property.delete({
//     where: {
//       id: propertyId,
//     },
//     select: {
//       id: true,
//       title: true,
//       location: true,
//       price: true,
//       landlordId: true,
//     },
//   });
// };
const prisma_1 = __importDefault(require("../../lib/prisma"));
// =======================
// GET ADMIN DASHBOARD STATS
// =======================
const getAdminStats = async () => {
    const totalUsers = await prisma_1.default.user.count();
    const totalProperties = await prisma_1.default.property.count();
    const totalBookings = await prisma_1.default.booking.count();
    const pendingBookings = await prisma_1.default.booking.count({
        where: {
            status: "PENDING",
        },
    });
    const acceptedBookings = await prisma_1.default.booking.count({
        where: {
            status: "ACCEPTED",
        },
    });
    const rejectedBookings = await prisma_1.default.booking.count({
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
exports.getAdminStats = getAdminStats;
// =======================
// GET ALL USERS
// ADMIN ONLY
// =======================
const getAllUsers = async () => {
    return await prisma_1.default.user.findMany({
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
};
exports.getAllUsers = getAllUsers;
// =======================
// GET ALL PROPERTIES
// ADMIN ONLY
// =======================
const getAllProperties = async () => {
    return await prisma_1.default.property.findMany({
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
};
exports.getAllProperties = getAllProperties;
// =======================
// GET ALL BOOKINGS
// ADMIN ONLY
// =======================
const getAllBookings = async () => {
    return await prisma_1.default.booking.findMany({
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
};
exports.getAllBookings = getAllBookings;
// =======================
// DELETE USER
// ADMIN ONLY
// =======================
const deleteUser = async (userId, adminId) => {
    if (userId === adminId) {
        throw new Error("Admin cannot delete own account");
    }
    const user = await prisma_1.default.user.findUnique({
        where: {
            id: userId,
        },
    });
    if (!user) {
        throw new Error("User not found");
    }
    return await prisma_1.default.user.delete({
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
};
exports.deleteUser = deleteUser;
// =======================
// DELETE PROPERTY
// ADMIN ONLY
// =======================
const deleteProperty = async (propertyId) => {
    const property = await prisma_1.default.property.findUnique({
        where: {
            id: propertyId,
        },
        include: {
            bookings: true,
        },
    });
    if (!property) {
        throw new Error("Property not found");
    }
    if (property.bookings.length > 0) {
        throw new Error("Cannot delete property with existing bookings");
    }
    return await prisma_1.default.property.delete({
        where: {
            id: propertyId,
        },
        select: {
            id: true,
            title: true,
            location: true,
            price: true,
            landlordId: true,
        },
    });
};
exports.deleteProperty = deleteProperty;
// =======================
// UPDATE BOOKING STATUS
// ADMIN ONLY
// =======================
const updateBookingStatus = async (bookingId, status) => {
    const booking = await prisma_1.default.booking.findUnique({
        where: {
            id: bookingId,
        },
    });
    if (!booking) {
        throw new Error("Booking not found");
    }
    const updatedBooking = await prisma_1.default.booking.update({
        where: {
            id: bookingId,
        },
        data: {
            status,
        },
        include: {
            property: {
                select: {
                    id: true,
                    title: true,
                    location: true,
                    price: true,
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
    });
    return updatedBooking;
};
exports.updateBookingStatus = updateBookingStatus;
