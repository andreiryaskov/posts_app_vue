<template>
  <form @submit.prevent>
    <h1>Make Post Form</h1>
        <my-input
            v-focus
            v-model="post.title"
            type="text"
            placeholder="Name"/>
        <my-input
            v-model="post.body"
            type="text"
            placeholder="Description"/>

    <my-button class="button"
            @click="createPost"
    >
      Make Post
    </my-button>
  </form>
</template>

<script>
export default {
  name: 'post-form',
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: '',
      }
    }
  }
}
</script>

<style scoped>



form {
  display: flex;
  flex-direction: column;
}

</style>
