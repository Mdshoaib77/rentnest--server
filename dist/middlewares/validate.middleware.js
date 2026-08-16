"use strict";
// // // // // import type {
// // // // //   Request,
// // // // //   Response,
// // // // //   NextFunction,
// // // // // } from "express";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
// =======================
// ZOD VALIDATION MIDDLEWARE
// =======================
const validate = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse({
            body: req.body,
            params: req.params,
            query: req.query,
        });
        if (!result.success) {
            return res.status(400).json({
                success: false,
                message: result.error.issues[0]?.message
                    || "Validation failed",
                errors: result.error.issues,
            });
        }
        if (result.data.body) {
            req.body = result.data.body;
        }
        if (result.data.params) {
            req.params = result.data.params;
        }
        if (result.data.query) {
            req.query = result.data.query;
        }
        next();
    };
};
exports.validate = validate;
