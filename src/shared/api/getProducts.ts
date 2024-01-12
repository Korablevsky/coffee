"use server";
import { PrismaClient, productItem } from "@prisma/client";

const getProducts = async () => {
    const prisma = new PrismaClient();
    const data: productItem[] = await prisma.productItem.findMany();

    return data;
};
export { getProducts };
