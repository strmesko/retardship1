    //clucker actions
    //middle tab selector
    let thisTime = new Date();
    chartab.onclick = function(){
        actionTab(event, 'charcontent')
        messagelog('Character click');
    };
    actiontab.onclick = function(){
        actionTab(event, 'actionplace')
        messagelog('actions click');
    };
    maptab.onclick = function(){
        actionTab(event, 'mapcontent')
        messagelog('map click');
    };
    //left tab selector
    resbutton.onclick = function(){
        leftactionTab(event, 'resourcetab')
        messagelog('resourceclick');
    };
    skillsbutton.onclick = function(){
        leftactionTab(event, 'skillstab')
        messagelog('skillsclick');
    };



    function actionclick(actionbtn,btnid){
        switch (actionbtn) {
            case 'Explore':
                if (exploreactive == 0)
                { 
                    if (actionscount > 0) {
                    messagelog('You begin explore the area');
                    document.getElementById(btnid).style.backgroundColor = '#fcf088';
                    exploreactive = 1;
                    actionscount -= 1;
                    }
                    else {messagelog('No action points.')}                    
                }
                else {
                    exploreactive == 1;
                    document.getElementById(btnid).style.backgroundColor = '#caf37d';
                    messagelog('You stop explore the area')
                    exploreactive = 0;
                    actionscount += 1;
                }
            break;
            case 'Search':{
                if (searchactive == 0)
                { 
                    if (actionscount > 0) {
                    messagelog('You start yo search things');
                    document.getElementById(btnid).style.backgroundColor = '#fcf088';
                    searchactive = 1;
                    actionscount -= 1;
                    }
                    else {messagelog('No action points.')}                    
                }
                else {
                    exploreactive == 1;
                    document.getElementById(btnid).style.backgroundColor = '#caf37d';
                    messagelog('You stop to search things')
                    searchactive = 0;
                    actionscount += 1;
                }                
                
            }
            break;
            case 'Forage':{
                if  (forageactive == 0){
                    if (actionscount > 0){
                        messagelog('You start to gather things');
                        actionscount -= 1;
                        forageactive = 1;
                        document.getElementById('actionbuttonForage').style.backgroundColor = '#fcf088';
                    } else {messagelog ('No action points.')}
                } else if (forageactive ==1) {
                    forageactive = 0;
                    messagelog('You stop foraging');
                    actionscount += 1;
                    document.getElementById('actionbuttonForage').style.backgroundColor = '#caf37d';
                }
            }
            break;
            case 'Rest':{
                if  (restactive == 0){
                    if (actionscount > 0){
                        messagelog('Lets rest');
                        actionscount -= 1;
                        restactive = 1;
                        document.getElementById('actionbuttonRest').style.backgroundColor = '#fcf088';
                    } else {messagelog ('No action points.')}
                } else if (restactive ==1) {
                    restactive = 0;
                    messagelog('Your rest is over');
                    actionscount += 1;
                    document.getElementById('actionbuttonRest').style.backgroundColor = '#caf37d';
                }
            }
            break;
            case 'Go north':{
                newTile(herezone.x, herezone.y - 1);
                herezone = pickTile(herezone.x, herezone.y - 1);
                messagelog('north yoo');
            break;
            }
            case 'Go south':{
                newTile(herezone.x, herezone.y + 1);
                herezone = pickTile(herezone.x, herezone.y + 1);
                messagelog('south yoo');
            break;
            }
            case 'Go east':{
                newTile(herezone.x + 1, herezone.y );
                herezone = pickTile(herezone.x + 1, herezone.y);
                messagelog('north yoo');
            break;
            }
            case 'Go west':{
                newTile(herezone.x - 1, herezone.y );
                herezone = pickTile(herezone.x - 1, herezone.y );
                messagelog('west yoo');
            break;
            }
            default:
                messagelog('actionbtnid' + actionbtn);
            break;
            }
        }
       /* placebutton("Go north", "Freeze to death.");
        placebutton("Go south", "Roastlands");
        placebutton("Go east", "Enjoy the anime.");
        placebutton("Go west", "Doing columbus."); */
