"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("vitest/config");
const path_1 = __importDefault(require("path"));
exports.default = (0, config_1.defineConfig)({
    test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
    },
    resolve: {
        alias: [
            {
                find: "@modules",
                replacement: path_1.default.resolve(__dirname, "src/modules"),
            },
            {
                find: "@shared",
                replacement: path_1.default.resolve(__dirname, "src/shered"),
            },
        ],
    },
});
//# sourceMappingURL=vite.config.js.map