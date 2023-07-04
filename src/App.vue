<template>
  <div>
    <h1>Posts page</h1>
    <my-button
        @click="showDialog"
        style="margin-bottom: 20px;"
    >
      Make post
    </my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>

    <post-list
        v-bind:posts="posts"
        @remove="removePost"
    />
  </div>
</template>

<script>

export default {
  data() {
    return {
      posts: [
        {id: 1, title: "JavaScript", body: "Description"},
        {id: 2, title: "Go", body: "Description"},
        {id: 3, title: "PHP", body: "Description"},
        {id: 4, title: "Python", body: "Description"},
        {id: 5, title: "Node.js", body: "Description"},
      ],
      dialogVisible: false,
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;

    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showDialog() {

      this.dialogVisible = true;
    }
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
