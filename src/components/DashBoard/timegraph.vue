<template>
  <v-container class="pa-2">
    <p class='title font-weight-bold black--text mx-2'>Dwell Time & Fill Time & Drain Time</p>
    <v-row dense no-gutters>
      <v-col xs='12'>
        <apexchart type="line" width='100%' height="300" :options="chartOptions" :series="timeSeries"></apexchart>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      series: [
        {
          name: "Dwell Time",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
          name: "Fill Time",
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
          name: 'Drain Time',
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        }
      ],
    }
  },
  computed: {
    chartOptions () {
      return {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [5, 7, 5],
          curve: 'straight',
          dashArray: [0, 8, 5]
        },
        title: {
          text: 'Weight',
          align: 'left'
        },
        legend: {
          tooltipHoverFormatter: function(val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
          }
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          labels: {
            formatter: function(value) {
              return 'round ' + value
            }
          }
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val;
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                }
              }
            }
          ]
        },
        grid: {
          borderColor: '#f1f1f1',
        },
        noData: {
          text: 'ไม่มีข้อมูล'
        },
      }
    },
    timeSeries () {
      var resposne = this.$store.state.stateGetDewellChart
      var series = resposne.data
      // console.log('data series', series)
      return series
    }
  }
}
</script>

<style>

</style>