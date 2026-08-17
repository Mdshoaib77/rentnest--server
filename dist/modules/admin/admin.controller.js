"use strict";
// // // // // // // import type {
// // // // // // //   Request,
// // // // // // //   Response,
// // // // // // // } from "express";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookingStatusController = exports.deletePropertyController = exports.deleteUserController = exports.getAllBookingsController = exports.getAllPropertiesController = exports.getAllUsersController = exports.getAdminStatsController = void 0;
const admin_service_1 = require("./admin.service");
const apiResponse_1 = require("../../utils/apiResponse");
// =======================
// GET ADMIN DASHBOARD STATS
// =======================
const getAdminStatsController = async (req, res) => {
    try {
        const stats = await (0, admin_service_1.getAdminStats)();
        return (0, apiResponse_1.sendResponse)(res, 200, "Admin dashboard stats fetched successfully", stats);
    }
    catch (error) {
        return (0, apiResponse_1.sendErrorResponse)(res, 500, error instanceof Error
            ? error.message
            : "Failed to fetch admin stats");
    }
};
exports.getAdminStatsController = getAdminStatsController;
// =======================
// GET ALL USERS
// ADMIN ONLY
// =======================
const getAllUsersController = async (req, res) => {
    try {
        const users = await (0, admin_service_1.getAllUsers)();
        return (0, apiResponse_1.sendResponse)(res, 200, "Users fetched successfully", users);
    }
    catch (error) {
        return (0, apiResponse_1.sendErrorResponse)(res, 500, error instanceof Error
            ? error.message
            : "Failed to fetch users");
    }
};
exports.getAllUsersController = getAllUsersController;
// =======================
// GET ALL PROPERTIES
// ADMIN ONLY
// =======================
const getAllPropertiesController = async (req, res) => {
    try {
        const properties = await (0, admin_service_1.getAllProperties)();
        return (0, apiResponse_1.sendResponse)(res, 200, "Properties fetched successfully", properties);
    }
    catch (error) {
        return (0, apiResponse_1.sendErrorResponse)(res, 500, error instanceof Error
            ? error.message
            : "Failed to fetch properties");
    }
};
exports.getAllPropertiesController = getAllPropertiesController;
// =======================
// GET ALL BOOKINGS
// ADMIN ONLY
// =======================
const getAllBookingsController = async (req, res) => {
    try {
        const bookings = await (0, admin_service_1.getAllBookings)();
        return (0, apiResponse_1.sendResponse)(res, 200, "Bookings fetched successfully", bookings);
    }
    catch (error) {
        return (0, apiResponse_1.sendErrorResponse)(res, 500, error instanceof Error
            ? error.message
            : "Failed to fetch bookings");
    }
};
exports.getAllBookingsController = getAllBookingsController;
// =======================
// DELETE USER
// ADMIN ONLY
// =======================
const deleteUserController = async (req, res) => {
    try {
        const userId = req.params.id;
        const adminId = req.user?.id;
        if (!adminId) {
            return (0, apiResponse_1.sendErrorResponse)(res, 401, "Unauthorized user");
        }
        const deletedUser = await (0, admin_service_1.deleteUser)(userId, adminId);
        return (0, apiResponse_1.sendResponse)(res, 200, "User deleted successfully", deletedUser);
    }
    catch (error) {
        return (0, apiResponse_1.sendErrorResponse)(res, 500, error instanceof Error
            ? error.message
            : "Failed to delete user");
    }
};
exports.deleteUserController = deleteUserController;
// =======================
// DELETE PROPERTY
// ADMIN ONLY
// =======================
const deletePropertyController = async (req, res) => {
    try {
        const propertyId = req.params.id;
        const deletedProperty = await (0, admin_service_1.deleteProperty)(propertyId);
        return (0, apiResponse_1.sendResponse)(res, 200, "Property deleted successfully", deletedProperty);
    }
    catch (error) {
        return (0, apiResponse_1.sendErrorResponse)(res, 500, error instanceof Error
            ? error.message
            : "Failed to delete property");
    }
};
exports.deletePropertyController = deletePropertyController;
// =======================
// UPDATE BOOKING STATUS
// ADMIN ONLY
// =======================
const updateBookingStatusController = async (req, res) => {
    try {
        const bookingId = req.params.id;
        const { status, } = req.body;
        if (!status) {
            return (0, apiResponse_1.sendErrorResponse)(res, 400, "Status is required");
        }
        const updatedBooking = await (0, admin_service_1.updateBookingStatus)(bookingId, status);
        return (0, apiResponse_1.sendResponse)(res, 200, "Booking status updated successfully", updatedBooking);
    }
    catch (error) {
        return (0, apiResponse_1.sendErrorResponse)(res, 500, error instanceof Error
            ? error.message
            : "Failed to update booking status");
    }
};
exports.updateBookingStatusController = updateBookingStatusController;
