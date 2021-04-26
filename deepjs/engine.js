function updateGUI() {
    //retarded health display numbers part
    calculateStats();
    document.getElementById("hpbartext").innerHTML = "<b>"+ rounded(you.hp).toString() + "/" + you.maxhp.toString() + "HP</b>";
    document.getElementById("manabartext").innerHTML = "<b>"+ rounded(you.mana).toString() + "/" + you.maxmana.toString() + "MANA</b>";
    document.getElementById("staminabartext").innerHTML ="<b>"+ rounded(you.stamina).toString() + "/" + you.maxstamina.toString() + "SP</b>"; 
    document.getElementById("expbartext") .innerHTML = "<b>"+rounded(you.exp).toString()   + "/" + you.maxexp.toString() + "EXP</b>"
    //maek bars alive
    document.getElementById("hpbar").style.width = 100*(you.hp/you.maxhp) + '%';
    document.getElementById("manabar").style.width = 100*(you.mana/you.maxmana) + '%';
    document.getElementById("staminabar").style.width = 100*(you.stamina/you.maxstamina) + '%';
    document.getElementById("expbar").style.width = 100*(you.exp/you.maxexp) + '%';
    mainmenu.innerHTML = ("Coordinates " + herezone.x + ", " + herezone.y + ". Scouted " + rounded(herezone.revealed) + "% and thereis " + rounded(herezone.investigated) + "% explored. Search units: " + rounded(herezone.hiddenstuff));
    updateSkillGUI('str', you.str.lvl, you.str.exp, you.str.description); //yeah i am lazy retard
    updateSkillGUI('agi', you.agi.lvl, you.agi.exp, you.agi.description);
    updateSkillGUI('vit', you.vit.lvl, you.vit.exp, you.vit.description);
    updateSkillGUI('per', you.per.lvl, you.per.exp, you.per.description);
    updateSkillGUI('int', you.int.lvl, you.int.exp, you.int.description);
    updateSkillGUI('ins', you.ins.lvl, you.ins.exp, you.ins.description);
    updateSkillGUI('sou', you.sou.lvl, you.sou.exp, you.sou.description);
    updateSkillGUI('luck', you.luck.lvl, you.luck.exp, you.luck.description);
    updateSkillGUI('speed', you.speed.lvl, you.speed.exp, you.speed.description);
    resBuild();
    if (document.getElementById('skillstab').childElementCount > 9){
        for (i = 9; i < document.getElementById("skillstab").childElementCount; i++) {
            switch(document.getElementsByClassName('skillsbar')[i].id){
                case 'skillsplaceexploration':
                    updateSkillGUI('exploration', you.exploration.lvl, you.exploration.exp, you.exploration.description);
                break;
                case 'skillsplaceforage':
                    updateSkillGUI('forage', you.forage.lvl, you.forage.exp, you.exploration.description);
                break;
                case 'skillsplacerest':
                    updateSkillGUI('rest', you.rest.lvl, you.rest.exp, you.rest.description);
                break;
                case 'skillsplaceRegeneration':
                    updateSkillGUI('Regeneration', you.regeneration.lvl, you.regeneration.exp, you.regeneration.description);
                break;
                case 'skillsplaceMeditation':
                    updateSkillGUI('Meditation', you.meditation.lvl, you.meditation.exp, you.meditation.description);
                break;
            }

        }
    }
    
}
function calculateStats(){
    you.maxhp = rounded(Math.pow((you.str.lvl + you.vit.lvl * 3 + you.sou.lvl), (1.1 + (0.1 * you.lvl))));
    you.maxmana = rounded(Math.pow((you.int.lvl * 2 + you.sou.lvl + you.ins.lvl * 2), (1.1 + (0.1 * you.lvl))));
    you.maxstamina = rounded(Math.pow((you.str.lvl + you.agi.lvl +  you.vit.lvl * 2 + you.sou.lvl), (1.1 + (0.1 * you.lvl))));
    if (you.hp > you.maxhp) {you.hp = you.maxhp};
    if (you.mana > you.maxmana) {you.mana = you.maxmana};
    if (you.stamina > you.maxstamina) {you.stamina = you.maxstamina};
    //updateGUI();
    }
function checkExist(elementId){
    var element =  document.getElementById(elementId);
if (typeof(element) != 'undefined' && element != null)
{
    return true;
}
}


