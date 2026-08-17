"use strict";
// import {
//   Router,
// } from "express";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import authRouter from "../../modules/auth/auth.route";
// import propertyRouter from "../../modules/property/property.route";
// import bookingRouter from "../../modules/booking/booking.route";
// import adminRouter from "../../modules/admin/admin.route";
// const router = Router();
// // =======================
// // API V1 ROUTES
// // =======================
// router.use(
//   "/auth",
//   authRouter
// );
// router.use(
//   "/properties",
//   propertyRouter
// );
// router.use(
//   "/bookings",
//   bookingRouter
// );
// router.use(
//   "/admin",
//   adminRouter
// );
// export default router;
const express_1 = require("express");
const auth_route_1 = __importDefault(require("../../modules/auth/auth.route"));
const property_route_1 = __importDefault(require("../../modules/property/property.route"));
const booking_route_1 = __importDefault(require("../../modules/booking/booking.route"));
const admin_route_1 = __importDefault(require("../../modules/admin/admin.route"));
const router = (0, express_1.Router)();
// =======================
// API V1 ROOT CHECK
// =======================
router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "RentNest API v1 running 🚀",
    });
});
// =======================
// API V1 ROUTES
// =======================
router.use("/auth", auth_route_1.default);
router.use("/properties", property_route_1.default);
router.use("/bookings", booking_route_1.default);
router.use("/admin", admin_route_1.default);
exports.default = router;
