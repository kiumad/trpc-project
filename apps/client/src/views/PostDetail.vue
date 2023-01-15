<template>
    <main></main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { usePostDetail } from '../Queries'
const route = useRoute()
const { data } = usePostDetail(route.params.id)
</script>

<style scoped>
</style>