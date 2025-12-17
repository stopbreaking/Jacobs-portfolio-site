"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var vite_plugin_ruby_1 = require("vite-plugin-ruby");
var dist_1 = require("@vitejs/plugin-react/dist");
var vite_plugin_ruby_2 = require("vite-plugin-ruby");
exports.default = (0, vite_1.defineConfig)({
    plugins: [
        (0, dist_1.default)(),
        (0, vite_plugin_ruby_1.default)(),
        (0, vite_plugin_ruby_2.default)(),
    ],
    base: './',
});
