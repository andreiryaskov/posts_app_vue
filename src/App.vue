<template>
  <div>
    <PostForm
        @create="createPost"
    />
    <PostList
        v-bind:posts="posts"
    />
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";

export default {
  components: {
    PostForm,
    PostList
  },
  data() {
    return {
      posts: [
        {id: 1, title: "JavaScript", body: "Description"},
        {id: 2, title: "Go", body: "Description"},
        {id: 3, title: "PHP", body: "Description"},
        {id: 4, title: "Python", body: "Description"},
        {id: 5, title: "Node.js", body: "Description"},
      ],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)

    },
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 15px;
}

</style>
