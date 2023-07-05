<template>
  <div class="navbar">
    <div @click="$router.push('/')" class="home">home</div>
    <div class="navbar__btns">
      <my-button
          style="width: 100px;height: 30px; margin:0 15px"
          @click="$router.push('/posts')"

      >
        Posts
      </my-button>
      <my-button
          style="width: 100px;height: 30px;"
          @click="$router.push('/about')"
      >
        About
      </my-button>
    </div>

  </div>
</template>

<script>

import MyButton from "@/components/UI/MyButton.vue";

export default {
  name:'navbar',
  components: {MyButton},

}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: teal;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}

.home {
  cursor: pointer;
}

.navbar__btns {
  margin-left: auto;
}
</style>
