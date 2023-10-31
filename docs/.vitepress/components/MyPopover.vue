<template>
  <el-popover placement="top" width="200" trigger="hover">
    <template v-slot:reference>
      <el-button><slot name="button"></slot></el-button>
    </template>

    <!-- 使用具名插槽 "content", 并为其添加样式 -->
    <div class="popover-content">
      <slot name="content"></slot>
    </div>
  </el-popover>
</template>

<script>
export default {
  name: 'MyPopover'
}
</script>

<!-- 添加 CSS 样式 -->
<style scoped>
.popover-content {
  border: 1px solid #ccc;
  padding: 10px;
  background-color: white; /* 或者其他你喜欢的颜色 */
}
</style>
