"use strict";
// // // // // import type {
// // // // //   Request,
// // // // //   Response,
// // // // // } from "express";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookingStatusController = exports.getLandlordBookingsController = exports.getTenantBookingsController = exports.createBookingController = void 0;
const booking_service_1 = require("./booking.service");
const apiResponse_1 = require("../../utils/apiResponse");
// =======================
// CREATE BOOKING
// TENANT ONLY
// =======================
const createBookingController = async (req, res) => {
    try {
        const tenantId = req.user?.id;
        if (!tenantId) {
            return (0, apiResponse_1.sendErrorResponse)(res, 401, "User not authenticated");
        }
        const booking = await (0, booking_service_1.createBooking)(req.body, tenantId);
        return (0, apiResponse_1.sendResponse)(res, 201, "Booking created successfully", booking);
    }
    catch (error) {
        return (0, apiResponse_1.sendErrorResponse)(res, 400, error instanceof Error
            ? error.message
            : "Booking creation failed");
    }
};
exports.createBookingController = createBookingController;
// =======================
// GET TENANT BOOKINGS
// TENANT ONLY
// =======================
const getTenantBookingsController = async (req, res) => {
    try {
        const tenantId = req.user?.id;
        if (!tenantId) {
            return (0, apiResponse_1.sendErrorResponse)(res, 401, "User not authenticated");
        }
        const bookings = await (0, booking_service_1.getMyBookings)(tenantId);
        return (0, apiResponse_1.sendResponse)(res, 200, "Bookings fetched successfully", bookings);
    }
    catch (error) {
        return (0, apiResponse_1.sendErrorResponse)(res, 500, error instanceof Error
            ? error.message
            : "Failed to fetch bookings");
    }
};
exports.getTenantBookingsController = getTenantBookingsController;
// =======================
// GET LANDLORD BOOKINGS
// LANDLORD ONLY
// =======================
const getLandlordBookingsController = async (req, res) => {
    try {
        const landlordId = req.user?.id;
        if (!landlordId) {
            return (0, apiResponse_1.sendErrorResponse)(res, 401, "User not authenticated");
        }
        const bookings = await (0, booking_service_1.getLandlordBookings)(landlordId);
        return (0, apiResponse_1.sendResponse)(res, 200, "Landlord bookings fetched successfully", bookings);
    }
    catch (error) {
        return (0, apiResponse_1.sendErrorResponse)(res, 500, error instanceof Error
            ? error.message
            : "Failed to fetch landlord bookings");
    }
};
exports.getLandlordBookingsController = getLandlordBookingsController;
// =======================
// UPDATE BOOKING STATUS
// LANDLORD ONLY
// =======================
const updateBookingStatusController = async (req, res) => {
    try {
        const landlordId = req.user?.id;
        if (!landlordId) {
            return (0, apiResponse_1.sendErrorResponse)(res, 401, "User not authenticated");
        }
        const bookingId = String(req.params.id);
        const booking = await (0, booking_service_1.updateBookingStatus)(bookingId, landlordId, req.body);
        return (0, apiResponse_1.sendResponse)(res, 200, "Booking status updated successfully", booking);
    }
    catch (error) {
        return (0, apiResponse_1.sendErrorResponse)(res, 400, error instanceof Error
            ? error.message
            : "Status update failed");
    }
};
exports.updateBookingStatusController = updateBookingStatusController;
