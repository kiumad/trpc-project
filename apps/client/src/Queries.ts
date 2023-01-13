import { createTRPCProxyClient } from '@trpc/client'
import { httpBatchLink } from '@trpc/client/links/httpBatchLink'
import type { AppRouter } from 'api-server/server'
import { useQuery, useQueryClient, useInfiniteQuery } from '@tanstack/vue-query'
const url = import.meta.env.VITE_TRPC_URL

const client = createTRPCProxyClient<AppRouter>({
    links: [httpBatchLink({ url })],
})

export const useHello = () => {
    const queryClient = useQueryClient()
    const { data, refetch } = useQuery(['ali'], async () =>
        client.hello.query()
    )
    return { data, refetch }
}

export const addPost = () => client.addPost.query()

export const getPosts = () => {
    const { data , isFetched , fetchNextPage } = useInfiniteQuery({
        queryKey: ['getPosts'],
        queryFn: ({ pageParam }) => {
            const skip = (pageParam || {}).skip + 2 || 0
            console.log(pageParam)
            console.log(skip)
            return client.getPost.query(skip)
        },
        getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
        getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
    })
    return { data , isFetched , fetchNextPage}
}

export const usePostDetail = (id: any) => {
    const { data } = useQuery(['postDetail'], async () => {
        return client.getPostDetail.query(id)
    })
    return { data }
}
