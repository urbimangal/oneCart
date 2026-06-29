import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import { connectDb } from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

dotenv.config();
let port=process.env.PORT || 6000
let app=express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin:["https://onecart-frontend2-yg0h.onrender.com","https://onecart-admin2-0555.onrender.com"],
    credentials:true
}));
app.use("/api/auth",authRoute);
app.use("/api/user",userRoutes);
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)
app.get("/", (req,res)=>{
    res.send("Server Working");
});
app.listen(port,()=>{
    console.log(`Server running at port ${port}`);
    connectDb();
})
