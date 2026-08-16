"use strict";
// // // // // import prisma from "../../lib/prisma";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProperty = exports.updateProperty = exports.getSingleProperty = exports.getAllProperties = exports.createProperty = void 0;
// // // // // import type {
// // // // //   CreatePropertyInput,
// // // // // } from "./property.validation";
// // // // // export const createProperty = async (
// // // // //   payload: CreatePropertyInput,
// // // // //   landlordId: string
// // // // // ) => {
// // // // //   const property =
// // // // //     await prisma.property.create({
// // // // //       data: {
// // // // //         title:
// // // // //           payload.title,
// // // // //         description:
// // // // //           payload.description,
// // // // //         location:
// // // // //           payload.location,
// // // // //         price:
// // // // //           payload.price,
// // // // //         bedrooms:
// // // // //           payload.bedrooms,
// // // // //         bathrooms:
// // // // //           payload.bathrooms,
// // // // //         landlordId,
// // // // //       },
// // // // //     });
// // // // //   return property;
// // // // // };
// // // // import prisma from "../../lib/prisma";
// // // // import type {
// // // //   CreatePropertyInput,
// // // // } from "./property.validation";
// // // // // =======================
// // // // // CREATE PROPERTY
// // // // // =======================
// // // // export const createProperty = async (
// // // //   payload: CreatePropertyInput,
// // // //   landlordId: string
// // // // ) => {
// // // //   const property =
// // // //     await prisma.property.create({
// // // //       data: {
// // // //         title:
// // // //           payload.title,
// // // //         description:
// // // //           payload.description,
// // // //         location:
// // // //           payload.location,
// // // //         price:
// // // //           payload.price,
// // // //         bedrooms:
// // // //           payload.bedrooms,
// // // //         bathrooms:
// // // //           payload.bathrooms,
// // // //         landlordId,
// // // //       },
// // // //     });
// // // //   return property;
// // // // };
// // // // // =======================
// // // // // GET ALL PROPERTIES
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
// // // //     });
// // // //   return properties;
// // // // };
// // // // // =======================
// // // // // GET SINGLE PROPERTY
// // // // // =======================
// // // // export const getSingleProperty = async (
// // // //   propertyId: string
// // // // ) => {
// // // //   const property =
// // // //     await prisma.property.findUnique({
// // // //       where: {
// // // //         id: propertyId,
// // // //       },
// // // //       include: {
// // // //         landlord: {
// // // //           select: {
// // // //             id: true,
// // // //             name: true,
// // // //             email: true,
// // // //           },
// // // //         },
// // // //       },
// // // //     });
// // // //   return property;
// // // // };
// // // import prisma from "../../lib/prisma";
// // // import type {
// // //   CreatePropertyInput,
// // //   UpdatePropertyInput,
// // // } from "./property.validation";
// // // // =======================
// // // // CREATE PROPERTY
// // // // =======================
// // // export const createProperty = async (
// // //   payload: CreatePropertyInput,
// // //   landlordId: string
// // // ) => {
// // //   const property =
// // //     await prisma.property.create({
// // //       data: {
// // //         title:
// // //           payload.title,
// // //         description:
// // //           payload.description,
// // //         location:
// // //           payload.location,
// // //         price:
// // //           payload.price,
// // //         bedrooms:
// // //           payload.bedrooms,
// // //         bathrooms:
// // //           payload.bathrooms,
// // //         landlordId,
// // //       },
// // //     });
// // //   return property;
// // // };
// // // // =======================
// // // // GET ALL PROPERTIES
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
// // //     });
// // //   return properties;
// // // };
// // // // =======================
// // // // GET SINGLE PROPERTY
// // // // =======================
// // // export const getSingleProperty = async (
// // //   propertyId: string
// // // ) => {
// // //   const property =
// // //     await prisma.property.findUnique({
// // //       where: {
// // //         id: propertyId,
// // //       },
// // //       include: {
// // //         landlord: {
// // //           select: {
// // //             id: true,
// // //             name: true,
// // //             email: true,
// // //           },
// // //         },
// // //       },
// // //     });
// // //   return property;
// // // };
// // // // =======================
// // // // UPDATE PROPERTY
// // // // =======================
// // // export const updateProperty = async (
// // //   propertyId: string,
// // //   landlordId: string,
// // //   payload: UpdatePropertyInput
// // // ) => {
// // //   const property =
// // //     await prisma.property.findUnique({
// // //       where: {
// // //         id: propertyId,
// // //       },
// // //     });
// // //   if (!property) {
// // //     throw new Error(
// // //       "Property not found"
// // //     );
// // //   }
// // //   if (
// // //     property.landlordId !== landlordId
// // //   ) {
// // //     throw new Error(
// // //       "You are not allowed to update this property"
// // //     );
// // //   }
// // //   const updatedProperty =
// // //     await prisma.property.update({
// // //       where: {
// // //         id: propertyId,
// // //       },
// // //       data: payload,
// // //     });
// // //   return updatedProperty;
// // // };
// // // // =======================
// // // // DELETE PROPERTY
// // // // =======================
// // // export const deleteProperty = async (
// // //   propertyId: string,
// // //   landlordId: string
// // // ) => {
// // //   const property =
// // //     await prisma.property.findUnique({
// // //       where: {
// // //         id: propertyId,
// // //       },
// // //     });
// // //   if (!property) {
// // //     throw new Error(
// // //       "Property not found"
// // //     );
// // //   }
// // //   if (
// // //     property.landlordId !== landlordId
// // //   ) {
// // //     throw new Error(
// // //       "You are not allowed to delete this property"
// // //     );
// // //   }
// // //   await prisma.property.delete({
// // //     where: {
// // //       id: propertyId,
// // //     },
// // //   });
// // //   return null;
// // // };
// // export const getAllProperties = async (
// //   filters: {
// //     location?: string;
// //     minPrice?: number;
// //     maxPrice?: number;
// //     bedrooms?: number;
// //     page?: number;
// //     limit?: number;
// //   }
// // ) => {
// //   const {
// //     location,
// //     minPrice,
// //     maxPrice,
// //     bedrooms,
// //     page = 1,
// //     limit = 10,
// //   } = filters;
// //   const skip =
// //     (page - 1) * limit;
// //   const properties =
// //     await prisma.property.findMany({
// //       where: {
// //         location: location
// //           ? {
// //               contains: location,
// //               mode: "insensitive",
// //             }
// //           : undefined,
// //         price: {
// //           gte:
// //             minPrice,
// //           lte:
// //             maxPrice,
// //         },
// //         bedrooms,
// //       },
// //       skip,
// //       take: limit,
// //       include: {
// //         landlord: {
// //           select: {
// //             id: true,
// //             name: true,
// //             email: true,
// //           },
// //         },
// //       },
// //     });
// //   const total =
// //     await prisma.property.count({
// //       where: {
// //         location: location
// //           ? {
// //               contains: location,
// //               mode: "insensitive",
// //             }
// //           : undefined,
// //         price: {
// //           gte:
// //             minPrice,
// //           lte:
// //             maxPrice,
// //         },
// //         bedrooms,
// //       },
// //     });
// //   return {
// //     meta: {
// //       page,
// //       limit,
// //       total,
// //       totalPages:
// //         Math.ceil(
// //           total / limit
// //         ),
// //     },
// //     data:
// //       properties,
// //   };
// // };
// import prisma from "../../lib/prisma";
// import type {
//   CreatePropertyInput,
//   UpdatePropertyInput,
// } from "./property.validation";
// // =======================
// // CREATE PROPERTY
// // =======================
// export const createProperty = async (
//   payload: CreatePropertyInput,
//   landlordId: string
// ) => {
//   const property =
//     await prisma.property.create({
//       data: {
//         title:
//           payload.title,
//         description:
//           payload.description,
//         location:
//           payload.location,
//         price:
//           payload.price,
//         bedrooms:
//           payload.bedrooms,
//         bathrooms:
//           payload.bathrooms,
//         landlordId,
//       },
//     });
//   return property;
// };
// // =======================
// // GET ALL PROPERTIES
// // SEARCH + FILTER + PAGINATION
// // =======================
// export const getAllProperties = async (
//   filters: {
//     location?: string;
//     minPrice?: number;
//     maxPrice?: number;
//     bedrooms?: number;
//     page?: number;
//     limit?: number;
//   }
// ) => {
//   const {
//     location,
//     minPrice,
//     maxPrice,
//     bedrooms,
//     page = 1,
//     limit = 10,
//   } = filters;
//   const skip =
//     (page - 1) * limit;
//   const whereCondition = {
//     location: location
//       ? {
//           contains: location,
//           mode: "insensitive" as const,
//         }
//       : undefined,
//     price: {
//       gte:
//         minPrice,
//       lte:
//         maxPrice,
//     },
//     bedrooms,
//   };
//   const properties =
//     await prisma.property.findMany({
//       where:
//         whereCondition,
//       skip,
//       take:
//         limit,
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
//         createdAt:
//           "desc",
//       },
//     });
//   const total =
//     await prisma.property.count({
//       where:
//         whereCondition,
//     });
//   return {
//     meta: {
//       page,
//       limit,
//       total,
//       totalPages:
//         Math.ceil(
//           total / limit
//         ),
//     },
//     data:
//       properties,
//   };
// };
// // =======================
// // GET SINGLE PROPERTY
// // =======================
// export const getSingleProperty = async (
//   propertyId: string
// ) => {
//   const property =
//     await prisma.property.findUnique({
//       where: {
//         id:
//           propertyId,
//       },
//       include: {
//         landlord: {
//           select: {
//             id: true,
//             name: true,
//             email: true,
//           },
//         },
//       },
//     });
//   return property;
// };
// // =======================
// // UPDATE PROPERTY
// // =======================
// export const updateProperty = async (
//   propertyId: string,
//   landlordId: string,
//   payload: UpdatePropertyInput
// ) => {
//   const property =
//     await prisma.property.findUnique({
//       where: {
//         id:
//           propertyId,
//       },
//     });
//   if (!property) {
//     throw new Error(
//       "Property not found"
//     );
//   }
//   if (
//     property.landlordId !== landlordId
//   ) {
//     throw new Error(
//       "You are not allowed to update this property"
//     );
//   }
//   const updatedProperty =
//     await prisma.property.update({
//       where: {
//         id:
//           propertyId,
//       },
//       data:
//         payload,
//     });
//   return updatedProperty;
// };
// // =======================
// // DELETE PROPERTY
// // =======================
// export const deleteProperty = async (
//   propertyId: string,
//   landlordId: string
// ) => {
//   const property =
//     await prisma.property.findUnique({
//       where: {
//         id:
//           propertyId,
//       },
//     });
//   if (!property) {
//     throw new Error(
//       "Property not found"
//     );
//   }
//   if (
//     property.landlordId !== landlordId
//   ) {
//     throw new Error(
//       "You are not allowed to delete this property"
//     );
//   }
//   await prisma.property.delete({
//     where: {
//       id:
//         propertyId,
//     },
//   });
// };
const prisma_1 = __importDefault(require("../../lib/prisma"));
// =======================
// CREATE PROPERTY
// =======================
const createProperty = async (payload, landlordId) => {
    const property = await prisma_1.default.property.create({
        data: {
            title: payload.title,
            description: payload.description,
            location: payload.location,
            price: payload.price,
            bedrooms: payload.bedrooms,
            bathrooms: payload.bathrooms,
            landlordId,
        },
    });
    return property;
};
exports.createProperty = createProperty;
// =======================
// GET ALL PROPERTIES
// SEARCH + FILTER + PAGINATION
// =======================
const getAllProperties = async (filters) => {
    const { location, minPrice, maxPrice, bedrooms, landlordId, page = 1, limit = 10, } = filters;
    const skip = (page - 1) * limit;
    const whereCondition = {
        location: location
            ? {
                contains: location,
                mode: "insensitive",
            }
            : undefined,
        landlordId,
        price: {
            gte: minPrice,
            lte: maxPrice,
        },
        bedrooms,
    };
    const properties = await prisma_1.default.property.findMany({
        where: whereCondition,
        skip,
        take: limit,
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
    const total = await prisma_1.default.property.count({
        where: whereCondition,
    });
    return {
        meta: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
        data: properties,
    };
};
exports.getAllProperties = getAllProperties;
// =======================
// GET SINGLE PROPERTY
// =======================
const getSingleProperty = async (propertyId) => {
    const property = await prisma_1.default.property.findUnique({
        where: {
            id: propertyId,
        },
        include: {
            landlord: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                },
            },
        },
    });
    return property;
};
exports.getSingleProperty = getSingleProperty;
// =======================
// UPDATE PROPERTY
// =======================
const updateProperty = async (propertyId, landlordId, payload) => {
    const property = await prisma_1.default.property.findUnique({
        where: {
            id: propertyId,
        },
    });
    if (!property) {
        throw new Error("Property not found");
    }
    if (property.landlordId !== landlordId) {
        throw new Error("You are not allowed to update this property");
    }
    const updatedProperty = await prisma_1.default.property.update({
        where: {
            id: propertyId,
        },
        data: payload,
    });
    return updatedProperty;
};
exports.updateProperty = updateProperty;
// =======================
// DELETE PROPERTY
// =======================
const deleteProperty = async (propertyId, landlordId) => {
    const property = await prisma_1.default.property.findUnique({
        where: {
            id: propertyId,
        },
    });
    if (!property) {
        throw new Error("Property not found");
    }
    if (property.landlordId !== landlordId) {
        throw new Error("You are not allowed to delete this property");
    }
    await prisma_1.default.property.delete({
        where: {
            id: propertyId,
        },
    });
};
exports.deleteProperty = deleteProperty;
