let ctx = document.getElementById('chart1').getContext('2d');
let x = document.getElementById("tbodyChart1");
let list = document.getElementById("table1").getElementsByTagName("TH");
let arrayTest = [];
let arrayCountry=[];
for (let i=0;i<list.length;i++){
    if (parseInt( list[i].innerHTML)>2000à{
       arrayTest.push(list[i].innerHTML);
    }
}
console.log(arrayTest);
// console.log(list);
let chart1 = new Chart(ctx, { 
type : 'line',
data: {
    labels: arrayTest,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45]
    }]
},
options: {}

})
