import { IBreadcrumbType } from '@/base-ui/breadcrumb/types'
import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

export function mapMenusToRoutes(menuInfo: any[]): RouteRecordRaw[] {
  // 真正使用的路由
  const routes: RouteRecordRaw[] = []

  // 加载所有routes
  const allRoutes: RouteRecordRaw[] = []
  const routerFile = require.context('../router/main', true, /\.ts/)
  routerFile.keys().forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 根据菜单获取需要添加的routes
  const _showMenu = (menus: any[]) => {
    for (const menuItem of menus) {
      if (menuItem.type === 2) {
        const route = allRoutes.find((route) => route.path == menuItem.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menuItem
        }
      } else {
        _showMenu(menuItem.children)
      }
    }
  }
  _showMenu(menuInfo)

  return routes
}

// 获取menu组件的default-active值及面包屑
export function activeMenu(
  menuInfo: any[],
  currentPath: string,
  breadCrumbs?: IBreadcrumbType[]
): any {
  for (const menuItem of menuInfo) {
    if (menuItem.type === 1) {
      const subMenu = activeMenu(menuItem.children ?? [], currentPath)
      if (subMenu) {
        breadCrumbs?.push({ name: menuItem.name })
        breadCrumbs?.push({ name: subMenu.name })
        return subMenu
      }
    } else if (menuItem.type === 2 && menuItem.url === currentPath) {
      return menuItem
    }
  }
}

export function pathMenuBreadcrumb(menuInfo: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumbType[] = []
  activeMenu(menuInfo, currentPath, breadcrumbs)
  return breadcrumbs
}

export { firstMenu }
