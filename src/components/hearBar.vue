<template>
  <div>
    <nut-navbar
      @on-click-back="back"
      @on-click-title="title"
      @on-click-more="more"
      :leftShow="true"
      :rightShow="false"
    ><dr/>cc</nut-navbar>
    
  </div>
</template>

<script>
export default {
     methods: {
        back(){
            this.$router.go(-1);
        },
        title(){
            alert('header头部， 点击title')
        },
        more(){
            alert('header头部， 点击更多')
        }
    }
};
</script>

<style scoped>

</style>