let myRes = ["0","0"]
let runtot=[0,0,0,0,0,0,0,0,0,0,0,0,0]
const myResults =[
["0","0","1"],    /* APR */   
["0","0","0"],    /*  */    
["0","0","0"],    /*  */    
["0","0","0"],    /*  */
["0","0","1"],    /* MAY  */
["0","0","1"],    /*  */
["0","0","0"],    /*  */
["0","0","0"],    /*  */
["0","0","1"],    /*  */
["0","0","1"],    /* JUN */
["0","0","0"],    /*  */    
["0","0","0"],    /*  */
["0","0","1"],    /*  */
["0","0","0"],    /* JUL */
["0","0","0"],    /*  */
["0","0","0"],    /*  */
["0","0","0"],    /*  */
["0","0","0"],    /* AUG */
["0","0","0"],    /*  */    
["0","0","0"],    /*  */
["0","0","1"],    /*  */
["0","0","0"],    /*  */
["0","0","0"],    /* SEP */
["0","0","0"],    /*  */
["0","0","0"],    /*  */
["0","0","0"],    /*  */
["0","0","0"],    /* OCT */    
["0","0","0"],    /*  */
["0","0","0"],    /*  */
["0","0","1"],    /*  */
["0","0","0"],    /* NOV*/
["0","0","0"],    /*  */
["0","0","0"],    /*  */
["0","0","1"],    /*  */
["0","0","1"],    /*  */    
["0","0","1"],    /* DEC */
["0","0","1"],    /*  */
["0","0","1"],    /*  */
["0","0","1"],    /*  */
["0","0","1"],    /*JAN  */
["0","0","1"],    /*  */
["0","0","1"],    /*  */
["0","0","1"],    /*  */    
["0","0","1"],    /*  */
["0","0","1"],    /* FEB */
["0","0","1"],    /*  */
["0","0","1"],    /* */
["0","0","1"],    /*  */
["0","0","1"],    /* MAR */
["0","0","1"],    /*  */
["0","0","1"],    /*  */
["0","0","1"]     /*  */
]
    

    for (let zz=0; zz<=51; zz++){
        const mnth= ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
     zzz=zz*7;
        const d = new Date("Apr 5, 2024");
        d.setDate(d.getDate()+zzz);
       let month = d.getMonth();
      for (let i=0; i<=11; i++){ 
      if(month==i){
      mmm=mnth[i];
      mm=i+1;
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
    /*myResults[zz][2]=1;*/
  
    }
   let wpm=[4,5,4,4,5,4,4,5,4,5,4,4,]
    for (let xx=1;xx<=12;xx++){
      runtot[0]=1;
     runtot[xx]=runtot[xx-1]+wpm[xx-1];
    }

    

    