import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import orderRouter from "./routes/orderRoute.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass = encodeURIComponent(process.env.DBPASS);

// mongoose.connect(`mongodb://localhost:27017/mcafe`).then(() => {
//   app.listen(8080, () => {
//     console.log("Server started");
//   });
// });

mongoose
  .connect(
    `mongodb+srv://aamirhussain10th:${dbpass}@ecommerce.24ithtm.mongodb.net/?appName=ECommerce`
  )
  .then(() => {
    app.listen(8080, () => {
      console.log("Server started");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
//hello World

