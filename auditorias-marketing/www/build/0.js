webpackJsonp([0],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCreatePageModule", function() { return ItemCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_create__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ItemCreatePageModule = (function () {
    function ItemCreatePageModule() {
    }
    ItemCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__item_create__["a" /* ItemCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__item_create__["a" /* ItemCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__item_create__["a" /* ItemCreatePage */]
            ]
        })
    ], ItemCreatePageModule);
    return ItemCreatePageModule;
}());

//# sourceMappingURL=item-create.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_entidad__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_TipoEntidad__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ItemCreatePage = (function () {
    function ItemCreatePage(navCtrl, viewCtrl, formBuilder, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.entidad = new __WEBPACK_IMPORTED_MODULE_4__models_entidad__["a" /* Entidad */]('', '', '', new __WEBPACK_IMPORTED_MODULE_5__models_TipoEntidad__["a" /* TipoEntidad */](1, 'privada'));
        this.form = formBuilder.group({
            profilePic: [''],
            entidad: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            codigoEntidad: [this.entidad.codigo],
            pais: ['1'],
            ciudad: ['1'],
            tipoEntidad: ['1'],
            direccion: [''],
            representanteLegal: [''],
            usuario: [''],
            claveUsuario: [''],
            cargo: [''],
            telefono: [''],
            fileContrato: [''],
            numeroContrato: ['']
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    ItemCreatePage.prototype.ionViewDidLoad = function () {
    };
    ItemCreatePage.prototype.getPicture = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                targetHeight: 96
            }).then(function (data) {
                _this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
            }, function (err) {
                alert('Unable to take photo');
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    ItemCreatePage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.form.patchValue({ 'profilePic': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    ItemCreatePage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['profilePic'].value + ')';
    };
    /**
     * The user cancelled, so we dismiss without sending data back.
     */
    ItemCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the item, so return it
     * back to the presenter.
     */
    ItemCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], ItemCreatePage.prototype, "fileInput", void 0);
    ItemCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-create',template:/*ion-inline-start:"E:\projects\auditorias-marketing\src\pages\item-create\item-create.html"*/'<ion-header >\n\n  <ion-navbar color="dark">\n    <ion-title>{{ \'Crear nuevo projecto \' | translate }}</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="cancel()">\n        <span color="primary" showWhen="ios,android,windows">\n          {{ \'CANCEL_BUTTON\' | translate }}\n        </span>\n        <ion-icon name="md-close" color="danger" showWhen="core,ios,android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n        <span color="primary" showWhen="ios">\n          {{ \'DONE_BUTTON\' | translate }}\n        </span>\n        <ion-icon name="md-checkmark" color="secondary" showWhen="core,android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-bounce>\n \n    \n      \n <form *ngIf="form" [formGroup]="form" (ngSubmit)="createItem()">\n        \n        \n        <ion-slides pager >\n          \n          <ion-slide> \n            <ion-list-header text-left>Datos Basicos</ion-list-header>\n            <ion-row>\n              <ion-col col-xl-6 col-lg-6 col-md-4 col-sm-12 col-12>\n                <ion-item>\n                  <ion-label color="dark" floating>Entidad</ion-label>\n                  <ion-input tabindex="1" type="text" formControlName="entidad"></ion-input>\n                </ion-item>\n              </ion-col> \n                <ion-col col-xl-6 col-lg-6 col-md-4 col-sm-12 col-12>\n                  <ion-item>\n                    <ion-label color="dark" floating>Codigo</ion-label>\n                    <ion-input tabindex="2" type="text" formControlName="codigoEntidad"></ion-input>\n                  </ion-item>\n                </ion-col>\n            </ion-row>\n\n\n\n\n          <ion-row>\n             <ion-col offset-xl-6 offset-lg-6 col-md-6 col-sm-12 col-12>\n              <ion-item>\n                <ion-label floating color="dark">{{ \'Tipo entidad\' | translate }}</ion-label>\n                <ion-select tabindex="3" formControlName="tipoEntidad">\n                  <ion-option value="1" checked="true">Privada</ion-option>\n                  <ion-option value="2">¨Publica</ion-option>\n                  <ion-option value="3">Mixta</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n                \n\n\n\n\n  <ion-item-divider text-left>\n  Ubicacion Entidad\n  </ion-item-divider>\n\n\n\n              <ion-row>\n                <ion-col col-xl-6 col-lg-6 col-md-4 col-sm-12 col-12>\n                  <ion-item>\n                    <ion-label floating color="dark">{{ \'Pais\' | translate }}</ion-label>\n                    <ion-select tabindex="4" formControlName="pais">\n                      <ion-option value="1" checked="true">Colombia</ion-option>\n                      <ion-option value="2">España</ion-option>\n                      <ion-option value="3">Venezuela</ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-xl-6 col-lg-6 col-md-4 col-sm-12 col-12>\n                      <ion-item>\n                        <ion-label floating color="dark">{{ \'Ciudad\' | translate }}</ion-label>\n                        <ion-select tabindex="5" formControlName="ciudad">\n                          <ion-option value="1" checked="true">Bogotá</ion-option>\n                          <ion-option value="2">Medellín</ion-option>\n                          <ion-option value="3">Cali</ion-option>\n                        </ion-select>\n                      </ion-item>\n                </ion-col>\n             \n              </ion-row>\n\n              <ion-row>\n               <ion-col offset-xl-6 offset-lg-6 col-md-6 col-sm-12 col-12>\n                  <ion-item>\n                    <ion-label color="dark" floating>Dirección</ion-label>\n                    <ion-input tabindex="6" type="text" formControlName="direccion"></ion-input>\n                  </ion-item>\n                </ion-col> \n              </ion-row>\n\n\n             \n          </ion-slide>\n\n\n\n          <ion-slide>\n\n<ion-list>\n\n\n  <ion-list-header text-left>  Informacion representante legal </ion-list-header>\n           \n            <ion-row>\n               <ion-col col-xl-6 col-lg-6 col-md-4 col-sm-12 col-12>\n                    <ion-item>\n                           <ion-label color="dark" floating>Nombre</ion-label>\n                          <ion-input tabindex="7" type="text" formControlName="representanteLegal"></ion-input>\n                    </ion-item>\n                </ion-col>\n             </ion-row>\n\n               <ion-row>\n                <ion-col>\n                  <ion-item col-xl-6 col-lg-6 col-md-4 col-sm-12 col-12>\n                     <ion-label color="dark" floating>Télefono</ion-label>\n                    <ion-input type="text" formControlName="telefono"></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n       \n\n              <ion-row>\n                <ion-col>\n                  <ion-item col-xl-6 col-lg-6 col-md-4 col-sm-12 col-12>\n                     <ion-label color="dark" floating>Cargo</ion-label>\n                    <ion-input type="text" formControlName="cargo"></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n\n\n\n\n\n       <ion-buttons end>\n          <ion-item>\n            Contactos\n            <button ion-button clear icon-right>\n              <ion-icon name="add"></ion-icon>\n            </button>\n\n            <button ion-button outline round>\n              1\n            </button>\n\n         </ion-item>\n             \n      </ion-buttons>\n\n</ion-list>\n          </ion-slide>\n\n\n<ion-slide>\n\n\n<ion-list-header text-left>\n  Informacion de contrato\n</ion-list-header>\n\n  <ion-row>\n  <ion-col>\n    <ion-item col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12>\n       <ion-label  floating>Numero contrato</ion-label>\n      <ion-input type="text" formControlName="numeroContrato"></ion-input>\n    </ion-item>\n  </ion-col>\n\n   <ion-col>\n    <ion-item offset-xl-6 offset-lg-6 offset-md-6 col-sm-12 col-12>\n       <ion-label  stacked>Adjuntar contrato\n<ion-icon name="attach"></ion-icon>\n       </ion-label>\n      <ion-input type="file" formControlName="fileContrato">\n        \n      </ion-input>\n    </ion-item>\n  </ion-col>\n  </ion-row>\n\n<ion-list>\n\n\n  <ion-list-header text-left>  Tiempos proyecto </ion-list-header>\n  <ion-row>\n  <ion-col>\n<ion-item>\n  <ion-label floating>Fecha contrato</ion-label>\n  <ion-datetime displayFormat="DD/MM/YYYY" ></ion-datetime>\n</ion-item>  \n  </ion-col>\n\n  <ion-col>\n  \n    <ion-label stacked>duracion</ion-label>\n    <ion-range min="0" color="secondary">\n      <ion-label range-left>0</ion-label>\n      \n    </ion-range>\n  \n  </ion-col>\n\n\n  </ion-row>\n</ion-list>\n\n\n \n<ion-list radio-group >\n\n   <ion-list-header>\n  Pago anticipado\n  </ion-list-header>    \n\n  <ion-item>\n    <ion-label>Si</ion-label>\n    <ion-radio value="1" checked></ion-radio>\n  </ion-item>\n  <ion-item>\n    <ion-label>No</ion-label>\n    <ion-radio value="2"></ion-radio>\n  </ion-item>\n  <ion-item>\n    <ion-label>Aprobado sin anticipo</ion-label>\n    <ion-radio value="3" ></ion-radio>\n  </ion-item>\n</ion-list>\n\n\n\n</ion-slide>\n\n\n\n        </ion-slides>\n\n      \n\n        \n  </form>\n      \n      \n    \n</ion-content>\n\n\n'/*ion-inline-end:"E:\projects\auditorias-marketing\src\pages\item-create\item-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], ItemCreatePage);
    return ItemCreatePage;
}());

//# sourceMappingURL=item-create.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entidad; });
var Entidad = (function () {
    function Entidad(nombre, codigo, direccion, tipoEntidad) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.direccion = direccion;
        this.tipoEntidad = tipoEntidad;
    }
    return Entidad;
}());

//# sourceMappingURL=entidad.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoEntidad; });
var TipoEntidad = (function () {
    function TipoEntidad(id, tipo) {
        this.id = id;
        this.tipo = tipo;
    }
    return TipoEntidad;
}());

//# sourceMappingURL=TipoEntidad.js.map

/***/ })

});
//# sourceMappingURL=0.js.map