<template>
  <div id="location">
      <Header title="定位">
          <span clas="btn" slot="left" @click="backAction">返回</span>
      </Header>
  </div>
</template>

<script>
// import Header  from '../pages/Header' 
export default {
//     components:{
//         Header,
//     },
    methods:{
        backAction(){
            this.$emit('close')
            
        }
    }

}
</script>



<style scoped>
#location{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: lemonchiffon;
}


</style>