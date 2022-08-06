<template>
  <div class="line-echart">
    <base-echarts :option="options"></base-echarts>
  </div>
</template>

<script setup lang="ts">
import BaseEcharts from '@/base-ui/echarts'
import { computed, defineProps, withDefaults } from 'vue'
import * as echarts from 'echarts'

const props = withDefaults(
  defineProps<{
    title: string
    lineData: number[]
    xLabels: string[]
  }>(),
  {
    title: ''
  }
)

const options = computed(() => {
  return {
    title: {
      text: props.title
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.xLabels
    },
    legend: {},
    yAxis: {
      type: 'value'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    series: [
      {
        name: '分类销量',
        smooth: true,
        data: props.lineData,
        type: 'line',
        lineStyle: {
          width: 0
        },
        areaStyle: {
          opacity: 0.3,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(128, 255, 165)'
            },
            {
              offset: 1,
              color: 'rgb(1, 191, 236)'
            }
          ])
        }
      }
    ]
  }
})
</script>

<style scoped></style>
