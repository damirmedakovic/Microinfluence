const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

// Load config file
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// Import route files
const companies = require("./routes/companies");
const creators = require("./routes/creators");
//const campaigns = require("./routes/campaigns");
const auth = require("./routes/auth");



const PORT = process.env.PORT || 5000;

const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Mount routers
app.use("/api/v1/companies", companies);
app.use("/api/v1/creators", creators);
//app.use("/api/v1/campaigns", campaigns);
app.use("/api/v1/auth", auth);



// Error handler middleware
app.use(errorHandler);

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold
  )
);

// Handle unhandled promise rejections

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);

  server.close(() => process.exit(1));
});
