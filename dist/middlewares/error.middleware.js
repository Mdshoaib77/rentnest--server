"use strict";
// // import type {
// //   Request,
// //   Response,
// //   NextFunction,
// // } from "express";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const client_1 = require("@prisma/client");
const apiResponse_1 = require("../utils/apiResponse");
// =======================
// GLOBAL ERROR HANDLER
// =======================
const errorHandler = (error, req, res, next) => {
    console.error("GLOBAL ERROR:", error);
    // =======================
    // PRISMA DUPLICATE ERROR
    // =======================
    if (error instanceof client_1.Prisma.PrismaClientKnownRequestError
        &&
            error.code === "P2002") {
        return (0, apiResponse_1.sendErrorResponse)(res, 400, "Duplicate data already exists", {
            field: error.meta,
        });
    }
    // =======================
    // PRISMA NOT FOUND ERROR
    // =======================
    if (error instanceof client_1.Prisma.PrismaClientKnownRequestError
        &&
            error.code === "P2025") {
        return (0, apiResponse_1.sendErrorResponse)(res, 404, "Requested data not found");
    }
    // =======================
    // CUSTOM ERROR
    // =======================
    if (error instanceof Error) {
        return (0, apiResponse_1.sendErrorResponse)(res, 500, error.message);
    }
    // =======================
    // UNKNOWN ERROR
    // =======================
    return (0, apiResponse_1.sendErrorResponse)(res, 500, "Internal Server Error");
};
exports.errorHandler = errorHandler;