function updateSkillGUI(skillname, lvl, exp, description) {
    document.getElementById('skillsplace'+skillname).childNodes[0].nodeValue = skillname+ " LVL:" + lvl + " EXP remain:" + rounded(rounded(exp / (lvl * 100)) * 100) + "%"; //double dounded because paranoid
    document.getElementById('skillbar'+skillname).style.width = (100 - 100*(exp/(lvl*100))) + '%';
    document.getElementById('skillsplace'+skillname).setAttribute('data-tooltip', description + " LVL:" + lvl + " EXP remain:" + rounded(exp));
// $('#skillsbar' + skillname).contents()[0].nodeValue = skillname + " LVL:" + lvl + " EXP remain:" + exp;
//    document.getElementById('skillsbar'+ skillname).= skillname + " LVL:" + lvl + " EXP remain:" + exp;

}

function productionloop(diff){
//this is income shit multiplied by diff tiem. whoa chrono fuckin shit
if (diff == null) {diff = 1; }   
staminaRegen(diff);
hpRegen(diff);
manaRegen(diff);
    if (exploreactive == 1){
            if (herezone.revealed < 100 ) {
            herezone.revealed = herezone.revealed + 0.01 * (Math.sqrt(you.per.lvl * you.exploration.lvl) * (you.speed.lvl / 100))* diff;
            herezone.hiddenstuff = (herezone.hiddenstuff + 1 * (Math.sqrt(you.per.lvl * you.exploration.lvl) * (you.speed.lvl / 100))* diff);
            you.per.addexp(0.5* diff);
            you.exploration.addexp(1 * diff);
        } else if (exploreactive <2){
            messagelog("Dude. Looks like you explore the area. Well done. Go doing something else ore somewhere else.");
            removebutton("Explore");
            exploreactive = 2;
            actionscount += 1;
            herezone.revealed = 100;
            
        }
    }
    if (searchactive == 1){
        if (herezone.revealed > 0){
            if (herezone.hiddenstuff <= 0){
                //actionclick(document.getElementById(getactionbuttonid("Search")).textContent, getactionbuttonid("Search"));
                messagelog("There is no things to find. Try to explore more.");
                removebutton("Search");
                searchactive = 2;
                actionscount += 1;
            }
            else {
                herezone.hiddenstuff = rounded(herezone.hiddenstuff - 0.01 * (Math.sqrt(you.per.lvl * you.exploration.lvl) * (you.speed.lvl / 100)) * diff);
                herezone.investigated = (herezone.investigated + 0.0001 * (Math.sqrt(you.per.lvl * you.exploration.lvl) * (you.speed.lvl / 100)) * diff);
                for (t = 0; t < rounded((Math.sqrt(you.per.lvl * you.exploration.lvl) * (you.speed.lvl / 100)) * diff); t++) {
                    generateland(herezone.name);
                }
                you.per.addexp(0.5* diff);
                you.exploration.addexp(1 * diff);
            }
        }
    }
    if (restactive == 1){
        if (you.stamina < you.maxstamina){
            staminaRegen(diff * (1 + (0.1 * (you.rest.lvl + you.vit.lvl / 5))));
            if (you.stamina > you.maxstamina) {you.stamina = you.maxstamina}
            you.rest.addexp(diff * (1 +(0.1 * (you.rest.lvl + you.vit.lvl / 5))));
            you.vit.addexp(diff * (1 + (0.1 * (you.rest.lvl + you.vit.lvl / 5)))/10);
            
            
        } else {
            messagelog("You are rested enough");
            removebutton("Rest");
            restactive = 2;
            actionscount += 1;
        }
    } 
    if (forageactive == 1){
        you.per.addexp(0.5*diff);
        you.forage.addexp(1 * diff);
        forage((you.speed.lvl / 100) + Math.pow((you.agi.lvl * 0.9) * you.forage.lvl *(you.exploration.lvl/ 10) * ( Math.pow((trees + grass), 1/5)), 1/3));
        //messagelog('tick tock')
    }
    //messagelog("tick tock");
}
function maprefresh(quartal){
    for (i = 0; i < worldmap.length; i++){
        if ((worldmap[i].x == quartal.x) && (worldmap[i].y == quartal.y)){
            worldmap[i] = quartal;
        }
    }
}

