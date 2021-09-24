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
        this.lvl = 1;
        this.maxexp = 100;
        this.attack = 1;
        this.exploration = new Skill("exploration", "This wonderfull world are just wait ot being explored. you this skill are helps with it.");
        this.forage = new Skill("forage", "Gather the garbage things like a vacuum sucker");
        this.rest = new Skill("rest", "The art of sloth. Poor way to regain stamina");
        this.meditation = new Skill("Meditation", "It's like a doin nothing but in intellegent way");
        this.regeneration = new Skill("Regeneration", "WHOA YOUR SEVERED LIMB ARE GROWS BACK AGAIN!");
        this.str = new Stat("Strengh", "Be stronk, smash hard");
        this.agi = new Stat("Agility", "I AM SICK **CK A LIKE A QUICK **CK");
        this.vit = new Stat("Vitality", "Be unstoppable working horse");
        this.per = new Stat("Perception", "You smell it? Is it's stinks or tasty? How it's looks? Are you notice something?<br> Yeah, perception is helps to answer that questions");
        this.int = new Stat("Intellect", "Some situations need a logical solution. But using it <br>in wrong situations can blow your mind, or skull.");
        this.ins = new Stat("Insight", "Inner guide which helps you to solve solutions where intellect cant. <br>You dont know how it's works. Your inner guide");
        this.sou = new Stat("Soul", "Are you lack of soul? HOW DARE YOU!");
        this.luck = new Stat("Luck", "You dont know how it works... probably.");
        this.speed = new Stat("Speed", "GOTTA GO FAST");
        this.speed.lvl = 100;
        this.speed.exp = this.speed.lvl * 100;
        this.equipinventory = new Array(100);
    }
}
function addexp(character, amount){
    while ( character.exp + amount > character.maxexp){
        character.lvl +=1;
        amount -= character.maxexp;
        character.maxexp = character.maxexp * 2;
    }
    character.exp += amount;
}
class Equipment {
    constructor (slot, attack, def, rarity, quality)
    {
        this.slot = slot;
        this.attack = attack;
        this.def = def;
        this.rarity = rarity;
        this.quality = quality;
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
class Chunk {
    constructor(x,y)
    {
        this.tile = new Array(50);
        for (var dx = 0; dx <50; dx++){
            this.tile[dx] = new Array(50);
            for (var dy = 0; dy <50; dy++){
             this.tile[dx][dy] = new Quartal(x*50+dx,y*50+dy);
            }
        }
    }
}

class Stat {
    constructor (name, description)
    {
        this.description = description;
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
            else {this.exp -= ( amount * this.potential/100); amount = 0; calculateStats();}

        }
    }
    clone(cloned){
        this.name = cloned.name;
        this.exp = cloned.exp;
        this.lvl = cloned.lvl;
        this.potential = cloned.potential;
        this.description = cloned.description;
    }
}
class Skill {
    constructor (name, description)
    {
        this.name = name;
        this.exp = 100;
        this.lvl = 1;
        this.potential = 100;
        this.description = description
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
        this.description = cloned.description;
    }
}
// i am retarded enought to not maek a properly tree for storage items, so fuck you, i maek subclasses :-DDDD
// no, i even more retarded. so we got ID  now
class Storage{
    constructor()
    {
        this.blueberries = new Stonk(1001, "blueberry", 4, "kg", "Yummy black pearls of the forest");
        this.raspberries = new Stonk(1002, "raspberry", 5, "kg", "Crimson honeycomb of pleasure");
        this.stone = new Stonk(1, "Rocks", 2, "", "Common rocks which can be founded everywhere. Yeah it's somewhat heavy");
        this.branches = new Stonk(2, "Branches", 0.5, "", "just light version of branch");
        this.sticks = new Stonk(3, "Sticks", 2, "", "A big stick");
        this.leaves = new Stonk(4, "Leaves", 0.01 , "kg", "Kinda coverable. Not edible, i say IT'S NOT EDIBLE");
    }
}



class Stonk{
    constructor(stonkId, name, Weight, unitType, description)
    {
        this.id = stonkId;
        this.name = name;
        this.weight = Weight;
        this.quality = 0;
        this.amount = 0;
        this.unitType = unitType;
        this.description = description;


    }
    modify(volume, quality){
        if (parentId != 0){
            if (volume =! 0) {
                this.quality = ((this.quality * this.amount) + (quality * volume))/(this.amount + volume) 
                
            } else {messagelog("ZERO IN VOLUME! U BROEK IT! U BROKE THE STONKS!")}
        }
    }
}


