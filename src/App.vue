<template>
  <div id="app">
    <el-row>
      <el-col :span="5">
        <div id="nav" >
          <el-menu 
            background-color="#545c64"
            text-color="#fff"
            active-text-color="teal"
            :router="true" 
            default-active="2" class="el-menu-vertical-demo" >
            <el-menu-item index="/">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/category">
              <i class="el-icon-menu"></i>
              <span slot="title">栏目管理</span>
            </el-menu-item>
            <el-menu-item index="/product">
              <i class="el-icon-menu"></i>
              <span slot="title">产品管理</span>
            </el-menu-item>
            <el-menu-item index="/customer">
              <i class="el-icon-menu"></i>
              <span slot="title">顾客管理</span>
            </el-menu-item>
            <el-menu-item index="/check">
              <i class="el-icon-menu"></i>
              <span slot="title">审核大厅</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="19">
        <div class="content">
          <router-view/>
        </div>
      </el-col>
    
    </el-row>
  </div>
</template>

<style>
body,ul,ol {
  margin: 0;
  padding: 0;
}
#app {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.content {
  padding:.5em ;
}
</style>
