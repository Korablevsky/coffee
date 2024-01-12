import { ListProducts } from '@/entities/ListProducts'
import { getProducts } from '@/shared/api/getProducts'
import { About, aboutPageType } from '@/widgets/About'
import { MainHead } from '@/widgets/MainHead'
import { productItem } from '@prisma/client'

export default async function Home() {
	const dataAboutPage: aboutPageType = {
		title: 'About Us',
		firstText:
			'Extremity sweetness difficult behaviour he of. On disposal of as  landlord horrible. Afraid at highly months do things on at Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold  feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.',
		secondText:
			'Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise       any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did       even but nor are most gave hope. Secure active living depend son       repair day ladies now.',
	}

	const data: productItem[] = await getProducts()
	const filteredData = data.filter(item => item.type === 'best')

	return (
		<>
			<MainHead />
			<About
				className=' container max-w-[580px] min-[800px]:pt-[80px] min-[800px]:pb-[100px] pt-[40px] pb-[50px] mx-auto'
				dataAboutPage={dataAboutPage}
			/>
			<section className="min-[800px]:pt-[80px] min-[800px]:pb-[100px] pt-[40px] pb-[50px]  bg-[url('/BG_card.png')] bg-cover bg-center bg-no-repeat container flex justify-center items-center flex-col ">
				<h2 className='text-[24px]'>Our best</h2>
				<ListProducts className='' type='no country' data={filteredData} />
			</section>
		</>
	)
}
