<template>
    <div>{{ $route.params.id }}</div>
    <pre>{{ data }}</pre>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { usePostDetail } from '../Queries'
const route = useRoute()
const { data } = usePostDetail(route.params.id)
console.log(data)
</script>

<style scoped>
</style>