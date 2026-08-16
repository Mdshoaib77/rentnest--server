"use strict";
// // import type { Request, Response } from "express";
// // import {
// //   registerValidationSchema,
// // } from "./auth.validation";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = exports.registerController = void 0;
const auth_service_1 = require("./auth.service");
// =======================
// REGISTER CONTROLLER
// =======================
const registerController = async (req, res) => {
    try {
        const user = await (0, auth_service_1.registerUser)(req.body);
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: user,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Something went wrong",
        });
    }
};
exports.registerController = registerController;
// =======================
// LOGIN CONTROLLER
// =======================
const loginController = async (req, res) => {
    try {
        const result = await (0, auth_service_1.loginUser)(req.body);
        res.status(200).json({
            success: true,
            message: "Login successful",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Login failed",
        });
    }
};
exports.loginController = loginController;
