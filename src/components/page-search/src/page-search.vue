<template>
  <div class="page-search">
    <hq-form
      :formItemList="configSearchForm.formItemList"
      :labelWidth="configSearchForm.labelWidth"
      :itemLayout="configSearchForm.itemLayout"
      v-model="formData"
    >
      <!-- <template #formHeader>
        <h5>检索条件</h5>
      </template> -->
      <template #formFooter>
        <el-button type="primary" plain @click="handleQuery">
          <el-icon style="vertical-align: middle">
            <Search />
          </el-icon>
          查询
        </el-button>
        <el-button type="success" plain @click="handleReset">
          <el-icon style="vertical-align: middle">
            <Refresh />
          </el-icon>
          重置
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
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // eslint-disable-next-line vue/no-setup-props-destructure
    const formItemList = props.configSearchForm?.formItemList
    const formOriginData: any = {}
    for (const item of formItemList) {
      formOriginData[item.field] = ''
    }

    const formData = ref(formOriginData)

    const handleReset = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
      emit('resetBtnClick')
    }

    const handleQuery = () => {
      emit('queryBtnClick', formData.value)
    }

    return {
      formData,
      handleReset,
      handleQuery
    }
  }
})
</script>

<style scoped></style>
