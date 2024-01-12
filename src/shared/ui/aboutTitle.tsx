import Image from 'next/image'

export default function AboutTitle({ title }: { title: string }) {
	return (
		<>
			<h2 className='text-[24px]'>{title}</h2>
			<Image
				className='mt-[20px]'
				src='/Beans_logo_black.svg'
				width={200}
				height={30}
				alt='Been'
			/>
			
		</>
	)
}
