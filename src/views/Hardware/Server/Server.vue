<script setup lang="ts">
import { ADD_LABEL, ADD_VALUE } from '@/constants/operation'
import { ref } from 'vue'

let tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    status: '1',
    roles: ["1", "2", "1", "1", "1"]
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    status: "1",
    roles: ["1"]
  }
])
const columns = [
  {'prop': "date", "label": "日期", "width": "120"},
  {'prop': "name", "label": "名称", "width": "80"},
  {'prop': "address", "label": "地址"},
  {'prop': "status", "label": "状态", "style": "status"},
  {'prop': "operate", "label": "操作", "style": "operate"},
  {'prop': "role", "label": "角色", "style": "tag", "width": "150"},
]
const single_selects = [
  {'value': ADD_VALUE, 'label': ADD_LABEL}
]
const singleEvent = (value: string) => {
  if (value === ADD_VALUE) {
    
  }
}
</script>

<template>
    <Title title="服务器"></Title>
    <Multifunction
      :single_selects="single_selects"
      :singleEvent="singleEvent"></Multifunction>
    <Table
      :tableData="tableData"
      :columns="columns"
      :operates="['添加', '删除']">
    </Table>
</template>

<style scoped>
</style>