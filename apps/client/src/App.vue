<template>
    <h1>test</h1>
    <div class="container mx-auto grid grid-cols-4 gap-4">
        <span
            v-for="(item, index) in data"
            :key="index"
            class="p-10 bg-orange-100"
        >
            <span>title : {{ item.title }}</span>
            <span>text : {{ item.text }}</span>
            <span>cerate : {{ item.createdAt }}</span>
            <span>last updated : {{ item.updatedAt }}</span>
        </span>
    </div>

    <button @click="addPost">create post</button>
</template>

<script setup>
import { getPosts, addPost } from './Queries'
const { data } = getPosts()
</script>

<style lang="scss" scoped>
</style>