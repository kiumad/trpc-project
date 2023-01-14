<template>
    <div>
        <input type="text" placeholder="username" v-model="userData.username" />
        <input
            type="password"
            placeholder="password"
            v-model="userData.password"
        />
        <button
            @click="
                mutation.mutate({
                    username: userData.username,
                    password: userData.password,
                })
            "
        >
            login
        </button>
    </div>
</template>

<script setup>
import { checkUser } from '../Queries'
import { reactive, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { mutation } = checkUser()

const userData = reactive({
    username: '',
    password: '',
})

watch(mutation.data, (a) => {
    if (a === true || a === false) {
        localStorage.setItem('loggenin', a)
        if (a === true) router.push({ path: '/profile', replace: true })
    }
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