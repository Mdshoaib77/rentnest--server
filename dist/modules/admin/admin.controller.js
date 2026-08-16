"use strict";
// // // // // // // import type {
// // // // // // //   Request,
// // // // // // //   Response,
// // // // // // // } from "express";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookingStatusController = exports.deletePropertyController = exports.deleteUserController = exports.getAllBookingsController = exports.getAllPropertiesController = exports.getAllUsersController = exports.getAdminStatsController = void 0;
const admin_service_1 = require("./admin.service");
// =======================
// GET ADMIN DASHBOARD STATS
// =======================
const getAdminStatsController = async (req, res) => {
    try {
        const stats = await (0, admin_service_1.getAdminStats)();
        res.status(200).json({
            success: true,
            message: "Admin dashboard stats fetched successfully",
            data: stats,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to fetch admin stats",
        });
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
        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data: users,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to fetch users",
        });
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
        res.status(200).json({
            success: true,
            message: "Properties fetched successfully",
            data: properties,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to fetch properties",
        });
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
        res.status(200).json({
            success: true,
            message: "Bookings fetched successfully",
            data: bookings,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to fetch bookings",
        });
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
            return res.status(401).json({
                success: false,
                message: "Unauthorized user",
            });
        }
        const deletedUser = await (0, admin_service_1.deleteUser)(userId, adminId);
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: deletedUser,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to delete user",
        });
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
        res.status(200).json({
            success: true,
            message: "Property deleted successfully",
            data: deletedProperty,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to delete property",
        });
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
            return res.status(400).json({
                success: false,
                message: "Status is required",
            });
        }
        const updatedBooking = await (0, admin_service_1.updateBookingStatus)(bookingId, status);
        res.status(200).json({
            success: true,
            message: "Booking status updated successfully",
            data: updatedBooking,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to update booking status",
        });
    }
};
exports.updateBookingStatusController = updateBookingStatusController;
