'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
    FaFacebookF,
    FaInstagram,
    FaTelegramPlane,
    FaLinkedinIn,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineMail,
} from 'react-icons/ai'
import { BsFileEarmarkText, BsFillImageFill } from 'react-icons/bs'
import { MdMiscellaneousServices } from 'react-icons/md'
import { IoIosArrowDown } from 'react-icons/io'
import { RiFolderOpenLine } from 'react-icons/ri'
import Image from 'next/image'
import profile from '@/public/images/profile.jpg'

const navItems = [
    { label: 'Home', href: '/', icon: <AiOutlineHome /> },
    { label: 'About', href: '/pages/about', icon: <AiOutlineUser /> },
    { label: 'Resume', href: '/pages/resume', icon: <BsFileEarmarkText /> },
    { label: 'Portfolio', href: '/pages/portfolio', icon: <BsFillImageFill /> },
    { label: 'Services', href: '/pages/services', icon: <MdMiscellaneousServices /> },
    { label: 'Contact', href: '/pages/contact', icon: <AiOutlineMail /> },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-72 bg-[#050B14] text-white h-screen p-6 flex flex-col items-center sticky top-0">
            {/* Profile */}
            <div className="flex flex-col items-center space-y-2 mb-6">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-800">
                    <Image src={profile} alt="Profile" className="object-cover" />
                </div>
                <h2 className="text-xl font-semibold mt-2 uppercase">Fasal San</h2>

                {/* Socials */}
                <div className="flex gap-3 mt-3">
                    {[
                        { icon: FaXTwitter, url: 'https://twitter.com/yourprofile' },
                        { icon: FaFacebookF, url: 'https://www.facebook.com/share/1625YZSGab/?mibextid=wwXIfr' },
                        { icon: FaInstagram, url: 'https://t.me/fasal_san' },
                        { icon: FaTelegramPlane, url: 'https://t.me/yourusername' }, { icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/san-fasal-4a3250318/' },
                    ].map(({ icon: Icon, url }, idx) => (
                        <a
                            key={idx}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
                        >
                            <Icon className="w-4 h-4" />
                        </a>
                    ))}
                </div>

            </div>

            {/* Nav Items */}
            <nav className="w-full space-y-2">
                {navItems.map(({ label, href, icon, hasDropdown }) => {
                    const isActive = pathname === href
                    return (
                        <Link
                            key={label}
                            href={href}
                            className={`flex items-center justify-between px-4 py-3 rounded-md transition-all ${isActive
                                ? 'bg-blue-600 text-white font-semibold'
                                : 'hover:bg-gray-800 text-gray-300'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-xl">{icon}</span>
                                <span>{label}</span>
                            </div>
                            {hasDropdown && <IoIosArrowDown />}
                        </Link>
                    )
                })}
            </nav>
        </aside>
    )
}
