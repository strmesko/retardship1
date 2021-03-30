    //retarded js element creation
    let respanel = document.createElement('div');
    let mainmenu = document.createElement('div');
    let rightbar = document.createElement('div');
    let actionselector = document.createElement('tab');
    let chartab = document.createElement('button');
    let actiontab = document.createElement('button');
    let actioncontent = document.createElement('div');
    let charcontent = document.createElement('div');
    let actiontext = document.createElement('b2');
    let charstate = document.createElement('div');
    let hpbar = document.createElement('div');
    let manabar = document.createElement('div');
    let staminabar = document.createElement('div');
    let expbar = document.createElement('div');
    let hpbartext = document.createElement('div');
    let manabartext = document.createElement('div');
    let staminabartext = document.createElement('div');
    let expbartext = document.createElement('div');
    let resourcetab = document.createElement('div');
    let skillstab = document.createElement('div');
    let leftselector = document.createElement('div');
    let resbutton = document.createElement('button');
    let skillsbutton = document.createElement('button'); 
    //action buttons
    let explorebutton = document.createElement('button');
    //class names for CSS shit, properties and ID
    rightbar.className = "rightbar";
    mainmenu.className = "topic";
    mainmenu.innerHTML = "menuu";
    respanel.className = "resbl";
    actionselector.className = "actionselect";
    chartab.innerHTML = "Char";
    actiontab.innerHTML = "Action";
    actioncontent.innerHTML = "\200";
    actioncontent.className = "actionplace";
    charcontent.innerHTML = "your charactur";
    chartab.className = "actiontab";
    actiontab.className = "actiontab";
    charcontent.className = "actionplace";
    actiontext.ClassName = "actiontext";
    actiontext.innerText = "\200";
    charstate.className = "charstate";
    charstate.innerText = you.name;
    hpbar.className = "hpbar";
    manabar.className = "manabar";
    staminabar.className = "staminabar";
    expbar.className = "expbar";
    hpbar.innerText = "\200";
    manabar.innerText = "\200";
    staminabar.innerText = "\200";
    expbar.innerText = "\200";
    hpbartext.className = "hpbartext";
    manabartext.className = "manabartext";
    staminabartext.className = "staminabartext";
    expbartext.className = "expbartext"; 
    leftselector.className = "leftselector";
    leftselector.innerText = "";
    resbutton.innerText = "resources";
    resbutton.className = "restab";
    skillsbutton.innerText = "stats&skills";
    skillsbutton.className = "restab";
    resourcetab.className = "lefttabs";
    resourcetab.innerText = "whoa resources";
    skillstab.className = "lefttabs";
    skillstab.innerText = "whoaskills";
    explorebutton.innerText = "Explore";

     //id
     chartab.id = "chartab";
     actiontab.id = "actiontab";


    charcontent.id = "charcontent";
    actioncontent.id = "actionplace";
    hpbar.id = "hpbar";    
    hpbartext.id = "hpbartext";        
    manabar.id = "manabar";
    staminabar.id = "staminabar";
    expbar.id = "expbar";
    staminabartext.id = "staminabartext"; 
    manabartext.id = "manabartext"; 
    expbartext.id = "expbartext";
    resbutton.id = "resbutton";
    skillsbutton.id = "skillsbutton";
    resourcetab.id = "resourcetab";
    skillstab.id = "skillstab";
    rightbar.id = "gamelog";
    explorebutton.id = "exploreBtn";
    //shit appear
    document.body.appendChild(respanel);
    document.body.appendChild(mainmenu);
    document.body.appendChild(rightbar);
    document.body.appendChild(actionselector);
    actionselector.appendChild(chartab);
    actionselector.appendChild(actiontab);
    document.body.appendChild(actioncontent);
    document.body.appendChild(charcontent);
    actioncontent.appendChild(actiontext);
    respanel.appendChild(charstate);
    charstate.appendChild(hpbar);
    charstate.appendChild(manabar);
    charstate.appendChild(staminabar);
    charstate.appendChild(expbar);
    charstate.appendChild(hpbartext);
    charstate.appendChild(manabartext);
    charstate.appendChild(staminabartext);
    charstate.appendChild(expbartext);
    respanel.appendChild(leftselector);
    leftselector.appendChild(resbutton);
    leftselector.appendChild(skillsbutton);
    respanel.appendChild(resourcetab);
    respanel.appendChild(skillstab);
    ////default TIPS
    document.getElementById('actiontab').setAttribute('data-tooltip', 'ACTIONS. take a proper job and change the world here');
    document.getElementById('chartab').setAttribute('data-tooltip', 'NOT EMPLEMENTED YET. character');
    document.getElementById('resbutton').setAttribute('data-tooltip', 'The palace if your stuff. Sanctuary of garbage');
    document.getElementById('skillsbutton').setAttribute('data-tooltip', 'Faster, Smarter, Stronger...');
    document.getElementById('hpbartext').setAttribute('data-tooltip', 'Your Health status. Not mental Health of course.');
    document.getElementById('manabartext').setAttribute('data-tooltip', 'This shows your spirit fullness... or emptyness.');
    document.getElementById('staminabartext').setAttribute('data-tooltip', 'Try the way to deal with all workforce you have.');
    document.getElementById('expbartext').setAttribute('data-tooltip', 'Just progress it.');