function forage(amount){
    messagelog('foragerolls' + amount);
    while (amount > 0){
        if (you.stamina > 0.1){
            //dice the foorag (difficulty, place in massive, amount)
            forageRoll(5, 1, 0.01);
            forageRoll(5, 2, 0.01);
            forageRoll(10, 3, 0.01);
            forageRoll(15, 4, 0.01);
            forageRoll(18, 5, 0.01);
            forageRoll(20, 6, 0.01);
            forageRoll(25, 7, 15);
            forageRoll(5, 8, 1);
            forageRoll(1, 9, 0.5);
            forageRoll(15, 10, 1);   
            forageRoll(1, 11, 0.1);      
            amount -= 1;
            messagelog('berrydice X'+ amount);
            you.stamina -= 0.1;
        } else {
            document.getElementById("actionbuttonForage").onclick();
            messagelog('you are too tired and cannot forage anymore');
            amount = 0;

        }
    }
}
function forageRoll(difficulty, itemType, profitAmount){
    forRoll = Math.random(1) * (Math.pow((you.per.lvl * you.forage.lvl)+(you.luck.lvl* 0.01), 1/3));
    if (forRoll > difficulty) {stocks[itemType].amount += profitAmount; messagelog("whoa berry"); messagelog(rounded(forRoll) + ">" + rounded(difficulty))}
}
function getactionbuttonid(actionname){
    var aTags = document.getElementsByClassName("actionbutton");
    var found;
    for (var i = 0; i < aTags.length; i++) {
      if (aTags[i].textContent == actionname) {
        return aTags[i].id;
        break;
      }
    }    

}
function staminaRegen(timeAmount){
    var regenAmount = rounded(Math.pow((you.vit.lvl * you.rest.lvl * (you.sou.lvl* 0.01)), 1/2) * timeAmount);
    if (you.stamina == you.maxstamina) {}
    else if (you.stamina + regenAmount > you.maxstamina){
        you.rest.addexp(rounded((you.maxstamina - you.stamina)/ regenAmount * timeAmount));
        you.vit.addexp(rounded((you.maxstamina - you.stamina)/ regenAmount / 10 * timeAmount));
        you.stamina = you.maxstamina;
        
    } else {
        you.vit.addexp(0.1);
        you.rest.addexp(1);
        you.stamina += regenAmount;
        
    }
    you.stamina = rounded(you.stamina);
}
function hpRegen(timeAmount){
    var regenAmount = rounded(Math.pow((you.vit.lvl * you.regeneration.lvl * (you.sou.lvl* 0.01))/5, 1/2) * timeAmount);
    if (you.hp == you.maxhp) {}
    else if (you.hp + regenAmount > you.maxhp){
        you.regeneration.addexp(rounded((you.maxhp - you.hp)/ regenAmount * timeAmount));
        you.vit.addexp(rounded((you.maxhp - you.hp)/ regenAmount / 10 * timeAmount));
        you.hp = you.maxhp;
        
    } else {
        you.vit.addexp(0.1);
        you.regeneration.addexp(1);
        you.hp += regenAmount;
        
    }
    you.hp = rounded(you.hp);
}
function manaRegen(timeAmount){
    var regenAmount = rounded(Math.pow((you.int.lvl * you.meditation.lvl * (you.sou.lvl* 0.01)), 1/2) * timeAmount);
    if (you.mana == you.maxmana) {}
    else if (you.mana + regenAmount > you.maxmana){
        you.meditation.addexp(rounded((you.maxmana - you.mana)/ regenAmount * timeAmount));
        you.int.addexp(rounded((you.maxmana - you.mana)/ regenAmount / 10 * timeAmount));
        you.sou.addexp(rounded((you.maxmana - you.mana)/ regenAmount / 50 * timeAmount));
        you.mana = you.maxmana;
        
    } else {
        you.int.addexp(0.1);
        you.sou.addexp(0.02);
        you.meditation.addexp(1);
        you.mana += regenAmount;
        
    }
    you.mana = rounded(you.mana);
}
function mainloop(diff){
    var diff = parseInt((Date.now() - lastupdate) / 1000).toFixed();
  
    productionloop(diff);
    updateGUI();
    lastupdate = Date.now();

    checkaddcontent();
    //messagelog("retardability check");
    //mesasgelog(diff);
}

