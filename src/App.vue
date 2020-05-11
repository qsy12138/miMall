<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      res:{}
    }
  },
  mounted(){
    // this.axios.get('/mock/user/login.json').then((res)=>{ //本地加载请求静态JSON文件的形式调用mock
    //   this.res = res
    // })
    this.axios.get('/mock/user/login.json').then((res)=>{ //使用mockjs的方法请求模拟数据
      this.res = res
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
