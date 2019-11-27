<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            v-for="(item,index) in titles"
            :class="['mui-control-item',index == 0 ? 'mui-active':'']"
            :key="index"
            @click="click(item)"
          >{{item}}</a>
        </div>
      </div>
    </div>
    <router-link
      tag="div"
      :to="'photolist/'+item.docid+'@'+n"
      class="mui-card"
      v-for="(item,index) in looks"
      :key="index"
    >
      <!--页眉，放置标题-->
      <div class="mui-card-header mui-card-media">
        <img :src="item.picInfo[0].url" />
        <div class="mui-media-body">
          {{item.source}}
          <p>{{item.ptime}}</p>
        </div>
      </div>
      <!--内容区-->
      <div class="mui-card-content mui-card-media">
        <img alt="数据没了" v-lazy.container="'#'" />
      </div>
      <!--页脚，放置补充信息或支持的操作-->
      <div class="mui-card-footer">{{item.digest}}</div>
    </router-link>
  </div>
</template>

<script>
import mui from "../../../lib/mui/js/mui.min.js";
import { log } from "util";

export default {
  data() {
    return {
      NewList: {},
      titles: [
        { title: "biaoti1", source: "laiyuan1", ptime: "2018.5.5", url: "#" },
        { title: "biaoti1", source: "laiyuan1", ptime: "2018.5.5", url: "#" },
        { title: "biaoti1", source: "laiyuan1", ptime: "2018.5.5", url: "#" },
        { title: "biaoti1", source: "laiyuan1", ptime: "2018.5.5", url: "#" },
        { title: "biaoti1", source: "laiyuan1", ptime: "2018.5.5", url: "#" },
        { title: "biaoti1", source: "laiyuan1", ptime: "2018.5.5", url: "#" },
        { title: "biaoti1", source: "laiyuan1", ptime: "2018.5.5", url: "#" },
        { title: "biaoti1", source: "laiyuan1", ptime: "2018.5.5", url: "#" },
        { title: "biaoti1", source: "laiyuan1", ptime: "2018.5.5", url: "#" },
        { title: "biaoti1", source: "laiyuan1", ptime: "2018.5.5", url: "#" },
        { title: "biaoti1", source: "laiyuan1", ptime: "2018.5.5", url: "#" },
        { title: "biaoti1", source: "laiyuan1", ptime: "2018.5.5", url: "#" },
        { title: "biaoti1", source: "laiyuan1", ptime: "2018.5.5", url: "#" }
      ],
      looks: [],
      n: ""
    };
  },
  methods: {
    getnews() {
      this.$http.get("https://www.apiopen.top/journalismApi").then(result => {
        this.NewList = result.body.data;
        for (key in this.NewList) {
          this.titles.push(key);
        }
        this.click(this.titles[0]);
        // console.log(this.titles[0]);
        console.log(this.NewList);
      });
    },
    click(item) {
      this.n = item;
      this.looks = [];
      this.NewList[item].forEach(element => {
        element.picInfo[0] ? this.looks.push(element) : null;
      });
    }
  },
  created() {
    // this.getnews();
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.005
    });
  }
};
</script>

<style scoped>
* {
  touch-action: pan-y;
}
.mui-card-content img {
  width: 100%;
  vertical-align: middle;
}
image[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>


