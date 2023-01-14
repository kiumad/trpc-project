<template>
    <div>
        <span class="image-wrapper"></span>
        <input
            type="text"
            placeholder="full name"
            v-model="userData.fullName"
        />
        <input type="text" placeholder="username" v-model="userData.username" />
        <input
            type="password"
            placeholder="password"
            v-model="userData.password"
        />
        <button @click="useRegister(userData)">signup</button>
    </div>
</template>

<script setup>
import { useRegister } from '../Queries'
import { reactive } from 'vue'

const userData = reactive({
    username: '',
    fullName: '',
    password: '',
    image: 'dsfdsf',
})
</script>

<style scoped>
.image-wrapper {
    width: 200px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: gray;
}
</style>