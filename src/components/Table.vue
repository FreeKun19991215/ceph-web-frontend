<script setup lang="ts">
interface Column {
  prop: string,
  label: string,
  width?: string,
  // style 为预设样式，只接受以下几种参数
  // status | operate | tag
  style?: string
}
interface Props {
  tableData: object,
  columns: Column[],
  operates?: string[]
}
defineProps<Props>()

const getStyleStatusType = (index: string) => {
  return {"1": "success", "2": "warning", "3": "danager"}[index]
}
const getStyleStatusContent = (index: string) => {
  return {"1": "健康", "2": "警告", "3": "异常"}[index]
}
const getStyleTagColor = (index: string) => {
  return {
    "1": "#FF6666", "2": "#FFFF40", "3": "#40FF40", "4": "#4040FF",
    "5": "#FF40FF", "6": "#A0A0A0"}[index]
}
const getStyleTagContent = (index: string) => {
  return {"1": "mon", "2": "mgr", "3": "osd"}[index]
}
</script>

<template>
  <!-- <div style="margin: 10px;">{{ title }}</div> -->
  <el-table
    :data="tableData"
    stripe
    show-overflow-tooltip
    style="width: 100%">
    <template v-for="column in columns" :key="column">
      <el-table-column
        v-if="column.style === 'status'"
        :prop="column.prop"
        :label="column.label" >
        <template #default="scope">
          <el-tag
            :type="getStyleStatusType(scope.row.status)"
            effect="plain">{{ getStyleStatusContent(scope.row.status) }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        v-else-if="column.style === 'operate'"
        :prop="column.prop"
        :label="column.label" >
        <template #default="scope">
          <div
            v-for="operate_name in operates"
            :key="operate_name"
            style="display: inline-block; margin-right: 3px; font-size: 12px;">
            {{  operate_name }}</div>
        </template>
      </el-table-column>
      <el-table-column
        v-else-if="column.style === 'tag'"
        :prop="column.prop"
        :label="column.label"
        :width="column.width"
        :tooltip-formatter="(scope) => scope.row.roles.map((role) => getStyleTagContent(role)).join(', ')" >
        <template #default="scope">
          <el-tag
            v-for="item in scope.row.roles"
            :color="getStyleTagColor(item)"
            round
            size="small"
            style="margin-right: 2px;">
            {{ getStyleTagContent(item) }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        v-else
        :prop="column.prop"
        :label="column.label"
        :width="column.width" />
    </template>
  </el-table>
</template>

<style scoped>
</style>
