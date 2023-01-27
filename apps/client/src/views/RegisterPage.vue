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
                    Register
                </h2>
            </div>
            <div class="-space-y-px rounded-md shadow-sm">
                <div>
                    <label for="fullname" class="sr-only">Full name</label>
                    <input
                        id="fullname"
                        name="fullname"
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
                        placeholder="full name"
                        v-model="userData.fullName"
                    />
                </div>
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
                    @click="register"
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
                                group-hover:text-indigo-200
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
                <router-link to="/login">
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
                            focus:ring-gray-500
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
                                    text-gray-500
                                    group-hover:text-gray-400
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
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRegister } from '../Queries'
import { reactive } from 'vue'
import YektanetLogo from '../Components/YektanetLogo.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const userData = reactive({
    username: '',
    fullName: '',
    password: '',
    image: 'dsfdsf',
})
const register = () => {
    useRegister(userData)
    localStorage.setItem('loggenin', true)
    localStorage.setItem('userid', userData.username)
    router.push({ path: '/profile', replace: true })
}
</script>

<style scoped>
.image-wrapper {
    width: 200px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: gray;
}
</style>
