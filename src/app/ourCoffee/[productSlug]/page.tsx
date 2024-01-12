import { getProduct } from '@/shared/api/getProduct'
import { getProducts } from '@/shared/api/getProducts'
import { About, aboutPageType } from '@/widgets/About'
import { AboutDescription } from '@/widgets/AboutDescription'
import { HeadImageSection } from '@/widgets/HeadImageSection'
import Image from 'next/image'
export async function generateStaticParams() {
	const productsData = await getProducts()
	return productsData.map(({ slug }) => ({
		productSlug: slug,
	}))
}

const dataAboutPage: aboutPageType = {
	title: 'About our beans',
	firstText:
		'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
	secondText:
		'Afraid at highly months do things on at. Situation recommend objection do intention so questions.  As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.',
}

export default async function Page({
	params,
}: {
	params: { productSlug: string }
}) {
	const dataProduct = await getProduct(params.productSlug)
	if (!dataProduct) return <div>Ничего не найдено</div>

	return (
		< >
			<HeadImageSection title='Our Coffee' className='bg-head-main' />

			<div className='flex min-[700px]:gap-[40px]  pt-[70px] max-[800px]:pt-[35px] container max-w-[780px] items-center  max-[700px]:flex-col'>
				<Image
				className=''
					src={`/${dataProduct.src}`}
					width={408}
					height={355}
					alt={dataProduct.alt}
				/>
				<AboutDescription dataProduct={dataProduct} className=' pt-[20px]'/>
				
			</div>

			
		</>
	)
}
