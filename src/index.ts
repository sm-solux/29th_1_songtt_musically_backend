import express, { Express, Request, Response, NextFunction } from "express";
import session from "express-session";
import mongoose from "mongoose";
import connectDB from "./loader/db";
import user_router from "./router/user_router";
import crawler_router from "./router/crawler_router"
import actor_router from "./router/actor_router"
import mypage_router from "./router/mypage_router";
import profile_router from "./router/profile_router";
import musical_router from "./router/musical_router";
import review_router from "./router/review_router";
import notification_router from "./router/notification_router";

require("dotenv").config();
const { PORT } = process.env;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(user_router);
app.use(crawler_router);
app.use(actor_router);
app.use(mypage_router);
app.use(profile_router);
app.use(review_router);
app.use(musical_router);
app.use(notification_router);

connectDB();

app.set("port", process.env.PORT || 3000); //  서버 포트
app.set("host", process.env.HOST || "0.0.0.0"); // 서버 아이피

app.listen(PORT, () => console.log(`서버가 ${PORT}번 포트에서 실행 중`));
