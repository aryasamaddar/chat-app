"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const db_1 = require("./config/db");
(0, db_1.connectDB)();
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
