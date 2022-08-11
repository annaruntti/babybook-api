import { MikroORM } from "@mikro-orm/core";
import { BasicInfos } from "./entities/BasicInfos";
import mikroOrmConfig from "./mikro-orm.config";

const main = async () => {
    const orm = await MikroORM.init(mikroOrmConfig);
    await orm.getMigrator().up();
    const basicinfos = orm.em.create(BasicInfos, {name: "Matti Meikäläinen"})
    await orm.em.persistAndFlush(basicinfos);

    // const basicinfos = await orm.em.find(BasicInfos, {});
    // console.log(basicinfos);
}

main();

console.log("hello world");