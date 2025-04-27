<script setup lang="ts">
import OperateDialog from '@/components/OperateDialog.vue'
import { ADD_LABEL, ADD_VALUE } from '@/constants/operation'
import AddForm from './AddForm.vue'
import { ref } from 'vue'
import { addServer } from '@/api/modules/hardware/server'

const tableData = ref()
const columns = [
  {'prop': "hostname", "label": "主机名", "width": "120"},
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
    add_dialog_visible.value = true
  }
}

// 添加操作
const add_dialog_visible = ref(false)
const add_form = ref(null)
const add_confirm = async () => {
  if (!add_form.value) return
    console.log(add_form.value.form)
    const res = await addServer(add_form.value.form)
    console.log(res)
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

    <!-- 添加弹窗 -->
    <OperateDialog
      v-model:visible="add_dialog_visible"
      :operate_name="ADD_LABEL"
      :confirm="add_confirm">
      <template #content>
        <AddForm ref="add_form"></AddForm>
      </template>
      </OperateDialog>
</template>

<style scoped>
</style>