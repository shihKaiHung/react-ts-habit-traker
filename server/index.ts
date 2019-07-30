import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import next from "next";
import requestIp from "request-ip";
require("dotenv").config();

export class NodeEnv {
    public static PROD = "production";
    public static DEV = "development";
    public static TEST = "test";
    public static isDev = () => process.env.NODE_ENV !== NodeEnv.PROD && process.env.NODE_ENV !== NodeEnv.TEST;
}

const dev = NodeEnv.isDev();
const port = parseInt(process.env.PORT, 10) || 3100;

const app = next({
    dev,
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
    console.log("ENV:", process.env.NODE_ENV);
    const server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(requestIp.mw());
    server.use(
        morgan(dev ? "dev" : "combined", {
            skip: (req, res) => res.statusCode < 400,
        }),
    );

    server.get("*", (req, res) => {
        if (req.query.noRedirect !== "true") {
            res.setHeader("X-Frame-Options", "DENY");
        }
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) {
            throw err;
        }
        console.log(`> Ready on http://localhost:${port}`);
    });
});
