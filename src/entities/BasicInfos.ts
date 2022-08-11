import { Entity, OptionalProps, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class BasicInfos {
    [OptionalProps]?: "name" | "updateAt" | "createdAt" | "id";

    @PrimaryKey()
    id!: number;

    @Property()
    createdAt = new Date();

    @Property({ onUpdate: () => new Date() })
    updateAt = new Date();

    @Property()
    name!: string;
}