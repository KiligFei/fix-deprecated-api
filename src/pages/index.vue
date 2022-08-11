<script setup lang="ts">
</script>

<template>
  <div>
    <div class="testBtn">
      <el-button>
        Success
      </el-button>
    </div>
  </div>
</template>

<style lang='less' scoped>
:deep(.testBtn){
.el-button{
    background-color: rgb(82, 183, 200);
    width: 100px;
  }
}
/deep/ .testBtn{
  .el-button{
    background-color: rgb(60, 35, 185);
  }
}
::v-deep .testBtn{
  .el-button{
    background-color: rgb(120, 184, 120);
  }
}
</style>
