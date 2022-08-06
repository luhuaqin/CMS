<template>
  <div class="rose-echart">
    <base-echarts :option="options"></base-echarts>
  </div>
</template>

<script setup lang="ts">
import BaseEcharts from '@/base-ui/echarts'
import { computed, defineProps } from 'vue'
import { IChartSeriesDataType } from '../types/index'

const props = defineProps<{
  roseData: IChartSeriesDataType
}>()

const options = computed(() => {
  return {
    // legend: {
    //   top: 'bottom'
    // },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [10, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        labelLine: {
          length: 0.5,
          length2: 0
        },
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  }
})
</script>

<style scoped></style>
