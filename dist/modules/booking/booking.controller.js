"use strict";
// // // // // import type {
// // // // //   Request,
// // // // //   Response,
// // // // // } from "express";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookingStatusController = exports.getLandlordBookingsController = exports.getTenantBookingsController = exports.createBookingController = void 0;
const booking_service_1 = require("./booking.service");
// =======================
// CREATE BOOKING
// TENANT ONLY
// =======================
const createBookingController = async (req, res) => {
    try {
        const tenantId = req.user?.id;
        if (!tenantId) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated",
            });
        }
        const booking = await (0, booking_service_1.createBooking)(req.body, tenantId);
        res.status(201).json({
            success: true,
            message: "Booking created successfully",
            data: booking,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Booking creation failed",
        });
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
            return res.status(401).json({
                success: false,
                message: "User not authenticated",
            });
        }
        const bookings = await (0, booking_service_1.getMyBookings)(tenantId);
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
exports.getTenantBookingsController = getTenantBookingsController;
// =======================
// GET LANDLORD BOOKINGS
// LANDLORD ONLY
// =======================
const getLandlordBookingsController = async (req, res) => {
    try {
        const landlordId = req.user?.id;
        if (!landlordId) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated",
            });
        }
        const bookings = await (0, booking_service_1.getLandlordBookings)(landlordId);
        res.status(200).json({
            success: true,
            message: "Landlord bookings fetched successfully",
            data: bookings,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to fetch landlord bookings",
        });
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
            return res.status(401).json({
                success: false,
                message: "User not authenticated",
            });
        }
        const bookingId = String(req.params.id);
        const booking = await (0, booking_service_1.updateBookingStatus)(bookingId, landlordId, req.body);
        res.status(200).json({
            success: true,
            message: "Booking status updated successfully",
            data: booking,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Status update failed",
        });
    }
};
exports.updateBookingStatusController = updateBookingStatusController;
