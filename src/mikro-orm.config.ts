import { BasicInfos } from "./entities/BasicInfos";
import { MikroORM } from "@mikro-orm/core";
import path from 'path';

export default {
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+.[tj]s$/,
    },
    entities: [BasicInfos],
    dbName: "babybook",
    // user: "Anna",
    // password: "testitesti"
    type: "postgresql",
    debug: true,
} as Parameters<typeof MikroORM.init>[0];