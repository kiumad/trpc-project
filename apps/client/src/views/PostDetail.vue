<template>
    <HeaderComponent>
        <div class="max-w-2xl px-6 py-16 mx-auto space-y-12">
            <article class="space-y-8 dark:bg-white-800 dark:text-black-50">
                <div class="space-y-6">
                    <h1
                        class="text-4xl font-bold md:tracking-tight md:text-5xl"
                    >
                        {{ data?.post?.title }}
                    </h1>
                    <div
                        class="
                            flex flex-col
                            items-start
                            justify-between
                            w-full
                            md:flex-row md:items-center
                            dark:text-black-900
                        "
                    >
                        <div class="flex items-center md:space-x-2">
                            <img
                                src="data:image/jpeg;base64,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"
                                alt=""
                                class="
                                    w-4
                                    h-4
                                    border
                                    rounded-full
                                    dark:bg-gray-500 dark:border-gray-700
                                "
                            />
                            <p class="text-sm">
                                {{ data?.post?.username }} •
                                {{ data?.post?.createdAt }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="dark:text-black-100">
                    <p>{{ data?.post?.text }}</p>
                </div>
            </article>
            <div>
                <div
                    class="
                        space-y-2
                        border-t border-dashed
                        dark:border-gray-400
                        pt-10
                    "
                >
                    <h4 class="text-lg font-semibold">Comments</h4>
                    <div>
                        <div v-if="loggenin">
                            <input
                                v-model="commentData.text"
                                type="text"
                                placeholder="Type here ..."
                                class="p-5"
                            />
                            <button
                                @click="addComent"
                                class="bg-black text-white p-5"
                            >
                                Comment
                            </button>
                        </div>
                        <div v-else>
                            Please
                            <router-link
                                to="/login"
                                style="color: blue; font-weight: bold"
                                >login</router-link
                            >
                            to drop comment !
                        </div>
                        <ul
                            class="ml-4 space-y-1 list-disc pt-5"
                            v-if="data?.comments?.length > 0"
                        >
                            <li
                                v-for="comment in data?.comments"
                                :key="comment.id"
                            >
                                <small>{{ comment.username }}</small> <br />
                                <span>{{ comment.text }}</span>
                            </li>
                        </ul>
                        <span v-else>No comments here </span>
                    </div>
                </div>
            </div>
        </div>
    </HeaderComponent>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { usePostDetail } from '../Queries'
import HeaderComponent from '../Components/HeaderComponent.vue'

import { useAddComment } from '../Queries'
import { reactive, ref, watch } from 'vue'
import YektanetLogo from '../Components/YektanetLogo.vue'

const route = useRoute()
const { data } = usePostDetail(route.params.id)
const username = ref(localStorage.getItem('userid'))
let loggenin = ref(localStorage.getItem('loggenin') === 'true')

let comments = ref()

watch(data, (d) => {
    comments.value = d?.comments
})

const commentData = reactive({
    username: username,
    text: '',
    postId: +route.params.id,
})

const addComent = () => {
    comments.value = comments.value.concat(commentData)
    useAddComment(commentData)
}
</script>

<style scoped>
</style>