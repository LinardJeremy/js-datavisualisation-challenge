let ctx = document.getElementById('chart1').getContext('2d');
let x = document.getElementById("tbodyChart1");
let list = document.getElementsByTagName("TH");
let arrayTest = [];
for (let i=0;i<list.length;i++){
    if(list[i] === "2002"){
        console.log(list[i]);
    }

}
console.log(arrayTest);


// console.log(list);
let chart1 = new Chart(ctx, {
type : 'line',
data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45]
    }]
},
options: {}

})
