// create canvas
let firstHeading = document.getElementById("firstHeading");
let canvas3 = document.createElement("canvas");
canvas3.id = "chart3";
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
insertAfter(firstHeading, canvas3);
let ctx3 = document.getElementById("chart3").getContext("2d");

// Create Chart
let dataPoints = [];
let label =[1,2,3,4,5,6,7,8,9]
let i=9;
let chart3 = new Chart(ctx3,{
    type: 'line',
    data : {
        labels : label,
        datasets: [{
            label : ["Crime Statistics"],
            borderColor : "green",
            data : dataPoints,
        }]
    }
})
// Update and ajax
function updateGraf() {
    i++;
    label.push(i);
fetch('https://canvasjs.com/services/data/datapoints.php')
.then(function (response){
    return response.json()
})
.then(function (data){
dataPoints.length + 1;
    // data.forEach(element => dataPoints.push({x: element[0], y: parseInt(element[1])}));
    data.forEach(element => dataPoints.push(parseInt(element[1])));
     chart3.update();
})
};
setInterval(updateGraf,1000);