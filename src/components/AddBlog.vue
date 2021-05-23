<template>
  <div class="add-blog">
    <h2>添加博客</h2>
    <div v-if="submmited"><h3>您的博客发布成功</h3>
    <button v-on:click.prevent="reset()">再写一篇</button></div>
    <form v-if="!submmited">
      <label for="title">博客标题</label>
      <input id="title" type="text" v-model="blog.title" required />
      <label for="content">博客内容</label>
      <textarea id="content" v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label for="">Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories" />
        <label for="">Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories" />
        <label for="">React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories" />
        <label for="">Angular.js</label>
        <input type="checkbox" value="Angular.js" v-model="blog.categories" />
      </div>
      <label for="">作者：</label>
      <select v-model="blog.author">
         <option disabled value="">请选择</option>
        <option v-for="author in authors" :key="author">{{
          author
        }}</option>
      </select>
      <button v-on:click.prevent="post()">添加博客</button>
    </form>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{ blog.title }}</p>
      <p>
        博客内容：
      </p>
      <p>{{ blog.content }}</p>
      <p>博客分类：</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">
          {{ category }}
        </li>
      </ul>
      <p>作者：{{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-blog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      authors: ["helishou", "baozishu", "hhy"],
      submmited: 0,
    };
  },
  methods: {
    post() {
      this.$http
      //可以请求static的本地json
        .post("https://blog-demo-f3f0e-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json", this.blog)
        .then(() => {
          // console.log(data);
          this.submmited = true;
        });
    },
    reset(){
      this.submmited = false;
      this.blog={}
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
h2 {
  text-align: left;
}
label {
  display: block;
  margin: 20px 0 10px;
  text-align: left;
}
#add-blog h3 {
  margin: 40px 0 0;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}
textarea {
  height: 200px;
}
#checkboxes label {
  display: inline-block;
  margin-top: 0;
}
#checkboxes input {
  display: inline-block;
  margin-top: 0;
  margin-right: 10px;
}
button {
  display: block;
  margin: 20px 0;
  background: rebeccapurple;
  color: white;
  border: 0;
  font-size: 18px;
  padding: 14px;
  border-radius: 4px;
  cursor: pointer;
}
#preview {
  padding: 10px 20px;
  text-align: left;
  border: 1px dotted black;
  margin: 30px 0;
}
</style>
