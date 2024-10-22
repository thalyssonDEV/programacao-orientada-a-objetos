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
exports.Guerreiro = void 0;
var Personagem_1 = require("../classes/Personagem");
var Guerreiro = /** @class */ (function (_super) {
    __extends(Guerreiro, _super);
    function Guerreiro(nome) {
        return _super.call(this, nome, 3000, 250, 25) || this;
    }
    Object.defineProperty(Guerreiro.prototype, "classeNome", {
        get: function () {
            return "Guerreiro";
        },
        enumerable: false,
        configurable: true
    });
    return Guerreiro;
}(Personagem_1.Personagem));
exports.Guerreiro = Guerreiro;
