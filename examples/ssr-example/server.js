/* eslint-disable */
import "@microsoft/fast-ssr/install-dom-shim";
import express from "express";
import fastSSR from "@microsoft/fast-ssr";
import helloWorld from "./examples/hello-world.js";
import page from "./examples/page.js";
import repeater, { source as repeaterSource } from "./examples/repeater.js";
import customElements from "./examples/custom-elements.js";

const app = express();
const port = 8080;
const { templateRenderer, defaultRenderInfo } = fastSSR();

const entryPoints = [
    { path: "/", template: helloWorld },
    { path: "/page", template: page },
    { path: "/repeater", template: repeater, source: repeaterSource },
    { path: "/custom-elements", template: customElements },
];

entryPoints.forEach(entry => {
    app.get(entry.path, (req, res) => {
        res.set("Content-Type", "text/html");
        const result = templateRenderer.render(
            entry.template,
            defaultRenderInfo,
            entry.source
        );
        let consolidated = "";

        for (const part of result) {
            res.write(part);
            consolidated += part;
        }

        res.end();
        console.log(consolidated);
    });
});

app.listen(port, () => {
    console.log("SSR Example app listening on port", port);
});
