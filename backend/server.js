// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './config/mongodb.js'
// import connectCloudinary from './config/cloudinary.js'
// import adminRouter from './routes/adminRoute.js'
// import doctorRouter from './routes/doctorRoute.js'
// import userRouter from './routes/userRoute.js'

// // app config
// const app = express()
// const port = process.env.PORT || 4000
// connectDB()
// connectCloudinary()

// // middlewares
// app.use(express.json())
// app.use(cors({
//     origin: 'localhost:5173/',
//     httpOnly: true
// }))

// // api end point
// app.use('/api/admin', adminRouter)
// app.use('/api/doctor', doctorRouter)
// app.use('/api/user', userRouter)


// app.get('/', (req, res) => {
//     res.send('Api working...')
// })

// app.listen(port, () => console.log('Server started', port))


import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json({ limit: "10mb" })); // prevent payload issues
app.use(cors({
    origin: ["http://localhost:5174", "http://localhost:5173"],
    credentials: true
}));

// Routes
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => res.send("API working"));

app.listen(port, () => console.log("Server running on port " + port));