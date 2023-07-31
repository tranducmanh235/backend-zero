const express = require("express");
// import express from "express";
const path = require("path");
require("dotenv").config();

// console.log(">>> check env: ", process.env.PORT);

const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;

// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// config static files
app.use(express.static(path.join(__dirname, "public")));

// route
app.get("/", (req, res) => {
    res.send("Home page kkk");
});
app.get("/about", (req, res) => res.send("<h1>About page</h1>"));

app.get("/sample", (req, res) => {
    res.render("sample");
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
