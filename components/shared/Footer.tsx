import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t h-62 ">
        <div className="h-52 grid grid-cols-4 wrapper gap-4 py-40 text-center">
          <div className="flex flex-col items-start gap-6">

            <Link href="/">
                <Image
                src="/assets/images/logo.png"
                alt="logo"
                width={168}
                height={78}
                />
             </Link>
             <p>2024 Accessiverse.<br/> All Rights Reserved.</p>
                </div>
             <div className="flex flex-col justify-around tracking-wider border-l px-8 w-5/6">
            <Link className="hover:bg-primary-500 hover:shadow-lg rounded-full px-1" href='#'>Careers</Link>
            <Link className="hover:bg-primary-500 hover:shadow-lg rounded-full" href='#'>About</Link>
            <Link className="hover:bg-primary-500 hover:shadow-lg rounded-full" href='#'>LinkedIn</Link>
             </div>
             <div className="border-r px-8 flex flex-col justify-around tracking-wider w-5/6">
            <Link className="hover:bg-primary-500 hover:shadow-lg rounded-full" href='#'>Contact</Link>
            <Link className="hover:bg-primary-500 hover:shadow-lg rounded-full" href='#'>Business Inquiries</Link>
            <Link className="hover:bg-primary-500 hover:shadow-lg rounded-full" href='#'>Github</Link>
             </div>
             <div className="grid grid-cols-2 px-0 mx-0">
              
              <h1 className="col-span-2 font-bold uppercase">About Developer  <span><Link target="_blank" href={'https://github.com/sumairq'}><Image className="inline" alt="github icon" height={23} width={23} src={"/assets/icons/github.png"}/></Link></span><span><Link target="_blank" href={'https://www.linkedin.com/in/sumairq/'}><Image className="inline" alt="github icon" height={23} width={23} src={"/assets/icons/linkedin.png"}/></Link></span></h1>
            
              <div className="">
              <Image className="rounded-full border-emerald-500" alt="sumair's picture" src={'/assets/images/developer.png'} height={120} width={120}/>
              </div>
              <p><span className="underline decoration-4 decoration-yellow-500 underline-offset-4">Sumair</span> is a frontend developer with a passion for beautiful interfaces.</p>
             </div>
        </div>
        </footer>
  )
}

export default Footer