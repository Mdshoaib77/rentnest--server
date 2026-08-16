"use strict";
// import {
//   z,
// } from "zod";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
// import dotenv from "dotenv";
// dotenv.config();
// const envSchema = z.object({
//   PORT: z
//     .string()
//     .default("5000"),
//   DATABASE_URL: z
//     .string()
//     .min(
//       1,
//       "DATABASE_URL is required"
//     ),
//   JWT_SECRET: z
//     .string()
//     .min(
//       10,
//       "JWT_SECRET must be at least 10 characters"
//     ),
// });
// export const env =
//   envSchema.parse(
//     process.env
//   );
const zod_1 = require("zod");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const envSchema = zod_1.z.object({
    PORT: zod_1.z
        .string()
        .default("5000"),
    DATABASE_URL: zod_1.z
        .string()
        .min(1, "DATABASE_URL is required"),
    JWT_SECRET: zod_1.z
        .string()
        .min(10, "JWT_SECRET must be at least 10 characters"),
    JWT_EXPIRES_IN: zod_1.z
        .string()
        .default("7d"),
});
exports.env = envSchema.parse(process.env);
