require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 5000;
var cors = require("cors");
const connectDB = require("./db");
const authRouter = require("./routes/auth");
const contactRoute = require("./routes/contact");
const adminRouter = require("./routes/admin");
const errorMiddleware = require("./middlewares/error");
// const allowedOrigins = process.env.
// const allowedOrigins = "http://localhost:3000"
const allowedOrigins = [
  "http://localhost:3000",
  "https://globaltradingacademy.in"
];

const corsOptions = {
  origin: function (origin, callback) {
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
app.use("/api/admin", adminRouter);
app.use("/api/form", contactRoute);

app.use(errorMiddleware)

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Global Trading Academy listening on port ${port}`)
  })
})