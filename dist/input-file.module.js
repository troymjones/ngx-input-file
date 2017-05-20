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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var drop_zone_directive_1 = require("./directives/drop-zone.directive");
var input_file_component_1 = require("./components/input-file.component");
var input_file_repository_1 = require("./repositories/input-file.repository");
var InputFileModule = (function () {
    function InputFileModule(inputFileRepository) {
        this.inputFileRepository = inputFileRepository;
    }
    return InputFileModule;
}());
InputFileModule = __decorate([
    core_1.NgModule({
        declarations: [
            drop_zone_directive_1.DropZoneDirective,
            input_file_component_1.InputFileComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        exports: [
            drop_zone_directive_1.DropZoneDirective,
            input_file_component_1.InputFileComponent
        ],
        providers: [input_file_repository_1.InputFileRepository],
        entryComponents: [input_file_component_1.InputFileComponent]
    }),
    __metadata("design:paramtypes", [input_file_repository_1.InputFileRepository])
], InputFileModule);
exports.InputFileModule = InputFileModule;
//# sourceMappingURL=input-file.module.js.map