import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type UsersPayload = Omit<Prisma.UsersGetPayload<{}>, 'id'>

export const register = async (post: UsersPayload) => {
    await prisma.users.create({ data: post })
}

export const checkUser = async (data: any) => {
    const d = await prisma.users.findUnique({
        where: {
            username: data.username,
        },
    })
    if (data.password === d?.password) return true
    else return false
}

// export const userData = async (a : any) => {
//     return await prisma.post.findUnique({
//         where: {
//             id: +a,
//         },
//     })
// }
