import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='bg-slate-50 w-full border-b'>
        <div className='wrapper flex items-center justify-between'>
            <Link href="/" className='w-36'>
                <Image src="/assets/images/logo.png" width={128} height={38} alt="Accessiverse logo"/>
            </Link>

            <SignedIn>
                <nav className='md:flex-between hidden w-full max-w-xs'>
                    <NavItems/>
                </nav>
            </SignedIn>
            <div className='flex w-32 justify-end gap-3'>
                <SignedIn>
                    <UserButton afterSignOutUrl='/'/>
                    <MobileNav/>
                </SignedIn>
           <SignedOut>
            <Button className='rounded-xl' size="lg">
            <Link href={"/events"}>events</Link>
            </Button>
            <Button asChild className='rounded-full' size="lg">
                <Link href={"/sign-in"}>
                login   
                </Link>
            </Button>
           </SignedOut>
            </div>
        </div>
    </header>
  )
}

export default Header