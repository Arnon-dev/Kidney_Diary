<template>
  <v-container class="pa-2">
    <p class='title font-weight-bold black--text mx-2'>Fill Time & Drain Time </p>
    <v-row dense no-gutters>
      <v-col xs='12' md='12' v-if="startDate === null && endDate === null">
        <apexchart type="line" width='100%' height="300" :options="chartOptions" :series="fillDrainSeries"></apexchart>
      </v-col>
      <v-col xs='12' md='12' v-else>
        <apexchart type="line" width='100%' height="300" :options="chartOptionsDate" :series="fillDrainSeriesDate"></apexchart>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['startDate', 'endDate'],
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
      date: []
    }
  },
  computed: {
    chartOptions () {
      return {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            autoScaleYaxis: true
          }
        },
        dataLabels: {
          enabled: true,
          textAnchor: 'start',
        },
        // stroke: {
        //   width: [5, 7, 5],
        //   curve: 'straight',
        //   dashArray: [0, 8, 5]
        // },
        // title: {
        //   text: 'Weight',
        //   align: 'left'
        // },
        // legend: {
        //   tooltipHoverFormatter: function(val, opts) {
        //     return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        //   }
        // },
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
          },
          title: {
            text: 'Round'
          }
        },
        yaxis: {
          title: {
            text: 'Fill Time & Drain Time (min)'
          }
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + ' min'
            }
          }
        },
        grid: {
          borderColor: '#f1f1f1',
        },
        noData: {
          text: 'ไม่มีข้อมูล'
        },
      }
    },
    chartOptionsDate () {
      return {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            autoScaleYaxis: true
          }
        },
        dataLabels: {
          enabled: true,
          textAnchor: 'start',
        },
        // stroke: {
        //   width: [5, 7, 5],
        //   curve: 'straight',
        //   dashArray: [0, 8, 5]
        // },
        // title: {
        //   text: 'Weight',
        //   align: 'left'
        // },
        // legend: {
        //   tooltipHoverFormatter: function(val, opts) {
        //     return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        //   }
        // },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: this.date,
          labels: {
            // formatter: function() {
            //   return this.value.data
            // }
          },
          title: {
            text: 'Date'
          }
        },
        yaxis: {
          title: {
            text: 'Fill Time & Drain Time (min)'
          }
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + ' min'
            }
          }
        },
        grid: {
          borderColor: '#f1f1f1',
        },
        noData: {
          text: 'ไม่มีข้อมูล'
        },
      }
    },
    fillDrainSeries () {
      var response = this.$store.state.stateGetFillDrainChart
      var series = []
      series = response.data
      // console.log(series)
      return series
    },
    fillDrainSeriesDate () {
      var response = this.$store.state.stateGetFillDrainChart
      var series = []
      series = response.data
      this.setDate(response.data[response.data.length - 1])
      series.splice(-1, 1)
      // console.log(series)
      return series
    }
  },
  methods: {
    setDate (val) {
      // console.log(val)
      this.date = val.data
    }
  }
}
</script>

<style>

</style>
