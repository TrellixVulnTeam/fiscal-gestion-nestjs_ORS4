/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("typeorm");
const rfcs_module_1 = __webpack_require__("./apps/api/src/app/sat/rfcs/rfcs.module.ts");
const rfc_entity_1 = __webpack_require__("./apps/api/src/app/sat/entities/rfc.entity.ts");
const recursos_module_1 = __webpack_require__("./apps/api/src/app/eslabon/recursos/recursos.module.ts");
const recurso_entity_1 = __webpack_require__("./apps/api/src/app/eslabon/entities/recurso.entity.ts");
const typeorm_2 = __webpack_require__("@nestjs/typeorm");
const delegacion_municipio_entity_1 = __webpack_require__("./apps/api/src/app/eslabon/entities/delegacion-municipio.entity.ts");
const estado_entity_1 = __webpack_require__("./apps/api/src/app/eslabon/entities/estado.entity.ts");
const empleado_entity_1 = __webpack_require__("./apps/api/src/app/eslabon/entities/empleado.entity.ts");
const auth_module_1 = __webpack_require__("./apps/api/src/app/auth/auth.module.ts");
const config_1 = __webpack_require__("@nestjs/config");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const constancia_entity_1 = __webpack_require__("./apps/api/src/app/constancias/entities/constancia.entity.ts");
const constancias_module_1 = __webpack_require__("./apps/api/src/app/constancias/constancias/constancias.module.ts");
let AppModule = class AppModule {
};
AppModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            typeorm_2.TypeOrmModule.forRootAsync({
                name: 'rfcs',
                useFactory: () => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
                    return Object.assign(yield (0, typeorm_1.getConnectionOptions)('rfcs'), {
                        entities: [rfc_entity_1.Rfc],
                    });
                }),
            }),
            typeorm_2.TypeOrmModule.forRootAsync({
                name: 'eslabon',
                useFactory: () => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
                    return Object.assign(yield (0, typeorm_1.getConnectionOptions)('eslabon'), {
                        entities: [recurso_entity_1.Recurso, delegacion_municipio_entity_1.DelegacionMunicipio, estado_entity_1.Estado, empleado_entity_1.Empleado],
                    });
                }),
            }),
            typeorm_2.TypeOrmModule.forRootAsync({
                name: 'constancias',
                useFactory: () => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
                    return Object.assign(yield (0, typeorm_1.getConnectionOptions)('constancias'), {
                        entities: [constancia_entity_1.Constancias],
                    });
                }),
            }),
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }),
            rfcs_module_1.RfcsModule,
            recursos_module_1.RecursosModule,
            auth_module_1.AuthModule,
            constancias_module_1.ConstanciaModule
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/api/src/app/auth/auth.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const auth_service_1 = __webpack_require__("./apps/api/src/app/auth/auth.service.ts");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
};
AuthController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)(),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./apps/api/src/app/auth/auth.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const auth_service_1 = __webpack_require__("./apps/api/src/app/auth/auth.service.ts");
const auth_controller_1 = __webpack_require__("./apps/api/src/app/auth/auth.controller.ts");
let AuthModule = class AuthModule {
};
AuthModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService]
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./apps/api/src/app/auth/auth.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AuthService = class AuthService {
};
AuthService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./apps/api/src/app/constancias/constancias/constancias.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConstanciaController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const constancias_service_1 = __webpack_require__("./apps/api/src/app/constancias/constancias/constancias.service.ts");
let ConstanciaController = class ConstanciaController {
    constructor(constService) {
        this.constService = constService;
    }
    findAll(empresa) {
        console.log('get works', empresa);
        return this.constService.getReporte(empresa);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(':empresa'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('empresa')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], ConstanciaController.prototype, "findAll", null);
ConstanciaController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('constancia/constancias'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof constancias_service_1.ConstanciaService !== "undefined" && constancias_service_1.ConstanciaService) === "function" ? _a : Object])
], ConstanciaController);
exports.ConstanciaController = ConstanciaController;


/***/ }),

/***/ "./apps/api/src/app/constancias/constancias/constancias.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConstanciaModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const constancias_service_1 = __webpack_require__("./apps/api/src/app/constancias/constancias/constancias.service.ts");
const constancias_controller_1 = __webpack_require__("./apps/api/src/app/constancias/constancias/constancias.controller.ts");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const constancia_entity_1 = __webpack_require__("./apps/api/src/app/constancias/entities/constancia.entity.ts");
let ConstanciaModule = class ConstanciaModule {
};
ConstanciaModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([constancia_entity_1.Constancias], 'constancias')],
        controllers: [constancias_controller_1.ConstanciaController],
        providers: [constancias_service_1.ConstanciaService],
        exports: [typeorm_1.TypeOrmModule],
    })
], ConstanciaModule);
exports.ConstanciaModule = ConstanciaModule;


