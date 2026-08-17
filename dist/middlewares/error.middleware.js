"use strict";
// import type {
//   Request,
//   Response,
//   NextFunction,
// } from "express";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = require("jsonwebtoken");
const AppError_1 = require("../utils/AppError");
// =======================
// GLOBAL ERROR HANDLER
// =======================
const errorHandler = (error, req, res, next) => {
    console.error("GLOBAL ERROR:", error);
    // =======================
    // ZOD VALIDATION ERROR
    // =======================
    if (error instanceof zod_1.ZodError) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: error.issues.map((issue) => ({
                field: issue.path.join("."),
                message: issue.message,
            })),
        });
    }
    // =======================
    // PRISMA KNOWN ERROR
    // =======================
    if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        // Duplicate data
        if (error.code === "P2002") {
            return res.status(400).json({
                success: false,
                message: "Duplicate data already exists",
                error: error.meta,
            });
        }
        // Not Found
        if (error.code === "P2025") {
            return res.status(404).json({
                success: false,
                message: "Requested data not found",
            });
        }
    }
    // =======================
    // JWT ERROR
    // =======================
    if (error instanceof jsonwebtoken_1.TokenExpiredError) {
        return res.status(401).json({
            success: false,
            message: "Token expired, please login again",
        });
    }
    if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
        return res.status(401).json({
            success: false,
            message: "Invalid token",
        });
    }
    // =======================
    // CUSTOM ERROR
    // =======================
    if (error instanceof AppError_1.AppError) {
        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
        });
    }
    // =======================
    // UNKNOWN ERROR
    // =======================
    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
};
exports.errorHandler = errorHandler;
