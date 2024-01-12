'use client'
import { useFilteredProducts } from '@/shared/store/store'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'
import { SheetClose } from '@/shared/ui/sheet'
import { SlidersHorizontal } from 'lucide-react'

export function Filter({
	className,
	classNameMobile,
	type,
}: {
	className: string
	classNameMobile: string
	type: 'mobile' | 'desctop'
}) {
	const { initProducts, setFilteredProducts } = useFilteredProducts()

	const setCountry = (country: string) => {
		setFilteredProducts(initProducts.filter(item => item.country === country))
	}

	return (
		<>
			{type === 'desctop' && (
				<div className={`flex items-center justify-center gap-3 ${className}`}>
					<h3 className='text-[14px] min-[800px]:min-w-[60px] max-[800px]:hidden'>
						Or filter
					</h3>
					<div
						onClick={() => setCountry('Brazil')}
						className='bg-transparent text-black shadow-xl hover:bg-gray-300 cursor-pointer max-[800px]:hidden rounded-sm px-3 py-1'
					>
						Brazil
					</div>
					<div
						onClick={() => setCountry('Kenya')}
						className='cursor-pointer bg-transparent text-black shadow-xl hover:bg-gray-300 max-[800px]:hidden rounded-sm px-3 py-1'
					>
						Kenya
					</div>
					<div
						onClick={() => setCountry('Columbia')}
						className='bg-transparent cursor-pointer text-black shadow-xl hover:bg-gray-300 max-[800px]:hidden rounded-sm px-3 py-1'
					>
						Columbia
					</div>
					<div
						className='bg-transparent cursor-pointer text-black shadow-xl hover:bg-gray-300 max-[800px]:hidden rounded-sm px-3 py-1'
						onClick={() => setFilteredProducts(initProducts)}
					>
						Reset
					</div>
				</div>
			)}

			{type === 'mobile' && (
				<div className='min-[801px]:hidden '>
					<Popover>
						<PopoverTrigger className={`${classNameMobile}`}>
							<SlidersHorizontal
								size={24}
								strokeWidth={1.75}
								className='mr-[5px]'
							/>{' '}
							Filter
						</PopoverTrigger>
						<PopoverContent className='flex flex-col bg-white bg-opacity-30  w-full'>
							<span className='mx-auto'>Filtered</span>
							<SheetClose>
								<div
									onClick={() => setCountry('Brazil')}
									className='cursor-pointer mt-[15px] bg-orange-100 text-black shadow-xl hover:bg-gray-300 h-6 px-8 py-1  rounded-sm flex items-center justify-center'
								>
									Brazil
								</div>
							</SheetClose>
							<SheetClose>
								<div
									onClick={() => setCountry('Kenya')}
									className='mt-[5px] bg-orange-100 text-black shadow-xl hover:bg-gray-300 h-6 px-8 py-1  rounded-sm flex items-center justify-center'
								>
									Kenya
								</div>
							</SheetClose>
							<SheetClose className=''>
								<div
									onClick={() => setCountry('Columbia')}
									className='mt-[5px] bg-orange-100 text-black shadow-xl  hover:bg-gray-300 h-6 px-5 py-1  rounded-sm flex items-center justify-center'
								>
									Columbia
								</div>
							</SheetClose>
							<SheetClose>
								<div
									className='mt-[5px] bg-orange-100 text-black shadow-xl  hover:bg-gray-300 h-6 px-5 py-1  rounded-sm flex items-center justify-center'
									onClick={() => setFilteredProducts(initProducts)}
								>
									Reset
								</div>
							</SheetClose>
						</PopoverContent>
					</Popover>
				</div>
			)}
		</>
	)
}
