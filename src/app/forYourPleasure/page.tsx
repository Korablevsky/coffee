import { getProducts } from '@/shared/api/getProducts'
import { About, aboutPageType } from '@/widgets/About'
import { HeadImageSection } from '@/widgets/HeadImageSection'
import { ProductSearchAndFilter } from '@/widgets/ProductsSection'
import Image from 'next/image'

export default async function page() {
	const dataAboutPage: aboutPageType = {
		title: 'About our goods',
		firstText:
			'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
		secondText:
			'Afraid at highly months do things on at. Situation recommend objection do intention so questions.  As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.',
	}
	const data = await getProducts()

	return (
		<>
			<HeadImageSection
				title='For your pleasure'
				className='bg-head-pleasure'
			/>
			<div className='flex pt-[70px] max-[800px]:pt-[35px] container max-w-[780px] justify-center space-x-9 max-[700px]:space-x-0'>
				<Image
					className='max-[700px]:hidden'
					src='/IMG_page_pleasure.png'
					width={272}
					height={255}
					alt='girl'
				/>
				<About dataAboutPage={dataAboutPage} className='max-w-[346px]' />
			</div>
			<ProductSearchAndFilter
				data={data}
				type='no filter'
				className='container flex flex-col items-center mt-[50px]'
			/>
		</>
	)
}
