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

// Création chart
let chart2 = new Chart(ctx2, {
    type: "bar",
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
    }],
},
});

// Création chart