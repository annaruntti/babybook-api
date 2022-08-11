"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicInfos = void 0;
const core_1 = require("@mikro-orm/core");
let BasicInfos = class BasicInfos {
    constructor() {
        this.createdAt = new Date();
        this.updateAt = new Date();
    }
};
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", Number)
], BasicInfos.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ type: "date" }),
    __metadata("design:type", Object)
], BasicInfos.prototype, "createdAt", void 0);
__decorate([
    (0, core_1.Property)({ type: "date", onUpdate: () => new Date() }),
    __metadata("design:type", Object)
], BasicInfos.prototype, "updateAt", void 0);
__decorate([
    (0, core_1.Property)({ type: "text" }),
    __metadata("design:type", String)
], BasicInfos.prototype, "name", void 0);
BasicInfos = __decorate([
    (0, core_1.Entity)()
], BasicInfos);
exports.BasicInfos = BasicInfos;
//# sourceMappingURL=BasicInfos.js.map