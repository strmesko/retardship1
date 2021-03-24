

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
            you = new Character(saveData.you.maxhp, saveData.you.maxmana, saveData.you.maxstamina);
            herezone = saveData.herezone;
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
        }
        document.getElementById("actionplace").innerHTML = '';
        document.getElementById("skillstab").innerHTML = 'whoaskills';
        if (you.exploration.lvl > 1 || you.exploration.exp != 100) {
            createSkillbar('exploration');
        }
        if (herezone.revealed < 100 ){
            placebutton('Explore');
            if (exploreactive == 1){
                document.getElementById('actionbuttonExplore').style.backgroundColor = '#fcf088';
            }
        }
        if (herezone.hiddenstuff > 0 && herezone.revealed > 1){
            placebutton('Search');
            if (searchactive == 1) {
                document.getElementById('actionbuttonSearch').style.backgroundColor = '#fcf088';
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
    messagelog('Game loaded');
    }
    
