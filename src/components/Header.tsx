
import { Button } from '@/components/ui/button'
import Link from 'next/link'


export default function Header() {
    return (
        < >
            <div className=' bg-blue-600 h-20 md:h-32 flex items-center ' >
                <div className='flex items-center justify-between w-full mx-7  md:container' >
                    <Link href={'/'} className='flex items-center justify-center ' >
                        <h1 className='text-white text-2xl md:text-3xl ml-3' >Logos</h1>
                    </Link>

                    <Button variant={'secondary'} size={'sm'} className='text-blue-800 font-semibold' >Contate-nos</Button>
                </div>
            </div>
        </>
    )
}
