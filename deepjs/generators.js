function generateland(landtype){
    switch (landtype){
        case "Forest":
            x = Math.random();
            if (x < 0.5){trees +=1; herezone.land.trees +=1;}
            else if (x < 0.8){grass +=1; herezone.land.grass +=1;}
            else if (x < 0.95){rocks +=1; herezone.land.rocks +=1;}
            else {water += 1; herezone.land.water +=1;}
        
        break;
    }
}
