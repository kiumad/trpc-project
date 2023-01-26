<template>
    <HeaderComponent>
    <div class="overflow-hidden bg-white shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          
            <h3 class="text-lg font-medium leading-6 text-gray-900">
                User information
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details
            </p>
        </div>
        <div class="border-t border-gray-200">
            <dl>
                <div
                    class="
                        bg-gray-50
                        px-4
                        py-5
                        sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
                    "
                >
                    <dt class="text-sm font-medium text-gray-500">Full name</dt>
                    <dd
                        class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
                    >
                        {{data?.fullName || "empty"}}
                    </dd>
                </div>
                <div
                    class="
                        bg-white
                        px-4
                        py-5
                        sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
                    "
                >
                    <dt class="text-sm font-medium text-gray-500">
                        username
                    </dt>
                    <dd
                        class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
                    >
                    {{data?.username || "empty"}}
                    </dd>
                </div>
            </dl>
        </div>
    </div>
    <router-link
                                :to="{name : 'addPost'}"
                                class="
                                    flex
                                    items-center
                                    justify-center
                                    rounded-md
                                    border border-transparent
                                    bg-indigo-600
                                    px-5
                                    py-2
                                    text-base
                                    font-medium
                                    text-white
                                    shadow-sm
                                    hover:bg-indigo-700
                                    mr-5
                                "
                                >Create post</router-link
                            >

                            <!-- <button @click=""></button> -->
</HeaderComponent>

</template>

<script setup>
import HeaderComponent from '../Components/HeaderComponent.vue'
import { PaperClipIcon } from '@heroicons/vue/20/solid'
import {ref} from 'vue'
import {userData} from '../Queries'
// import {router} from 'vue-router'


// const test = () => {
//     route.push
// }

const username = ref(localStorage.getItem("userid"))

const {data} = userData(username.value)
// console.log(data)
    
</script>

<style lang="scss" scoped>
</style>