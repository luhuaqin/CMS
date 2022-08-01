<template>
  <div class="goods">
    <page-content :configTableData="configTableData" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          preview-teleported
        />
      </template>
      <template #price="scope">
        {{ '¥' + scope.row.oldPrice || scope.row.newPrice }}
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content/index'
import { configTableData } from './config/content-table-config'

export default defineComponent({
  name: 'goods',
  components: {
    PageContent
  },
  setup() {
    return {
      configTableData
    }
  }
})
</script>

<style scoped></style>
