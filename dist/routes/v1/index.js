"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = __importDefault(require("../../modules/auth/auth.route"));
const property_route_1 = __importDefault(require("../../modules/property/property.route"));
const booking_route_1 = __importDefault(require("../../modules/booking/booking.route"));
const admin_route_1 = __importDefault(require("../../modules/admin/admin.route"));
const router = (0, express_1.Router)();
// =======================
// API V1 ROUTES
// =======================
router.use("/auth", auth_route_1.default);
router.use("/properties", property_route_1.default);
router.use("/bookings", booking_route_1.default);
router.use("/admin", admin_route_1.default);
exports.default = router;
