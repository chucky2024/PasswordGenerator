"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generatePassword_1 = __importDefault(require("./generatePassword"));
const response = (0, generatePassword_1.default)(12, { uppercase: true });
console.log(response);
