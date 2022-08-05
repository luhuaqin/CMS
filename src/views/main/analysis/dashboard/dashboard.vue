<template>
  <div class="dashboard">
    <div id="myChart" ref="divRef"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

import * as echarts from 'echarts'

export default defineComponent({
  name: 'dashboard',
  setup() {
    const divRef = ref<HTMLElement>()
    onMounted(() => {
      const echartInstance = echarts.init(divRef.value!, 'dark', {
        renderer: 'svg'
      }) // 断言确定divRef内有元素
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      echartInstance.setOption(option)
    })

    return {
      divRef
    }
  }
})
</script>

<style scoped lang="less">
#myChart {
  width: 450px;
  height: 300px;
}
</style>
