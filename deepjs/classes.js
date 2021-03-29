statid = 0;
class Character {
    constructor(maxhp, maxmana, maxstamina)
    {
        this.name = "NameMe";
        this.maxhp = maxhp;
        this.maxmana = maxmana;
        this.maxstamina = maxstamina;
        this.hp = maxhp;
        this.mana = maxmana;
        this.stamina = maxstamina;
        this.exp = 0;
        this.lvl = 0;
        this.maxexp = 100;
        this.attack = 1;
        this.exploration = new Skill("exploration");
        this.forage = new Skill("forage");
        this.str = new Stat("Strengh");
        this.agi = new Stat("Agility");
        this.vit = new Stat("Vitality");
        this.per = new Stat("Perception");
        this.int = new Stat("Intellect");
        this.ins = new Stat("Insight");
        this.sou = new Stat("Soul");
        this.luck = new Stat("Luck");
        this.speed = new Stat("Speed");
        this.speed.lvl = 100;
        this.speed.exp = this.speed.lvl * 100;
    }
}
class Equipment {
    constructor (slot, attack, def)
    {
        this.slot = slot;
        this.attack = attack;
        this.def = def;
    }
}

class Land{
    constructor()
    {
        this.rocks = 0;
        this.grass = 0;
        this.water = 0;
        this.trees = 0;
    }

}
class Quartal {
    constructor(x, y, name)
    {
        this.x = x;
        this.y = y;
        this.name = name;
        this.revealed = 0;
        this.investigated = 0;
        this.hiddenstuff = 0;
        this.land = new Land
    }
}

class Stat {
    constructor (name)
    {
        this.name = name;
        this.exp = 100;
        this.lvl = 1;
        this.potential = 100;
        this.id = statid;
        statid++;
    }
    addexp(amount){
        while (amount > 0) {
            if ((amount * this.potential/100) > this.exp)
            {
                this.lvl +=1;
                amount -= this.exp/this.potential*100;
                this.exp = this.lvl*100;
                this.potential = this.potential * 0.90;
                messagelog("Your " + this.name + " are now level " + this.lvl);
            }
            else {this.exp -= ( amount * this.potential/100); amount = 0}

        }
    }
    clone(cloned){
        this.name = cloned.name;
        this.exp = cloned.exp;
        this.lvl = cloned.lvl;
        this.potential = cloned.potential;
    }
}
class Skill {
    constructor (name)
    {
        this.name = name;
        this.exp = 100;
        this.lvl = 1;
        this.potential = 100;
    }
    addexp(amount){
        while (amount > 0) {
            if (this.lvl == 1 && this.exp == 100 && this.potential){
                createSkillbar(this.name);
            }
            if ((amount * this.potential/100) > this.exp)
            {
                this.lvl +=1;
                amount -= this.exp * 100 / this.potential;
                this.exp = this.lvl*100;
                this.potential = this.potential * 0.95;
                messagelog("Your " + this.name + " are now level " + this.lvl);
            }
            else {this.exp -= ( amount * this.potential/100); amount = 0}
        }
    }
    clone(cloned){
        this.name = cloned.name;
        this.exp = cloned.exp;
        this.lvl = cloned.lvl;
        this.potential = cloned.potential;
    }
}
class Stonks{
    constructor()
    {

    }
}
class Resource{
    constructor()
    {

    }
}
class RawStonks{
    constructor(){
        
    }

}

