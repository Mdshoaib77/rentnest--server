"use strict";
// // import {
// //   z,
// // } from "zod";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
// // import dotenv from "dotenv";
// // dotenv.config();
// // const envSchema = z.object({
// //   PORT: z
// //     .string()
// //     .default("5000"),
// //   DATABASE_URL: z
// //     .string()
// //     .min(
// //       1,
// //       "DATABASE_URL is required"
// //     ),
// //   JWT_SECRET: z
// //     .string()
// //     .min(
// //       10,
// //       "JWT_SECRET must be at least 10 characters"
// //     ),
// // });
// // export const env =
// //   envSchema.parse(
// //     process.env
// //   );
// // import {
// //   z,
// // } from "zod";
// // import dotenv from "dotenv";
// // dotenv.config();
// // const envSchema = z.object({
// //   PORT: z
// //     .string()
// //     .default("5000"),
// //   DATABASE_URL: z
// //     .string()
// //     .min(
// //       1,
// //       "DATABASE_URL is required"
// //     ),
// //   JWT_SECRET: z
// //     .string()
// //     .min(
// //       10,
// //       "JWT_SECRET must be at least 10 characters"
// //     ),
// //   JWT_EXPIRES_IN: z
// //     .string()
// //     .default("7d"),
// // });
// // export const env =
// //   envSchema.parse(
// //     process.env
// //   );
// import {
//   z,
// } from "zod";
// import dotenv from "dotenv";
// dotenv.config();
// // =======================
// // ENV VALIDATION SCHEMA
// // =======================
// const envSchema = z.object({
//   NODE_ENV: z
//     .enum([
//       "development",
//       "production",
//       "test",
//     ])
//     .default(
//       "development"
//     ),
//   PORT: z
//     .string()
//     .default(
//       "5000"
//     )
//     .transform(
//       (value) => Number(value)
//     ),
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
//   JWT_EXPIRES_IN: z
//     .string()
//     .default(
//       "7d"
//     ),
// });
// // =======================
// // EXPORT VALIDATED ENV
// // =======================
// export const env =
//   envSchema.parse(
//     process.env
//   );
// import {
//   z,
// } from "zod";
// import dotenv from "dotenv";
// dotenv.config();
// // =======================
// // ENV VALIDATION SCHEMA
// // =======================
// const envSchema = z.object({
//   NODE_ENV: z
//     .enum([
//       "development",
//       "production",
//       "test",
//     ])
//     .default(
//       "development"
//     ),
//   PORT: z
//     .string()
//     .default(
//       "5000"
//     )
//     .transform(
//       (value) => Number(value)
//     ),
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
//   JWT_EXPIRES_IN: z
//     .string()
//     .default(
//       "7d"
//     ),
//   FRONTEND_URL: z
//     .string()
//     .default(
//       "http://localhost:3000"
//     ),
//   RATE_LIMIT_MAX: z
//     .string()
//     .default(
//       "100"
//     )
//     .transform(
//       (value) => Number(value)
//     ),
// });
// // =======================
// // EXPORT VALIDATED ENV
// // =======================
// export const env =
//   envSchema.parse(
//     process.env
//   );
const zod_1 = require("zod");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// =======================
// ENV VALIDATION SCHEMA
// =======================
const envSchema = zod_1.z.object({
    NODE_ENV: zod_1.z
        .enum([
        "development",
        "production",
        "test",
    ])
        .default("development"),
    PORT: zod_1.z
        .string()
        .default("5000")
        .transform((value) => Number(value))
        .refine((value) => value > 0, {
        message: "PORT must be greater than zero",
    }),
    DATABASE_URL: zod_1.z
        .string()
        .min(1, "DATABASE_URL is required"),
    JWT_SECRET: zod_1.z
        .string()
        .min(10, "JWT_SECRET must be at least 10 characters"),
    JWT_EXPIRES_IN: zod_1.z
        .string()
        .default("7d"),
    FRONTEND_URL: zod_1.z
        .string()
        .url("Invalid FRONTEND_URL")
        .default("http://localhost:3000"),
    RATE_LIMIT_MAX: zod_1.z
        .string()
        .default("100")
        .transform((value) => Number(value))
        .refine((value) => value > 0, {
        message: "RATE_LIMIT_MAX must be greater than zero",
    }),
});
// =======================
// EXPORT VALIDATED ENV
// =======================
exports.env = envSchema.parse(process.env);
