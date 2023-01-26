<template>
    <!--
      This example requires updating your template:
  
      ```
      <html class="h-full bg-gray-100">
      <body class="h-full">
      ```
    -->
    <div class="min-h-full">
        <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="flex items-center">
                        <div class="flex-shrink-0"></div>
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">
                                <router-link
                                    v-for="item in navigation"
                                    :key="item.name"
                                    :to="item.href"
                                    :class="[
                                        item.current
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'px-3 py-2 rounded-md text-sm font-medium',
                                    ]"
                                    >{{ item.name }}</router-link
                                >
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-4 flex items-center md:ml-6">
                            <!-- Profile dropdown -->
                            <router-link
                            v-if="loggenin"
                                to="add"
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
                                >Create post</router-link>
                            <Menu
                                as="div"
                                class="relative ml-3"
                                v-if="loggenin"
                            >
                                <div>
                                    <MenuButton
                                        class="
                                            flex
                                            max-w-xs
                                            items-center
                                            rounded-full
                                            bg-gray-800
                                            text-sm
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-white
                                            focus:ring-offset-2
                                            focus:ring-offset-gray-800
                                        "
                                    >
                                        <span class="sr-only"
                                            >Open user menu</span
                                        >
                                        <img
                                            class="h-8 w-8 rounded-full"
                                            src="data:image/jpeg;base64,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"
                                            alt=""
                                        />
                                    </MenuButton>
                                </div>
                                <transition
                                    enter-active-class="transition ease-out duration-100"
                                    enter-from-class="transform opacity-0 scale-95"
                                    enter-to-class="transform opacity-100 scale-100"
                                    leave-active-class="transition ease-in duration-75"
                                    leave-from-class="transform opacity-100 scale-100"
                                    leave-to-class="transform opacity-0 scale-95"
                                >
                                    <MenuItems
                                        class="
                                            absolute
                                            right-0
                                            z-10
                                            mt-2
                                            w-48
                                            origin-top-right
                                            rounded-md
                                            bg-white
                                            py-1
                                            shadow-lg
                                            ring-1 ring-black ring-opacity-5
                                            focus:outline-none
                                        "
                                    >
                                        <MenuItem
                                            v-for="item in userNavigation"
                                            :key="item.name"
                                            v-slot="{ active }"
                                        >
                                            <router-link
                                                :to="item.href"
                                                v-if="item.link"
                                                :class="[
                                                    active ? 'bg-gray-100' : '',
                                                    'block px-4 py-2 text-sm text-gray-700',
                                                ]"
                                                >{{ item.name }}</router-link
                                            >
                                            <span
                                                v-else
                                                @click="logout"
                                                :class="[
                                                    active ? 'bg-gray-100' : '',
                                                    'block px-4 py-2 text-sm text-gray-700 cursor-pointer',
                                                ]"
                                                >{{ item.name }}</span
                                            >
                                        </MenuItem>
                                    </MenuItems>
                                </transition>
                            </Menu>
                           
                            <router-link
                            v-if="!loggenin"
                                to="/login"
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
                                "
                                >login / register</router-link
                            >
                        </div>
                    </div>
                    <div class="-mr-2 flex md:hidden">
                        <!-- Mobile menu button -->
                        <DisclosureButton
                            class="
                                inline-flex
                                items-center
                                justify-center
                                rounded-md
                                bg-gray-800
                                p-2
                                text-gray-400
                                hover:bg-gray-700 hover:text-white
                                focus:outline-none
                                focus:ring-2
                                focus:ring-white
                                focus:ring-offset-2
                                focus:ring-offset-gray-800
                            "
                        >
                            <span class="sr-only">Open main menu</span>
                            <Bars3Icon
                                v-if="!open"
                                class="block h-6 w-6"
                                aria-hidden="true"
                            />
                            <XMarkIcon
                                v-else
                                class="block h-6 w-6"
                                aria-hidden="true"
                            />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            <DisclosurePanel class="md:hidden">
                <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                    <DisclosureButton
                        v-for="item in navigation"
                        :key="item.name"
                        as="a"
                        :href="item.href"
                        :class="[
                            item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block px-3 py-2 rounded-md text-base font-medium',
                        ]"
                        :aria-current="item.current ? 'page' : undefined"
                        >{{ item.name }}</DisclosureButton
                    >
                </div>
                <div class="border-t border-gray-700 pt-4 pb-3">
                    <div class="flex items-center px-5">
                        <div class="flex-shrink-0">
                            <img
                                class="h-10 w-10 rounded-full"
                                :src="user.imageUrl"
                                alt=""
                            />
                        </div>
                        <div class="ml-3">
                            <div
                                class="
                                    text-base
                                    font-medium
                                    leading-none
                                    text-white
                                "
                            >
                                {{ user.name }}
                            </div>
                            <div
                                class="
                                    text-sm
                                    font-medium
                                    leading-none
                                    text-gray-400
                                "
                            >
                                {{ user.email }}
                            </div>
                        </div>
                        <button
                            type="button"
                            class="
                                ml-auto
                                flex-shrink-0
                                rounded-full
                                bg-gray-800
                                p-1
                                text-gray-400
                                hover:text-white
                                focus:outline-none
                                focus:ring-2
                                focus:ring-white
                                focus:ring-offset-2
                                focus:ring-offset-gray-800
                            "
                        >
                            <span class="sr-only">View notifications</span>
                            <BellIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div class="mt-3 space-y-1 px-2">
                        <DisclosureButton
                            v-for="item in userNavigation"
                            :key="item.name"
                            as="a"
                            :href="item.href"
                            class="
                                block
                                rounded-md
                                px-3
                                py-2
                                text-base
                                font-medium
                                text-gray-400
                                hover:bg-gray-700 hover:text-white
                            "
                            >{{ item.name }}</DisclosureButton
                        >
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
        <main>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <slot></slot>
            </div>
        </main>
    </div>
</template>
  
  <script setup>
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

let loggenin = ref(localStorage.getItem('loggenin') === 'true')

console.log(loggenin.value)

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'Profile', href: '/profile', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '/profile', link: true },
    { name: 'Sign out', href: '/signout' },
]

const logout = () => {
    localStorage.setItem('loggenin', false)
    router.push({ path: '/' })
    loggenin.value = false
}
</script>