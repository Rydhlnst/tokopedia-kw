import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full'>
      <nav className='px-8 flex flex-row items-center gap-4 py-4 w-full bg-white'>
        {/* Icon */}
        <div className='shrink-0'>
            <Image src={"/main/Icon.svg"} alt='Icon' width={160} height={40}/>
        </div>
        <div className='flex items-center w-full gap-4'>
            <p className='text-sm text-foreground/70 cursor-pointer'>Kategori</p>
            <div className='border w-full py-1 rounded-lg px-4 flex items-center'>
                <Search className='size-6 text-foreground/70'/>
                <Input
                    placeholder="Cari di Tokopedia"
                    className="border-none focus:border-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
                    />
            </div>
        </div>
        <div className='flex items-center gap-4'>
            <ShoppingCart className='size-6 cursor-pointer text-foreground/70'/>
            <div className='border-l border-foreground/50 rounded-full h-6' />
            <div className='flex items-center gap-4'>
                <Button variant={"outline"} className='text-primary font-semibold hover:text-primary'>
                    Masuk
                </Button>
                <Button className='font-semibold'>
                    Daftar
                </Button>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
