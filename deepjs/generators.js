function generateland(landtype){ //generate stuff in existin tile
    switch (landtype){
        case "Forest":
            x = Math.random();
            if (x < 0.5){trees +=1; herezone.land.trees +=1;}
            else if (x < 0.8){grass +=1; herezone.land.grass +=1;}
            else if (x < 0.95){rocks +=1; herezone.land.rocks +=1;}
            else {water += 1; herezone.land.water +=1;}
        
        break;
        case "Plains":
            x = Math.random();
            if (x < 0.7){grass +=1; herezone.land.grass +=1;}
            else if (x < 0.8){trees +=1; herezone.land.trees +=1;}
            else if (x < 0.95){water +=1; herezone.land.water +=1;}
            else {rocks += 1; herezone.land.rocks +=1;}
        
        break;
        case "DeepForest":
            x = Math.random();
            if (x < 0.9){trees +=1; herezone.land.trees +=1;}
            else if (x < 0.8){grass +=1; herezone.land.grass +=1;}
            else if (x < 0.95){rocks +=1; herezone.land.rocks +=1;}
            else {water += 1; herezone.land.water +=1;}
        
        break;
        case "RiverPlains":
            x = Math.random();
            if (x < 0.6){grass +=1; herezone.land.grass +=1;}
            else if (x < 0.4){water +=1; herezone.land.water +=1;}
            else if (x < 0.8){trees +=1; herezone.land.trees +=1;}
            else {rocks += 1; herezone.land.rocks +=1;}
        
        break;
        case "Walley":
            x = Math.random();
            if (x < 0.9){grass +=1; herezone.land.grass +=1;}
            else if (x < 0.8){water +=1; herezone.land.water +=1;}
            else if (x < 0.90){rocks +=1; herezone.land.rocks +=1;}
            else {trees += 1; herezone.land.trees +=1;}
        
        break;
        case "RiverWalley":
            x = Math.random();
            if (x < 0.7){grass +=1; herezone.land.grass +=1;}
            else if (x < 0.9){water +=1; herezone.land.water +=1;}
            else if (x < 0.7){rocks +=1; herezone.land.rocks +=1;}
            else {trees += 1; herezone.land.trees +=1;}
        
        break;
        case "Swamps":
            x = Math.random();
            if (x < 0.5){water +=1; herezone.land.water +=1;}
            else if (x < 0.8){grass +=1; herezone.land.grass +=1;}
            else if (x < 0.95){trees +=1; herezone.land.trees +=1;}
            else {rocks += 1; herezone.land.rocks +=1;}
        
        break;
        case "Islands":
            x = Math.random();
            if (x < 0.5){trees +=1; herezone.land.trees +=1;}
            else if (x < 0.8){grass +=1; herezone.land.grass +=1;}
            else if (x < 0.95){rocks +=1; herezone.land.rocks +=1;}
            else {water += 1; herezone.land.water +=1;}
        
        break;
        case "Water":
            x = Math.random();
            if (x < 0.5){trees +=1; herezone.land.trees +=1;}
            else if (x < 0.8){grass +=1; herezone.land.grass +=1;}
            else if (x < 0.95){rocks +=1; herezone.land.rocks +=1;}
            else {water += 1; herezone.land.water +=1;}
        break;
        case "HighLands":
            x = Math.random();
            if (x < 0.1){trees +=1; herezone.land.trees +=1;}
            else if (x < 0.4){grass +=1; herezone.land.grass +=1;}
            else if (x < 0.3){water +=1; herezone.land.water +=1;}
            else {rocks += 1; herezone.land.rocks +=1;}
        
        break;
        case "RiverHighLands":
            x = Math.random();
            if (x < 0.1){trees +=1; herezone.land.trees +=1;}
            else if (x < 0.3){grass +=1; herezone.land.grass +=1;}
            else if (x < 0.4){water +=1; herezone.land.water +=1;}
            else {rocks += 1; herezone.land.rocks +=1;}
        
        break;
        case "Mountains":
            x = Math.random();
            if (x < 0.05){trees +=1; herezone.land.trees +=1;}
            else if (x < 0.1){grass +=1; herezone.land.grass +=1;}
            else if (x < 0.98){rocks +=1; herezone.land.rocks +=1;}
            else {water += 1; herezone.land.water +=1;}
        
        break;
        case "RiverMountains":
            x = Math.random();
            if (x < 0.5){trees +=1; herezone.land.trees +=1;}
            else if (x < 0.8){grass +=1; herezone.land.grass +=1;}
            else if (x < 0.95){rocks +=1; herezone.land.rocks +=1;}
            else {water += 1; herezone.land.water +=1;}
        
        break;
        case "SnowyPeaks":
            x = Math.random();
            if (x < 0.5){trees +=1; herezone.land.trees +=1;}
            else if (x < 0.8){grass +=1; herezone.land.grass +=1;}
            else if (x < 0.95){rocks +=1; herezone.land.rocks +=1;}
            else {water += 1; herezone.land.water +=1;}
        
        break;
    }
}
function tileRoulette(x,y){
    landcounter = new Array(15).fill(0);
    pickedTile = new Quartal();    

for (dx = -2; dx <= 2; dx++)   {// count types of tiles in 5x5 area. 
    for (dy = -2; dy <= 2; dy++){
        outputTile = new Quartal;
        pickedTile = pickTile(x + dx, y + dy);
        //console.log(dx + " " + dy);
        
        
        if (pickedTile.name == undefined) {
                for (t = 1; t< 14; t++){// add counts to generate tiles
                landcounter[t] += 1;
                messagelog(landcounter[t]);
                }
            }
            else if (pickedTile.name == "Forest"){
                landcounter[1] += 2;
                landcounter[3] += 1;
                landcounter[2] += 1;
                landcounter[10] += 1;
            }
            else if (pickedTile.name == "Plains"){
                landcounter[2] += 2;
                landcounter[4] += 1;
                landcounter[5] += 1;
                landcounter[10] += 1;
            }
            else if (pickedTile.name == "DeepForest"){
                landcounter[3] += 2;
                landcounter[1] += 1;
                landcounter[10] += 1 ;
            }
            else if (pickedTile.name == "RiverPlains"){
                landcounter[4] += 2;
                landcounter[2] += 2;
                landcounter[6] += 1;
                landcounter[11] += 1;
                landcounter[13] += 1;
            }
            else if (pickedTile.name == "Walley"){
                landcounter[5] += 2;
                landcounter[6] += 1;
            }
            else if (pickedTile.name == "RiverWalley"){
                landcounter[6] += 2;
                landcounter[5] += 2;
                landcounter[4] += 1;
                landcounter[11] += 1;
                landcounter[13] += 1;
            }
            else if (pickedTile.name == "Swamps"){
                landcounter[7] += 2;
                landcounter[10] = 0;
                landcounter[11] = 0;
                landcounter[12] = 0;
                landcounter[13] = 0;
                landcounter[14] = 0;
            }
            else if (pickedTile.name == "Islands"){
                landcounter[8] += 2;
                landcounter[9] += 2;
                landcounter[10] = 0;
                landcounter[11] = 0;
                landcounter[12] = 0;
                landcounter[13] = 0;
                landcounter[14] = 0;
            }
            else if (pickedTile.name == "Water"){
                landcounter[9] += 2;
                landcounter[8] +=1;
                landcounter[10] = 0;
                landcounter[11] = 0;
                landcounter[12] = 0;
                landcounter[13] = 0;
                landcounter[14] = 0;
            }
            else if (pickedTile.name == "HighLands"){
                landcounter[10] += 2;
                landcounter[11] += 1;
                landcounter[12] += 1;
            }
            else if (pickedTile.name == "RiverHighLands"){
                landcounter[11] += 2;
                landcounter[6] += 1;
                landcounter[4] += 1;
                landcounter[13] += 1;
            }
            else if (pickedTile.name == "Mountains"){
                landcounter[12] += 2;
                landcounter[14] += 1;
                landcounter[13] += 1;
                landcounter[7] = 0;
                landcounter[8] = 0;
                landcounter[9] = 0;
            }
            else if (pickedTile.name == "RiverMountains"){
                landcounter[13] += 2;
                landcounter[6] += 1;
                landcounter[11] += 1;
                landcounter[13] += 1;
                landcounter[7] = 0;
                landcounter[8] = 0;
                landcounter[9] = 0;
             }
             else if (pickedTile.name == "Peaks"){
                landcounter[14] += 2;
                landcounter[7] = 0;
                landcounter[8] = 0;
                landcounter[9] = 0;
                landcounter[6] = 0;
                landcounter[5] = 0;
                landcounter[4] = 0;
                landcounter[3] = 0;
                landcounter[2] = 0;
                landcounter[1] = 0;
             }      //brobably long and stuupid code huh?             
        }
}
    count = 0;
    for (t = 0; t < landcounter.length; t++){
        count += landcounter[t];
    }
    messagelog(count + "lands for genearet");
    messagelog(landcounter);
    rnd = (Math.random() * count).toFixed(2);
    for (t = 0; t < landcounter.length; t++){
        if (rnd > landcounter[t]) {rnd -= landcounter[t]} else
        switch(t){ //i am yandere dev now. where is my cum chalice
            case 1:
                //messagelog("forest");
                return "Forest";
            case 2:
                //messagelog("plains");
                return "Plains";
            case 3:
                return "DeepForest";
            case 4:
                return "RiverPlains";
            case 5:
                return "Walley";
            case 6:
                return "RiverWalley";
            case 7:
                return "Swamps";
            case 8:
                return "Islands";
            case 9:
                return "Water";
            case 10:
                return "HighLands";
            case 11:
                return "RiverHighLands";
            case 12:
                return "Mountains";
            case 13:
                return "RiverMountains";
            case 14:
                return "Peaks";
            
        }
    }
        

    

generatedTile = new Land(x,y, type);
return generatedTile
}

