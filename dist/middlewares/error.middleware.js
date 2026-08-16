"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
// =======================
// GLOBAL ERROR HANDLER
// =======================
const errorHandler = (error, req, res, next) => {
    console.error("GLOBAL ERROR:", error);
    // Prisma Known Error
    if (error.code === "P2002") {
        return res.status(400).json({
            success: false,
            message: "Duplicate data already exists",
            error: error.meta,
        });
    }
    // Prisma Not Found Error
    if (error.code === "P2025") {
        return res.status(404).json({
            success: false,
            message: "Requested data not found",
        });
    }
    // Custom Error
    if (error.message) {
        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.message,
        });
    }
    // Unknown Error
    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
};
exports.errorHandler = errorHandler;
