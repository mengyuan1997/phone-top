<template>
  <div id="secrch">
     <Header title="搜索">
         <span class="btn" slot="left" @click="backAction"> 返回</span>
     </Header>
  </div>
</template>

<script>
// import Header  from '../pages/Header' 
export default {
    // components:{
    //     Header,
    // },
    methods:{
        backAction(){
            this.$eventBus.$emit('search-back')
        }
    }

}
</script>


<style scoped>
#search{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: lightcyan;
}

</style>