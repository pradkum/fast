/* eslint-disable */
import "@microsoft/fast-ssr/install-dom-shim";
import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(port, () => {
    console.log("SSR Example app listening on port", port);
});
