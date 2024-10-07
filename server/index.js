require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 5000;
var cors = require("cors");
const connectDB = require("./db");
const authRouter = require("./routes/auth");
const contactRoute = require("./routes/contact");
const errorMiddleware = require("./middlewares/error");
// const allowedOrigins = process.env.SERVER_API_URL || "https://globaltradingacademy.in";
// const allowedOrigins = "http://localhost:3000"
const allowedOrigins = [
  "https://globaltradingacademy.in",
  "https://www.globaltradingacademy.in" // Add the www version if needed
];
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin, e.g., mobile apps or curl requests
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/form", contactRoute);

app.use(errorMiddleware)

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Global Trading Academy listening on port ${port}`)
  })
})