"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startBrowser = void 0;
const puppeteer = __importStar(require("puppeteer"));
// import puppeteerExtra from "puppeteer-extra";
// import Stealth from 'puppeteer-extra-plugin-stealth';
const config_1 = require("../config/config");
const os_1 = __importDefault(require("os"));
// puppeteerExtra.use(StealthPlugin());
function startBrowser() {
    return __awaiter(this, void 0, void 0, function* () {
        let browser;
        try {
            console.log(os_1.default.platform());
            console.log("====try=====", puppeteer.executablePath());
            console.log("Opening the browser......");
            browser = yield puppeteer.launch({
                headless: config_1.config.NODE_ENV == "PROD",
                defaultViewport: null,
                userDataDir: './myUserDataDir',
                args: ["--disable-setuid-sandbox", "--no-sandbox"],
                'ignoreHTTPSErrors': true
            });
            return browser;
        }
        catch (err) {
            console.log(os_1.default.platform());
            console.log("=====catch=====", puppeteer.executablePath());
            console.log("Could not create a browser instance => : ", err);
        }
    });
}
exports.startBrowser = startBrowser;
