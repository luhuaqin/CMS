import { App } from 'vue'

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return value
    }
  }
}
