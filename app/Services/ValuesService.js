import { ProxyState } from "../AppState.js";
import { Ape } from "../Models/Ape.js";
import { Bat } from "../Models/Bat.js";
import { Cat } from "../Models/Cat.js";
import { Dragon } from "../Models/Dragon.js";
import { Emu } from "../Models/Emu.js";
import { Frog } from "../Models/Frog.js";
import { Gerbil } from "../Models/Gerbil.js";
import { Value } from "../Models/Value.js";

let ape = new Ape('Ceasar', 12, false, true)
let bat = new Bat(true, 'small', 'cranky', 'apples', 'she')
let cat = new Cat('BigBoi', 15, true, true)
let dragon = new Dragon(false, "gold", true, false)
let emu = new Emu(7, 'Terry', "stupid")
let frog = new Frog(true, true, 'blue')
let gerbil = new Gerbil("Jason", 14, true, true)


class ValuesService {
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
  removeValue(id) {
    const values = ProxyState.values.filter(v => v.id !== id)
    ProxyState.values = values
  }
  sayHello() {
    ape.hello()
  }
  batFeed() {
    bat.feed()
  }
  catFacts() {
    cat.catFacts()
  }
  dragonScary() {
    dragon.scary()
  }
  emuDumb() {
    emu.callMeDumb()
  }
  frogFight() {
    frog.frogFight()
  }
  goGerbil() {
    gerbil.getGerb()
  }
}


export const valuesService = new ValuesService();




