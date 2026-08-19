"use strict";
// // import swaggerJsdoc from "swagger-jsdoc";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
// // const swaggerOptions = {
// //   definition: {
// //     openapi: "3.0.0",
// //     info: {
// //       title:
// //         "RentNest API",
// //       version:
// //         "1.0.0",
// //       description:
// //         "RentNest Rental Management Backend API Documentation",
// //     },
// //     servers: [
// //       {
// //         url:
// //           "http://localhost:5000",
// //         description:
// //           "Local Development Server",
// //       },
// //     ],
// //     components: {
// //       securitySchemes: {
// //         bearerAuth: {
// //           type:
// //             "http",
// //           scheme:
// //             "bearer",
// //           bearerFormat:
// //             "JWT",
// //         },
// //       },
// //     },
// //   },
// //   apis: [
// //     "./src/modules/**/*.route.ts",
// //   ],
// // };
// // export const swaggerSpec =
// //   swaggerJsdoc(
// //     swaggerOptions
// //   );
// import swaggerJsdoc from "swagger-jsdoc";
// const swaggerOptions = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title:
//         "RentNest API",
//       version:
//         "1.0.0",
//       description:
//         "RentNest Rental Management Backend API Documentation - Version 1",
//     },
//     servers: [
//       {
//         url:
//           "http://localhost:5000/api/v1",
//         description:
//           "Local Development Server API v1",
//       },
//     ],
//     components: {
//       securitySchemes: {
//         bearerAuth: {
//           type:
//             "http",
//           scheme:
//             "bearer",
//           bearerFormat:
//             "JWT",
//         },
//       },
//     },
//     security: [
//       {
//         bearerAuth: [],
//       },
//     ],
//   },
//   apis: [
//     "./src/modules/**/*.route.ts",
//   ],
// };
// export const swaggerSpec =
//   swaggerJsdoc(
//     swaggerOptions
//   );
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const env_validation_1 = require("./env.validation");
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "RentNest API",
            version: "1.0.0",
            description: "RentNest Rental Management Backend API Documentation",
        },
        servers: [
            {
                url: `http://localhost:${env_validation_1.env.PORT}/api/v1`,
                description: "Local Development Server",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: [
        "./src/modules/**/*.route.ts",
    ],
};
exports.swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
