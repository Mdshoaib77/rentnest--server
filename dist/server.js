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
const app_1 = __importDefault(require("./app"));
const port = 5000;
app_1.default.listen(port, () => {
    console.log(`RentNest server running on port ${port}`);
});
