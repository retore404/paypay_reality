function prepareCalc(){
    let normal = document.getElementById("normal"); 
    let yahoo = document.getElementById("yahoo");
    let softbank = document.getElementById("softbank");
    let pr = 0;
    if(normal.checked){
        pr = 0.025
    } else if(yahoo.checked){
        pr=0.05
    } else{
        pr=0.1
    }
    let num = document.getElementById('num').value;
    calc(pr, num);
}

function calc(pr, num){
    let chart = document.getElementById('chart').getContext('2d');
    let test = new Chart(chart, {
        type: "bar",
        data: {
            labels: ['1', '2', '3'],
            datasets: [{
                label: "probability",
                data:[2*pr,4*pr,1*pr],
                backgroundColor: "red"
            }]
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 1
                        }
                    }
                ]
            }
        }
    });
}