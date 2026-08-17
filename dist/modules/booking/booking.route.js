"use strict";
// // // import {
// // //   Router,
// // // } from "express";
Object.defineProperty(exports, "__esModule", { value: true });
// // // import {
// // //   createBookingController,
// // // } from "./booking.controller";
// // // import {
// // //   authMiddleware,
// // // } from "../../middlewares/auth.middleware";
// // // import {
// // //   authorizeRole,
// // // } from "../../middlewares/role.middleware";
// // // const router = Router();
// // // // =======================
// // // // CREATE BOOKING
// // // // TENANT ONLY
// // // // =======================
// // // router.post(
// // //   "/",
// // //   authMiddleware,
// // //   authorizeRole(
// // //     "TENANT"
// // //   ),
// // //   createBookingController
// // // );
// // // export default router;
// // import {
// //   Router,
// // } from "express";
// // import {
// //   createBookingController,
// //   getMyBookingsController,
// //   getLandlordBookingsController,
// // } from "./booking.controller";
// // import {
// //   authMiddleware,
// // } from "../../middlewares/auth.middleware";
// // import {
// //   authorizeRole,
// // } from "../../middlewares/role.middleware";
// // const router = Router();
// // // =======================
// // // CREATE BOOKING
// // // TENANT ONLY
// // // =======================
// // router.post(
// //   "/",
// //   authMiddleware,
// //   authorizeRole(
// //     "TENANT"
// //   ),
// //   createBookingController
// // );
// // // =======================
// // // GET MY BOOKINGS
// // // TENANT ONLY
// // // =======================
// // router.get(
// //   "/my-bookings",
// //   authMiddleware,
// //   authorizeRole(
// //     "TENANT"
// //   ),
// //   getMyBookingsController
// // );
// // // =======================
// // // GET LANDLORD BOOKINGS
// // // LANDLORD ONLY
// // // =======================
// // router.get(
// //   "/landlord",
// //   authMiddleware,
// //   authorizeRole(
// //     "LANDLORD"
// //   ),
// //   getLandlordBookingsController
// // );
// // export default router;
// import {
//   Router,
// } from "express";
// import {
//   createBookingController,
//   getMyBookingsController,
//   getLandlordBookingsController,
//   updateBookingStatusController,
// } from "./booking.controller";
// import {
//   authMiddleware,
// } from "../../middlewares/auth.middleware";
// import {
//   authorizeRole,
// } from "../../middlewares/role.middleware";
// const router = Router();
// // =======================
// // CREATE BOOKING
// // TENANT ONLY
// // =======================
// router.post(
//   "/",
//   authMiddleware,
//   authorizeRole(
//     "TENANT"
//   ),
//   createBookingController
// );
// // =======================
// // GET MY BOOKINGS
// // TENANT ONLY
// // =======================
// router.get(
//   "/my-bookings",
//   authMiddleware,
//   authorizeRole(
//     "TENANT"
//   ),
//   getMyBookingsController
// );
// // =======================
// // GET LANDLORD BOOKINGS
// // LANDLORD ONLY
// // =======================
// router.get(
//   "/landlord",
//   authMiddleware,
//   authorizeRole(
//     "LANDLORD"
//   ),
//   getLandlordBookingsController
// );
// // =======================
// // UPDATE BOOKING STATUS
// // LANDLORD ONLY
// // =======================
// router.patch(
//   "/:id/status",
//   authMiddleware,
//   authorizeRole(
//     "LANDLORD"
//   ),
//   updateBookingStatusController
// );
// export default router;
// import {
//   Router,
// } from "express";
// import {
//   createBookingController,
//   getTenantBookingsController,
//   getLandlordBookingsController,
//   updateBookingStatusController,
// } from "./booking.controller";
// import {
//   authMiddleware,
// } from "../../middlewares/auth.middleware";
// import {
//   authorizeRole,
// } from "../../middlewares/role.middleware";
// import {
//   validate,
// } from "../../middlewares/validate.middleware";
// import {
//   createBookingSchema,
//   bookingIdSchema,
//   updateBookingStatusSchema,
// } from "./booking.validation";
// const router = Router();
// // =======================
// // CREATE BOOKING
// // TENANT ONLY
// // =======================
// router.post(
//   "/",
//   authMiddleware,
//   authorizeRole(
//     "TENANT"
//   ),
//   validate(
//     createBookingSchema
//   ),
//   createBookingController
// );
// // =======================
// // TENANT BOOKINGS
// // TENANT ONLY
// // =======================
// router.get(
//   "/tenant",
//   authMiddleware,
//   authorizeRole(
//     "TENANT"
//   ),
//   getTenantBookingsController
// );
// // =======================
// // LANDLORD BOOKINGS
// // LANDLORD ONLY
// // =======================
// router.get(
//   "/landlord",
//   authMiddleware,
//   authorizeRole(
//     "LANDLORD"
//   ),
//   getLandlordBookingsController
// );
// // =======================
// // UPDATE BOOKING STATUS
// // LANDLORD + ADMIN
// // =======================
// router.patch(
//   "/:id/status",
//   authMiddleware,
//   authorizeRole(
//     "LANDLORD",
//     "ADMIN"
//   ),
//   validate(
//     bookingIdSchema
//   ),
//   validate(
//     updateBookingStatusSchema
//   ),
//   updateBookingStatusController
// );
// export default router;
// import {
//   Router,
// } from "express";
// import {
//   createBookingController,
//   getTenantBookingsController,
//   getLandlordBookingsController,
//   updateBookingStatusController,
// } from "./booking.controller";
// import {
//   authMiddleware,
// } from "../../middlewares/auth.middleware";
// import {
//   authorizeRole,
// } from "../../middlewares/role.middleware";
// import {
//   validate,
// } from "../../middlewares/validate.middleware";
// import {
//   createBookingSchema,
//   bookingIdSchema,
//   updateBookingStatusSchema,
// } from "./booking.validation";
// const router = Router();
// // =======================
// // CREATE BOOKING
// // TENANT ONLY
// // =======================
// /**
//  * @swagger
//  * /api/bookings:
//  *   post:
//  *     summary: Create a booking
//  *     description: Tenant can create a booking for a property
//  *     tags:
//  *       - Bookings
//  *
//  *     security:
//  *       - bearerAuth: []
//  *
//  *     requestBody:
//  *       required: true
//  *
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *
//  *             required:
//  *               - propertyId
//  *               - startDate
//  *               - endDate
//  *
//  *             properties:
//  *
//  *               propertyId:
//  *                 type: string
//  *                 example: 17db2c66-31d2-4548-ae92-cf4691fd5b9c
//  *
//  *               startDate:
//  *                 type: string
//  *                 example: 2026-10-01
//  *
//  *               endDate:
//  *                 type: string
//  *                 example: 2026-11-01
//  *
//  *
//  *     responses:
//  *
//  *       201:
//  *         description: Booking created successfully
//  *
//  *       400:
//  *         description: Booking creation failed
//  *
//  */
// router.post(
//   "/",
//   authMiddleware,
//   authorizeRole(
//     "TENANT"
//   ),
//   validate(
//     createBookingSchema
//   ),
//   createBookingController
// );
// // =======================
// // TENANT BOOKINGS
// // TENANT ONLY
// // =======================
// /**
//  * @swagger
//  * /api/bookings/tenant:
//  *   get:
//  *     summary: Get tenant bookings
//  *     description: Fetch all bookings created by logged-in tenant
//  *     tags:
//  *       - Bookings
//  *
//  *     security:
//  *       - bearerAuth: []
//  *
//  *
//  *     responses:
//  *
//  *       200:
//  *         description: Bookings fetched successfully
//  *
//  */
// router.get(
//   "/tenant",
//   authMiddleware,
//   authorizeRole(
//     "TENANT"
//   ),
//   getTenantBookingsController
// );
// // =======================
// // LANDLORD BOOKINGS
// // LANDLORD ONLY
// // =======================
// /**
//  * @swagger
//  * /api/bookings/landlord:
//  *   get:
//  *     summary: Get landlord bookings
//  *     description: Fetch bookings for landlord properties
//  *     tags:
//  *       - Bookings
//  *
//  *     security:
//  *       - bearerAuth: []
//  *
//  *
//  *     responses:
//  *
//  *       200:
//  *         description: Landlord bookings fetched successfully
//  *
//  */
// router.get(
//   "/landlord",
//   authMiddleware,
//   authorizeRole(
//     "LANDLORD"
//   ),
//   getLandlordBookingsController
// );
// // =======================
// // UPDATE BOOKING STATUS
// // LANDLORD + ADMIN
// // =======================
// /**
//  * @swagger
//  * /api/bookings/{id}/status:
//  *   patch:
//  *     summary: Update booking status
//  *     description: Landlord or Admin can update booking status
//  *     tags:
//  *       - Bookings
//  *
//  *     security:
//  *       - bearerAuth: []
//  *
//  *
//  *     parameters:
//  *
//  *       - in: path
//  *         name: id
//  *         required: true
//  *
//  *         schema:
//  *           type: string
//  *
//  *         example: 1ad765f8-209b-401f-ad84-976be2cc8c80
//  *
//  *
//  *     requestBody:
//  *       required: true
//  *
//  *       content:
//  *         application/json:
//  *
//  *           schema:
//  *             type: object
//  *
//  *             required:
//  *               - status
//  *
//  *             properties:
//  *
//  *               status:
//  *                 type: string
//  *
//  *                 enum:
//  *                   - PENDING
//  *                   - ACCEPTED
//  *                   - REJECTED
//  *                   - PAID
//  *
//  *                 example: ACCEPTED
//  *
//  *
//  *     responses:
//  *
//  *       200:
//  *         description: Booking status updated successfully
//  *
//  *       400:
//  *         description: Status update failed
//  *
//  */
// router.patch(
//   "/:id/status",
//   authMiddleware,
//   authorizeRole(
//     "LANDLORD",
//     "ADMIN"
//   ),
//   validate(
//     bookingIdSchema
//   ),
//   validate(
//     updateBookingStatusSchema
//   ),
//   updateBookingStatusController
// );
// export default router;
const express_1 = require("express");
const booking_controller_1 = require("./booking.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const role_middleware_1 = require("../../middlewares/role.middleware");
const validate_middleware_1 = require("../../middlewares/validate.middleware");
const booking_validation_1 = require("./booking.validation");
const router = (0, express_1.Router)();
// =======================
// CREATE BOOKING
// TENANT ONLY
// =======================
/**
 * @swagger
 * /api/v1/bookings:
 *   post:
 *     summary: Create a booking
 *     description: Tenant can create a booking for a property
 *     tags:
 *       - Bookings
 *
 *     security:
 *       - bearerAuth: []
 */
router.post("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.authorizeRole)("TENANT"), (0, validate_middleware_1.validate)(booking_validation_1.createBookingSchema), booking_controller_1.createBookingController);
// =======================
// TENANT BOOKINGS
// TENANT ONLY
// =======================
/**
 * @swagger
 * /api/v1/bookings/tenant:
 *   get:
 *     summary: Get tenant bookings
 *     tags:
 *       - Bookings
 *
 *     security:
 *       - bearerAuth: []
 */
router.get("/tenant", auth_middleware_1.authMiddleware, (0, role_middleware_1.authorizeRole)("TENANT"), booking_controller_1.getTenantBookingsController);
// =======================
// LANDLORD BOOKINGS
// LANDLORD ONLY
// =======================
/**
 * @swagger
 * /api/v1/bookings/landlord:
 *   get:
 *     summary: Get landlord bookings
 *     tags:
 *       - Bookings
 *
 *     security:
 *       - bearerAuth: []
 */
router.get("/landlord", auth_middleware_1.authMiddleware, (0, role_middleware_1.authorizeRole)("LANDLORD"), booking_controller_1.getLandlordBookingsController);
// =======================
// UPDATE BOOKING STATUS
// LANDLORD + ADMIN
// =======================
/**
 * @swagger
 * /api/v1/bookings/{id}/status:
 *   patch:
 *     summary: Update booking status
 *     description: Landlord or Admin can update booking status
 *     tags:
 *       - Bookings
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.patch("/:id/status", auth_middleware_1.authMiddleware, (0, role_middleware_1.authorizeRole)("LANDLORD", "ADMIN"), (0, validate_middleware_1.validate)(booking_validation_1.bookingIdSchema), (0, validate_middleware_1.validate)(booking_validation_1.updateBookingStatusSchema), booking_controller_1.updateBookingStatusController);
// =======================
// EXPORT ROUTER
// =======================
exports.default = router;