// whoa array of fuckin actionbuttons which plaeced/remooved dynamically

        function placebutton(actionname, description){
            var actionbutton = document.createElement('button');
            i = document.getElementById('actionplace').childElementCount - 1;
            actionbutton.className = "actionbutton";
            actionbutton.id = ('actionbutton' + actionname) ;
            actionbutton.innerText = actionname;
            actionbutton.textContent = actionname;
            actionbutton.style.visibility = 'visible';
            actionplace.appendChild(actionbutton);
            document.getElementById('actionbutton' + actionname).setAttribute('data-tooltip', description.toString());
            actionbutton.onclick = function(){
                actionclick(actionname, actionbutton.id);
                messagelog('derpp' + actionname);
            }

        }
        function removebutton(buttonname){
            i = 0 ;
            while (i != document.getElementById("actionplace").childElementCount && document.getElementsByClassName('actionbutton')[i].textContent != buttonname ) {i++;}
            if (i == document.getElementById("actionplace").childElementCount && document.getElementsByClassName('actionbutton')[i].textContent != buttonname ) {console.log = "thereis no button with" + buttonname}
            else{
                document.getElementById("actionplace").removeChild(document.getElementById(document.getElementsByClassName('actionbutton')[i].id))
            }
        }

function createSkillbar(skillname){
    var skillplace = document.createElement('div');
    var skillbarback = document.createElement('div');
    var skillbar = document.createElement('div');
    skillbar.className = "statprogressbar";
    skillbarback.className = "statprogress";
    skillplace.className = "skillsbar";
    skillplace.id = ('skillsplace'+ skillname);
    skillbarback.id = ('skillbarback'+ skillname);    
    skillbar.id = ('skillbar'+ skillname);   
    skillplace.innerText = skillname;
    skillbar.InnerText = "\200";
    skillbar.innerHTML = "\200";
    skillstab.appendChild(skillplace);
    skillplace.appendChild(skillbarback);
    skillbarback.appendChild(skillbar);
}
createSkillbar("str");
createSkillbar("agi");
createSkillbar("vit");
createSkillbar("per");
createSkillbar("int");
createSkillbar("ins");
createSkillbar("sou");
createSkillbar("luck");
createSkillbar("speed");
for (i = 0; i < 9; i++) {
    document.getElementById(document.getElementsByClassName("skillsbar")[i].id).style.backgroundColor = '#dfffdf';
}
let tooltipElem;

document.onmouseover = function(event) {
  let target = event.target;

  // if thereis tooltip
  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  // create elemunt

  tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);

  // default position are top center
  let coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0; // booorder

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) { // show tooltip on bottom if needed
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
};

document.onmouseout = function(e) {

  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }

};
