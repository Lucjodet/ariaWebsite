Highcharts.chart('container1', {
  chart: {
    type: 'area',
    backgroundColor: 'transparent',
    style: {
      font: '16px "Raleway", Verdana, sans-serif'
   }
  },
  credits: {
    enabled: false
  },
  title: {
    text: 'Aria Lockup Schedule',
    style: {
      color:'#FFFFFF',
      font: 'bold 16px "Raleway", Verdana, sans-serif'
   }
  },
  colors: [
    '#B3914B',
    '#99793F',
    '#725A30',
    '#4C3C20',
    '#302615',
    '#110D06'
],

exporting: {
  buttons: {
      contextButton: {
          symbolStroke: "white",
          theme: {
  fill:"transparent"
          } 
      }
  }          
},

  subtitle: {
    style: {
      color:'#FFFFFF'
   }
  },
  xAxis: {
    categories: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
    tickmarkPlacement: 'on',
    title: {
      enabled: false
    },
    labels: {
      style: {
         color:'#FFFFFF'
      },
    },
  },
  yAxis: {
    title: {
      text: 'aria',
      style: {
        color:'#FFFFFF'
     }
    },
    labels: {
      formatter: function () {
        return this.value ;
      },
      style: {
        color:'#FFFFFF'
     },
    }
  },
  tooltip: {
    split: true,
    valueSuffix: ' aria'
  },
  plotOptions: {
    area: {
      stacking: 'normal',
      lineColor: '#FFFFFF',
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: '#FFFFFF'
      }
    }
  },
  series: [{
    name: 'Public Sale',
    data: [5, 10, 15, 20, 20, 20, 20]
  }, {
    name: 'Private sale',
    data: [10, 15, 20, 25, 30, 35, 40]
  }, {
    name: 'Team',
    data: [0, 0, 5,10, 15, 20, 25]
  }, {
    name: 'Advisors',
    data: [0, 3, 6, 6, 6, 6, 6]
  }, {
    name: 'Liquid Reserve',
    data: [10, 10, 10, 10, 10, 10, 10]
  }],
});