function checkaddcontent(){
    if (herezone.revealed != 100 && exploreactive == 2){placebutton("Explore", "Explore the entire tile for further investigate. Full tile exploration reveals neighbour tiles"); exploreactive = 0;}
    if (herezone.revealed > 1 && searchactive != 1 && herezone.hiddenstuff > 0){placebutton("Search", "Memorize points of interests for further interaction"); searchactive = 0} else {if (searchactive != 1) {searchactive = 2;}}
        //starting location checher.
    if (you.exploration.lvl > 5){
        if (forageactive == 2) {messagelog("You are now understand how to find things. How about gather things which laying around?"); forageactive = 0;}
        placebutton("Forage", "Find things around. Probably garbage, but sometimes food.");

    }
    if (  you.stamina < you.maxstamina){
        placebutton("Rest", "Just doing nothing are not enough. Let's enjoy it to the fullest!");
        if (restactive == 2){restactive = 0; messagelog('How about rest?')}
    }
    if (herezone.revealed >= 100){
        placebutton("Go north", "Freeze to death.");
        placebutton("Go south", "Roastlands");
        placebutton("Go east", "Enjoy the anime.");
        placebutton("Go west", "Doing columbus.");
    }


}

var rounded = function(number){
    return +number.toFixed(2);
}

function messagelog(logtext){
    let newDiv = document.createElement('div');
    newDiv.innerText = logtext;
    newDiv.classList.add('logdiv');
    rightbar.prepend(newDiv);   
    var logscount = document.getElementById('gamelog').childElementCount;
    if (logscount > loglengh) {
        document.getElementById('gamelog').removeChild(document.getElementById('gamelog').getElementsByClassName('logdiv')[loglengh]);
    }
}
function drawTile(x,y, type){ //this is function to draw new tile and add it to map. Resize map border if tile coordinates out of range
    tilename = 'TileX'+x+'Y'+y
    if (document.getElementById(tilename) == null){
        stupidResConstructor('div','tile','',tilename,'livemap','Whoa this is a '+ type + ' tile. X:' + x + ' Y:' + y);
        stupidResConstructor('img','tileImage','@',tilename +'img',tilename,'Whoa this is a '+ type + ' tile. X:' + x + ' Y:' + y + 'image') ;
        document.getElementById(tilename + 'img').src = 'images/tiles/' + type + '.gif';//just retarded enough to not make in different element
        document.getElementById(tilename + 'img').style.position = 'relative';
        document.getElementById(tilename + 'img').style.height = '100%';
        document.getElementById(tilename + 'img').style.width = '100%';
        document.getElementById(tilename).style.backgroundImage = 'images/tiles/' + type + '.gif'; // map tile display with gif yeah baby
        document.getElementById(tilename).style.left = (x + mapcenterx) * 30  + 'px';
        document.getElementById(tilename).style.top = (y + mapcentery) * 30 + 'px';
     if (x == 0 && y == 0) {document.getElementById('livemap').style.width = '30px';document.getElementById('livemap').style.height = '30px'; }
     if (x >= 0){
            if (mapborderx < x ){
                document.getElementById('livemap').style.width = (x + 1 + mapcenterx) * 30 + 'px';
                mapborderx = x ;
                messagelog (document.getElementById('livemap').style.width + ' x' + x + 'mapborders' + mapborderx )        
            }
        } else {
            if ( -x > mapcenterx) {
                mapmove = (mapcenterx + x)*-1;
                messagelog(mapmove);
                mapborderx += mapmove;
                mapcenterx += mapmove;
                mapRender()
                document.getElementById('livemap').style.width = (mapborderx + 1) * 30 + 'px';
                for (t = 0; t < document.getElementById('livemap').childElementCount; t++){
                    document.getElementById(document.getElementById('livemap').children[t].id).style.left = parseInt(document.getElementById(document.getElementById('livemap').children[t].id).style.left) + (mapmove) * 30  + 'px';
                    document.getElementById(tilename).style.left = (x + mapcenterx) * 30 + 'px';
                } 
            }
        }
        if (y >= 0){ if (mapbordery < y)
            document.getElementById('livemap').style.height = (y + 1 + mapcentery) * 30 + 'px';
            mapbordery = y;
        } else {
            if ( -y > mapcentery) {
                mapmove = (mapcentery + y)*-1;
                messagelog(mapmove);
                mapbordery += mapmove;
                mapcentery += mapmove;
                mapRender()
                document.getElementById('livemap').style.height = (mapbordery + 1) * 30 + 'px';
                for (t = 0; t < document.getElementById('livemap').childElementCount; t++){
                    document.getElementById(document.getElementById('livemap').children[t].id).style.top = parseInt(document.getElementById(document.getElementById('livemap').children[t].id).style.top) + (mapmove) * 30  + 'px';
                    document.getElementById(tilename).style.top = (y + mapcentery) * 30 + 'px';
                } 
            }
        }
    }
}
setInterval(mainloop, 1000);
function tileRefresh(tile){
    pickTile(tile.x, tile.y) = tile;
}
