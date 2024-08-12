// Import required packages
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";
import bodyParser from "body-parser";
import morgan from "morgan";

// Import route files
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

import User from "./models/User.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";

import {
  dataProduct,
  dataProductStat,
  dataUser,
  dataTransaction,
  dataOverallStat,
} from "./data/index.js";

import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 3001;

// Apply routes
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // User.insertMany(dataUser);
    // Transaction.insertMany(dataTransaction);
    // OverallStat.insertMany(dataOverallStat);
  })
  .catch((error) => console.log(`${error} did not connect`));
