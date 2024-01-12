'use client'
import { MobileHeader } from '@/widgets/MobileHeader'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
	const pathname = usePathname()
	return (
		<>
			<header
				key='wide'
				className='container text-white left-1/2 transform -translate-x-1/2 absolute top-0  flex text-shadow-[0_4px_4px_#6366f1] items-end pt-[30px] px-[35px] pb-[0px] max-[800px]:hidden'
			>
				<Link href='/'>
					<Image src='/Logo_White.svg' width={35} height={35} alt='Logo' />
				</Link>
				<nav className='space-x-7'>
					<Link
						className={cn('', {
							[' text-amber-400']: pathname === '/',
						})}
						href='/'
					>
						Coffee house
					</Link>
					<Link className={cn('', {
							[' text-amber-400']: pathname === '/ourCoffee',
						})}
						 href='/ourCoffee'>
						Our coffee
					</Link>
					<Link className={cn('', {
							[' text-amber-400']: pathname === '/forYourPleasure',
						})} href='/forYourPleasure'>
						For your pleasure
					</Link>
				</nav>
			</header>
            
            <div className='min-[800px]:hidden  fixed bg-black h-14 w-full z-10 text-right  pr-6 pt-3'>
              <MobileHeader  className=''/>
            </div>
			
		</>
	)
}
