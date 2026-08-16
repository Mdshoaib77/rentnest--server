"use strict";
// // // // import { Router } from "express";
// // // // import {
// // // //   registerController,
// // // // } from "./auth.controller";
Object.defineProperty(exports, "__esModule", { value: true });
// // // // const router = Router();
// // // // router.post(
// // // //   "/register",
// // // //   registerController
// // // // );
// // // // export default router;
// // // import {
// // //   Router,
// // // } from "express";
// // // import {
// // //   registerController,
// // //   loginController,
// // // } from "./auth.controller";
// // // const router =
// // //   Router();
// // // router.post(
// // //   "/register",
// // //   registerController
// // // );
// // // router.post(
// // //   "/login",
// // //   loginController
// // // );
// // // export default router;
// // import {
// //   Router,
// // } from "express";
// // import {
// //   registerController,
// //   loginController,
// // } from "./auth.controller";
// // import {
// //   registerSchema,
// //   loginSchema,
// // } from "./auth.validation";
// // import {
// //   validate,
// // } from "../../middlewares/validate.middleware";
// // const router = Router();
// // // =======================
// // // REGISTER
// // // =======================
// // router.post(
// //   "/register",
// //   validate(
// //     registerSchema
// //   ),
// //   registerController
// // );
// // // =======================
// // // LOGIN
// // // =======================
// // router.post(
// //   "/login",
// //   validate(
// //     loginSchema
// //   ),
// //   loginController
// // );
// // export default router;
// import {
//   Router,
// } from "express";
// import {
//   registerController,
//   loginController,
// } from "./auth.controller";
// import {
//   registerSchema,
//   loginSchema,
// } from "./auth.validation";
// import {
//   validate,
// } from "../../middlewares/validate.middleware";
// const router = Router();
// // =======================
// // REGISTER
// // =======================
// router.post(
//   "/register",
//   validate(
//     registerSchema
//   ),
//   registerController
// );
// // =======================
// // LOGIN
// // =======================
// router.post(
//   "/login",
//   validate(
//     loginSchema
//   ),
//   loginController
// );
// export default router;
// import {
//   Router,
// } from "express";
// import {
//   registerController,
//   loginController,
// } from "./auth.controller";
// import {
//   registerSchema,
//   loginSchema,
// } from "./auth.validation";
// import {
//   validate,
// } from "../../middlewares/validate.middleware";
// const router = Router();
// // =======================
// // REGISTER
// // =======================
// router.post(
//   "/register",
//   validate(
//     registerSchema
//   ),
//   registerController
// );
// // =======================
// // LOGIN
// // =======================
// router.post(
//   "/login",
//   validate(
//     loginSchema
//   ),
//   loginController
// );
// export default router;
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const auth_validation_1 = require("./auth.validation");
const validate_middleware_1 = require("../../middlewares/validate.middleware");
const router = (0, express_1.Router)();
// =======================
// REGISTER
// =======================
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register new user
 *     description: Create a new RentNest account
 *     tags:
 *       - Auth
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *
 *             properties:
 *               name:
 *                 type: string
 *                 example: Rahim
 *
 *               email:
 *                 type: string
 *                 example: rahim@gmail.com
 *
 *               password:
 *                 type: string
 *                 example: 123456
 *
 *               role:
 *                 type: string
 *                 enum:
 *                   - TENANT
 *                   - LANDLORD
 *                   - ADMIN
 *                 example: TENANT
 *
 *
 *     responses:
 *       201:
 *         description: User registered successfully
 *
 *       400:
 *         description: Validation error or user already exists
 *
 */
router.post("/register", (0, validate_middleware_1.validate)(auth_validation_1.registerSchema), auth_controller_1.registerController);
// =======================
// LOGIN
// =======================
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     description: Login and get JWT token
 *     tags:
 *       - Auth
 *
 *     requestBody:
 *       required: true
 *
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *
 *             required:
 *               - email
 *               - password
 *
 *             properties:
 *
 *               email:
 *                 type: string
 *                 example: rahim@gmail.com
 *
 *               password:
 *                 type: string
 *                 example: 123456
 *
 *
 *     responses:
 *
 *       200:
 *         description: Login successful
 *
 *       400:
 *         description: Invalid credentials
 *
 */
router.post("/login", (0, validate_middleware_1.validate)(auth_validation_1.loginSchema), auth_controller_1.loginController);
exports.default = router;
