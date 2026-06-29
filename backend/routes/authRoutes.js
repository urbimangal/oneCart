import express from "express";
import { adminLogin, googleLogin, login, logout, registration } from "../controller/authController.js";
const authRoute=express.Router();
authRoute.post("/registration",registration)
authRoute.post("/login",login)
authRoute.get("/logout",logout)
authRoute.post("/googleLogin",googleLogin)
authRoute.post("/adminLogin",adminLogin)
export default authRoute;