"use strict";
// import morgan from "morgan";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpLogger = void 0;
// import {
//   logger,
// } from "../utils/logger";
// // =======================
// // HTTP REQUEST LOGGER
// // =======================
// export const httpLogger =
// morgan(
//   "combined",
//   {
//     stream: {
//       write:
//       (message: string) => {
//         logger.info(
//           message.trim()
//         );
//       },
//     },
//   }
// );
const morgan_1 = __importDefault(require("morgan"));
const logger_1 = require("../utils/logger");
// =======================
// HTTP REQUEST LOGGER
// =======================
exports.httpLogger = (0, morgan_1.default)("combined", {
    stream: {
        write: (message) => {
            logger_1.logger.info(message.trim());
        },
    },
});