/***/ }),

/***/ "./apps/api/src/app/constancias/constancias/constancias.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConstanciaService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
const constancia_entity_1 = __webpack_require__("./apps/api/src/app/constancias/entities/constancia.entity.ts");
let ConstanciaService = class ConstanciaService {
    constructor(Constancias) {
        this.Constancias = Constancias;
    }
    getReporte(empresa) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const results = yield this.Constancias.query('EXEC getReporteConstancias @0', [empresa]);
            console.log(results);
            return results;
        });
    }
};
ConstanciaService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, typeorm_1.InjectRepository)(constancia_entity_1.Constancias, 'constancias')),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ConstanciaService);
exports.ConstanciaService = ConstanciaService;


/***/ }),

/***/ "./apps/api/src/app/constancias/entities/constancia.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Constancias = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
let Constancias = class Constancias {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryColumn)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Constancias.prototype, "idConstancia", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Constancias.prototype, "rfc", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Constancias.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Constancias.prototype, "apellidoPaterno", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Constancias.prototype, "apellidoMaterno", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Constancias.prototype, "curp", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Constancias.prototype, "codigoPostal", void 0);
Constancias = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Constancias);
exports.Constancias = Constancias;


/***/ }),

/***/ "./apps/api/src/app/eslabon/entities/delegacion-municipio.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DelegacionMunicipio = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
let DelegacionMunicipio = class DelegacionMunicipio {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryColumn)(),
    (0, tslib_1.__metadata)("design:type", Number)
], DelegacionMunicipio.prototype, "delegacion_municipio", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], DelegacionMunicipio.prototype, "descripcion", void 0);
DelegacionMunicipio = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)('delegaciones_municipios')
], DelegacionMunicipio);
exports.DelegacionMunicipio = DelegacionMunicipio;


/***/ }),

/***/ "./apps/api/src/app/eslabon/entities/empleado.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Empleado = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
let Empleado = class Empleado {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryColumn)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Empleado.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Empleado.prototype, "empleado", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Empleado.prototype, "estatus", void 0);
Empleado = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)('empleados')
], Empleado);
exports.Empleado = Empleado;


/***/ }),

/***/ "./apps/api/src/app/eslabon/entities/estado.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Estado = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
let Estado = class Estado {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryColumn)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Estado.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Estado.prototype, "descripcion", void 0);
Estado = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)('estados')
], Estado);
exports.Estado = Estado;


/***/ }),

/***/ "./apps/api/src/app/eslabon/entities/recurso.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Recurso = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
const delegacion_municipio_entity_1 = __webpack_require__("./apps/api/src/app/eslabon/entities/delegacion-municipio.entity.ts");
const estado_entity_1 = __webpack_require__("./apps/api/src/app/eslabon/entities/estado.entity.ts");
const empleado_entity_1 = __webpack_require__("./apps/api/src/app/eslabon/entities/empleado.entity.ts");
let Recurso = class Recurso {
    cleanRfc() {
        this.rfc = this.curp.replace(/-/g, '').trim();
    }
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.AfterLoad)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], Recurso.prototype, "cleanRfc", null);
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryColumn)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Recurso.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToOne)(() => empleado_entity_1.Empleado),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'id' }),
    (0, tslib_1.__metadata)("design:type", typeof (_a = typeof empleado_entity_1.Empleado !== "undefined" && empleado_entity_1.Empleado) === "function" ? _a : Object)
], Recurso.prototype, "empleado", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Recurso.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Recurso.prototype, "paterno", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Recurso.prototype, "materno", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Recurso.prototype, "curp", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Recurso.prototype, "fecha_nacimiento", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Recurso.prototype, "calle", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Recurso.prototype, "numero_calle", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Recurso.prototype, "colonia", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToOne)(() => delegacion_municipio_entity_1.DelegacionMunicipio),
    (0, typeorm_1.JoinColumn)({
        name: 'delegacion_municipio',
        referencedColumnName: 'delegacion_municipio',
    }),
    (0, tslib_1.__metadata)("design:type", typeof (_c = typeof delegacion_municipio_entity_1.DelegacionMunicipio !== "undefined" && delegacion_municipio_entity_1.DelegacionMunicipio) === "function" ? _c : Object)
], Recurso.prototype, "municipio", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.OneToOne)(() => estado_entity_1.Estado),
    (0, typeorm_1.JoinColumn)({ name: 'estado', referencedColumnName: 'estado' }),
    (0, tslib_1.__metadata)("design:type", typeof (_d = typeof estado_entity_1.Estado !== "undefined" && estado_entity_1.Estado) === "function" ? _d : Object)
], Recurso.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Recurso.prototype, "codigo_postal", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Recurso.prototype, "originario", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Recurso.prototype, "estado_civil", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], Recurso.prototype, "fecha_registro", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], Recurso.prototype, "fecha_modificacion", void 0);
Recurso = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)('recursos')
], Recurso);
exports.Recurso = Recurso;


