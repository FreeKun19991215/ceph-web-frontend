<script setup lang="ts">

interface Props {
  operate_name: string,
  confirm?: () => void
}
const props = defineProps<Props>()
const visible = defineModel("visible")
const confirm = () => {
  if (props.confirm) {
    props.confirm()
  }
}
</script>

<template>
  <el-dialog
    style="width: 40%;"
    v-model="visible"
    destroy-on-close
    :close-on-click-modal="false">
    <template #header>
      <div class="title">{{ operate_name }}</div>
      <hr />
    </template>
    <template #default>
      <slot name="content"></slot>
    </template>
    <template #footer>
      <div style="margin-right: 10px;">
        <el-button>重置</el-button>
        <el-button type="primary" @click="confirm">确认</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>
.title {
  font-weight: bold;
  font-size: 18px;
}
</style>