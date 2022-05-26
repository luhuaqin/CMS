import {
  ElAside,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElCheckbox,
  ElCol,
  ElContainer,
  ElDatePicker,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  ElRadio,
  ElRow,
  ElSelect,
  ElSubMenu,
  ElTabPane,
  ElTabs
} from 'element-plus'
import {
  Iphone,
  Avatar,
  Location,
  Document,
  Setting,
  Monitor,
  Goods,
  ChatLineRound,
  Fold,
  Expand,
  Search,
  Refresh
} from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/index.css' // 全局引用组件库样式
import { App } from 'vue'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElIcon,
  Iphone,
  Avatar,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  Location,
  ElMenuItemGroup,
  ElMenuItem,
  ElSubMenu,
  Document,
  Setting,
  Monitor,
  Goods,
  ChatLineRound,
  Fold,
  Expand,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  Search,
  Refresh
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
