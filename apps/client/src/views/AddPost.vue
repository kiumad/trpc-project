<template>
    <input type="text" v-model="newPostData.title" placeholder="title" />
    <textarea v-model="newPostData.text" placeholder="text"></textarea>
    <button @click="addPost(newPostData)">create post</button>
    <span>{{ a }}</span>
</template>

<script setup>
import { addPost } from '../Queries'
import { reactive, ref } from 'vue'
const username = ref(localStorage.getItem('userid'))

const newPostData = reactive({
    title: '',
    text: '',
    username: username,
})
</script>

<style scoped>
</style>