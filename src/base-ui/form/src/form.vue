<template>
  <div class="hq-form">
    <div class="formHeader">
      <slot name="formHeader"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItemList" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemLayout">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="itemOpt in item.options"
                    :key="itemOpt.label"
                    :value="itemOpt.value"
                    :label="itemOpt.label"
                  />
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOpts"
                  v-model="formData[`${item.field}`]"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="formFooter">
      <slot name="formFooter"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, watch, ref } from 'vue'
import { IFormType } from '../types'

export default defineComponent({
  props: {
    formItemList: {
      type: Array as PropType<IFormType[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '130px'
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    itemLayout: {
      type: Object,
      default: () => ({ padding: '10px 10px' })
    },
    modelValue: {
      type: Object,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue })

    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      {
        deep: true
      }
    )

    return {
      formData
    }
  }
})
</script>

<style scoped>
.formFooter {
  padding: 10px;
  text-align: right;
}
</style>
