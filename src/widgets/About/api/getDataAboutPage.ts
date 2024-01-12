"use server";
import { PrismaClient, productItem } from "@prisma/client";

const getBestProduct = async () => {
    const prisma = new PrismaClient();
    const data: productItem[] = await prisma.productItem.findMany();

    return data;
};
export { getBestProduct };
