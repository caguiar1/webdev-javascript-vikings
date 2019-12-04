// Soldier
class Soldier {
    constructor(health, strength) {
         this.health = health;
         this.strength = strength;
        }
         attack() {
             return this.strength;
    }
        receiveDamage(damage) {
            this.health -= damage;
        }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return (`${this.name} has died in act of combat`);
        }
        else{
            return (`${this.name} has received ${damage} points of damage`);
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
    
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength);
        this.health = health;
        this.strength = strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health <= 0) {
            return (`A Saxon has died in combat`);
        }
        else{
            return (`A Saxon has received ${damage} points of damage`);
        }
    }
}

// War BONUS
class War {

constructor(){

    this.vikingArmy = [];
    this.saxonArmy = [];
}

addViking(vikingObj){
    this.vikingArmy.push(vikingObj);

}

addSaxon(saxonObj){
    this.saxonArmy.push(saxonObj);

}

vikingAttack(){
    this.saxonArmy = this.saxonArmy.filter(saxon => {
        return saxon.health > 0

    });

  return this.saxonArmy[Math.floor(Math.random(this.saxonArmy.length) * 1)].receiveDamage(this.vikingArmy[Math.floor(Math.random(this.vikingArmy.length) * 1)].strength);


  
}

saxonAttack(){
    return this.vikingArmy[Math.floor(Math.random(this.vikingArmy.length) * 1)].receiveDamage(this.saxonArmy[Math.floor(Math.random(this.saxonArmy.length) * 1)].strength);

    
}

showStatus(){
    if(this.saxonArmy.length == 0){
        return "Vikings have won the war of the century!";
    }
}




}