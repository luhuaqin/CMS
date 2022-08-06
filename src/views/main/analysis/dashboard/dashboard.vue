<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <hq-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </hq-card>
      </el-col>
      <el-col :span="10">
        <hq-card title="不同城市商品销量">
          <map-echart :mapData="addrGoodsSale"></map-echart>
        </hq-card>
      </el-col>
      <el-col :span="7">
        <hq-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </hq-card>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="12">
        <hq-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </hq-card>
      </el-col>
      <el-col :span="12">
        <hq-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </hq-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import HqCard from '@/base-ui/card/index'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/page-echarts/index'

export default defineComponent({
  name: 'dashboard',
  components: {
    HqCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  setup() {
    // const divRef = ref<HTMLElement>()
    // onMounted(() => {
    //   const echartInstance = echarts.init(divRef.value!, 'dark', {
    //     renderer: 'svg'
    //   }) // 断言确定divRef内有元素
    //   // 指定图表的配置项和数据
    //   var option = {
    //     title: {
    //       text: 'ECharts 入门示例'
    //     },
    //     tooltip: {
    //       trigger: 'axis',
    //       axisPointer: {
    //         type: 'shadow'
    //       }
    //     },
    //     legend: {
    //       data: ['销量']
    //     },
    //     xAxis: {
    //       data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    //     },
    //     yAxis: {},
    //     series: [
    //       {
    //         name: '销量',
    //         type: 'bar',
    //         data: [5, 20, 36, 10, 10, 20]
    //       }
    //     ]
    //   }
    //   // 使用刚指定的配置项和数据显示图表。
    //   echartInstance.setOption(option)
    // })
    const store = useStore()
    store.dispatch('dashboardModule/getDashboardDataAction')

    const categoryGoodsCount = computed(() => {
      return store.state.dashboardModule.categoryGoodsCount.map((item) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const lineData: number[] = []

      const categoryGoodsSale = store.state.dashboardModule.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        lineData.push(item.goodsCount)
      }

      return { xLabels, lineData }
    })

    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: number[] = []

      const categoryGoodsFavor = store.state.dashboardModule.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLabels, values }
    })

    const addrGoodsSale = computed(() => {
      return store.state.dashboardModule.addrGoodsSale.map((item: any) => {
        return {
          name: item.address,
          value: item.count
        }
      })
    })

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addrGoodsSale
    }
  }
})
</script>

<style scoped lang="less"></style>
