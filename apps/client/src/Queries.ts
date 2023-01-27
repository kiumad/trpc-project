import { createTRPCProxyClient } from '@trpc/client'
import { httpBatchLink } from '@trpc/client/links/httpBatchLink'
import type { AppRouter } from 'api-server/server'
import { useQuery, useQueryClient, useMutation } from '@tanstack/vue-query'
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

export const getPosts = (input: object) => {
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

export const userData = (d: string) => {
    const { data } = useQuery({
        queryKey: ['userData'],
        queryFn: () => {
            return client.userData.query(d)
        },
    })
    return { data }
}

export const usePostDetail = (id: any) => {
    const { data } = useQuery(['postDetail'], async () => {
        return {
            post: await client.getPostDetail.query(id),
            comments: await client.getPostComment.query(id),
        }
    })
    console.log(data)
    return { data }
}

export const useRegister = (data: object) => client.addUser.query(data)

export const useAddComment = (data: object) => client.addComment.query(data)

// export const useGetPostComments = (id: any) => {
//     const { data } = useQuery(['postComment'], async () => {
//         return client.getPostComment.query(12)
//     })
//     return { data }
// }
