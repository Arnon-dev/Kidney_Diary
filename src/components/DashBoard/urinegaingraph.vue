<template>
  <v-container class="pa-2">
    <p class='title font-weight-bold black--text mx-2'>Urine & Gain Graph</p>
    <v-row dense no-gutters>
      <!-- <v-col cols="12" md="12">
        <v-btn id="one_week"  @click="updateData('one_week')" :class="{active: selection==='one_week'}" text dense>Week</v-btn>
        <v-btn id="one_month" @click="updateData('one_month')" :class="{active: selection==='one_month'}" text dense>Month</v-btn>
        <v-btn id="one_year" @click="updateData('one_year')" :class="{active: selection==='one_year'}" text dense>Year</v-btn>
        <v-btn id="all" @click="updateData('all')" :class="{active: selection==='all'}" text dense>ALL</v-btn>
      </v-col> -->
      <v-col cols="12" md='12' v-if="startDate === null && endDate === null">
        <apexchart type="area" height="350" ref="chart" :options="chartOptions" :series="UrineSeries"></apexchart>
      </v-col>
      <v-col cols="12" md='12' v-else>
        <apexchart type="area" height="350" ref="chart" :options="chartOptionsDate" :series="UrineSeriesDate"></apexchart>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['startDate', 'endDate'],
  data () {
    return {
      series: [],
      selection: 'one_year',
      date: []
    }
  },
  computed: {
    chartOptions () {
      return {
        chart: {
          id: 'area-datetime',
          type: 'area',
          height: 350,
          zoom: {
            autoScaleYaxis: true
          }
        },
        dataLabels: {
          enabled: true,
          textAnchor: 'start',
        },
        markers: {
          size: 0,
          style: 'hollow',
        },
        xaxis: {
          labels: {
            formatter: function(value) {
              return 'round ' + value
            }
          },
          title: {
            text: 'Round',
          }
        },
        yaxis: {
          title: {
            text: 'Urine & Gain (ml)',
          }
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + ' ml'
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
        noData: {
          text: 'ไม่มีข้อมูล'
        },
      }
    },
    chartOptionsDate () {
      return {
        chart: {
          id: 'area-datetime',
          type: 'area',
          height: 350,
          zoom: {
            autoScaleYaxis: true
          }
        },
        dataLabels: {
          enabled: true,
          textAnchor: 'start',
        },
        markers: {
          size: 0,
          style: 'hollow',
        },
        xaxis: {
          categories: this.date,
          // labels: {
          //   formatter: function(value) {
          //     return 'round ' + value
          //   }
          // },
          title: {
            text: 'Date',
          }
        },
        yaxis: {
          title: {
            text: 'Urine & Gain (ml)',
          }
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + ' ml'
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
        noData: {
          text: 'ไม่มีข้อมูล'
        },
      }
    },
    UrineSeries () {
      var response = this.$store.state.stateGetProfitChart
      // console.log('Urien Data====>', response.data)
      var series = []
      series = response.data
      // console.log(series)
      return series
    },
    UrineSeriesDate () {
      var response = this.$store.state.stateGetProfitChart
      // console.log('Urien Data====>', response.data)
      var series = []
      series = response.data
      this.setDate(response.data[response.data.length - 1])
      series.splice(-1, 1)
      console.log(series)
      return series
    }
  },
  methods: {
    setDate (val) {
      // console.log(val)
      this.date = val.data
    }
    // updateData: function(timeline) {
    //   this.selection = timeline
    //   switch (timeline) {
    //     case 'one_week':
    //       this.$refs.chart.zoomX(
    //         new Date('28 Jan 2013').getTime(),
    //         new Date('2 Feb 2013').getTime()
    //       )
    //       break
    //     case 'one_month':
    //       this.$refs.chart.zoomX(
    //         new Date('28 Jan 2013').getTime(),
    //         new Date('27 Feb 2013').getTime()
    //       )
    //       break
    //     case 'six_months':
    //       this.$refs.chart.zoomX(
    //         new Date('27 Sep 2012').getTime(),
    //         new Date('27 Feb 2013').getTime()
    //       )
    //       break
    //     case 'one_year':
    //       this.$refs.chart.zoomX(
    //         new Date('27 Feb 2012').getTime(),
    //         new Date('27 Feb 2013').getTime()
    //       )
    //       break
    //     case 'ytd':
    //       this.$refs.chart.zoomX(
    //         new Date('01 Jan 2013').getTime(),
    //         new Date('27 Feb 2013').getTime()
    //       )
    //       break
    //     case 'all':
    //       this.$refs.chart.zoomX(
    //         new Date('23 Jan 2012').getTime(),
    //         new Date('27 Feb 2013').getTime()
    //       )
    //       break
    //     default:
    //   }
    // }
  }
}
</script>

<style>

</style>