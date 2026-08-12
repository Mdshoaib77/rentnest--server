// import express from "express";


// const app = express();


// app.use(express.json());


// app.get("/", (req, res) => {
//   res.send("RentNest Backend Running 🚀");
// });


// export default app;


import express from "express";
import prisma from "./lib/prisma";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("RentNest Backend Running 🚀");
});

app.get("/api/health", async (req, res) => {
  try {
    const userCount = await prisma.user.count();

    res.status(200).json({
      success: true,
      message: "RentNest API and database are healthy",
      data: {
        database: "connected",
        totalUsers: userCount,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Database connection failed",
      errorDetails:
        error instanceof Error ? error.message : "Unknown error occurred",
    });
  }
});

export default app;