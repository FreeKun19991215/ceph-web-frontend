<script setup lang="ts">
interface SingleSelect {
  value: string,
  label: string,
}
interface Props {
  single_selects?: SingleSelect[],
  singleEvent?: (value: string) => void
}
const props = defineProps<Props>()

const single_name = '单选操作'
const selectChange = (value: string) => {
  if (props.singleEvent) {
    props.singleEvent(value)
  }
}
</script>

<template>
  <div style="margin-bottom: 8px;">
    <el-select
      v-if="single_selects?.length"
      v-model="single_name"
      @change="selectChange"
      style="width: 100px;">
      <el-option
        v-for="single_select in single_selects"
        :key="single_select.value"
        :label="single_select.label"
        :value="single_select.value"/>
      </el-select>
  </div>
</template>

<style scoped>
</style>