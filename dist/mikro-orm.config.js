"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BasicInfos_1 = require("./entities/BasicInfos");
const path_1 = __importDefault(require("path"));
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+.[tj]s$/,
    },
    entities: [BasicInfos_1.BasicInfos],
    dbName: "babybook",
    type: "postgresql",
    debug: true,
};
//# sourceMappingURL=mikro-orm.config.js.map