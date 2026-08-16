"use strict";
// // import bcrypt from "bcrypt";
// // import prisma from "../../lib/prisma";
// // import type { RegisterInput } from "./auth.validation";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
// // export const registerUser = async (
// //   payload: RegisterInput
// // ) => {
// //   const existingUser = await prisma.user.findUnique({
// //     where: {
// //       email: payload.email,
// //     },
// //   });
// //   if (existingUser) {
// //     throw new Error("User already exists");
// //   }
// //   const hashedPassword = await bcrypt.hash(
// //     payload.password,
// //     10
// //   );
// //   const user = await prisma.user.create({
// //     data: {
// //       name: payload.name,
// //       email: payload.email,
// //       password: hashedPassword,
// //       role: payload.role ?? "TENANT",
// //     },
// //   });
// //   return user;
// // };
// import bcrypt from "bcrypt";
// import prisma from "../../lib/prisma";
// import type { RegisterInput } from "./auth.validation";
// export const registerUser = async (
//   payload: RegisterInput
// ) => {
//   const existingUser = await prisma.user.findUnique({
//     where: {
//       email: payload.email,
//     },
//   });
//   if (existingUser) {
//     throw new Error("User already exists");
//   }
//   const hashedPassword = await bcrypt.hash(
//     payload.password,
//     10
//   );
//   const user = await prisma.user.create({
//     data: {
//       name: payload.name,
//       email: payload.email,
//       password: hashedPassword,
//       role: payload.role ?? "TENANT",
//     },
//   });
//   const { password, ...safeUser } = user;
//   return safeUser;
// };
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = __importDefault(require("../../lib/prisma"));
const jwt_1 = require("../../utils/jwt");
// Register User
const registerUser = async (payload) => {
    const existingUser = await prisma_1.default.user.findUnique({
        where: {
            email: payload.email,
        },
    });
    if (existingUser) {
        throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt_1.default.hash(payload.password, 10);
    const user = await prisma_1.default.user.create({
        data: {
            name: payload.name,
            email: payload.email,
            password: hashedPassword,
            role: payload.role ??
                "TENANT",
        },
    });
    const { password, ...safeUser } = user;
    return safeUser;
};
exports.registerUser = registerUser;
// Login User
const loginUser = async (payload) => {
    const user = await prisma_1.default.user.findUnique({
        where: {
            email: payload.email,
        },
    });
    if (!user) {
        throw new Error("User not found");
    }
    const isPasswordMatch = await bcrypt_1.default.compare(payload.password, user.password);
    if (!isPasswordMatch) {
        throw new Error("Invalid password");
    }
    const token = (0, jwt_1.generateToken)({
        id: user.id,
        email: user.email,
        role: user.role,
    });
    const { password, ...safeUser } = user;
    return {
        user: safeUser,
        token,
    };
};
exports.loginUser = loginUser;
