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

function fuctorial(k){
    if(k!=0){
        return k*fuctorial(k-1);
    } else {
        return 1;
    }
}

function calc(pr, num){
    pr = parseFloat(pr);
    num = parseInt(num);
    let chart = document.getElementById('chart').getContext('2d');
    let serial = [...Array(num+1).keys()];
    let data = []
    for(i=0; i<serial.length; i++){
        console.log('a')
        win = fuctorial(num)/(fuctorial(i)*fuctorial(num-i)) * (pr**i) * (1-pr)**(num-i);
        data.push(win);
    }
    console.log(data);
    let calculation = new Chart(chart, {
        type: "bar",
        data: {
            labels: serial,
            datasets: [{
                label: "probability",
                data:data,
                backgroundColor: "red"
            }]
        },
        options: {
            events: ['click'],
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            min: 0
                        }
                    }
                ]
            }
        }
    });
}