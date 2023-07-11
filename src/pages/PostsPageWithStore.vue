<template>
  <div>
    <h1>Store</h1>
    <my-input
        v-focus
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Search..."
    />
    <div class="app__btns">
      <my-button
          @click="showDialog"
      >
        Make post
      </my-button>
      <my-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          :options="sortOptions"
      >

      </my-select>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>

    <post-list
        v-if="!isPostLoading"
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
    />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
        <div class="page__wrapper">
          <div
              @click="changePage(pageNumber)"
              v-for="pageNumber in totalPages"
              :key="pageNumber"
              class="page"
              :class="{
                'current-page': page === pageNumber
              }"

          >
            {{pageNumber}}
          </div>
        </div>
  </div>
</template>

<script>

import MyButton from "@/components/UI/MyButton.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';

export default {
  components: {MyInput, MySelect, MyButton},
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',

    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts',
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },

  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',

    }),
  },
}
</script>

<style>


.app__btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  width: 40px;
  height: 40px;
  border: 3px solid darkgreen;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.current-page {
  background-color: darkgreen;
  color: white;
}

.observer {
  height: 20px;
  background-color: orange;
  margin-top: 15px;
}

</style>