function newTile(x,y){
    thisTile = pickTile(x,y);
    if (thisTile == undefined){
        worldmap.push(new Chunk(((x - 24) / 50).toFixed(), ((y - 24) / 50).toFixed()))

        thisTile = pickTile(x,y);
    }
    if (thisTile.name == undefined){
        thisTile.name = tileRoulette(x,y);
        drawTile(x,y, thisTile.name);
    } else {messagelog("tile is already exist");}


}
function pickTile(x,y){
    t = 0;
    tx = 0;
    ty = 0;
    for (i = 1; i < (worldmap.length ); i++){
        if (worldmap[i] != null || worldmap[i].tile == undefined ){
            tx = x - (((x - 24) / 50).toFixed() * 50);
            ty = y - (((y - 24) / 50).toFixed() * 50);

            messagelog("x:"+tx+"y:"+ty);
            if((worldmap[i].tile[tx.toFixed()][ty.toFixed()].x == x) && (worldmap[i].tile[tx.toFixed()][ty.toFixed()].y == y)) {
                t = 1;
                outputTile = new Quartal;
                outputTile = worldmap[i].tile[tx][ty];
            //messagelog = worldmap[i].tile[tx][ty];
            return outputTile;
            
            }
        }
        


        }
     
     worldmap.push(new Chunk(((x - 24)/50).toFixed(), ((y - 24)/50).toFixed())); 
     outputTile = new Quartal;
     outputTile = worldmap[i].tile[tx][ty];
     messagelog("createChunk" + x + y);
     return outputTile;     
   // if (outputTile.tile == undefined || outputTile == null){messagelog("YOLO DUMBASS! THEREIS NO TILE IN " + x + " " + y)} else {

    //}
}

drawTile(0,0, "Forest");
function mapRender(){

    
//    for (t = 0; t < document.getElementById('livemap').length ; t++)
}
