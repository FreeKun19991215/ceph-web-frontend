<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
  address: '',  // ip 地址
  password: '',  // 密码
})
const rules = {
  address: [
    { 
      required: true, 
      message: '请输入', 
      trigger: 'blur' 
    }
  ],
  password: [
    { 
      required: true, 
      message: '请输入', 
      trigger: 'blur' 
    }
  ],
}

defineExpose({form})
</script>

<template>
  <div style="margin-left: 20px; margin-right: 20px;">
    <el-form :model="form" label-width="auto" :rules="rules">
      <el-form-item label="ip 地址" prop="address">
        <el-input v-model="form.address" />
      </el-form-item>
      <el-form-item label="临时密码" prop="password">
        <el-input v-model="form.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
</style>