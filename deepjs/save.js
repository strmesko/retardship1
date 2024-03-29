

    function Save() {
        let data = {
            you: you,
            maxinventory: maxinventory,
            lastupdate: lastupdate,
            herezone: herezone,
            loglengh:loglengh,
            maxactions:maxactions,
            actionscount:actionscount,
            exploreactive:exploreactive,
            searchactive:searchactive,
            searchopened:searchopened,
            trees:trees,
            grass:grass,
            rocks:rocks,
            water:water,
            forageactive:forageactive,
            stocks:stocks,
            restactive:restactive,
            worldmap:worldmap,
        }
        localStorage.setItem("data",JSON.stringify(data));
        messagelog('Game saved');
    }
    
    function Load() {
        console.log(localStorage.getItem("data"))
        let saveData = localStorage.getItem("data")
    
        if(!saveData) {
            return
        }
        else {
            saveData = JSON.parse(saveData) 
//            you = new Character(saveData.you.maxhp, saveData.you.maxmana, saveData.you.maxstamina);
            you = Object.assign({},saveData.you);
            //brainlet splints for loadin child elements.
            you.forage = new Skill(saveData.you.forage);
            you.exploration = new Skill(saveData.you.exploration);
            you.rest = new Skill(saveData.you.rest);
            you.meditation = new Skill(saveData.you.meditation);
            you.regeneration = new Skill(saveData.you.regeneration);
            you.str = new Skill(saveData.you.str.name);
            you.agi = new Skill(saveData.you.agi.name);
            you.vit = new Skill(saveData.you.vit.name);
            you.per = new Skill(saveData.you.per.name);
            you.int = new Skill(saveData.you.int.name);
            you.ins = new Skill(saveData.you.ins.name);
            you.sou = new Skill(saveData.you.sou.name);
            you.luck = new Skill(saveData.you.luck.name);
            you.speed = new Skill(saveData.you.speed.name);
            //stuupid cloner
            you.forage.clone(saveData.you.forage);
            you.exploration.clone(saveData.you.exploration);
            you.regeneration.clone(saveData.you.regeneration);
            you.meditation.clone(saveData.you.meditation);
            you.rest.clone(saveData.you.rest);
            you.str.clone(saveData.you.str);
            you.agi.clone(saveData.you.agi);
            you.vit.clone(saveData.you.vit);
            you.per.clone(saveData.you.per);
            you.int.clone(saveData.you.int);
            you.ins.clone(saveData.you.ins);
            you.sou.clone(saveData.you.sou);
            you.luck.clone(saveData.you.luck);
            you.speed.clone(saveData.you.speed);
            herezone = Object.assign({},saveData.herezone);
            maxinventory = saveData.maxinventory;
            lastupdate = saveData.lastupdate;
            loglengh = saveData.loglengh;
            maxactions = saveData.maxactions;
            actionscount = saveData.actionscount;
            exploreactive = saveData.exploreactive;
            searchactive = saveData.searchactive;
            searchopened = saveData.searchopened;
            trees = saveData.trees;
            grass = saveData.grass;
            rocks = saveData.rocks;
            water = saveData.water;
            forageactive = saveData.forageactive;
            restactive = saveData.restactive;
            worldmap = saveData.worldmap;
            if (stocks.length == saveData.stocks.length){stocks = saveData.stocks}
            else{
                messagelog('New resources in save game are missing! Resorting...')
                for (i = 0; i < stocks.length; i++){ //retarded sorting but it's better than pogoSort :P
                    for (t = 0; t < saveData.stocks.length; t++){
                        if ( stocks[i].id == stocks[t].id){
                            stocks[i] = saveData.stocks[t];
                        }
                    }
                }
            }


        }
        // rebuild the damn whole interface
        calculateStats();
        document.getElementById("actionplace").innerHTML = '';
        document.getElementById("skillstab").innerHTML = 'whoaskills';
        if (herezone.revealed < 100 ){
            placebutton('Explore', 'Explore the entire tile for further investigate. <br>Full tile exploration reveals neighbour tiles');
            if (exploreactive == 1){
                document.getElementById('actionbuttonExplore').style.backgroundColor = '#fcf088';
            }
        }
        if (herezone.hiddenstuff > 0 && herezone.revealed > 1){
            placebutton('Search', 'Memorize points of interests for further interaction');
            if (searchactive == 1) {
                document.getElementById('actionbuttonSearch').style.backgroundColor = '#fcf088';
            }
        }
        if (you.exploration.lvl >= 5){
            placebutton('Forage', 'Find things around. Probably garbage, but sometimes food.');
            if (forageactive == 1) {
                document.getElementById('actionbuttonForage').style.backgroundColor = '#fcf088';
            }
        }
        if (restactive < 2){
            placebutton("Rest", "Just doing nothing are not enough. Let's enjoy it to the fullest!");
            if (restactive == 1) {
                document.getElementById('actionbuttonRest').style.backgroundColor = '#fcf088';
            }
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
        if (you.exploration.lvl > 1 && you.exploration.exp != 100) {
            createSkillbar('exploration');
        }
        if (you.forage.lvl != 1 && you.exploration.exp != 100) {
            createSkillbar('forage');
        }
        if (you.rest.lvl != 1 && you.rest.exp != 100) {
            createSkillbar('rest');
        }
        if (you.meditation.lvl != 1 && you.meditation.exp != 100) {
            createSkillbar('meditation');
        }
        if (you.regeneration.lvl != 1 && you.regeneration.exp != 100) {
            createSkillbar('regeneration');
        }
        livemap.innerHTML = '';
        document.getElementById('livemap').style.width = 30;
        document.getElementById('livemap').style.height = 30;
        mapborderx = 0;
        mapbordery = 1;
        mapcenterx = 0;
        mapcentery = 0;
        drawTile(0,0, 'Forest');
        messagelog('lenghworld' + worldmap.length)
        for (td = 1; td < worldmap.length; td++) {
            
                ix = worldmap[td].tile[0][0].x
                iy = worldmap[td].tile[0][0].y
                messagelog('Loading chunk. ix:' + ix + ' iy' + iy);
                for (dx = 0; dx < 50; dx++){
                    for (dy = 0; dy < 50; dy++){
                        if (worldmap[td] != undefined){
                            if (worldmap[td].tile[dx][dy].name != undefined){
                                drawTile(ix + dx, iy + dy, worldmap[td].tile[dx][dy].name)
                                
                            }
                        }
                    }
                }
            
            }
    messagelog('Game loaded');
    }
    
