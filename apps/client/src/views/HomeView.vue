<template>
    <h1>test</h1>
    <button @click="fetchNextPage">fetch</button>
    <div class="container mx-auto grid grid-cols-4 gap-4">
        <router-link
            v-for="item in data"
            :key="item.id"
            class="p-10 bg-orange-100"
            :to="'/detail/' + item.id"
        >
            <span>id : {{ item.id }}</span>
            <span>title : {{ item.title }}</span>
            <span>text : {{ item.text }}</span>
            <span>cerate : {{ item.createdAt }}</span>
            <span>last updated : {{ item.updatedAt }}</span>
        </router-link>
    </div>

    <router-link to="/add">add post</router-link>
</template>

<script setup>
import { getPosts } from '../Queries'
const { data, isFetched } = getPosts()
// console.log(data)
</script>

<style scoped>
</style>