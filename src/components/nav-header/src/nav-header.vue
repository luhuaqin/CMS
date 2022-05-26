<template>
  <div class="nav-header">
    <el-icon @click="handleFoldChange">
      <!-- <fold /> -->
      <transition name="fold-expand" mode="out-in">
        <component :is="isFold ? 'expand' : 'fold'"></component>
      </transition>
    </el-icon>
    <div class="content">
      <hq-bread-crumb :breadcrumbList="breadcrumbs" />
      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-icon size="18px" color="#247593">
              <Avatar />
            </el-icon>
            用户中心
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import HqBreadCrumb from '@/base-ui/breadcrumb'
import { pathMenuBreadcrumb } from '@/utils/map-menus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

export default defineComponent({
  emits: ['foldChange'],
  components: {
    HqBreadCrumb
  },
  setup(props, { emit }) {
    let isFold = ref(false)
    const handleFoldChange = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    const store = useStore()
    const breadcrumbs = computed(() => {
      const menuInfo = store.state.loginModule.menuInfo
      const route = useRoute()
      const currentPath = route.path
      return pathMenuBreadcrumb(menuInfo, currentPath)
    })

    return {
      handleFoldChange,
      isFold,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;

  .el-icon {
    font-size: 28px;
    cursor: pointer;
  }

  .fold-expand-leave-active {
    transition: 0.4s ease-in;
  }

  .content {
    margin-left: 10px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-dropdown-link {
      cursor: pointer;
      color: #247593;
      display: flex;
      align-items: center;
    }
  }
}
</style>
