<template>
    <HeaderComponent>
        <div class="bg-white">
            <div>
                <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div
                        class="
                            flex
                            items-baseline
                            justify-between
                            border-b border-gray-200
                            pb-6
                        "
                    >
                        <h1
                            class="
                                text-4xl
                                font-bold
                                tracking-tight
                                text-gray-900
                            "
                        >
                            Blogs
                        </h1>

                        <div class="flex items-center">
                            <input
                                v-model="searchValue"
                                type="text"
                                placeholder="Search in blogs"
                            />
                        </div>
                    </div>

                    <section
                        aria-labelledby="products-heading"
                        class="pt-6 pb-24"
                    >
                        <h2 id="products-heading" class="sr-only">Products</h2>

                        <div
                            class="
                                grid grid-cols-1
                                gap-x-8 gap-y-10
                                lg:grid-cols-4
                            "
                        >
                            <!-- Product grid -->
                            <div class="lg:col-span-5">
                                <div class="bg-white">
                                    <div
                                        @scroll="onScroll"
                                        v-if="posts.length > 0"
                                        class="
                                            mx-auto
                                            max-w-2xl
                                            py-16
                                            px-4
                                            sm:py-24 sm:px-6
                                            lg:max-w-7xl lg:px-8
                                            h-screen
                                            overflow-auto
                                        "
                                    >
                                        <h2 class="sr-only">Products</h2>

                                        <div
                                            class="
                                                grid grid-cols-1
                                                gap-y-10 gap-x-6
                                                sm:grid-cols-2
                                                lg:grid-cols-3
                                                xl:grid-cols-4 xl:gap-x-8
                                            "
                                        >
                                            <router-link
                                                v-for="product in filtered_posts()"
                                                :key="product.id"
                                                :to="'/detail/' + product.id"
                                                class="group"
                                            >
                                                <div
                                                    class="
                                                        aspect-w-1 aspect-h-1
                                                        w-full
                                                        overflow-hidden
                                                        rounded-lg
                                                        bg-gray-200
                                                    "
                                                >
                                                    <img
                                                        :src="
                                                            'https://picsum.photos/200?random=' +
                                                            product.id
                                                        "
                                                        class="
                                                            h-full
                                                            w-full
                                                            object-cover
                                                            object-center
                                                            group-hover:opacity-75
                                                        "
                                                    />
                                                </div>
                                                <h3
                                                    class="
                                                        mt-4
                                                        text-sm text-gray-700
                                                    "
                                                >
                                                    {{ product.title }}
                                                </h3>
                                                <p>
                                                    {{
                                                        product.text
                                                            .split('')
                                                            .slice(0, 35)
                                                            .join('')
                                                    }}...
                                                </p>
                                                <span
                                                    class="
                                                        mt-1
                                                        text-lg
                                                        font-medium
                                                        text-gray-900
                                                    "
                                                >
                                                    {{
                                                        product.updatedAt.split(
                                                            'T'
                                                        )[0]
                                                    }}
                                                </span>
                                            </router-link>
                                        </div>
                                    </div>
                                    <div v-else class="lds-roller">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    </HeaderComponent>

    <!-- <button @click="fetchNextPage">fetch</button> -->
</template>

<script setup lang="ts">
// import { getPosts } from '../Queries'
import { useInfiniteQuery } from '@tanstack/vue-query'
import { ref, watch, onMounted } from 'vue'
import HeaderComponent from '../Components/HeaderComponent.vue'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import {
    ChevronDownIcon,
    FunnelIcon,
    MinusIcon,
    PlusIcon,
    Squares2X2Icon,
} from '@heroicons/vue/20/solid'
import { createTRPCProxyClient } from '@trpc/client'
import { httpBatchLink } from '@trpc/client/links/httpBatchLink'
import type { AppRouter } from '../../../api-server/server'
import { useQuery, useQueryClient, useMutation } from '@tanstack/vue-query'
const url = import.meta.env.VITE_TRPC_URL

const client = createTRPCProxyClient<AppRouter>({
    links: [httpBatchLink({ url })],
})

const tt: any = ref(null)

const searchValue: any = ref('')

const { data, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['getPosts'],
    // refetchOnWindowFocus: false,
    queryFn: async () => {
        const d = await client.getPost.query({ cursor: tt.value || 0 })
        return d
    },
    getNextPageParam: (lastPage) =>
        (tt.value =
            lastPage.nextCursor ||
            lastPage?.items[lastPage?.items.length - 1]?.id),
})

const posts = ref([])

watch(data, (d) => {
    posts.value = posts.value.concat(d?.pages[d.pages.length - 1]?.items)
    filtered_posts()
})

const filtered_posts = () => {
    return posts.value.filter((a: any) => a.title.includes(searchValue.value))
}

const onScroll = ({ target: { scrollTop, clientHeight, scrollHeight } }) => {
    if (scrollTop + clientHeight >= scrollHeight) {
        fetchNextPage()
    }
}
</script>

<style scoped>
.lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}
.lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
}
.lds-roller div:after {
    content: ' ';
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgb(92, 92, 92);
    margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
}
.lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
}
.lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
}
.lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
}
.lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
}
.lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
}
.lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
}
.lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
}
@keyframes lds-roller {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>