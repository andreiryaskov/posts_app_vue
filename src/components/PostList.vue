<template>
  <div v-if="posts.length > 0">
    <h3>Posts List</h3>

    <transition-group name="post-list" class="post-list">
      <post-item

          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post)"
      />
    </transition-group>

  </div>
  <h2 v-else style="color: red">
    Posts List is empty
  </h2>

</template>

<script>
import PostItem from "@/components/PostItem.vue";
import MyInput from "@/components/UI/MyInput.vue";

export default {
  name: 'post-list',
  components: {
    MyInput,
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.post-list-move {
  transition: transform 0.8s ease;
}


</style>
