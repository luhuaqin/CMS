<template>
  <div class="nav-main">
    <div class="top-logo">
      <img src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!collapse">VUE3 + TS</span>
    </div>
    <el-menu
      active-text-color="#fff"
      background-color="#000"
      :collapse="collapse"
      :default-active="defaultValue"
      class="el-menu-vertical-demo"
      text-color="#fff"
    >
      <template v-for="menuItem in userMenu" :key="menuItem.id">
        <!-- 二级菜单 -->
        <template v-if="menuItem.type === 1">
          <el-sub-menu :index="String(menuItem.id)">
            <template #title>
              <el-icon v-if="menuItem.icon">
                <component :is="menuItem.icon.slice(8)"></component>
              </el-icon>
              <span>{{ menuItem.name }}</span>
            </template>
            <!-- 遍历二级菜单内部的menu-item -->
            <template v-for="subItem in menuItem.children" :key="subItem.id">
              <el-menu-item
                :index="String(subItem.id)"
                @click="handleChangeMenu(subItem)"
              >
                <!-- <el-icon v-if="subItem.icon">
                  <component :is="subIconName"></component>
                </el-icon> -->
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-if="menuItem.type === 2">
          <el-menu-item :index="String(menuItem.id)">
            <el-icon v-if="menuItem.icon">
              <component :is="menuItem.icon.slice(8)"></component>
            </el-icon>
            <span>{{ menuItem.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store/index'
import { useRouter, useRoute } from 'vue-router'
import { activeMenu } from '@/utils/map-menus'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const userMenu = computed(() => store.state.loginModule.menuInfo)

    const route = useRoute()
    const currentPath = route.path
    const activeMenuId = activeMenu(userMenu.value, currentPath)
    const defaultValue = ref(activeMenuId.id + '')

    const handleChangeMenu = (menuItem: any) => {
      router.push({
        path: menuItem.url ?? '/not-found'
      })
    }
    // 直接一个值返回存在覆盖问题
    // let iconName = ''
    // for (const item of userMenu) {
    //   if (item.icon) {
    //     iconName = computed(() => item.icon.slice(8)).value
    //   }
    //   // if (item.children) {
    //   //   for (const subItem of item.children) {
    //   //     subIconName = subItem.icon.slice(8)
    //   //   }
    //   // }
    // }
    return {
      userMenu,
      handleChangeMenu,
      defaultValue
    }
  }
})
</script>

<style scoped lang="less">
.nav-main {
  height: 100%;
  .top-logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    box-shadow: 8px 1px 8px rgba(255, 255, 255, 0.5);
    height: 5%;
    width: 100%;

    img {
      width: 30px;
      height: 30px;
    }
    span {
      margin-left: 10px;
    }
  }

  .el-menu {
    border-right: none;
    .el-sub-menu {
      // 二级菜单 ( 默认背景 )
      .el-menu-item {
        padding-left: 50px !important;
        background-color: #3e9cbf !important;
      }
    }
    ::v-deep .el-sub-menu__title {
      background-color: rgb(36, 117, 147) !important;
    }

    // hover 高亮
    .el-menu-item:hover {
      color: #000; // 菜单
      background-color: #3dc6e8 !important;
    }

    .el-menu-item.is-active {
      background-color: #fff !important;
      color: #000;
    }
  }
}
</style>
