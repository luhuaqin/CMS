import * as echarts from 'echarts'
import ChinaMapData from '../map-data/china.json'

echarts.registerMap('china', ChinaMapData)

export default function (el?: HTMLElement) {
  const echartInstance = echarts.init(el!)

  const setOptions = (option: echarts.EChartsOption) => {
    echartInstance.setOption(option)
  }

  const updateSize = () => {
    echartInstance.resize()
  }

  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  return {
    setOptions,
    echartInstance,
    updateSize
  }
}
