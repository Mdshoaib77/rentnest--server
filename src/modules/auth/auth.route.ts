import {
  Router,
} from "express";



import {
  registerController,
  loginController,
} from "./auth.controller";



import {
  registerSchema,
  loginSchema,
} from "./auth.validation";



import {
  validate,
} from "../../middlewares/validate.middleware";







const router = Router();











// =======================
// REGISTER
// =======================



/**
 * @swagger
 * /api/v1/auth/register:
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



router.post(

  "/register",

  validate(

    registerSchema

  ),

  registerController

);














// =======================
// LOGIN
// =======================



/**
 * @swagger
 * /api/v1/auth/login:
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



router.post(

  "/login",

  validate(

    loginSchema

  ),

  loginController

);












export default router;