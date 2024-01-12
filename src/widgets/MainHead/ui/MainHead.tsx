import { Button } from '@/shared/ui/button'
import Image from 'next/image'

export function MainHead() {
	return (
		<section className="flex justify-center  bg-[url('/bg_main.png')]  bg-cover bg-center bg-no-repeat  text-white  ">

			<div className='container flex flex-col items-center justify-items-center min-[800px]:pt-[180px] pt-[80px] min-[800px]:h-[640px] h-[470px] px-[15px]'>
				<h1 className='text-center text-[30px] text-shadow-[0_4px_4px_#6366f1] lg:text-[40px] '>
					Everything You Love About Coffee
				</h1>
				<Image
					className='mt-[20px]'
					src='/Beans_logo.svg'
					width={200}
					height={30}
					alt='Been'
				/>
				<h2 className='lg:text-[24px] text-[18px] mt-[35px] text-center '>
					We makes every day full of energy and taste
				</h2>
				<h2 className='lg:text-[24px] text-[18px] mt-[20px] font-bold text-shadow-[0_4px_8px_#6366f1]'>
					Want to try our beans?
				</h2>
				<Button
					size='default'
					className='mt-[20px] max-[425px]:mt-[30px] px-[42px] max-[425px]:w-[95%] bg-slate-100/10 border hover:bg-slate-100 hover:text-slate-900'
				>
					More
				</Button>
			</div>
		</section>
	)
}
