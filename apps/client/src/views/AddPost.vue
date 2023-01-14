<template>
    <input type="text" v-model="newPostData.title" placeholder="title" />
    <textarea v-model="newPostData.text" placeholder="text"></textarea>
    <button @click="addPost(newPostData)">create post</button>
    <span>{{ a }}</span>
</template>

<script setup>
import { addPost } from '../Queries'
import { reactive } from 'vue'

const newPostData = reactive({
    title: '',
    text: '',
})
</script>

<style scoped>
</style>