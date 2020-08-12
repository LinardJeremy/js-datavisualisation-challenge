let crime = document.getElementById(
    "Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police"
);

let canvas = document.createElement("canvas");

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
insertAfter(crime, canvas);

canvas.id = "chart1";

//let table1 = document.getElementById("table1");
//document.body.insertBefore(canvas, table1);

let ctx = document.getElementById("chart1").getContext("2d");
let x = document.getElementById("tbodyChart1");
let list = document.getElementById("table1").getElementsByTagName("th");
let arrayTest = [];

//var arrayLignes = document.getElementById("table1").cells;

//console.log(arrayLignes);

for (let i = 0; i < list.length; i++) {
    if (parseInt(list[i].innerHTML) > 2000) {
        arrayTest.push(list[i].innerHTML);
    }
}
function datasets(label, borderColor, data) {
    this.label = label;
    this.borderColor = borderColor;
    this.data = data;
  }
  let dataTest = [105,125,135,145];
  let z = new datasets("Test","green",dataTest);
  console.log(z);

console.log(arrayTest);
console.log(list);
let chart1 = new Chart(ctx, {
    type: "line",
    data: {
        labels: arrayTest,
        y: [100,150,300,450,500],
        datasets: [
            {
               
             label: "Belgium",
             borderColor: "rgb(255, 99, 132)",
                 data: [
                    75,
                     90,
                     105,
                     120
                 ],
            },
                { label: "Bulgaria",
            borderColor: "blue",
            data :[100,165,189],
            },
            z,
            
        ],
    },
    options: {},
});
