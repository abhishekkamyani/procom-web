require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const server = express();
const cors = require("cors");
const { errorMiddleware } = require("./middlewares/error-middleware");
// const adminMiddleware = require("./middlewares/admin-middlware");
const authRouter = require("./routers/auth-router,");
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter.Router);


// for frontend

server.use(errorMiddleware);
server.listen(process.env.PORT, () => {
  console.log(`Server is started at port: ${process.env.PORT}`);
});