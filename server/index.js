require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
var cors = require('cors');
const connectDB = require('./db');
const authRouter = require('./routes/auth');
const contactRoute = require('./routes/contact');
const errorMiddleware = require('./middlewares/error');
const allowedOrigins = ['http://localhost:3000', 'http://192.168.1.10:3000'];

//Middleware

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      // If the origin is in the list of allowed origins, or if there is no origin (for server-side requests like Postman), allow the request
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true
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