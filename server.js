const dotEnv = require("dotenv/config");

const express = require("express");
const cors = require("cors");

const app = express();
const path = require("path");

var corOptions = {
  origin: "https://localhost:8081",
};

// middleware

app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "website")));

// routers

const productRouter = require("./routes/productRouter.js");
const reviewRouter = require("./routes/reviewsRouter.js");
const usersRoutes = require("./routes/userRouter.js");

app.use("/api/products", productRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/user", usersRoutes);
// testing api

//app.get("/", (req, res) => {
//  res.json({ message: "hello from api" });
//});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "website", "webstore.html"));
});

//port

const PORT = process.env.PORT || 8081;

//server

const db = require("./models"); // Import your Sequelize models

// ...

// Synchronize the models with the database
db.sequelize.sync()
  .then(() => {
    console.log("Database synchronized successfully");
    // Start the server or perform any other necessary actions
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to synchronize the database:", error);
  });

