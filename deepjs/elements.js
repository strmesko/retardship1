    //retarded js element creation
    let respanel = document.createElement('div');
    let mainmenu = document.createElement('div');
    let rightbar = document.createElement('div');
    let actionselector = document.createElement('tab');
    let chartab = document.createElement('button');
    let actiontab = document.createElement('button');
    let maptab = document.createElement('button');
    let crafttab = document.createElement('button')
    let buildtab = document.createElement('button')
    let actioncontent = document.createElement('div');
    let charcontent = document.createElement('div');
    let craftcontent = document.createElement('div');
    let buildcontent = document.createElement('div');
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
    let storaeg = document.createElement('li');
    let mapcontent = document.createElement('div');
    //action buttons
    let explorebutton = document.createElement('button');
    //class names for CSS shit, properties and ID
    rightbar.className = "rightbar";
    mainmenu.className = "topic";
    mainmenu.innerHTML = "menuu";
    respanel.className = "resbl";
    actionselector.className = "actionselect";
    chartab.innerHTML = "Char";
    crafttab.innerHTML = "Craft";
    buildtab.innerHTML = "Build";
    actiontab.innerHTML = "Action";
    actioncontent.innerHTML = "";
    actioncontent.className = "actionplace";
    craftcontent.className = "actionplace";
    buildcontent.className = "actionplace";
    charcontent.innerHTML = "";
    chartab.className = "actiontab";
    crafttab.className = "actiontab";
    buildtab.className = "actiontab";
    actiontab.className = "actiontab";
    maptab.className = "actiontab"
    maptab.innerHTML = "Map";
    charcontent.className = "actionplace";
    actiontext.ClassName = "actiontext";
    actiontext.innerText = "";
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
    mapcontent.innerHTML = "map";
    mapcontent.className = "actionplace";
    //storaeg.className = "res";
     //id
     chartab.id = "chartab";
     actiontab.id = "actiontab";
     maptab.id = "maptab";
     crafttab.id = "crafttab";
     buildtab.id = "buildtab";
     mapcontent.id = "mapcontent";
     //stupidResConstructor('div', 'actionplace', 'map', 'mapplace', 'maptab', "THE MAP! DIRECTLY STOLEN FROM DORA!!!")
    //storaeg.id = "storage";
    charcontent.id = "charcontent";
    actioncontent.id = "actionplace";
    buildcontent.id = "buildplace";
    craftcontent.id = "craftplace";
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
    actionselector.appendChild(maptab);
    actionselector.appendChild(crafttab);
    actionselector.appendChild(buildtab);
    document.body.appendChild(actioncontent);
    document.body.appendChild(charcontent);
    document.body.appendChild(mapcontent);
    document.body.appendChild(craftcontent);
    document.body.appendChild(buildcontent);
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
    resourcetab.appendChild(storaeg);

    
    //retarded resource taebl 
    function stupidResConstructor(elementType, classname, innertext, id, parent, tooltip){
      if (checkExist(id) != true){
        newStupidElement = document.createElement(elementType);
        newStupidElement.className = classname;
        newStupidElement.innerText = innertext;
        newStupidElement.id = id;
        document.getElementById(parent).appendChild(newStupidElement);
        document.getElementById(id).setAttribute('data-tooltip', tooltip);
      }
    }
    function checkExist(elementId){
      var element =  document.getElementById(elementId);
  if (typeof(element) != 'undefined' && element != null)
  {
      return true;
  }
  }
    function resBuild(){
        
    for (i = 1; i < stocks.length ; i++){
        if (stocks[i].amount > 0){
          if (stocks[i].id > 1000 && stocks[i].id < 1100) {
            stupidResConstructor('ul', 'res', 'raw food', 'rawfoodtab', 'resourcetab', "The gordon says: IT'S A RAW!!!");
            stupidResConstructor('ul', 'res', 'Berries', 'berriestab', 'rawfoodtab', "Mmmmm berries...");
            stupidResConstructor('li', stocks[i].name + 'tab', stocks[i].name + ' x:' + stocks[i].amount + stocks[i].unitType , stocks[i].name + 'tab' , 'berriestab', stocks[i].description);
          }
          if (stocks[i].id < 200) {
            stupidResConstructor('ul', 'res', 'raw resources', 'rawrestab', 'resourcetab', 'Raw unedible things to find');
            stupidResConstructor('ul', 'res', 'nature recources', 'naturerestab', 'rawrestab', 'Your local treasury from nature');
            stupidResConstructor('li', stocks[i].name + 'tab', stocks[i].name + ' x:' + rounded(stocks[i].amount) + stocks[i].unitType , stocks[i].name + 'tab' , 'naturerestab', stocks[i].description);
          }
          document.getElementById(stocks[i].name + 'tab').innerText = stocks[i].name + ' x:' + rounded(stocks[i].amount) + stocks[i].unitType ;
      }
    }
  }
  resBuild();
