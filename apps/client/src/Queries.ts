import { createTRPCProxyClient } from '@trpc/client'
import { httpBatchLink } from '@trpc/client/links/httpBatchLink'
import type { AppRouter } from 'api-server/server'
import { useQuery, useQueryClient } from '@tanstack/vue-query'
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

export const addPost = () => client.addPost.query();


export const getPosts = () => {
    const { data } = useQuery(['getPosts'], async () => {
        return client.getPost.query()
    })
    return { data }
}