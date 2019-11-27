<template>
  <div class="newsinfo-container">
    <h3 class="title">新闻标题</h3>
    <p class="subtitle">
      <span>{{id}}</span>
      <span>{{name}}</span>
    </p>

    <hr />
    <div class="content"></div>
  </div>
</template>

<script>
import { log } from "util";
export default {
  data() {
    return {
      id: this.$route.params.id,
      name: this.$route.params.name,
      urls: []
    };
  },
  methods: {
    getUrl() {
      this.$http.get("https://www.apiopen.top/journalismApi").then(result => {
        console.log(result);
        res = result.body.data[this.name];
        for (obj in res) {
          console.log(res[obj]);
        }
        // element.picInfo[0] ? this.urls.push(element) : null;

        console.log(this.urls);
      });
    }
  },
  created() {
    this.getUrl();
  }
};
</script>

<style lang="less" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
  }
}
</style>


