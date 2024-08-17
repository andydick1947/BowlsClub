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
["46", "Andrew", "Leonard", " ", " "],
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
        

