function updateGUI() {
    //retarded health display numbers part
    document.getElementById("hpbartext").innerHTML = "<b>"+you.hp.toString() + "/" + you.maxhp.toString() + "HP</b>";
    document.getElementById("manabartext").innerHTML = "<b>"+you.mana.toString() + "/" + you.maxmana.toString() + "MANA</b>";
    document.getElementById("staminabartext").innerHTML ="<b>"+ you.stamina.toString() + "/" + you.maxstamina.toString() + "SP</b>"; 
    document.getElementById("expbartext") .innerHTML = "<b>"+you.exp.toString()   + "/" + you.maxexp.toString() + "EXP</b>"
    //maek bars alive
    document.getElementById("hpbar").style.width = 100*(you.hp/you.maxhp) + '%';
    document.getElementById("manabar").style.width = 100*(you.hp/you.maxmana) + '%';
    document.getElementById("staminabar").style.width = 100*(you.hp/you.maxstamina) + '%';
    document.getElementById("expbar").style.width = 100*(you.hp/you.maxexp) + '%';
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
        for (i = 9; i < document.getElementById('skillstab').childElementCount; i++) {
            switch(document.getElementsByClassName("skillsbar")[i].id){
                case 'skillsplaceexploration':
                    updateSkillGUI('exploration', you.exploration.lvl, you.exploration.exp, you.exploration.description);
                break;
                case 'skillsplaceforage':
                    updateSkillGUI('forage', you.forage.lvl, you.forage.exp, you.exploration.description);
                break;
            }

        }
    }
    
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
    if (exploreactive == 1){
        if (diff == null) {diff = 0; }
        if (herezone.revealed < 100 ) {
            herezone.revealed = herezone.revealed + 0.01 * (Math.sqrt(you.per.lvl * you.exploration.lvl) * (you.speed.lvl / 100))* diff;
            herezone.hiddenstuff = (herezone.hiddenstuff + 1 * (Math.sqrt(you.per.lvl * you.exploration.lvl) * (you.speed.lvl / 100))* diff);
            you.per.addexp(0.5* diff);
            you.exploration.addexp(1 * diff);
            if (searchactive == 2 && herezone.revealed > 1) {placebutton("Search", "Memorize points of interests for further interaction"); searchactive = 0;}
        } else if (exploreactive <2){
            messagelog("Dude. Looks like you explore the area. Well done. Go doing something else ore somewhere else.");
            removebutton("Explore");
            exploreactive = 2;
            actionscount += 1;
            herezone.revealed = 100; //
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
    if (forageactive == 1){
        you.per.addexp(0.5*diff);
        you.forage.addexp(1 * diff);
        forage((you.speed.lvl / 100) + Math.pow((you.agi.lvl * 0.9) * you.forage.lvl *(you.exploration.lvl/ 10) * ( Math.pow((trees + grass), 1/5)), 1/3));
        //messagelog('tick tock')
    }
    //messagelog("tick tock");
}
function forage(amount){
    while (amount > 0){
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
        messagelog('berrydice');
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
function mainloop(diff){
    var diff = parseInt((Date.now() - lastupdate) / 1000);
    productionloop(diff);
    updateGUI();
    lastupdate = Date.now();

    checkaddcontent();
    //messagelog("retardability check");
}

function checkaddcontent(){
    //starting location checher.
    if (forageactive == 2 && you.exploration.lvl > 5){
        forageactive = 0;
        messagelog("You are now understand how to find things. How about gather things which laying around?")
        placebutton("Forage", "Find things around. Probably garbage, but sometimes food.");

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
setInterval(mainloop, 1000);
