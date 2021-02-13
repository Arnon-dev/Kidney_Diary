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
      <v-col cols="12" md='12'>
        <apexchart type="area" height="350" ref="chart" :options="chartOptions" :series="UrineSeries"></apexchart>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      series: [],
      selection: 'one_year'
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
        // annotations: {
        //   yaxis: [{
        //     y: 30,
        //     borderColor: '#999',
        //     label: {
        //       show: true,
        //       text: 'Support',
        //       style: {
        //         color: "#fff",
        //         background: '#00E396'
        //       }
        //     }
        //   }],
        //   xaxis: [{
        //     x: new Date('14 Nov 2012').getTime(),
        //     borderColor: '#999',
        //     yAxisIndex: 0,
        //     label: {
        //       show: true,
        //       text: 'Rally',
        //       style: {
        //         color: "#fff",
        //         background: '#775DD0'
        //       }
        //     }
        //   }]
        // },
        dataLabels: {
          enabled: false
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
          }
        },
        tooltip: {
          x: {
            format: 'dd MMM yyyy'
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
      var series = response.data
      return series
    }
  },
  methods: {
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