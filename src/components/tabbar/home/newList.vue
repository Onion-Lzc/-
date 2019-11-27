<template>
  <div>
    <div class="weui-panel__bd">
      <router-link
        v-for="item in list"
        to="/member/newsinfo"
        class="weui-media-box weui-media-box_appmsg"
        :key="item.title"
      >
        <div class="weui-media-box__hd">
          <img class="weui-media-box__thumb" :src="item.url" alt />
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">{{item.title}}</h4>
          <p class="weui-media-box__desc">
            <span>来源:{{item.source}}</span>
            <span>{{item.ptime}}</span>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {title:"biaoti1",source:"laiyuan1",ptime:"2018.5.5",url:'#'},
        {title:"biaoti1",source:"laiyuan1",ptime:"2018.5.5",url:'#'},
        {title:"biaoti1",source:"laiyuan1",ptime:"2018.5.5",url:'#'},
        {title:"biaoti1",source:"laiyuan1",ptime:"2018.5.5",url:'#'},
        {title:"biaoti1",source:"laiyuan1",ptime:"2018.5.5",url:'#'},
        {title:"biaoti1",source:"laiyuan1",ptime:"2018.5.5",url:'#'},
        {title:"biaoti1",source:"laiyuan1",ptime:"2018.5.5",url:'#'},
        {title:"biaoti1",source:"laiyuan1",ptime:"2018.5.5",url:'#'},
        {title:"biaoti1",source:"laiyuan1",ptime:"2018.5.5",url:'#'},
        {title:"biaoti1",source:"laiyuan1",ptime:"2018.5.5",url:'#'},
        {title:"biaoti1",source:"laiyuan1",ptime:"2018.5.5",url:'#'},
        {title:"biaoti1",source:"laiyuan1",ptime:"2018.5.5",url:'#'},
        {title:"biaoti1",source:"laiyuan1",ptime:"2018.5.5",url:'#'},
      ]
    };
  },
  methods: {
    getLunbotu() {
      this.$http.get("https://www.apiopen.top/journalismApi").then(result => {
        console.log(result.body.data);
        result.body.data.sports.forEach(element => {
          element.picInfo[0] ? this.list.push(element) : null;
          // this.list.push(element);
        });
      });
      // console.log(this.list);
    }
  },
  created() {
    // this.getLunbotu();
  }
};
</script>


<style scoped>
.weui-media-box__desc {
  display: flex;
  justify-content: space-between;
}
</style>

    