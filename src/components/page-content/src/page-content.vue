<template>
  <div class="pageContent">
    <hq-table
      v-bind="configTableData"
      :listData="userList"
      @selectionChange="selectionList"
    >
      <!-- header插槽 -->
      <template #headerHandler>
        <el-button type="primary">
          <el-icon size="14px">
            <Plus />
          </el-icon>
          新建用户
        </el-button>
      </template>
      <!-- 列插槽 -->
      <template #status="scope">
        <el-tag :type="scope.row.enable ? 'success' : 'danger'">
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-tag>
      </template>
      <template #createAt="scope">
        {{ $filters.formatTime(scope.row.createAt) }}
        <!-- {{ moment(scope.row.createAt).format('YY/MM/DD hh:mm') }} -->
      </template>
      <template #updateAt="scope">
        {{ $filters.formatTime(scope.row.updateAt) }}
        <!-- {{ moment(scope.row.updateAt).format('YY/MM/DD hh:mm') }} -->
      </template>
      <template #handler>
        <el-button circle type="primary" size="small">
          <el-icon size="16px">
            <Edit />
          </el-icon>
        </el-button>
        <el-button circle type="danger" size="small">
          <el-icon size="16px">
            <Delete />
          </el-icon>
        </el-button>
        <!-- {{ moment(scope.row.updateAt).format('YY/MM/DD hh:mm') }} -->
      </template>
    </hq-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    configTableData: {
      type: Object,
      require: true
    },
    userList: {
      type: Array,
      require: true
    }
  },
  setup() {
    const selectionList = (list: any) => {
      console.log(list)
    }
    return {
      selectionList
    }
  }
})
</script>

<style scoped></style>
