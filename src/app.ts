import express from "express";


const app = express();


app.use(express.json());


app.get("/", (req, res) => {
  res.send("RentNest Backend Running 🚀");
});


export default app;