"use strict";
// import app from "./app";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const port = 5000;
// app.listen(port, () => {
//   console.log(`RentNest server running on port ${port}`);
// });
// import app from "./app";
// const port = 5000;
// app.listen(port, () => {
//   console.log(`RentNest server running on port ${port}`);
// });
const app_1 = __importDefault(require("./app"));
const env_validation_1 = require("./config/env.validation");
// =======================
// START SERVER
// =======================
app_1.default.listen(env_validation_1.env.PORT, () => {
    console.log(`RentNest server running on port ${env_validation_1.env.PORT}`);
    console.log(`Environment: ${env_validation_1.env.NODE_ENV}`);
});
