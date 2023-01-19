import { createTRPCProxyClient } from '@trpc/client'
import { httpBatchLink } from '@trpc/client/links/httpBatchLink'
import type { AppRouter } from 'api-server/server'
import {
    useQuery,
    useQueryClient,
    useMutation,
} from '@tanstack/vue-query'
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

export const addPost = (data: object) => client.addPost.query(data)

export const getPosts = (input : object) => {
    const { data, isFetched } = useQuery({
        queryKey: ['getPosts'],
        queryFn: () => {
            return client.getPost.query(input)
        },
    })
    return { data, isFetched }
}

export const checkUser = (d: any) => {
    const mutation = useMutation({
        mutationFn: (d) => {
            return client.checkUser.query(d)
        },
    })
   
    return { mutation }
}

export const usePostDetail = (id: any) => {
    const { data } = useQuery(['postDetail'], async () => {
        return client.getPostDetail.query(id)
    })
    return { data }
}

export const useRegister = (data: object) => client.addUser.query(data)
