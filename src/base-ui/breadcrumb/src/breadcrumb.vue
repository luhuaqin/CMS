<template>
  <div>
    <el-breadcrumb separator="/">
      <template
        v-for="breadcrumbItem in breadcrumbList"
        :key="breadcrumbItem.name"
      >
        <el-breadcrumb-item>
          {{ breadcrumbItem.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadcrumbType } from '../types'

export default defineComponent({
  props: {
    breadcrumbList: {
      type: Array as PropType<IBreadcrumbType[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
