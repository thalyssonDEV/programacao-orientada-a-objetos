"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
var Personagem_1 = require("../classes/Personagem");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nome) {
        return _super.call(this, nome, 1000, 700, 5) || this;
    }
    Object.defineProperty(Mago.prototype, "classeNome", {
        get: function () {
            return "Mago";
        },
        enumerable: false,
        configurable: true
    });
    return Mago;
}(Personagem_1.Personagem));
exports.Mago = Mago;
