
/**------------- Total Admnission fees------------------ */

let total_admission_fee =0;
studentObjectData.sort().map((data, i) =>{

   
    total_admission_fee += data.Admission_fee
});
// --------------------------Total Admnission fees-----------------------------------
console.log(`
<-----------Total admission fee------------------ : ${total_admission_fee} BDT.
`);

// ----------------------------Find All Female Students---------------------------
console.log(`

<-------------------------Female Students---------------------------->`
);
let totalFemaleStudent=0;
studentObjectData.sort().map((data, i) =>{

    if(data.gender==='Female'){
      console.log(data);
      totalFemaleStudent++
    }
    
});
console.log(`
<-----------Total Femal student------------------ : ${totalFemaleStudent}.
`);

// ----------------------------Find class wise student result---------------------------
console.log(`

<-------------------------Find class wise student result---------------------------->`
);

let total_students=0;
studentObjectData.sort().map((data, i) =>{
  if(data.class=='Five'){
    console.log(data);
    total_students++ 
    }
});
console.log(`
<-----------Total Class Student------------------ : ${total_students++}.
`);
// ----------------------------Location wise student result---------------------------
console.log(`

<-------------------------Location wise student result---------------------------->`
);
let location_students=0;
studentObjectData.sort().map((data, i) =>{

      if(data.Location==='Jamilnogor' || data.Location=='Kamargari'){
        console.log(data);
        location_students++
      }
  
});
console.log(`
<-----------Total Location student------------------ : ${location_students}.
`);
// ---------------------------- find student between 10 - 25 age---------------------------
console.log(`

<------------------------- find student between 10 - 25 age---------------------------->`
);
let totals=0;
studentObjectData.sort().map((data, i) =>{

      if(data.age>=10 && data.age<=25){
        console.log(data);
        totals++
      }
      
});
console.log(`
<-----------Total------------------ : ${totals}.
`);
