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
                                src="https://source.unsplash.com/75x75/?portrait"
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
                        <div>
                            <input
                                v-model="commentData.text"
                                type="text"
                                placeholder="Type here ..."
                            />
                            <button
                                @click="addComent"
                                class="bg-black text-white p-2"
                            >
                                Comment
                            </button>
                        </div>
                        <ul
                            class="ml-4 space-y-1 list-disc pt-5"
                            v-if="comments?.length > 0"
                        >
                            <li v-for="comment in comments" :key="comment.id">
                                <small>{{ comment.username }}</small> <br />
                                <span>{{ comment.text }}</span>
                            </li>
                        </ul>
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

let comments = ref()

watch(data, (d) => {
    console.log(d)
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