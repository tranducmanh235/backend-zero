const express = require("express");
// import express from "express";
const path = require("path");

const app = express();
const port = 8080;

// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// route
app.get("/", (req, res) => {
    res.send("Home page");
});
app.get("/about", (req, res) => res.send("<h1>About page</h1>"));

app.get("/sample", (req, res) => {
    res.render("sample");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
