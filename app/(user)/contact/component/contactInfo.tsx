
import { PhoneIcon,EmailIcon,YoutubeIcon,FbIcon } from '@/components/icons/FontAwesome'
import logo from "@/public/logo.png"
import Image from 'next/image'


export default function contactInfo() {
    return (
        <section className='p-8 rounded-xl space-y-4 bg-slate-50'>
            <Image className='mx-auto ' src={logo} width={140} height={70} alt='logo' />
            <div className='mt-4 p-4 rounded-lg border bg-slate-100 hover:bg-gray-200 '>
                <p className="text-base font-semibold text-gray-900 md:text-xl flex items-center gap-4">
                    <PhoneIcon /> Contact Us: <a className=' font-normal text-gray-500'>+855 08965325</a>
                </p>
            </div>
            <div className='p-4 rounded-lg border bg-slate-100 hover:bg-gray-200 '>
                <p className="text-base font-semibold text-gray-900 md:text-xl flex items-center gap-4">
                    <EmailIcon /> Email Us: <a href='' className=' font-normal text-gray-500'>istad@gmail.com</a>
                </p>
            </div>
            <div className='p-4 rounded-lg border bg-slate-100 hover:bg-gray-200 '>
                <p className="text-base font-semibold text-gray-900 md:text-xl flex items-center gap-4">
                    <YoutubeIcon /> Youtube: <a href='' className=' font-normal text-gray-500'>Discover by istad.co</a>
                </p>
            </div>
            <div className='p-4 rounded-lg border bg-slate-100 hover:bg-gray-200 '>
                <p className="text-base font-semibold text-gray-900 md:text-xl flex items-center gap-4">
                    <FbIcon />Facebook: <a href='' className=' font-normal text-gray-500'>Discover by istad.co</a>
                </p>
            </div>
        </section>

    )
}
