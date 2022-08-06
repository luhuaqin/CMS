<template>
  <div class="pie-chart">
    <base-echarts :option="options"></base-echarts>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import BaseEcharts from '@/base-ui/echarts'
import { IChartSeriesDataType } from '../types/index'
const props = defineProps<{
  pieData: IChartSeriesDataType
}>()

const options = computed(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style scoped></style>
