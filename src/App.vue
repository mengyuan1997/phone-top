<template>
  <div id="app">
    <!-- <h1>app</h1> -->
    <Header title="首页">
     <span slot="left" class="btn" @click="showLocationAction"> 定位</span>
     <span slot="left" class="btn"> 天气 </span>
     <span slot="right" class="btn" @click="showSearchAction">搜索一下</span>
    </Header>

    <Location v-show="showLocation" @close="showLocationAction" />
    <Search v-show="showSearch" />
  </div>
</template>

<script>
// 将组件进行导入
// import Header  from './pages/Header' 
import Location from './pages/Location' 
import Search from './pages/Search'
export default {
components:{
  // Header,
  Location,Search
},
data(){
  return {
    showLocation:false,
    showSearch:false,
  }
},
methods:{
  showLocationAction(){
    console.log('123');
    
    this.showLocation = !this.showLocation
  },
  showSearchAction(){
    this.showSearch = true;
  }
},
created(){
  this.$eventBus.$on('search-back',() => {
    this.showSearch = false
  })
}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.btn{
  padding:0 10px
}
</style>