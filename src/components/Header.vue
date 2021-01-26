<template>
  <div class="header">
      <div class="left">
          <slot name="left" />
      </div>
          <h1 class="title"> {{title}} </h1>
      <div class="right">
          <slot name="right" />
      </div>
  </div>
</template>

<script>
export default {
    props:{
        title:String
    }

}
</script>

<style>
.header {
  width: 100%;
  height: 44px;
  background: lightskyblue;
  position: fixed;
  top: 0;
  left: 0;
}
.title {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.left {
  position: absolute;
  left: 0;
  top: 0;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right {
  position: absolute;
  right: 0;
  top: 0;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>