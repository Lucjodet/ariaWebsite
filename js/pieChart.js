// Build the chart
Highcharts.chart('container2', {
  chart: {
      plotBackgroundColor: 'transparent',
      plotBorderWidth: null,
      plotShadow: false,
      backgroundColor: 'transparent',
      type: 'pie',
      style: {
        font: '16px "Raleway", Verdana, sans-serif',
        textColor: '#FFFFFF'
     },
},

exporting: {
    buttons: {
        contextButton: {
            symbolStroke: "",
            theme: {
    fill:"transparent"
            } 
        }
    }          
},

credits: {
    enabled: false
},

title: {
    text: '',
    style: {
      color:'#FFFFFF',
      font: 'bold 16px "Raleway", Verdana, sans-serif'
  },
},

subtitle: {
  text: '',
  style: {
    color:'#FFFFFF'
 },
  align: 'center',
  verticalAlign: 'middle'
},

  colors: [
    '#B3914B',
    '#99793F',
    '#725A30',
    '#4C3C20',
    '#302615',
    '#110D06'
],

  tooltip: {
      pointFormat: '{series.name}: <b>{point.y}M</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage}%',
            color:'#FFFFFF'
          },
          innerSize: '50%',
          showInLegend: false
      }
  },
  series: [{
      name: 'aria',
      colorByPoint: true,
      data: [{
          name: 'Private Sale',
          y: 45,
          sliced: true,
          selected: true
      }, {
          name: 'Public Sale',
          y: 25
      }, {
          name: 'Team',
          y: 34
      }, {
          name: 'Advisor',
          y: 6
      }, {
          name: 'Community Incentives',
          y: 10
      }, {
          name: 'Operational Reserve',
          y: 10
      }, {
          name: 'Long-term Reserve',
          y: 70
      }]
  }]
});