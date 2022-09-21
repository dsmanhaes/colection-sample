import { Felino } from "./Felino";
import { Leao } from "./Leao";

const felino: Felino = new Felino();
const simba: Leao = new Leao('Simba');

felino.emitSound('Mroul');
simba.emitSound('Roar');
simba.caca('Javali');
simba.caca('Zebra', 12);
simba.caca('Girafa', 1, 'Mamífero');

const numeros: number[] = [];
const leoes: Leao[] = [];

const leao1 = new Leao('Scar');
const leao2 = new Leao('Mufasa');
const leao3 = new Leao('Kofu');

leoes.push(simba, leao1, leao2, leao3);
leoes.pop();

leoes.forEach((leao) => {
  console.log(leao.name);
});