/***/ }),

/***/ "./apps/api/src/app/eslabon/recursos/recursos.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecursosController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const recursos_service_1 = __webpack_require__("./apps/api/src/app/eslabon/recursos/recursos.service.ts");
let RecursosController = class RecursosController {
    constructor(recursosService) {
        this.recursosService = recursosService;
    }
    findAll() {
        return this.recursosService.findAllActive();
    }
    findOne(rfc) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const [recurso] = yield this.recursosService.findOne(rfc.toUpperCase());
            if (!recurso) {
                throw new common_1.HttpException('Recurso no encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            return recurso;
        });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Get)(),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], RecursosController.prototype, "findAll", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)(':rfc'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('rfc')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RecursosController.prototype, "findOne", null);
RecursosController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('eslabon/recursos'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof recursos_service_1.RecursosService !== "undefined" && recursos_service_1.RecursosService) === "function" ? _a : Object])
], RecursosController);
exports.RecursosController = RecursosController;


/***/ }),

/***/ "./apps/api/src/app/eslabon/recursos/recursos.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecursosModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const recursos_service_1 = __webpack_require__("./apps/api/src/app/eslabon/recursos/recursos.service.ts");
const recursos_controller_1 = __webpack_require__("./apps/api/src/app/eslabon/recursos/recursos.controller.ts");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const recurso_entity_1 = __webpack_require__("./apps/api/src/app/eslabon/entities/recurso.entity.ts");
const delegacion_municipio_entity_1 = __webpack_require__("./apps/api/src/app/eslabon/entities/delegacion-municipio.entity.ts");
const estado_entity_1 = __webpack_require__("./apps/api/src/app/eslabon/entities/estado.entity.ts");
const empleado_entity_1 = __webpack_require__("./apps/api/src/app/eslabon/entities/empleado.entity.ts");
let RecursosModule = class RecursosModule {
};
RecursosModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([recurso_entity_1.Recurso, delegacion_municipio_entity_1.DelegacionMunicipio, estado_entity_1.Estado, empleado_entity_1.Empleado], 'eslabon'),
        ],
        controllers: [recursos_controller_1.RecursosController],
        providers: [recursos_service_1.RecursosService],
        exports: [typeorm_1.TypeOrmModule],
    })
], RecursosModule);
exports.RecursosModule = RecursosModule;


/***/ }),

/***/ "./apps/api/src/app/eslabon/recursos/recursos.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecursosService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const recurso_entity_1 = __webpack_require__("./apps/api/src/app/eslabon/entities/recurso.entity.ts");
const typeorm_2 = __webpack_require__("typeorm");
let RecursosService = class RecursosService {
    constructor(recursoRepository) {
        this.recursoRepository = recursoRepository;
    }
    findAllActive() {
        return this.recursoRepository.find({
            where: { empleado: { estatus: 1 } },
            relations: ['municipio', 'estado', 'empleado'],
        });
    }
    findOne(rfc) {
        const parsedRfc = `${rfc.substring(0, 4)}-${rfc.substring(4, 10)}-${rfc.substring(10, 13)}`;
        return this.recursoRepository.find({
            where: { curp: parsedRfc, empleado: { estatus: 1 } },
            relations: ['municipio', 'estado', 'empleado'],
        });
    }
};
RecursosService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, typeorm_1.InjectRepository)(recurso_entity_1.Recurso, 'eslabon')),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], RecursosService);
exports.RecursosService = RecursosService;


/***/ }),

