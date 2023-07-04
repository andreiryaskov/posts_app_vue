<template>
  <div class="post">
    <div>
      <div><strong>Name: </strong>{{ post.title }}</div>
      <div><strong>Description: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button style="margin-top: 0">
        delete
      </my-button>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }

}
</script>

<style scoped>

.post {
  margin-top: 15px;
  padding: 15px;
  border: 3px solid orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post__btns button {
    width: 50px;
    height: 20px;
    background-color: orange;
    color: white;
    border: 3px solid orangered;
    border-radius: 5px;
    align-self: flex-end;
}

</style>
