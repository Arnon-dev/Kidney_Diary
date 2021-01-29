<template>
  <v-container class="pa-2">
    <p class='title font-weight-bold black--text mx-2'>Weight & Blood Presure Graph</p>
    <v-row dense no-gutters>
      <!-- <v-col cols="12" md="12">
        <v-btn id="one_week"  @click="updateData('one_week')" :class="{active: selection==='one_week'}" text dense>Week</v-btn>
        <v-btn id="one_month" @click="updateData('one_month')" :class="{active: selection==='one_month'}" text dense>Month</v-btn>
        <v-btn id="one_year" @click="updateData('one_year')" :class="{active: selection==='one_year'}" text dense>Year</v-btn>
        <v-btn id="all" @click="updateData('all')" :class="{active: selection==='all'}" text dense>ALL</v-btn>
      </v-col> -->
      <v-col cols="12" md='12'>
        <apexchart type="area" height="350" ref="chart" :options="chartOptions" :series="bloodPresureSeries"></apexchart>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import moment from 'moment'
export default {
  props: ['startDate', 'endDate'],
  data () {
    return {
      selection: 'one_year',
      series: []
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
        yaxis: {
        },
        xaxis: {
          labels: {
            formatter: function(value) {
              return 'round ' + value
            }
          }
        },
        tooltip: {
        },
        noData: {
          text: 'ไม่มีข้อมูล'
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
      }
    },
    bloodPresureSeries () {
      var response = this.$store.state.stateGetWeightChart
      var series = response.data
      return series
    }
  },
  methods: {
  }
}
</script>

<style>

</style>