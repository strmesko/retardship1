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
    updateSkillGUI('str', you.str.lvl, you.str.exp); //yeah i am lazy retard
    updateSkillGUI('agi', you.agi.lvl, you.agi.exp);
    updateSkillGUI('vit', you.vit.lvl, you.vit.exp);
    updateSkillGUI('per', you.per.lvl, you.per.exp);
    updateSkillGUI('int', you.int.lvl, you.int.exp);
    updateSkillGUI('ins', you.ins.lvl, you.ins.exp);
    updateSkillGUI('sou', you.sou.lvl, you.sou.exp);
    updateSkillGUI('luck', you.luck.lvl, you.luck.exp);
    updateSkillGUI('speed', you.speed.lvl, you.speed.exp);
    if (document.getElementById('skillstab').childElementCount > 9){
        for (i = 9; i < document.getElementById('skillstab').childElementCount; i++) {
            switch(document.getElementsByClassName("skillsbar")[i].id){
                case 'skillsplaceexploration':
                    updateSkillGUI('exploration', you.exploration.lvl, you.exploration.exp);
                break;
                case 'skillsplaceforage':
                    updateSkillGUI('forage', you.forage.lvl, you.forage.exp);
                break;
            }

        }
    }
    
}


function updateSkillGUI(skillname, lvl, exp) {
    document.getElementById('skillsplace'+skillname).childNodes[0].nodeValue = skillname + " LVL:" + lvl + " EXP remain:" + rounded(exp);
    document.getElementById('skillbar'+skillname).style.width = (100 - 100*(exp/(lvl*100))) + '%';
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
            if (searchactive == 2 && herezone.revealed > 1) {placebutton("Search"); searchactive = 0;}
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
    }
    //messagelog("tick tock");
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
        placebutton("Forage");

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
