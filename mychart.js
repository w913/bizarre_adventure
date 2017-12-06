var s1 = {
  label: 'フクタニ・ボーイ',
  data: [20, 20, 20, 20, 20, 20]
}
var s2 = {
  label: 'フクタニ・ボーイ act2',
  data: [30, 20, 30, 20, 20, 20]
}
var s3 = {
  label: 'フクタニ・ボーイ act3',
  data: [20, 20, 50, 20, 10, 30]
}

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'radar',
  data: {
                  labels: ['破壊力', 'スピード', '射程距離', '持続力', '精密動作性', '成長性'],
                  datasets: [{
                                label: 'フクタニ・ボーイ',
                                data: [20, 20, 20, 20, 20, 20],
                                backgroundColor: "rgba(153,255,51,0.4)"
                  }]
  },
  options: {
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 50
      }
    }
  }
});

function func1() {
  console.log(myChart.data.datasets[0].data);
  myChart.data.datasets[0].label = s1.label;
  myChart.data.datasets[0].data = s1.data;
  myChart.update();
}

function func2() {
  console.log(myChart.data.datasets[0].data);
  myChart.data.datasets[0].label = s2.label;
  myChart.data.datasets[0].data = s2.data;
  myChart.update();
}

function func3() {
  console.log(myChart.data.datasets[0].data);
  myChart.data.datasets[0].label = s3.label;
  myChart.data.datasets[0].data = s3.data;
  myChart.update();
}