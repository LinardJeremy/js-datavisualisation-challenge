let crime = document.getElementById(
    "Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police"
);

let canvas = document.createElement("canvas");

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
insertAfter(crime, canvas);

canvas.id = "chart1";

let ctx = document.getElementById("chart1").getContext("2d");
let x = document.getElementById("tbodyChart1");
let list = document.getElementById("table1").getElementsByTagName("th");
let listTd = document.getElementById("table1").getElementsByTagName("td");
 let table = document.getElementById("table1").rows;
let dataCrime = [];
let arrayTransition = [];
let arrayCountry=[];
let dataCountry1 = [];

for (let i=0;i<36;i++){
    dataCrime.push([]);
}
// for (let i = 2; i < 13; i++) {
//     arrayTransition.push(table[2].cells[i].innerHTML.replace(',','.'));
//     dataCrime.push(arrayTransition);
// }
 for (let i=0;i<listTd.length;i++){
     if (listTd[i].innerHTML.search(/[,]/g)>=0 || listTd[i].innerHTML.search(/[:]/g)>=0){
         arrayTransition.push(listTd[i].innerHTML.replace(',','.'));
     }
 }
 for (let i=0;i<arrayTransition.length;i++){
     if (i<11){
         dataCrime[0].push(arrayTransition[i]);
     }
     if(i>10&&i<=21)
     {
        dataCrime[1].push(arrayTransition[i]);
     }
     if(i>21&&i<=32)
     {
        dataCrime[2].push(arrayTransition[i]);
     } if(i>32&&i<=43)
     {
        dataCrime[3].push(arrayTransition[i]);
     } if(i>43&&i<=54)
     {
        dataCrime[4].push(arrayTransition[i]);
     } if(i>54&&i<=65)
     {
        dataCrime[5].push(arrayTransition[i]);
     } if(i>65&&i<=76)
     {
        dataCrime[6].push(arrayTransition[i]);
     } if(i>76&&i<=87)
     {
        dataCrime[7].push(arrayTransition[i]);
     } if(i>87&&i<=98)
     {
        dataCrime[8].push(arrayTransition[i]);
     } if(i>98&&i<=109)
     {
        dataCrime[9].push(arrayTransition[i]);
     } if(i>109&&i<=120)
     {
        dataCrime[10].push(arrayTransition[i]);
     } if(i>120&&i<=131)
     {
        dataCrime[11].push(arrayTransition[i]);
     } if(i>131&&i<=142)
     {
        dataCrime[12].push(arrayTransition[i]);
     } if(i>142&&i<=153)
     {
        dataCrime[13].push(arrayTransition[i]);
     } if(i>153&&i<=164)
     {
        dataCrime[14].push(arrayTransition[i]);
     } if(i>164&&i<=175)
     {
        dataCrime[15].push(arrayTransition[i]);
     } if(i>175&&i<=186)
     {
        dataCrime[16].push(arrayTransition[i]);
     }
     if(i>186&&i<=197)
     {
        dataCrime[17].push(arrayTransition[i]);
     } if(i>197&&i<=208)
     {
        dataCrime[18].push(arrayTransition[i]);
     } if(i>208&&i<=219)
     {
        dataCrime[19].push(arrayTransition[i]);
     } if(i>219&&i<=230)
     {
        dataCrime[20].push(arrayTransition[i]);
     } if(i>230&&i<=241)
     {
        dataCrime[21].push(arrayTransition[i]);
     } if(i>241&&i<=252)
     {
        dataCrime[22].push(arrayTransition[i]);
     } if(i>252&&i<=263)
     {
        dataCrime[23].push(arrayTransition[i]);
     } if(i>263&&i<=274)
     {
        dataCrime[24].push(arrayTransition[i]);
     } if(i>274&&i<=285)
     {
        dataCrime[25].push(arrayTransition[i]);
     } if(i>285&&i<=296)
     {
        dataCrime[26].push(arrayTransition[i]);
     } if(i>296&&i<=307)
     {
        dataCrime[27].push(arrayTransition[i]);
     } if(i>307&&i<=318)
     {
        dataCrime[28].push(arrayTransition[i]);
     } if(i>318&&i<=329)
     {
        dataCrime[29].push(arrayTransition[i]);
     } if(i>329&&i<=340)
     {
        dataCrime[30].push(arrayTransition[i]);
     } if(i>340&&i<=351)
     {
        dataCrime[31].push(arrayTransition[i]);
     } if(i>351&&i<=362)
     {
        dataCrime[32].push(arrayTransition[i]);
     } if(i>362&&i<=373)
     {
        dataCrime[33].push(arrayTransition[i]);
     } if(i>373&&i<=384)
     {
        dataCrime[34].push(arrayTransition[i]);
     } if(i>384&&i<=395)
     {
        dataCrime[35].push(arrayTransition[i]);
     } if(i>395&&i<=406)
     {
        dataCrime[36].push(arrayTransition[i]);
     }
    }
let arrayTest = [];

for (let i = 0; i < list.length; i++) {
    if (parseInt(list[i].innerHTML) > 2000) {
        arrayTest.push(list[i].innerHTML);
    }
}
for( let j=0;j<listTd.length;j++){
    if(listTd[j].innerHTML.search(/[A-Z]/g)>=0) {
        arrayCountry.push(listTd[j].innerHTML);
    }
}
function datasets(label, borderColor, data) {
    this.label = label;
    this.borderColor = borderColor;
    this.data = data;
  }
  let dataTest = [105,125,135,145];
  let z = new datasets(arrayCountry[3]);
let arrayOFObject = [];
for (let t=0;t<arrayCountry.length;t++){
    let kk =  new datasets(arrayCountry[t],('#'+(Math.random()*0xFFFFFF<<0).toString(16)),dataCrime[t]);
    arrayOFObject.push(kk);
}

let chart1 = new Chart(ctx, {
    type: "line",
    data: {
        labels: arrayTest,
        y: [100,150,300,450,500],
        datasets: [
            arrayOFObject[0],
            arrayOFObject[1],
            arrayOFObject[2],
            arrayOFObject[3],
            arrayOFObject[4],
            arrayOFObject[5],
            arrayOFObject[6],
            arrayOFObject[7],
            arrayOFObject[8],
            arrayOFObject[9],
            arrayOFObject[10],
            arrayOFObject[11],
            arrayOFObject[12],
            arrayOFObject[13],
            arrayOFObject[14],
            arrayOFObject[15],
            arrayOFObject[16],
            arrayOFObject[17],
            arrayOFObject[18],
            arrayOFObject[19],
            arrayOFObject[20],
            arrayOFObject[21],
            arrayOFObject[22],
            arrayOFObject[23],
            arrayOFObject[24],
            arrayOFObject[25],
            arrayOFObject[26],
            arrayOFObject[27],
            arrayOFObject[28],
            arrayOFObject[29],
            arrayOFObject[30],
            arrayOFObject[31],
            arrayOFObject[32],
            arrayOFObject[33],
            arrayOFObject[34],
            ],
     },
    options: {},
});

