"use strict";
// // // import {
// // //   Router,
// // // } from "express";
Object.defineProperty(exports, "__esModule", { value: true });
// // // import {
// // //   createPropertyController,
// // // } from "./property.controller";
// // // import {
// // //   authMiddleware,
// // // } from "../../middlewares/auth.middleware";
// // // import {
// // //   authorizeRole,
// // // } from "../../middlewares/role.middleware";
// // // const router = Router();
// // // // Create Property
// // // // Only LANDLORD and ADMIN can access
// // // router.post(
// // //   "/",
// // //   authMiddleware,
// // //   authorizeRole(
// // //     "LANDLORD",
// // //     "ADMIN"
// // //   ),
// // //   createPropertyController
// // // );
// // // export default router;
// // import {
// //   Router,
// // } from "express";
// // import {
// //   createPropertyController,
// //   getAllPropertiesController,
// //   getSinglePropertyController,
// // } from "./property.controller";
// // import {
// //   authMiddleware,
// // } from "../../middlewares/auth.middleware";
// // import {
// //   authorizeRole,
// // } from "../../middlewares/role.middleware";
// // const router = Router();
// // // =======================
// // // GET ALL PROPERTIES
// // // Public Route
// // // =======================
// // router.get(
// //   "/",
// //   getAllPropertiesController
// // );
// // // =======================
// // // GET SINGLE PROPERTY
// // // Public Route
// // // =======================
// // router.get(
// //   "/:id",
// //   getSinglePropertyController
// // );
// // // =======================
// // // CREATE PROPERTY
// // // LANDLORD + ADMIN ONLY
// // // =======================
// // router.post(
// //   "/",
// //   authMiddleware,
// //   authorizeRole(
// //     "LANDLORD",
// //     "ADMIN"
// //   ),
// //   createPropertyController
// // );
// // export default router;
// import {
//   Router,
// } from "express";
// import {
//   createPropertyController,
//   getAllPropertiesController,
//   getSinglePropertyController,
//   updatePropertyController,
//   deletePropertyController,
// } from "./property.controller";
// import {
//   authMiddleware,
// } from "../../middlewares/auth.middleware";
// import {
//   authorizeRole,
// } from "../../middlewares/role.middleware";
// const router = Router();
// // =======================
// // GET ALL PROPERTIES
// // Public Route
// // =======================
// router.get(
//   "/",
//   getAllPropertiesController
// );
// // =======================
// // GET SINGLE PROPERTY
// // Public Route
// // =======================
// router.get(
//   "/:id",
//   getSinglePropertyController
// );
// // =======================
// // CREATE PROPERTY
// // LANDLORD + ADMIN ONLY
// // =======================
// router.post(
//   "/",
//   authMiddleware,
//   authorizeRole(
//     "LANDLORD",
//     "ADMIN"
//   ),
//   createPropertyController
// );
// // =======================
// // UPDATE PROPERTY
// // LANDLORD + ADMIN ONLY
// // =======================
// router.patch(
//   "/:id",
//   authMiddleware,
//   authorizeRole(
//     "LANDLORD",
//     "ADMIN"
//   ),
//   updatePropertyController
// );
// // =======================
// // DELETE PROPERTY
// // LANDLORD + ADMIN ONLY
// // =======================
// router.delete(
//   "/:id",
//   authMiddleware,
//   authorizeRole(
//     "LANDLORD",
//     "ADMIN"
//   ),
//   deletePropertyController
// );
// export default router;
// import {
//   Router,
// } from "express";
// import {
//   createPropertyController,
//   getAllPropertiesController,
//   getSinglePropertyController,
//   getMyPropertiesController,
//   updatePropertyController,
//   deletePropertyController,
// } from "./property.controller";
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
//   createPropertySchema,
//   updatePropertySchema,
//   propertyIdSchema,
// } from "./property.validation";
// const router = Router();
// // =======================
// // GET ALL PROPERTIES
// // PUBLIC
// // =======================
// router.get(
//   "/",
//   getAllPropertiesController
// );
// // =======================
// // GET SINGLE PROPERTY
// // PUBLIC
// // =======================
// router.get(
//   "/:id",
//   validate(
//     propertyIdSchema
//   ),
//   getSinglePropertyController
// );
// // =======================
// // CREATE PROPERTY
// // LANDLORD + ADMIN
// // =======================
// router.post(
//   "/",
//   authMiddleware,
//   authorizeRole(
//     "LANDLORD",
//     "ADMIN"
//   ),
//   validate(
//     createPropertySchema
//   ),
//   createPropertyController
// );
// // =======================
// // GET MY PROPERTIES
// // LANDLORD
// // =======================
// router.get(
//   "/my-properties",
//   authMiddleware,
//   authorizeRole(
//     "LANDLORD"
//   ),
//   getMyPropertiesController
// );
// // =======================
// // UPDATE PROPERTY
// // LANDLORD + ADMIN
// // =======================
// router.patch(
//   "/:id",
//   authMiddleware,
//   authorizeRole(
//     "LANDLORD",
//     "ADMIN"
//   ),
//   validate(
//     propertyIdSchema
//   ),
//   validate(
//     updatePropertySchema
//   ),
//   updatePropertyController
// );
// // =======================
// // DELETE PROPERTY
// // LANDLORD + ADMIN
// // =======================
// router.delete(
//   "/:id",
//   authMiddleware,
//   authorizeRole(
//     "LANDLORD",
//     "ADMIN"
//   ),
//   validate(
//     propertyIdSchema
//   ),
//   deletePropertyController
// );
// export default router;
// import {
//   Router,
// } from "express";
// import {
//   createPropertyController,
//   getAllPropertiesController,
//   getSinglePropertyController,
//   getMyPropertiesController,
//   updatePropertyController,
//   deletePropertyController,
// } from "./property.controller";
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
//   createPropertySchema,
//   updatePropertySchema,
//   propertyIdSchema,
// } from "./property.validation";
// const router = Router();
// // =======================
// // GET ALL PROPERTIES
// // PUBLIC
// // =======================
// /**
//  * @swagger
//  * /api/properties:
//  *   get:
//  *     summary: Get all properties
//  *     description: Fetch all available properties with filters and pagination
//  *     tags:
//  *       - Properties
//  *
//  *     parameters:
//  *
//  *       - in: query
//  *         name: location
//  *         schema:
//  *           type: string
//  *         example: Dhaka
//  *
//  *       - in: query
//  *         name: minPrice
//  *         schema:
//  *           type: number
//  *         example: 10000
//  *
//  *       - in: query
//  *         name: maxPrice
//  *         schema:
//  *           type: number
//  *         example: 50000
//  *
//  *       - in: query
//  *         name: bedrooms
//  *         schema:
//  *           type: number
//  *         example: 3
//  *
//  *
//  *     responses:
//  *       200:
//  *         description: Properties fetched successfully
//  *
//  */
// router.get(
//   "/",
//   getAllPropertiesController
// );
// // =======================
// // GET SINGLE PROPERTY
// // PUBLIC
// // =======================
// /**
//  * @swagger
//  * /api/properties/{id}:
//  *   get:
//  *     summary: Get single property
//  *     tags:
//  *       - Properties
//  *
//  *     parameters:
//  *
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         example: 17db2c66-31d2-4548-ae92-cf4691fd5b9c
//  *
//  *
//  *     responses:
//  *
//  *       200:
//  *         description: Property fetched successfully
//  *
//  *       404:
//  *         description: Property not found
//  *
//  */
// router.get(
//   "/:id",
//   validate(
//     propertyIdSchema
//   ),
//   getSinglePropertyController
// );
// // =======================
// // CREATE PROPERTY
// // LANDLORD + ADMIN
// // =======================
// /**
//  * @swagger
//  * /api/properties:
//  *   post:
//  *     summary: Create new property
//  *     tags:
//  *       - Properties
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
//  *               - title
//  *               - description
//  *               - location
//  *               - price
//  *               - bedrooms
//  *               - bathrooms
//  *
//  *             properties:
//  *
//  *               title:
//  *                 type: string
//  *                 example: Luxury Apartment
//  *
//  *               description:
//  *                 type: string
//  *                 example: Beautiful apartment in Dhaka
//  *
//  *               location:
//  *                 type: string
//  *                 example: Dhaka
//  *
//  *               price:
//  *                 type: number
//  *                 example: 25000
//  *
//  *               bedrooms:
//  *                 type: number
//  *                 example: 3
//  *
//  *               bathrooms:
//  *                 type: number
//  *                 example: 2
//  *
//  *
//  *     responses:
//  *
//  *       201:
//  *         description: Property created successfully
//  *
//  */
// router.post(
//   "/",
//   authMiddleware,
//   authorizeRole(
//     "LANDLORD",
//     "ADMIN"
//   ),
//   validate(
//     createPropertySchema
//   ),
//   createPropertyController
// );
// // =======================
// // GET MY PROPERTIES
// // LANDLORD
// // =======================
// /**
//  * @swagger
//  * /api/properties/my-properties:
//  *   get:
//  *     summary: Get landlord own properties
//  *     tags:
//  *       - Properties
//  *
//  *     security:
//  *       - bearerAuth: []
//  *
//  *
//  *     responses:
//  *
//  *       200:
//  *         description: My properties fetched successfully
//  *
//  */
// router.get(
//   "/my-properties",
//   authMiddleware,
//   authorizeRole(
//     "LANDLORD"
//   ),
//   getMyPropertiesController
// );
// // =======================
// // UPDATE PROPERTY
// // LANDLORD + ADMIN
// // =======================
// /**
//  * @swagger
//  * /api/properties/{id}:
//  *   patch:
//  *     summary: Update property
//  *     tags:
//  *       - Properties
//  *
//  *     security:
//  *       - bearerAuth: []
//  *
//  *     parameters:
//  *
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *
//  *
//  *     responses:
//  *
//  *       200:
//  *         description: Property updated successfully
//  *
//  */
// router.patch(
//   "/:id",
//   authMiddleware,
//   authorizeRole(
//     "LANDLORD",
//     "ADMIN"
//   ),
//   validate(
//     propertyIdSchema
//   ),
//   validate(
//     updatePropertySchema
//   ),
//   updatePropertyController
// );
// // =======================
// // DELETE PROPERTY
// // LANDLORD + ADMIN
// // =======================
// /**
//  * @swagger
//  * /api/properties/{id}:
//  *   delete:
//  *     summary: Delete property
//  *     tags:
//  *       - Properties
//  *
//  *     security:
//  *       - bearerAuth: []
//  *
//  *     parameters:
//  *
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *
//  *
//  *     responses:
//  *
//  *       200:
//  *         description: Property deleted successfully
//  *
//  *       400:
//  *         description: Cannot delete property with existing bookings
//  *
//  */
// router.delete(
//   "/:id",
//   authMiddleware,
//   authorizeRole(
//     "LANDLORD",
//     "ADMIN"
//   ),
//   validate(
//     propertyIdSchema
//   ),
//   deletePropertyController
// );
// export default router;
const express_1 = require("express");
const property_controller_1 = require("./property.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const role_middleware_1 = require("../../middlewares/role.middleware");
const validate_middleware_1 = require("../../middlewares/validate.middleware");
const property_validation_1 = require("./property.validation");
const router = (0, express_1.Router)();
// =======================
// GET ALL PROPERTIES
// PUBLIC
// =======================
/**
 * @swagger
 * /api/properties:
 *   get:
 *     summary: Get all properties
 *     description: Fetch all available properties with filters and pagination
 *     tags:
 *       - Properties
 *
 *     responses:
 *       200:
 *         description: Properties fetched successfully
 */
router.get("/", property_controller_1.getAllPropertiesController);
// =======================
// GET MY PROPERTIES
// LANDLORD
// =======================
/**
 * @swagger
 * /api/properties/my-properties:
 *   get:
 *     summary: Get landlord own properties
 *     tags:
 *       - Properties
 *
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: My properties fetched successfully
 */
router.get("/my-properties", auth_middleware_1.authMiddleware, (0, role_middleware_1.authorizeRole)("LANDLORD"), property_controller_1.getMyPropertiesController);
// =======================
// GET SINGLE PROPERTY
// PUBLIC
// =======================
/**
 * @swagger
 * /api/properties/{id}:
 *   get:
 *     summary: Get single property
 *     tags:
 *       - Properties
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: Property fetched successfully
 */
router.get("/:id", (0, validate_middleware_1.validate)(property_validation_1.propertyIdSchema), property_controller_1.getSinglePropertyController);
// =======================
// CREATE PROPERTY
// LANDLORD + ADMIN
// =======================
/**
 * @swagger
 * /api/properties:
 *   post:
 *     summary: Create new property
 *     tags:
 *       - Properties
 *
 *     security:
 *       - bearerAuth: []
 */
router.post("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.authorizeRole)("LANDLORD", "ADMIN"), (0, validate_middleware_1.validate)(property_validation_1.createPropertySchema), property_controller_1.createPropertyController);
// =======================
// UPDATE PROPERTY
// LANDLORD + ADMIN
// =======================
/**
 * @swagger
 * /api/properties/{id}:
 *   patch:
 *     summary: Update property
 *     tags:
 *       - Properties
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *
 *       - in: path
 *         name: id
 *         required: true
 *
 *         schema:
 *           type: string
 *
 *
 *     requestBody:
 *       required: true
 *
 *       content:
 *         application/json:
 *
 *           schema:
 *             type: object
 *
 *
 *     responses:
 *
 *       200:
 *         description: Property updated successfully
 *
 */
router.patch("/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.authorizeRole)("LANDLORD", "ADMIN"), (0, validate_middleware_1.validate)(property_validation_1.propertyIdSchema), (0, validate_middleware_1.validate)(property_validation_1.updatePropertySchema), property_controller_1.updatePropertyController);
// =======================
// DELETE PROPERTY
// LANDLORD + ADMIN
// =======================
/**
 * @swagger
 * /api/properties/{id}:
 *   delete:
 *     summary: Delete property
 *     tags:
 *       - Properties
 *
 *     security:
 *       - bearerAuth: []
 *
 *     parameters:
 *
 *       - in: path
 *         name: id
 *         required: true
 *
 *         schema:
 *           type: string
 *
 *
 *     responses:
 *
 *       200:
 *         description: Property deleted successfully
 *
 *       400:
 *         description: Cannot delete property with existing bookings
 *
 */
router.delete("/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.authorizeRole)("LANDLORD", "ADMIN"), (0, validate_middleware_1.validate)(property_validation_1.propertyIdSchema), property_controller_1.deletePropertyController);
exports.default = router;
