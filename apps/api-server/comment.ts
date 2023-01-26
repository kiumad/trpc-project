import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type CommentPayload = Omit<Prisma.CommentGetPayload<{}>, 'id'>

export const addComment = async (comment: CommentPayload) => {
    await prisma.comment.create({ data: comment })
}

export const getPostComment = async (a: any) => {
    return await prisma.comment.findMany({
        where: {
            postId: +a,
        },
    })
}
