<template>
    <main>
        <h1 class="bold text-5xl">title : {{ data.title }}</h1>
        <p class="text-xl">text : {{ data.text }}</p>
        <p class="text-xl">createdAt : {{ data.createdAt }}</p>
        <p class="text-xl">updatedAt : {{ data.updatedAt }}</p>
    </main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { usePostDetail } from '../Queries'
const route = useRoute()
const { data } = usePostDetail(route.params.id)
</script>

<style scoped>

</style>