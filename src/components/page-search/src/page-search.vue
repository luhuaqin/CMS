<template>
  <div class="page-search">
    <hq-form
      :formItemList="configSearchForm.formItems"
      :labelWidth="configSearchForm.labelWidth"
      :itemLayout="configSearchForm.itemLayout"
      v-model="formData"
    >
      <!-- <template #formHeader>
        <h5>检索条件</h5>
      </template> -->
      <template #formFooter>
        <el-button type="primary" plain>
          <el-icon style="vertical-align: middle">
            <Search />
          </el-icon>
          查询
        </el-button>
        <el-button type="success" plain>
          <el-icon style="vertical-align: middle">
            <Refresh />
          </el-icon>
          刷新
        </el-button>
      </template>
    </hq-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import hqForm from '@/base-ui/form/index'

export default defineComponent({
  components: {
    hqForm
  },
  props: {
    configSearchForm: {
      type: Object,
      required: true
    }
  },
  setup() {
    const formData = ref({
      userName: '',
      password: '',
      hobbit: '',
      rangeTime: ''
    })

    return {
      formData
    }
  }
})
</script>

<style scoped></style>
