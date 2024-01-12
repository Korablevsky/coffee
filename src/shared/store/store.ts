import { productItem } from '@prisma/client'
import { create } from 'zustand'

export type typeFiltedProducts = {
	initProducts: productItem[]
	filteredProducts: productItem[]

	setFilteredProducts: (products: productItem[]) => void
	setInitProducts: (products: productItem[]) => void
}

export const useFilteredProducts = create<typeFiltedProducts>(set => ({
	filteredProducts: [],
	setFilteredProducts: products => set({ filteredProducts: products }),

	initProducts: [],
	setInitProducts: products => set({ initProducts: products }),
}))
