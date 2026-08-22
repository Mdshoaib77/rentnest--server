"use strict";
// // // import prisma from "../../lib/prisma";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookingStatus = exports.getLandlordBookings = exports.getMyBookings = exports.createBooking = void 0;
// // // import type {
// // //   CreateBookingInput,
// // // } from "./booking.validation";
// // // // =======================
// // // // CREATE BOOKING
// // // // =======================
// // // export const createBooking = async (
// // //   payload: CreateBookingInput,
// // //   tenantId: string
// // // ) => {
// // //   // Check property exists
// // //   const property =
// // //     await prisma.property.findUnique({
// // //       where: {
// // //         id:
// // //           payload.propertyId,
// // //       },
// // //     });
// // //   if (!property) {
// // //     throw new Error(
// // //       "Property not found"
// // //     );
// // //   }
// // //   // Prevent landlord booking own property
// // //   if (
// // //     property.landlordId === tenantId
// // //   ) {
// // //     throw new Error(
// // //       "You cannot book your own property"
// // //     );
// // //   }
// // //   // Create booking
// // //   const booking =
// // //     await prisma.booking.create({
// // //       data: {
// // //         tenantId,
// // //         propertyId:
// // //           payload.propertyId,
// // //         startDate:
// // //           new Date(
// // //             payload.startDate
// // //           ),
// // //         endDate:
// // //           new Date(
// // //             payload.endDate
// // //           ),
// // //         status:
// // //           "PENDING",
// // //       },
// // //       include: {
// // //         property: {
// // //           select: {
// // //             id: true,
// // //             title: true,
// // //             location: true,
// // //             price: true,
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
// // //     });
// // //   return booking;
// // // };
// // import prisma from "../../lib/prisma";
// // import type {
// //   CreateBookingInput,
// // } from "./booking.validation";
// // // =======================
// // // CREATE BOOKING
// // // =======================
// // export const createBooking = async (
// //   payload: CreateBookingInput,
// //   tenantId: string
// // ) => {
// //   const property =
// //     await prisma.property.findUnique({
// //       where: {
// //         id: payload.propertyId,
// //       },
// //     });
// //   if (!property) {
// //     throw new Error(
// //       "Property not found"
// //     );
// //   }
// //   if (
// //     property.landlordId === tenantId
// //   ) {
// //     throw new Error(
// //       "You cannot book your own property"
// //     );
// //   }
// //   const booking =
// //     await prisma.booking.create({
// //       data: {
// //         tenantId,
// //         propertyId:
// //           payload.propertyId,
// //         startDate:
// //           new Date(
// //             payload.startDate
// //           ),
// //         endDate:
// //           new Date(
// //             payload.endDate
// //           ),
// //         status:
// //           "PENDING",
// //       },
// //       include: {
// //         property: {
// //           select: {
// //             id: true,
// //             title: true,
// //             location: true,
// //             price: true,
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
// //     });
// //   return booking;
// // };
// // // =======================
// // // GET TENANT BOOKINGS
// // // =======================
// // export const getMyBookings = async (
// //   tenantId: string
// // ) => {
// //   const bookings =
// //     await prisma.booking.findMany({
// //       where: {
// //         tenantId,
// //       },
// //       include: {
// //         property: {
// //           select: {
// //             id: true,
// //             title: true,
// //             location: true,
// //             price: true,
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
// // // GET LANDLORD BOOKINGS
// // // =======================
// // export const getLandlordBookings = async (
// //   landlordId: string
// // ) => {
// //   const bookings =
// //     await prisma.booking.findMany({
// //       where: {
// //         property: {
// //           landlordId,
// //         },
// //       },
// //       include: {
// //         property: {
// //           select: {
// //             id: true,
// //             title: true,
// //             location: true,
// //             price: true,
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
// import prisma from "../../lib/prisma";
// import type {
//   CreateBookingInput,
//   UpdateBookingStatusInput,
// } from "./booking.validation";
// // =======================
// // CREATE BOOKING
// // =======================
// export const createBooking = async (
//   payload: CreateBookingInput,
//   tenantId: string
// ) => {
//   const property =
//     await prisma.property.findUnique({
//       where: {
//         id: payload.propertyId,
//       },
//     });
//   if (!property) {
//     throw new Error(
//       "Property not found"
//     );
//   }
//   if (
//     property.landlordId === tenantId
//   ) {
//     throw new Error(
//       "You cannot book your own property"
//     );
//   }
//   const booking =
//     await prisma.booking.create({
//       data: {
//         tenantId,
//         propertyId:
//           payload.propertyId,
//         startDate:
//           new Date(
//             payload.startDate
//           ),
//         endDate:
//           new Date(
//             payload.endDate
//           ),
//         status:
//           "PENDING",
//       },
//       include: {
//         property: {
//           select: {
//             id: true,
//             title: true,
//             location: true,
//             price: true,
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
//     });
//   return booking;
// };
// // =======================
// // GET TENANT BOOKINGS
// // =======================
// export const getMyBookings = async (
//   tenantId: string
// ) => {
//   const bookings =
//     await prisma.booking.findMany({
//       where: {
//         tenantId,
//       },
//       include: {
//         property: {
//           select: {
//             id: true,
//             title: true,
//             location: true,
//             price: true,
//           },
//         },
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//     });
//   return bookings;
// };
// // =======================
// // GET LANDLORD BOOKINGS
// // =======================
// export const getLandlordBookings = async (
//   landlordId: string
// ) => {
//   const bookings =
//     await prisma.booking.findMany({
//       where: {
//         property: {
//           landlordId,
//         },
//       },
//       include: {
//         property: {
//           select: {
//             id: true,
//             title: true,
//             location: true,
//             price: true,
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
// // =======================
// // UPDATE BOOKING STATUS
// // LANDLORD ONLY
// // =======================
// export const updateBookingStatus = async (
//   bookingId: string,
//   landlordId: string,
//   payload: UpdateBookingStatusInput
// ) => {
//   const booking =
//     await prisma.booking.findUnique({
//       where: {
//         id: bookingId,
//       },
//       include: {
//         property: true,
//       },
//     });
//   if (!booking) {
//     throw new Error(
//       "Booking not found"
//     );
//   }
//   if (
//     booking.property.landlordId !== landlordId
//   ) {
//     throw new Error(
//       "You are not allowed to update this booking"
//     );
//   }
//   const updatedBooking =
//     await prisma.booking.update({
//       where: {
//         id: bookingId,
//       },
//       data: {
//         status:
//           payload.status,
//       },
//       include: {
//         property: {
//           select: {
//             id: true,
//             title: true,
//             location: true,
//             price: true,
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
//     });
//   return updatedBooking;
// };
const prisma_1 = __importDefault(require("../../lib/prisma"));
// =======================
// CREATE BOOKING
// CONFLICT PREVENTION
// =======================
const createBooking = async (payload, tenantId) => {
    const { propertyId, startDate, endDate, } = payload;
    const start = new Date(startDate);
    const end = new Date(endDate);
    // =======================
    // PREVENT PAST DATE
    // =======================
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (start < today) {
        throw new Error("Booking date cannot be in the past");
    }
    // =======================
    // CHECK PROPERTY EXISTS
    // =======================
    const property = await prisma_1.default.property.findUnique({
        where: {
            id: propertyId,
        },
    });
    if (!property) {
        throw new Error("Property not found");
    }
    // =======================
    // CHECK BOOKING CONFLICT
    // =======================
    const existingBooking = await prisma_1.default.booking.findFirst({
        where: {
            propertyId,
            status: {
                in: [
                    "PENDING",
                    "ACCEPTED",
                    "PAID",
                ],
            },
            AND: [
                {
                    startDate: {
                        lt: end,
                    },
                },
                {
                    endDate: {
                        gt: start,
                    },
                },
            ],
        },
    });
    if (existingBooking) {
        throw new Error("Property is already booked for selected dates");
    }
    // =======================
    // CREATE BOOKING
    // TRANSACTION SAFE
    // =======================
    const booking = await prisma_1.default.$transaction(async (tx) => {
        const createdBooking = await tx.booking.create({
            data: {
                propertyId,
                tenantId,
                startDate: start,
                endDate: end,
                status: "PENDING",
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
            },
        });
        return createdBooking;
    });
    return booking;
};
exports.createBooking = createBooking;
// =======================
// GET TENANT BOOKINGS
// =======================
const getMyBookings = async (tenantId) => {
    return prisma_1.default.booking.findMany({
        where: {
            tenantId,
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
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};
exports.getMyBookings = getMyBookings;
// =======================
// GET LANDLORD BOOKINGS
// =======================
const getLandlordBookings = async (landlordId) => {
    return prisma_1.default.booking.findMany({
        where: {
            property: {
                landlordId,
            },
        },
        include: {
            tenant: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                },
            },
            property: {
                select: {
                    id: true,
                    title: true,
                    location: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};
exports.getLandlordBookings = getLandlordBookings;
// =======================
// UPDATE BOOKING STATUS
// =======================
const updateBookingStatus = async (bookingId, landlordId, payload) => {
    const booking = await prisma_1.default.booking.findUnique({
        where: {
            id: bookingId,
        },
        include: {
            property: true,
        },
    });
    if (!booking) {
        throw new Error("Booking not found");
    }
    if (booking.property.landlordId !== landlordId) {
        throw new Error("You are not allowed to update this booking");
    }
    const updatedBooking = await prisma_1.default.booking.update({
        where: {
            id: bookingId,
        },
        data: {
            status: payload.status,
        },
    });
    return updatedBooking;
};
exports.updateBookingStatus = updateBookingStatus;
