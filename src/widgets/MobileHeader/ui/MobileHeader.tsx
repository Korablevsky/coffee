'use client'
import { Filter } from '@/features/Filter'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/shared/ui/sheet'
import { ClipboardCopy, Home, ShoppingCart } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

export function MobileHeader({ className }: { className: string }) {
	const router = useRouter()
	const pathname = usePathname()

	return (
		<Sheet>
			<SheetTrigger className={`${className}  text-white `}>MENU</SheetTrigger>
			<SheetContent
				side='left'
				className='max-w-[400px] flex justify-start bg-[url("/BG_mobile.jpg")] bg-cover '
			>
				<SheetHeader>
					<SheetTitle className=' mt-[-15px]'>Navigate menu</SheetTitle>
					
						<nav className='flex flex-col text-left'>
							<SheetClose
								onClick={() => {
									router.push('/'), { scroll: false }
								}}
								className='flex  items-end mt-[5px] transition duration-300 ease-in-out hover:bg-orange-200 text-black rounded bg-orange-100  p-1 '
							>
								<Home className='mr-[5px]' />
								Coffee house
							</SheetClose>

							<SheetClose
								onClick={() => {
									router.push('/ourCoffee'), { scroll: false }
								}}
								className='flex  items-end mt-[10px]  transition duration-300 ease-in-out hover:bg-orange-200 text-black rounded bg-orange-100  p-1 '
							>
								<ShoppingCart className='mr-[5px] ' />
								Our coffee
							</SheetClose>

							<SheetClose
								className='flex  items-end mt-[10px] transition duration-300 ease-in-out hover:bg-orange-200 text-black rounded bg-orange-100  p-1 '
								onClick={() => {
									router.push('/forYourPleasure'), { scroll: false }
								}}
							>
								<ClipboardCopy className='mr-[5px]' />
								For your pleasure
							</SheetClose>

							{pathname === '/ourCoffee' && (
								<Filter
									className=''
									type='mobile'
									classNameMobile='flex w-full items-end mt-[10px] transition duration-300 ease-in-out hover:bg-orange-200 text-black rounded bg-orange-100  p-1 '
								/>
							)}
						</nav>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	)
}
