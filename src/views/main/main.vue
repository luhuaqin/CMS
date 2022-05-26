<template>
  <div class="common-layout">
    <el-container class="main-container">
      <el-aside :width="isCollapse ? '60px' : '220px'" class="page-aside">
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page-right">
        <el-header class="page-header">
          <nav-header @foldChange="handleFoldChange" />
        </el-header>
        <el-main class="page-main">
          <div class="page-content">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu/index'
import NavHeader from '@/components/nav-header/index'

export default defineComponent({
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    const isCollapse = ref(false)
    const handleFoldChange = (isFold: boolean) => {
      isCollapse.value = isFold
    }
    return {
      handleFoldChange,
      isCollapse
    }
  }
})
</script>

<style scoped lang="less">
.common-layout {
  ::-webkit-scrollbar {
    opacity: 0;
    display: none;
  }
  height: 100%;

  .main-container {
    height: 100%;

    .page-aside {
      background-color: #247593;
      color: #fff;
    }

    .page-right {
      .page-header {
        --el-header-padding: 7px 12px;
        height: 6%;
      }
      .page-main {
        background-color: #dce2e0;
        .page-content {
          background-color: #fff;
        }
      }
    }
  }
}
</style>
