let buttons=[];
let sessions=[];
const mnth= ["APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC","JAN","FEB","MAR"];

/*Set initial  for myResults and sessions*/

let myResults=[["0","0","1","0"]];
for (let p=0;p<=51;p++){
   sessions[p]=[[0],[0]];
   myResults[p]=["0","0","1","0"];
   }

/*Use in house functions to populate myResults 
and sessions using first sessions' date */

for (let zz=0; zz<=51; zz++){

  zzz=zz*7;
  const d = new Date("Apr 4, 2025");
  d.setDate(d.getDate()+zzz);
       let month = d.getMonth();
    for (let i=3; i<=11; i++){ 
      if(month==i){
        ii=i-3;
        mmm=mnth[ii];
        mm=i+1;
      }
    if (month==0){
        mm=1;
        mmm=mnth[9];
      }
       if (month==1){
        mm=2;
        mmm=mnth[10];
        }
       if (month==2){
        mm=3;
        mmm=mnth[11];
      }
      }
       let day = d.getDate();
       dd=day.toString();
       let year = d.getFullYear();
       year = year.toString();
       yy = year.slice(2,4);
       shortDate=dd.concat(" ",mmm).concat(" ",yy);
       fileRef="Ranks ".concat(mm," ").concat(dd," ").concat(yy,".htm");
    myResults[zz][0]=shortDate;
    myResults[zz][1]=fileRef;
    sessions[zz]=[shortDate,1];
    myResults[zz][3]=mm;
}
  
/* Set up number of weeks for each month*/

let wpm=[];
for (let aa=0;aa<=11;aa++){
   wpm[aa]=0;
for (let bb=0;bb<=51;bb++){
   if (myResults[bb][3]==(aa+1)){
   wpm[aa]=wpm[aa]+1;
   }
}
}
xx=wpm[0];
yy=wpm[1];
zz=wpm[2];
for (let cc=3;cc<=11;cc++){
wpm[cc-3]=wpm[cc];
}
wpm[9]=xx;
wpm[10]=yy;
wpm[11]=zz;

/*Calculate the Id numbers for star and end of each month */

let runtot=[];
for (let xx=1;xx<=12;xx++)
   {
    runtot[0]=1;
    runtot[xx]=runtot[xx-1]+wpm[xx-1];
    }
for (let yy=0;yy<=11;yy++)
   {
      buttons[yy]=[mnth[yy],runtot[yy],runtot[yy+1]-1];
   }

/* Entry details for each session played*/
/* Enter in the format sessions[41][1]=0;*/

sessions[0][1]=0;
sessions[1][1]=0;
sessions[2][1]=1;
sessions[22][1]=0;
sessions[23][1]=0;
sessions[3][1]=0;
sessions[4][1]=0;
sessions[5][1]=0;
sessions[6][1]=0;
sessions[7][1]=0;
sessions[8][1]=0;
sessions[9][1]=0;
sessions[10][1]=0;
sessions[11][1]=1;
sessions[12][1]=0;
sessions[13][1]=0;
sessions[14][1]=0;
sessions[15][1]=0;
sessions[16][1]=0;
sessions[17][1]=0;
sessions[18][1]=0;
sessions[19][1]=0;
sessions[20][1]=0;
sessions[21][1]=0;
sessions[22][1]=0;
sessions[23][1]=0;
sessions[24][1]=1;
sessions[25][1]=1;
sessions[26][1]=1;
sessions[27][1]=0;
sessions[28][1]=0;
sessions[29][1]=0;
sessions[30][1]=0;
sessions[31][1]=0;
sessions[32][1]=0;
sessions[33][1]=0;
sessions[34][1]=0; 
sessions[35][1]=1;
sessions[36][1]=0;
sessions[37][1]=0;
sessions[38][1]=1;
sessions[39][1]=1;
sessions[40][1]=0;
sessions[41][1]=1;
sessions[42][1]=1;
sessions[43][1]=1;
sessions[44][1]=1;
sessions[40][1]=0;
sessions[41][1]=0;
sessions[42][1]=0;
sessions[43][1]=0;
sessions[44][1]=0; /*Feb*/
sessions[45][1]=0;
sessions[46][1]=0;
sessions[47][1]=1;
sessions[48][1]=1;
sessions[49][1]=1;
sessions[50][1]=1;
sessions[51][1]=1;












for (let i=0; i<=51;i++)
   {
      myResults[i][2]=sessions[i][1];
   }

/*console.log(sessions);*/