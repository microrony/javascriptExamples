const hero = {
  name: 'Gokhu',
  alias: 'Super Power',
  catchphrase: 'To the different World!',
  speak: function() {
    return 'Attention! ' + this.catchphrase;
  },
  attack: function(sound) {
    return `(punches bad guy) ${sound}`;
  }
};

const thingToLookFor = 'alias';

console.log(hero.name);
console.log(hero['name']);
console.log(hero[thingToLookFor]);
console.log(hero.speak());
console.log(hero.attack('Poww'));
