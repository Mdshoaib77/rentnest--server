"use strict";
// // // // // // import type {
// // // // // //   Request,
// // // // // //   Response,
// // // // // //   NextFunction,
// // // // // // } from "express";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const zod_1 = require("zod");
const apiResponse_1 = require("../utils/apiResponse");
// =======================
// VALIDATION MIDDLEWARE
// =======================
const validate = (schema) => {
    return (req, res, next) => {
        try {
            const result = schema.safeParse({
                body: req.body,
                params: req.params,
                query: req.query,
            });
            if (!result.success) {
                const errors = result.error.issues.map((error) => ({
                    field: error.path.join("."),
                    message: error.message,
                }));
                return (0, apiResponse_1.sendErrorResponse)(res, 400, "Validation failed", errors);
            }
            const validatedData = result.data;
            if (validatedData.body) {
                req.body =
                    validatedData.body;
            }
            if (validatedData.params) {
                req.params =
                    validatedData.params;
            }
            if (validatedData.query) {
                req.query =
                    validatedData.query;
            }
            next();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                return (0, apiResponse_1.sendErrorResponse)(res, 400, "Invalid request data", error.issues);
            }
            return (0, apiResponse_1.sendErrorResponse)(res, 500, "Validation middleware error");
        }
    };
};
exports.validate = validate;
