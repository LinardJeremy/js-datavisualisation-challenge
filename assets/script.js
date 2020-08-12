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
console.log(arrayTest);
// console.log(list);
let chart1 = new Chart(ctx, {
    type: "line",
    data: {
        labels: arrayTest,
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [
                    0,
                    100,
                    200,
                    300,
                    400,
                    500,
                    600,
                    700,
                    800,
                    900,
                    1000,
                    1100,
                    1200,
                    1300,
                    1400,
                    1500,
                    1600,
                    1700,
                    1800,
                    1900,
                    2000,
                ],
            },
        ],
    },
    options: {},
});
