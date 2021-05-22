<template>
  <div id="show-blogs" v-theme:column="'wide'">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索" />
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <router-link v-bind:to="'blog/' + blog.id"
        ><h2 v-rainbow>{{ blog.title | toUppercase }}</h2></router-link
      >
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
export default {
  name: "show-blogs",
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  created() {
    this.$http
      .get(
        "https://blog-demo-f3f0e-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json"
      )
      .then((data) => {
        return data.json();
      })
      .then(function(data) {
        let blogsArray = [];
        let i = 1;
        for (let key in data) {
          if (i > 10) {
            break;
          }
          i++;
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        console.log(blogsArray);
        console.log(1111)
        console.log(this)
        this.blogs = blogsArray;
      });
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
  //局部自定义api
  filters: {
    toUppercase: function(value) {
      return value.toUpperCase();
    },
  },
  directives: {
    rainbow: {
      bind(el, _binding, _vnode) {
        // console.log(el)
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      },
    },
  },
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
}
#show-blogs a {
  color: #444;
  text-decoration: none;
}

input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