/***/ "./apps/api/src/app/sat/entities/rfc.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rfc = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
let Rfc = class Rfc {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryColumn)(),
    (0, tslib_1.__metadata)("design:type", String)
], Rfc.prototype, "rfc", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], Rfc.prototype, "nombre_razon_social", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Rfc.prototype, "codigo_postal", void 0);
Rfc = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], Rfc);
exports.Rfc = Rfc;


/***/ }),

/***/ "./apps/api/src/app/sat/rfcs/rfcs.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RfcsController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const rfcs_service_1 = __webpack_require__("./apps/api/src/app/sat/rfcs/rfcs.service.ts");
let RfcsController = class RfcsController {
    constructor(rfcsService) {
        this.rfcsService = rfcsService;
    }
    //  @Post('listado')
    //  findAll(@Body('rfcs') rfcs: string[]) {
    //    return this.rfcsService.findAll(rfcs);
    //  }
    postOne(empleado) {
        return this.rfcsService.postOne([empleado]);
    }
    findOne(rfc) {
        return this.rfcsService.findOne(rfc);
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], RfcsController.prototype, "postOne", null);
(0, tslib_1.__decorate)([
    (0, common_1.Get)(':rfc'),
    (0, tslib_1.__param)(0, (0, common_1.Param)('rfc')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], RfcsController.prototype, "findOne", null);
RfcsController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('sat/rfcs'),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof rfcs_service_1.RfcsService !== "undefined" && rfcs_service_1.RfcsService) === "function" ? _a : Object])
], RfcsController);
exports.RfcsController = RfcsController;


/***/ }),

/***/ "./apps/api/src/app/sat/rfcs/rfcs.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RfcsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const rfcs_service_1 = __webpack_require__("./apps/api/src/app/sat/rfcs/rfcs.service.ts");
const rfcs_controller_1 = __webpack_require__("./apps/api/src/app/sat/rfcs/rfcs.controller.ts");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const rfc_entity_1 = __webpack_require__("./apps/api/src/app/sat/entities/rfc.entity.ts");
let RfcsModule = class RfcsModule {
};
RfcsModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([rfc_entity_1.Rfc], 'rfcs')],
        controllers: [rfcs_controller_1.RfcsController],
        providers: [rfcs_service_1.RfcsService],
        exports: [typeorm_1.TypeOrmModule],
    })
], RfcsModule);
exports.RfcsModule = RfcsModule;


/***/ }),

/***/ "./apps/api/src/app/sat/rfcs/rfcs.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RfcsService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
const rfc_entity_1 = __webpack_require__("./apps/api/src/app/sat/entities/rfc.entity.ts");
let RfcsService = class RfcsService {
    constructor(Rfc) {
        this.Rfc = Rfc;
    }
    findAll(rfcs) {
        return this.Rfc.createQueryBuilder('r')
            .select('r.rfc, r.codigo_postal')
            .where('r.rfc in (:...sat)', { rfcs })
            .getRawMany();
    }
    findOne(rfc) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const results = yield this.Rfc.query('EXEC getRfcInfo @0', [rfc]);
            return results[0] ? results[0] : {};
        });
    }
    // async getReporte(empresa: string) {
    //   const results = await this.Rfc.query('EXEC getReporteConstancias @0', [empresa]);
    //   return results;
    // }
    postOne(empleado) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const results = yield this.Rfc.query('EXEC postRfcInfo @0, @1, @2, @3, @4, @5, @6, @7, @8, @9 ,@10 ,@11 ,@12,@13,@14,@15', [
                empleado[0].idEmpresa,
                empleado[0].NumEmp,
                empleado[0].Nombre,
                empleado[0].PrimerApellido,
                empleado[0].SegundoApellido,
                empleado[0].CalleNum,
                empleado[0].Num,
                empleado[0].Colonia,
                empleado[0].Municipio,
                empleado[0].Estado,
                empleado[0].Nacionalidad,
                empleado[0].CP,
                empleado[0].RFC,
                empleado[0].CURP,
                empleado[0].Email,
                empleado[0].NombreCompleto,
            ]);
            return results;
        });
    }
};
RfcsService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, typeorm_1.InjectRepository)(rfc_entity_1.Rfc, 'rfcs')),
    (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], RfcsService);
exports.RfcsService = RfcsService;


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/mongoose":
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/typeorm":
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "typeorm":
/***/ ((module) => {

module.exports = require("typeorm");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const app_module_1 = __webpack_require__("./apps/api/src/app/app.module.ts");
function bootstrap() {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors({});
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map