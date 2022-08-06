<template>
  <div class="base-echart">
    <div :style="{ width, height }" ref="echartDivRef"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'
import useEcharts from '../hooks/useEcharts'

// 定义props
const props = withDefaults(
  defineProps<{
    width: string
    height: string
    option: EChartsOption
  }>(),
  {
    width: '100%',
    height: '300px'
  }
)

const echartDivRef = ref<HTMLElement>()
onMounted(() => {
  const { setOptions } = useEcharts(echartDivRef.value!)
  watchEffect(() => {
    setOptions(props.option)
  })
})
</script>

<style scoped lang="less"></style>
