'use client'

import { useFilteredProducts } from '@/shared/store/store'
import { Input } from '@/shared/ui/input'
import { productItem } from '@prisma/client'
import { useState } from 'react'

export function Search({ data }: { data: productItem[] }) {
	const { filteredProducts, setFilteredProducts } = useFilteredProducts()
	const [value, setValue] = useState('')

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const targetValue = e.target.value
		setValue(targetValue)

		const searchResults = data.filter(product =>
			product.title.toLowerCase().includes(targetValue.toLowerCase())
		)

		setFilteredProducts(searchResults)
	}

	return (
		<form className=' flex items-center justify-center max-[800px]:justify-start'>
			<h3 className='mr-[20px] w-[90px] text-[14px]'>Lookiing for</h3>
			<Input
				placeholder='start typing here...'
				className='  max-w-[180px] max-h-[30px] max-[800px]:w-full placeholder:text-center placeholder:text-[#00000080]'
				onChange={handleInputChange}
				value={value}
			/>
		</form>
	)
}
