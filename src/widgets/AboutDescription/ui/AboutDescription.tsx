import AboutTitle from '@/shared/ui/aboutTitle'
import { productItem } from '@prisma/client'

export function AboutDescription({
	className,
	dataProduct,
}: {
	dataProduct: productItem
	className:string
}) {
	const { price, country, description } = dataProduct
	return (
		<div className={`flex flex-col items-center ${className}`}>
			<AboutTitle title='About it' />
			<div className=' flex flex-col max-w-[420px]'>
				<h3 className='pt-[25px] text-[14px] font-bold'>
					Country: <span className='font-normal'>{country}</span>
				</h3>
				<h3 className='pt-[16px] text-[14px] font-bold'>
					Description:
					<span className='font-normal'> {description}</span>
				</h3>
				<h3 className='pt-[25px] text-[14px] font-bold'>
					Price:{' '}
					<span className='font-normal text-[24px] pl-[5px]'> {price}$</span>
				</h3>
			</div>
		</div>
	)
}
