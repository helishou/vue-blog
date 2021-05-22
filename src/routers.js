import ShowBlogs from "./components/ShowBlogs.vue";
import AddBlog from "./components/AddBlog.vue";
import SingleBlog from "./components/SingleBlog.vue";

export default [
  { path: "/", component: ShowBlogs },
  { path: "/blog/:id", component: SingleBlog },
  { path: "/add", component: AddBlog },
];
