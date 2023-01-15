import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type PostPayload = Omit<Prisma.PostGetPayload<{}>, 'id'>

export const createPost = async (post: PostPayload) => {
    await prisma.post.create({ data: post })
}


export const loadPost = async () => {
    return await prisma.post.findMany({
        orderBy: [{id: 'desc'}],
    })
}


export const postDetail = async (a : any) => {
    return await prisma.post.findUnique({
        where: {
            id: +a,
        },
    })
}
