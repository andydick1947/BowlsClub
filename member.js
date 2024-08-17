let person=["0", "0", "0", "0", "0"];
let membership=[

["3","Dennis", "Barker","dennisbarker@talktalk.dnet" , "01446793028"],
["4", "Hilary", "Bevington", "hilary.bevington@btopenworld.com", "07923354144 "],
["87", "Fiona", "Blick", "vivianblick@btinternet.com", " "],
["88", "Vivian", "Blick", "vivianblick@btinternet.com", " "],
["8", "Jane", "Brown", "janebrown10@btinternet.com", " "],
["10", "Lynfa", "Chamberlain", "lynfachamberlain@gmail.com", "01446772148"],
["13", "Gill", "Daniels", "gilldaniels@rocketmail.com", "07748195731"],
["17", "Andy", "Dick", "ardick2000@gmail.com ", "07548748264"],
["71", "Helen", "Ford", "helenford008@yahoo.co.uk", "07443579909"],
["26", "Myrtle", "Hansard", " ", "01446773704"],
    
["32", "Dave", "Hitchings", "dghitchings@hotmail.co.uk", " "],
["38", "Geoff", "Jones", "geoffbjones@outlook.com ", "014467946140"],
["37", "Jeanette", "Jones", "jeanettejones56@gmail.com", "07704541236"],
["42", "Anna", "Keeling", "ajkeeling@gmail.com", "07739643808"],
["89", "Debbie", "Knox", "debbiejknox@gmail.com ", " "],
["76", "Linda", "Knox", "lindam.knox@gmail.com", "01446612946"],
["46", "Andrew", "Leonard", "andrew.leonard3697@gmail.com", " "],
["45", "Caroline", "Leonard", "carolineleonard3697@gmail.com", "01446793697"],
["47", "Diana", "Lewis", "dianaspencerlewis@btinternet.com", "01446772278"],
["49", "Alison", "Littlejohn", "alimarlit@gmail.com", "0144679632"],
    
["48", "Howard", "Littlejohn", "howard.littlejohn@gmail.com", "07840938530"],
["84", "Isabel", "Lowe", "ismaclowe@aol.com", " "],
["52", "Cathy", "Mangles", "c.mangles51@icloud.com", "01446772316"],
["53", "Carol", "Marchant", "crmcourt@hotmail.com ", "01446773355"],
["54", "Ros", "Martin-Jones", "rosmjones@gmail.com", "07717940011"],
["67", "Trish", "Roe", "patricia.roe@gmail.com", "01446771867"],
["92", "Debbie", "Rosevear", "drosevear2002@hotmail.co.uk ", "01446774190"],
["83", "Winifred", "Silman", "winifred.silman52@icloud.com", "01446793534"],
["75", "Pam", "Treadwell", "treadwellpam.08@gmail.com ", "07973720211"],
["79", "Dot", "Williams", "dotandesgadlys@talktalk.net", "07912640212"],

["81", "Jennifer", "Young", "jennyandnev@yahoo.co", "07528277077"],
["95", "Anne", "Sparks", "annesparks1942@btinternet.com", "01446795443"],
["102", "1", "Spare", "0", "0"],
["103", "2", "Spare", "0", "0"],
["104", "3", "Spare", "0", "0"],
["105", "4", "Spare", "0", "0"],
["106", "5", "Spare", "0", "0"],
["107", "6", "Spare", "0", "0"],
["108", "7", "Spare", "0", "0"],
["109", "8", "Spare", "0", "0"]
]
function myCalc(lbl){
    for (let i=0; i<=(membership.length-1); i++){      
    if (lbl==membership[i][1].concat(" ",membership[i][2])){
    person=membership[i];}
    }
return person;  
}

function togglePopup(){

    document.getElementById("titl").innerHTML = person[1].concat(" ",person[2]);
    document.getElementById("mailE").innerHTML = person[3];
    document.getElementById("teleNum").innerHTML = person[4];
    document.getElementById("bridgeNumb").innerHTML = "Bridge ID "+ person[0];
    document.getElementById("popup-1") .classList.toggle("active");

}

for (let x=1; x<=(membership.length); x++){ 

    let z="btn".concat(x);
    const y=document.getElementById(z);
    y.addEventListener("click",function(e){   
        myCalc(y.innerText);
        togglePopup();
        })};
        
