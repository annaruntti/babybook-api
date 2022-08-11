"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const BasicInfos_1 = require("./entities/BasicInfos");
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
const main = async () => {
    const orm = await core_1.MikroORM.init(mikro_orm_config_1.default);
    await orm.getMigrator().up();
    const basicinfos = await orm.em.find(BasicInfos_1.BasicInfos, {});
    console.log(basicinfos);
};
main();
console.log("hello world");
//# sourceMappingURL=index.js.map