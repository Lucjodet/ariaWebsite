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
    '#FFFFFF',
    '#FFD784',
    '#B3914B',
    '#675021',
    '#A0A0A0',
    '#565656'
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
    categories: ["Jul-19","Aug-19","Sep-19","Oct-19","Nov-19","Dec-19","Jan-20","Feb-20","Mar-20","Apr-20","May-20","Jun-20","Jul-20","Aug-20","Sep-20","Oct-20","Nov-20","Dec-20","Jan-21","Feb-21","Mar-21","Apr-21","May-21","Jun-21","Jul-21","Aug-21","Sep-21","Oct-21","Nov-21","Dec-21","Jan-22","Feb-22","Mar-22","Apr-22","May-22","Jun-22","Jul-22","Aug-22","Sep-22","Oct-22","Nov-22","Dec-22","Jan-23","Feb-23","Mar-23","Apr-23","May-23","Jun-23","Jul-23","Aug-23","Sep-23","Oct-23","Nov-23","Dec-23","Jan-24","Feb-24","Mar-24","Apr-24","May-24","Jun-24","Jul-24","Aug-24","Sep-24","Oct-24","Nov-24","Dec-24","Jan-25","Feb-25","Mar-25","Apr-25","May-25","Jun-25","Jul-25","Aug-25","Sep-25","Oct-25","Nov-25","Dec-25"],
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
  series: [ {
    name: 'Private sale',
    data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11250000,11250000,11250000,11250000,11250000,11250000,11250000,11250000,11250000,11250000,11250000,11250000,22500000,22500000,22500000,22500000,22500000,22500000,22500000,22500000,22500000,22500000,22500000,22500000,33750000,33750000,33750000,33750000,33750000,33750000,33750000,33750000,33750000,33750000,33750000,33750000,45000000,45000000,45000000,45000000,45000000,45000000,45000000,45000000,45000000,45000000,45000000,45000000
    ]
  }, {
    name: 'Team',
    data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8500000,8500000,8500000,8500000,8500000,8500000,8500000,8500000,8500000,8500000,8500000,8500000,17000000,17000000,17000000,17000000,17000000,17000000,17000000,17000000,17000000,17000000,17000000,17000000,25500000,25500000,25500000,25500000,25500000,25500000,25500000,25500000,25500000,25500000,25500000,25500000,34000000,34000000,34000000,34000000,34000000,34000000,34000000,34000000,34000000,34000000,34000000,34000000
    ]
  }, {
    name: 'Advisors',
    data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3000000,3000000,3000000,3000000,3000000,3000000,3000000,3000000,3000000,3000000,3000000,3000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000,6000000]
  }, {
    name: 'Public Sale',
    data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000,25000000]
  }],
});