/*const btn1=document.getElementById("btn1");
btn1.addEventListener("click",function(e){   
myCalc(btn1.innerText);
togglePopup();
});
const btn2=document.getElementById("btn2");
btn2.addEventListener("click",function(e){   
myCalc(btn2.innerText);
togglePopup();
});
const btn3=document.getElementById("btn3");
btn3.addEventListener("click",function(e){   
myCalc(btn3.innerText);
togglePopup();
});

const btn5=document.getElementById("btn5");
btn5.addEventListener("click",function(e){   
myCalc(btn5.innerText);
togglePopup();
});
const btn6=document.getElementById("btn6");
btn6.addEventListener("click",function(e){   
myCalc(btn6.innerText);
togglePopup();
});
const btn7=document.getElementById("btn7");
btn7.addEventListener("click",function(e){   
myCalc(btn7.innerText);
togglePopup();
});
const btn8=document.getElementById("btn8");
btn8.addEventListener("click",function(e){   
myCalc(btn8.innerText);
togglePopup();
});
const btn9=document.getElementById("btn9");
btn9.addEventListener("click",function(e){   
myCalc(btn9.innerText);
togglePopup();
});
const btn10=document.getElementById("btn10");
btn10.addEventListener("click",function(e){   
myCalc(btn10.innerText);
togglePopup();
});
const btn11=document.getElementById("btn11");
btn11.addEventListener("click",function(e){   
myCalc(btn11.innerText);
togglePopup();
});
const btn12=document.getElementById("btn12");
btn12.addEventListener("click",function(e){   
myCalc(btn12.innerText);
togglePopup();
});
const btn13=document.getElementById("btn13");
btn13.addEventListener("click",function(e){   
myCalc(btn13.innerText);
togglePopup();
});
const btn14=document.getElementById("btn14");
btn14.addEventListener("click",function(e){   
myCalc(btn14.innerText);
togglePopup();
});
const btn15=document.getElementById("btn15");
btn15.addEventListener("click",function(e){   
myCalc(btn15.innerText);
togglePopup();
});
const btn16=document.getElementById("btn16");
btn16.addEventListener("click",function(e){   
myCalc(btn16.innerText);
togglePopup();
});
const btn17=document.getElementById("btn17");
btn17.addEventListener("click",function(e){   
myCalc(btn17.innerText);
togglePopup();
});
const btn18=document.getElementById("btn18");
btn18.addEventListener("click",function(e){   
myCalc(btn18.innerText);
togglePopup();
});
const btn19=document.getElementById("btn19");
btn19.addEventListener("click",function(e){   
myCalc(btn19.innerText);
togglePopup();
});
const btn20=document.getElementById("btn20");
btn20.addEventListener("click",function(e){   
myCalc(btn20.innerText);
togglePopup();
});
const btn21=document.getElementById("btn21");
btn21.addEventListener("click",function(e){   
myCalc(btn21.innerText);
togglePopup();
});
const btn22=document.getElementById("btn22");
btn22.addEventListener("click",function(e){   
myCalc(btn22.innerText);
togglePopup();
});
const btn23=document.getElementById("btn23");
btn23.addEventListener("click",function(e){   
myCalc(btn23.innerText);
togglePopup();
});
const btn24=document.getElementById("btn24");
btn24.addEventListener("click",function(e){   
myCalc(btn24.innerText);
togglePopup();
});
const btn25=document.getElementById("btn25");
btn25.addEventListener("click",function(e){   
myCalc(btn25.innerText);
togglePopup();
});

const btn26=document.getElementById("btn26");
btn26.addEventListener("click",function(e){   
myCalc(btn26.innerText);
togglePopup();
});
const btn27=document.getElementById("btn27");
btn27.addEventListener("click",function(e){   
myCalc(btn27.innerText);
togglePopup();
});
const btn28=document.getElementById("btn28");
btn28.addEventListener("click",function(e){   
myCalc(btn28.innerText);
togglePopup();
});
const btn29=document.getElementById("btn29");
btn29.addEventListener("click",function(e){   
myCalc(btn29.innerText);
togglePopup();
});
const btn30=document.getElementById("btn30");
btn30.addEventListener("click",function(e){   
myCalc(btn30.innerText);
togglePopup();
});
const btn31=document.getElementById("btn31");
btn31.addEventListener("click",function(e){   
myCalc(btn31.innerText);
togglePopup();
});
const btn32=document.getElementById("btn32");
btn32.addEventListener("click",function(e){   
myCalc(btn32.innerText);
togglePopup();
});
const btn33=document.getElementById("btn33");
btn33.addEventListener("click",function(e){   
myCalc(btn33.innerText);
togglePopup();
});
const btn34=document.getElementById("btn34");
btn34.addEventListener("click",function(e){   
myCalc(btn34.innerText);
togglePopup();
});
const btn35=document.getElementById("btn35");
btn35.addEventListener("click",function(e){   
myCalc(btn35.innerText);
togglePopup();
});
const btn36=document.getElementById("btn36");
btn36.addEventListener("click",function(e){   
myCalc(btn36.innerText);
togglePopup();
});
const btn37=document.getElementById("btn37");
btn37.addEventListener("click",function(e){   
myCalc(btn37.innerText);
togglePopup();
});
const btn38=document.getElementById("btn38");
btn38.addEventListener("click",function(e){   
myCalc(btn38.innerText);
togglePopup();
});
const btn39=document.getElementById("btn39");
btn39.addEventListener("click",function(e){   
myCalc(btn39.innerText);
togglePopup();
});
const btn40=document.getElementById("btn40");
btn40.addEventListener("click",function(e){   
myCalc(btn40.innerText);
togglePopup();
});*/
