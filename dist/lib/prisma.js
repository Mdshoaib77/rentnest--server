"use strict";
// // // import "dotenv/config";
// // // import { PrismaPg } from "@prisma/adapter-pg";
// // // import { PrismaClient } from "../generated/prisma/client";
Object.defineProperty(exports, "__esModule", { value: true });
// // // const connectionString = process.env.DATABASE_URL;
// // // if (!connectionString) {
// // //   throw new Error("DATABASE_URL is not defined in environment variables");
// // // }
// // // const adapter = new PrismaPg({
// // //   connectionString,
// // // });
// // // const prisma = new PrismaClient({
// // //   adapter,
// // // });
// // // export default prisma;
// // import "dotenv/config";
// // import { PrismaPg } from "@prisma/adapter-pg";
// // import { PrismaClient } from "../generated/prisma/client";
// // const connectionString = process.env.DATABASE_URL;
// // if (!connectionString) {
// //   throw new Error(
// //     "DATABASE_URL is not defined in environment variables"
// //   );
// // }
// // const adapter = new PrismaPg({
// //   connectionString,
// // });
// // const prisma = new PrismaClient({
// //   adapter,
// // });
// // export default prisma;
// import "dotenv/config";
// import { PrismaPg } from "@prisma/adapter-pg";
// import { PrismaClient } from "../generated/prisma/client";
// const connectionString = process.env.DATABASE_URL;
// if (!connectionString) {
//   throw new Error(
//     "DATABASE_URL is missing"
//   );
// }
// const adapter = new PrismaPg({
//   connectionString,
// });
// const prisma = new PrismaClient({
//   adapter,
// });
// export default prisma;
require("dotenv/config");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("@prisma/client");
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error("DATABASE_URL is not defined");
}
const adapter = new adapter_pg_1.PrismaPg({
    connectionString,
});
const prisma = new client_1.PrismaClient({
    adapter,
});
exports.default = prisma;
