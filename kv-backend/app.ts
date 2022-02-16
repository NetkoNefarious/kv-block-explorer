import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import bitcoin from "bitcoin-rpc-api";
import cors from "cors";

require("dotenv-safe").config();

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

var node = {
  protocol: "http",
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  pass: process.env.PASS,
  txIndex: 1,
};

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

bitcoin.setup(node);
app.use("/", bitcoin.api);

module.exports = app;
