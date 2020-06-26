import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    chartData: {
      type: Object,
      required: true
    },
    options:{
      type: Object,
      required: true
    },
    height: {
      default: 380,
      type: Number
    }
  },
  methods: {
    renderStackedChart () {
      this.renderChart(this.chartData, this.options)
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
    const HTML = this.$data._chart.generateLegend()
    this.$emit('generated', HTML)
  },
  watch: {
    chartData () {
      this.$data._chart.destroy()
      this.renderStackedChart()
    }
  }
}