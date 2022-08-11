import { Entity, OptionalProps, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class BasicInfos {
    [OptionalProps]?: "name" | "updateAt" | "createdAt" | "id";

    @PrimaryKey()
    id!: number;

    @Property({ type: "date" })
    createdAt = new Date();

    @Property({ type: "date", onUpdate: () => new Date() })
    updateAt = new Date();

    @Property({type: "text"})
    name!: string;
}