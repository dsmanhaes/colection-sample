"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Felino_1 = require("./Felino");
var Leao_1 = require("./Leao");
var felino = new Felino_1.Felino();
var simba = new Leao_1.Leao('Simba');
felino.emitSound('Mroul');
simba.emitSound('Roar');
simba.caca('Javali');
simba.caca('Zebra', 12);
simba.caca('Girafa', 1, 'Mamífero');
var numeros = [];
var leoes = [];
var leao1 = new Leao_1.Leao('Scar');
var leao2 = new Leao_1.Leao('Mufasa');
var leao3 = new Leao_1.Leao('Kofu');
leoes.push(simba, leao1, leao2, leao3);
leoes.pop();
leoes.forEach(function (leao) {
    console.log(leao.name);
});
