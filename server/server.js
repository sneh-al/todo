const express = require("express");
const { errorHandler, notFound } = require("./middleware/errorHAndler");
const connectDB = require("./database");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/", require("./routes/todoRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/list", require("./routes/listRoutes"));
app.use(errorHandler);
app.use(notFound);
app.listen(PORT, () => console.log("Server started on port", PORT));
