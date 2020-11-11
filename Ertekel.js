function Ertekeles(){
    const hal = document.getElementById("halozat").value;
    const pro = document.getElementById("prog").value;
    const web = document.getElementById("wa").value;
    const tar = document.getElementById("tart").value;
    const felep= document.getElementById("fel").value;
    const eload= document.getElementById("elo").value;
    
    let iros= parseFloat(hal) + parseFloat(pro) + parseFloat(web);
    document.getElementById("irasbeli").innerHTML= iros + " pont"; 
    let szos= parseFloat(tar) + parseFloat(felep) + parseFloat(eload);
    document.getElementById("szobeli").innerHTML= szos + " pont";
    //közép szint
    let osszp = iros + szos;
    let szaz = osszp/150*100;
    if (iros<15){
        document.getElementById("kozep").innerHTML="1";
        document.getElementById("emelt").innerHTML="1";
    }
    else if (szos<4){
        document.getElementById("kozep").innerHTML="1";
        document.getElementById("emelt").innerHTML="1";
    }
    else if (szaz < 25){
        document.getElementById("kozep").innerHTML="1";
    }
    else if (szaz < 40){
        document.getElementById("kozep").innerHTML="2";
    }
    else if (szaz < 60){
        document.getElementById("kozep").innerHTML="3";
    }
    else if (szaz < 80){
        document.getElementById("kozep").innerHTML="4";
    }
    else{
        document.getElementById("kozep").innerHTML="5";
    }
    if (szaz < 25)
        document.getElementById("emelt").innerHTML="1";
    else if (szaz < 33)
        document.getElementById("emelt").innerHTML="2";
    else if (szaz < 47)
        document.getElementById("emelt").innerHTML="3";
    else if (szaz < 60)
        document.getElementById("emelt").innerHTML="4";
    else
        document.getElementById("emelt").innerHTML="5";
}
