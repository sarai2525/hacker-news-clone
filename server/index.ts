import express from "express";

const app = express();
const router = express.Router();

app.use(express.json());

app.use((_req, _res, next) => {
  console.log("log");
  next();
});

router.get("/error", (_req, _res, next) => {
  next(new Error("hoge"));
});

router.get("/hello", (_req, _res, _next) => {
  res.json({ message: "hello world" });
});

app.use("/api", router);

export default fromNodeMiddleware(app);
