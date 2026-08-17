"use strict";
// // // import type { Request, Response } from "express";
// // // import {
// // //   registerValidationSchema,
// // // } from "./auth.validation";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = exports.registerController = void 0;
const auth_service_1 = require("./auth.service");
const apiResponse_1 = require("../../utils/apiResponse");
// =======================
// REGISTER CONTROLLER
// =======================
const registerController = async (req, res) => {
    try {
        const user = await (0, auth_service_1.registerUser)(req.body);
        return (0, apiResponse_1.sendResponse)(res, 201, "User registered successfully", user);
    }
    catch (error) {
        return (0, apiResponse_1.sendErrorResponse)(res, 400, error instanceof Error
            ? error.message
            : "Something went wrong");
    }
};
exports.registerController = registerController;
// =======================
// LOGIN CONTROLLER
// =======================
const loginController = async (req, res) => {
    try {
        const result = await (0, auth_service_1.loginUser)(req.body);
        return (0, apiResponse_1.sendResponse)(res, 200, "Login successful", result);
    }
    catch (error) {
        return (0, apiResponse_1.sendErrorResponse)(res, 400, error instanceof Error
            ? error.message
            : "Login failed");
    }
};
exports.loginController = loginController;
