import * as puppeteer from "puppeteer";
// import puppeteerExtra from "puppeteer-extra";
// import Stealth from 'puppeteer-extra-plugin-stealth';
import { config } from "../config/config"
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import os from "os"

// puppeteerExtra.use(StealthPlugin());
export async function startBrowser() {
    let browser;
    try {
        console.log(os.platform())
        console.log("====try=====", puppeteer.executablePath())
        console.log("Opening the browser......");
        browser = await puppeteer.launch({
            headless: config.NODE_ENV == "PROD",
            defaultViewport: null,
            userDataDir: './myUserDataDir',
            args: ["--disable-setuid-sandbox", "--no-sandbox"],
            'ignoreHTTPSErrors': true
        });
        return browser;
    } catch (err) {
        console.log(os.platform())
        console.log("=====catch=====", puppeteer.executablePath())
        console.log("Could not create a browser instance => : ", err);
    }
}