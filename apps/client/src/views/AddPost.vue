<template>
    <div
        class="
            flex
            min-h-full
            items-center
            justify-center
            py-12
            px-4
            sm:px-6
            lg:px-8
        "
    >
        <div class="w-full max-w-md space-y-8">
            <h1 class="mt-6 text-center text-4xl tracking-tight text-gray-900">
                Create new post as <b>{{ username }}</b>
            </h1>
            <div>
                <input
                    type="text"
                    v-model="newPostData.title"
                    placeholder="title"
                    class="
                        relative
                        block
                        w-full
                        appearance-none
                        rounded-none rounded-t-md
                        border border-gray-300
                        px-3
                        py-2
                        text-gray-900
                        placeholder-gray-500
                        focus:z-10
                        focus:border-indigo-500
                        focus:outline-none
                        focus:ring-indigo-500
                        sm:text-xl
                    "
                />
                <textarea
                    v-model="newPostData.text"
                    placeholder="text"
                    class="
                        relative
                        block
                        w-full
                        h-64
                        mt-5
                        appearance-none
                        rounded-none rounded-t-md
                        border border-gray-300
                        px-3
                        py-2
                        text-gray-900
                        placeholder-gray-500
                        focus:z-10
                        focus:border-indigo-500
                        focus:outline-none
                        focus:ring-indigo-500
                        sm:text-xl
                    "
                ></textarea>
            </div>
            <button
                @click="addPost(newPostData)"
                class="
                    group
                    relative
                    flex
                    w-full
                    justify-center
                    rounded-md
                    border border-transparent
                    bg-indigo-600
                    py-2
                    px-4
                    text-md
                    font-medium
                    text-white
                    hover:bg-indigo-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-indigo-500
                    focus:ring-offset-2
                "
            >
                Create
            </button>
        </div>
    </div>
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