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
            <div>
                <YektanetLogo />
                <h2
                    class="
                        mt-6
                        text-center text-4xl
                        font-bold
                        tracking-tight
                        text-gray-900
                    "
                >
                    Login
                </h2>
            </div>
            <input type="hidden" name="remember" value="true" />
            <div class="-space-y-px rounded-md shadow-sm">
                <div>
                    <label for="email-address" class="sr-only">username</label>
                    <input
                        id="email-address"
                        name="username"
                        type="text"
                        required
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
                            sm:text-sm
                        "
                        placeholder="username"
                        v-model="userData.username"
                    />
                </div>
                <div>
                    <label for="password" class="sr-only">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autocomplete="current-password"
                        required
                        class="
                            relative
                            block
                            w-full
                            appearance-none
                            rounded-none rounded-b-md
                            border border-gray-300
                            px-3
                            py-2
                            text-gray-900
                            placeholder-gray-500
                            focus:z-10
                            focus:border-indigo-500
                            focus:outline-none
                            focus:ring-indigo-500
                            sm:text-sm
                        "
                        placeholder="Password"
                        v-model="userData.password"
                    />
                </div>
            </div>

            <div>
                <button
                    @click="
                        mutation.mutate({
                            username: userData.username,
                            password: userData.password,
                        })
                    "
                    class="
                        mb-3
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
                        text-sm
                        font-medium
                        text-white
                        hover:bg-indigo-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-indigo-500
                        focus:ring-offset-2
                    "
                >
                    <span
                        class="absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                        <!-- Heroicon name: mini/lock-closed -->
                        <svg
                            class="
                                h-5
                                w-5
                                text-indigo-500
                                group-hover:text-indigo-400
                            "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </span>
                    Sign in
                </button>
                <router-link to="/register">
                    <button
                        class="
                            group
                            relative
                            flex
                            w-full
                            justify-center
                            rounded-md
                            border border-transparent
                            bg-gray-600
                            py-2
                            px-4
                            text-sm
                            font-medium
                            text-white
                            hover:bg-gray-700
                            focus:outline-none
                            focus:ring-2
                            focus:ring-indigo-500
                            focus:ring-offset-2
                        "
                    >
                        <span
                            class="
                                absolute
                                inset-y-0
                                left-0
                                flex
                                items-center
                                pl-3
                            "
                        >
                            <!-- Heroicon name: mini/lock-closed -->
                            <svg
                                class="
                                    h-5
                                    w-5
                                    text-black-500
                                    group-hover:text-black-200
                                "
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                        register
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { checkUser } from '../Queries'
import { reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import YektanetLogo from '../Components/YektanetLogo.vue'

const router = useRouter()
const { mutation } = checkUser()

const userData = reactive({
    username: '',
    password: '',
})

watch(mutation.data, (a) => {
    if (a === true || a === false) {
        localStorage.setItem('loggenin', a)
        localStorage.setItem('userid', userData.username)
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
