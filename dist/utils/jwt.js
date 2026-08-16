"use strict";
// // // // // import jwt from "jsonwebtoken";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
// // // // // const jwtSecret = process.env.JWT_SECRET;
// // // // // if (!jwtSecret) {
// // // // //   throw new Error(
// // // // //     "JWT_SECRET is not defined"
// // // // //   );
// // // // // }
// // // // // export const generateToken = (
// // // // //   payload: object
// // // // // ) => {
// // // // //   return jwt.sign(
// // // // //     payload,
// // // // //     jwtSecret,
// // // // //     {
// // // // //       expiresIn:
// // // // //         process.env.JWT_EXPIRES_IN || "7d",
// // // // //     }
// // // // //   );
// // // // // };
// // // // import jwt from "jsonwebtoken";
// // // // const jwtSecret =
// // // //   process.env.JWT_SECRET;
// // // // if (!jwtSecret) {
// // // //   throw new Error(
// // // //     "JWT_SECRET is not defined"
// // // //   );
// // // // }
// // // // export const generateToken = (
// // // //   payload: object
// // // // ) => {
// // // //   return jwt.sign(
// // // //     payload,
// // // //     jwtSecret,
// // // //     {
// // // //       expiresIn:
// // // //         process.env.JWT_EXPIRES_IN ??
// // // //         "7d",
// // // //     }
// // // //   );
// // // // };
// // // import jwt from "jsonwebtoken";
// // // const jwtSecret = process.env.JWT_SECRET;
// // // if (!jwtSecret) {
// // //   throw new Error(
// // //     "JWT_SECRET is not defined"
// // //   );
// // // }
// // // export const generateToken = (
// // //   payload: object
// // // ) => {
// // //   return jwt.sign(
// // //     payload,
// // //     jwtSecret,
// // //     {
// // //       expiresIn: "7d",
// // //     }
// // //   );
// // // };
// // import jwt from "jsonwebtoken";
// // import {
// //   env,
// // } from "../config/env.validation";
// // // =======================
// // // GENERATE JWT TOKEN
// // // =======================
// // export const generateToken = (
// //   payload: object
// // ) => {
// //   return jwt.sign(
// //     payload,
// //     env.JWT_SECRET,
// //     {
// //       expiresIn:
// //         env.JWT_EXPIRES_IN,
// //     }
// //   );
// // };
// import jwt from "jsonwebtoken";
// import {
//   env,
// } from "../config/env.validation";
// // =======================
// // GENERATE JWT TOKEN
// // =======================
// export const generateToken = (
//   payload: object
// ) => {
//   return jwt.sign(
//     payload,
//     env.JWT_SECRET,
//     {
//       expiresIn: "7d",
//     }
//   );
// };
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_validation_1 = require("../config/env.validation");
// =======================
// GENERATE JWT TOKEN
// =======================
const generateToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, env_validation_1.env.JWT_SECRET, {
        expiresIn: "7d",
    });
};
exports.generateToken = generateToken;