//    stupidResConstructor('ul', 'res', 'test', 'testtab', 'rawfoodtab', "WHOA TUULTIP");
    //    stupidResConstructor('ul', 'res', 'test', 'testtab', 'rawfoodtab', "WHOA TUULTIP");
    function addResourceDisplay(parentId, text, thisId, description) //muh skills are grown up and i maek constructor. i am too lazy ro modify A WHOLE INTERFAEC with that
    {
      if (checkExist(thisId) != true){
        rawfoodtab = document.createElement('li');
        rawfoodtab.ClassName = 'res';
        rawfoodtab.innerText = text.toString();
        rawfoodtab.id = thisId;
        document.getElementById(parentId.toString()).appendChild(thisId.toString());
        document.getElementById(thisId).setAttribute('data-tooltip', description.toString());
      }
    }



    ////default TIPS
    document.getElementById('actiontab').setAttribute('data-tooltip', 'ACTIONS. take a proper job and change the world here');
    document.getElementById('chartab').setAttribute('data-tooltip', 'NOT EMPLEMENTED YET. character');
    document.getElementById('maptab').setAttribute('data-tooltip', 'THE MAP! DIRECTLY STOLEN FROM DORA!!!');
    document.getElementById('crafttab').setAttribute('data-tooltip', 'Just make your garbage more complicated here');
    document.getElementById('buildtab').setAttribute('data-tooltip', 'UNABLE TO COMPLY THE BULDING IN PROGRESS. UNABLE TO COMPLY THE BULDING IN PROGRESS. UNABLE TO COMPLY THE BULDING IN PROGRESS. UNABLE TO COMPLY THE BULDING IN PROGRESS. ');
    document.getElementById('resbutton').setAttribute('data-tooltip', 'The palace if your stuff. Sanctuary of garbage');
    document.getElementById('skillsbutton').setAttribute('data-tooltip', 'Faster, Smarter, Stronger...');
    document.getElementById('hpbartext').setAttribute('data-tooltip', 'Your Health status. Not mental Health of course.');
    document.getElementById('manabartext').setAttribute('data-tooltip', 'This shows your spirit fullness... or emptyness.');
    document.getElementById('staminabartext').setAttribute('data-tooltip', 'Try the way to deal with all workforce you have.');
    document.getElementById('expbartext').setAttribute('data-tooltip', 'Just progress it.');
// whoa array of fuggin actionbuttons which plaeced/remooved dynamically

        function placebutton(actionname, description){
          if (checkExist('actionbutton' + actionname) != true){
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

document.onmouseover = function(event) { //tuultip whoa :o
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
  //eqipment inventory
  stupidResConstructor('div', 'equipDisplay', 'quip your char duud', 'quipdisplay', 'charcontent', 'Do not crosdress');
  stupidResConstructor('div', 'inventoryPlace', '', 'inventoryPlace', 'charcontent', '')
 for (t = 0; t < you.equipinventory.length; t++){
  stupidResConstructor('div', 'invslot', '', 'invslot'+t, 'inventoryPlace', 'empty slot') ;
 }
    // subtabs for crafting 
    stupidResConstructor('button', 'craftsub', 'common', 'craftcommon', 'craftplace', 'Just a common junk to craft');
    stupidResConstructor('button', 'craftsub', 'food', 'craftfood', 'craftplace', 'Fuel for your infinite entropy');
    stupidResConstructor('button', 'craftsub', 'tools', 'crafttools', 'craftplace', 'First step for civilization');
    stupidResConstructor('div', 'craftsubplace', '', 'commonplace', 'craftplace', '');
    // crafting window here
    stupidResConstructor('div', 'craftlist', 'craftlist', 'comcraftlist', 'commonplace', '');
    stupidResConstructor('div', 'craftdescription', 'craftlist', 'comcraftdescription', 'commonplace', '');
    stupidResConstructor('div', 'craftdetails', 'craftlist', 'comcraftdetails', 'commonplace', '');
    stupidResConstructor('div', 'craftsubplace', 'food', 'foodplace', 'craftplace', '');
    stupidResConstructor('div', 'craftsubplace', 'tools', 'toolsplace', 'craftplace', '');


    // subtabs for building
