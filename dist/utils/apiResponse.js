"use strict";
// // import type {
// //   Response,
// // } from "express";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendErrorResponse = exports.sendResponse = void 0;
// =======================
// SUCCESS RESPONSE
// =======================
const sendResponse = (res, statusCode, message, data, meta) => {
    const response = {
        success: true,
        message,
    };
    if (data !== undefined) {
        response.data = data;
    }
    if (meta !== undefined) {
        response.meta = meta;
    }
    return res
        .status(statusCode)
        .json(response);
};
exports.sendResponse = sendResponse;
// =======================
// ERROR RESPONSE
// =======================
const sendErrorResponse = (res, statusCode, message, errors) => {
    const response = {
        success: false,
        message,
    };
    if (errors !== undefined) {
        response.errors = errors;
    }
    return res
        .status(statusCode)
        .json(response);
};
exports.sendErrorResponse = sendErrorResponse;
