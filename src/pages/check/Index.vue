<template>
  <div class="check">
    <h2>审核大厅</h2>
    <el-menu :router="true" :default-active="1" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="/check/waiter_check">员工审核</el-menu-item>
      <el-menu-item index="/check/withdraw_check" >提现审核</el-menu-item>
    </el-menu>
    <div class="check_content">
      <!-- 显示员工审核页面，或者提现审核页面 -->
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>