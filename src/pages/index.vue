<script setup lang="ts">
import { DefineTemplate, ReuseTemplate } from 'vue-reuse-template';
const dialogVisible = ref(false)
const setDialogVisible = () => {
  dialogVisible.value = !dialogVisible.value
}
</script>

<template>
  <DefineTemplate>
    <div class="testBtn" @click="setDialogVisible">
      <el-button>
        {{ dialogVisible ? 'success' : 'error' }}
      </el-button>
    </div>
  </DefineTemplate>
  <div v-if="dialogVisible">
    <ReuseTemplate />
  </div>
  <div v-else>
    <ReuseTemplate />
  </div>
</template>

<style lang='less' scoped>
:deep(.testBtn) {
  .el-button {
    background-color: rgb(120, 184, 120);
  }
}
</style>
