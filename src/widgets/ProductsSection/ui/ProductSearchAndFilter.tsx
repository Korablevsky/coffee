'use client'
import { ListProducts } from '@/entities/ListProducts'
import { Filter } from '@/features/Filter'
import { Search } from '@/features/Search'
import { useFilteredProducts } from '@/shared/store/store'
import { productItem } from '@prisma/client'
import { useEffect } from 'react'

export function ProductSearchAndFilter({
	type,
	data,
	className,
}: {
	type: 'filter' | 'no filter'
	data: productItem[]
	className: string
}) {
	const { setInitProducts, filteredProducts } = useFilteredProducts()

	useEffect(() => setInitProducts(data), [])

	return (
		<section className={className}>
			{type === 'filter' && (
				<div className='flex  pt-[20px]  max-w-[890px]  max-[800px]:space-x-0 space-x-11  max-[800px]:flex-col max-[800px]:mr-auto '>
					<Search data={data} />
					<Filter classNameMobile='' type="desctop" className=''/>
				</div>
			)}

				<ListProducts
					className='max-w-[850px] pb-[15px]'
					type='country'
					data={filteredProducts.length === 0 ? data : filteredProducts}
				/>
		</section>
	)
}
