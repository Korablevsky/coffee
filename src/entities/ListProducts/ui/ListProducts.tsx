import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/shared/ui/card'
import { productItem } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

export function ListProducts({
	data,
	type,
	className,
}: {
	data: productItem[]
	type: 'country' | 'no country'
	className: string
}) {
	const cardsElements = data.map(
		({ id, title, price, src, alt, slug, country }) => (
			<Link key={id} href={`/ourCoffee/${slug}`}>
				<Card
					className={`${className} drop-shadow-2xl max-w-[400px]  rounded-lg bg-[#fff9] bg-opacity-50 hover:bg-slate-200 transition duration-300 ease-in-out `}
				>
					<CardHeader >
						<Image
							className='block mx-auto object-cover  h-[130px] transition duration-300 ease-in-out transform hover:scale-105  max-[420px]:w-[300px] max-[420px]:h-[200px]'
							src={`/${src}`}
							alt={alt}
							width={150}
							height={130}
						/>
					</CardHeader>
					<CardTitle>
						<p className='min-[800px]:text-[14px] text-[12px] text-center'>{title}</p>
					</CardTitle>
					{type === 'country' && (
						<CardContent className='pb-0'>
							<p className='text-right text-[14px] mt-[14px] '>{country}</p>
						</CardContent>
					)}
					<CardFooter className='justify-end'>
						<p className=' font-bold mt-[10px] '>{price}$</p>
					</CardFooter>
				</Card>
			</Link>
		)
	)
	return (
		<div className='mt-[40px] grid grid-cols-3 gap-[60px] max-[800px]:gap-[40px] max-[600px]:grid-cols-2  max-[420px]:grid-cols-1 '>
			{cardsElements}
		</div>
	)
}
