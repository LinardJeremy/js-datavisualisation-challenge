// Création canvas ;
let homicides = document.getElementById("Homicides");
let canvas2 = document.createElement("canvas");
canvas2.id = "chart2";
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
insertAfter(homicides, canvas2);
let ctx2 = document.getElementById("chart2").getContext("2d");
// création canvas

// Recup data table2
let listTd2 = document.getElementById("table2").getElementsByTagName("td");
let table2 = document.getElementById("table2").rows;
let arrayCountry2 = [];
let arrayDataPrison = [];
let arrayDataPrison2 = [];
let arrayColorGreen =[];
let arrayColorRed = [];

for( let j=0;j<listTd2.length;j++){
    if(listTd2[j].innerHTML.search(/[A-Z]/g)>=0) {
        arrayCountry2.push(listTd2[j].innerHTML);
    }
};
arrayCountry2[7] = "England and Wales";

 for (let i = 1; i < 31; i++) {
     arrayDataPrison.push(table2[i].cells[2].innerHTML);
 }
 for (let i = 1; i < 31; i++) {
    arrayDataPrison2.push(table2[i].cells[3].innerHTML);
}
for (let i=0;i<31;i++){
    arrayColorGreen.push("green");
}
for (let i=0;i<31;i++){
    arrayColorRed.push("red");
}
console.log(arrayColorGreen);
// Recup data table2

// Création chart
let chart2 = new Chart(ctx2, {
    type: "bar",
    data: {
        labels: arrayCountry2,
        datasets: [{
            label: 'Period 2007-09',
            data: arrayDataPrison,
            backgroundColor: arrayColorGreen,
},
            {
            label: 'Period 2010-12',
            data: arrayDataPrison2,
            backgroundColor: arrayColorRed,
        },
    ],
}});
