<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <AddBlog/> -->
    <!-- <ShowBlogs/> -->
    <BlogHeader ></BlogHeader>
    <router-view></router-view>
  </div>
</template>

<script>
// import AddBlog from "./components/AddBlog.vue";
// import ShowBlogs from "./components/ShowBlogs";
import BlogHeader from "./components/BlogHeader";

export default {
  name: "App",
  components: {
    BlogHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
