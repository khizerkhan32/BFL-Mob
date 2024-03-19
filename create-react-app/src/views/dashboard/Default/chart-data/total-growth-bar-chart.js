// ===========================|| DASHBOARD - TOTAL GROWTH BAR CHART ||=========================== //

const chartData = {
  height: 400,
  type: 'bar',
  options: {
    chart: {
      id: 'bar-chart',
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%'
      }
    },
    xaxis: {
      type: 'category',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
    legend: {
      show: true,
      fontSize: '14px',
      fontFamily: `'Roboto', sans-serif`,
      position: 'bottom',
      offsetX: 20,
      labels: {
        useSeriesColors: false
      },
      markers: {
        width: 16,
        height: 16,
        radius: 5
      },
      itemMargin: {
        horizontal: 15,
        vertical: 8
      }
    },
    fill: {
      type: 'solid'
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      show: true
    }
  },
  //this is for today when user selected today
  series: [
    {
      name: 'Investment',
      data: [35, 125, 35, 35, 35, 80, 35, 20, 35]
    },
    {
      name: 'Loss',
      data: [35, 15, 15, 35, 65, 40, 80, 25, 15]
    },
    {
      name: 'Profit',
      data: [35, 145, 35, 35, 20, 105, 100, 10, 65]
    },
    {
      name: 'Maintenance',
      data: [0, 0, 75, 0, 0, 115, 0, 0, 0]
    }
  ],
  //this is this year when user click this year
  serie2: [
    {
      name: 'Investment',
      data: [35, 125, 35, 35, 35, 80, 45, 12, 35, 20, 35]
    },
    {
      name: 'Loss',
      data: [35, 15, 15, 35, 65, 40, 45, 80, 23, 25, 15]
    },
    {
      name: 'Profit',
      data: [35, 145, 35, 35, 20, 105, 45, 100, 10, 65]
    }
  ]
};
export default chartData;
