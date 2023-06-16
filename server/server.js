const express = require("express");
const { errorHandler, notFound } = require("./middleware/errorHAndler");
const connectDB = require("./database");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

connectDB();
const app = express();
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/", require("./routes/todoRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/list", require("./routes/listRoutes"));

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(errorHandler);
app.use(notFound);
app.listen(PORT, () => console.log("Server started on port", PORT));
