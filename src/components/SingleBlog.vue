<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
    <p>作者:{{ blog.author }}</p>
    <p>分类：</p>
    <ul>
      <li v-for="category in blog.categories" :key="category">
        {{ category }}
      </li>
    </ul>
    <button v-on:click.prevent="deleteArticle()">删除</button>
    <router-link :to="{path:'/edit/'+id}">编辑</router-link>
  </div>
</template>

<script>
export default {
  name: "single-blog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  methods: {
    deleteArticle() {
      this.$http
        .delete(
          "https://blog-demo-f3f0e-default-rtdb.asia-southeast1.firebasedatabase.app/posts/" +
            this.id +
            ".json"
        )
        .then(() => {
          this.$router.push({ path: "/" });
        });
    },
  },
  created() {
    this.$http
      .get(
        "https://blog-demo-f3f0e-default-rtdb.asia-southeast1.firebasedatabase.app/posts/" +
          this.id +
          ".json"
      )
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        this.blog = data;
      });
  },
};
</script>

<style>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
}
</style>
