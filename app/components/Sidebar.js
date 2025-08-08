'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { RiMenu3Line } from 'react-icons/ri'
import Image from 'next/image'
import Link from 'next/link'
import {
    FaFacebookF,
    FaInstagram,
    FaTelegramPlane,
    FaLinkedinIn,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import profile from '@/public/images/profile.jpg'
import { MenuItems } from './MenuItems'
import MobileMenu from './MobileMenu'

export default function Sidebar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Mobile toggle */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 text-white bg-gray-900 p-2 rounded"
                onClick={() => setIsOpen(true)}
            >
                <RiMenu3Line className="text-xl" />
            </button>

            {/* Mobile Menu */}
            <MobileMenu open={isOpen} setOpen={setIsOpen} />

            {/* Desktop Sidebar */}
            <aside className="hidden md:flex w-72 bg-gray-800 text-white h-screen p-6 flex-col items-center sticky top-0">
                {/* Profile */}
                <div className="flex flex-col items-center space-y-2 mb-6">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-6 border-gray-600">
                        <Image src={profile} alt="Profile" className="object-cover" />
                    </div>
                    <h2 className="text-xl font-semibold mt-2 uppercase">Fasal San</h2>

                    {/* Socials */}
                    <div className="flex gap-3 mt-3">
                        {[
                            { icon: FaXTwitter, url: 'https://twitter.com/yourprofile' },
                            { icon: FaFacebookF, url: 'https://facebook.com/yourprofile' },
                            { icon: FaInstagram, url: 'https://instagram.com/yourprofile' },
                            { icon: FaTelegramPlane, url: 'https://t.me/yourusername' },
                            { icon: FaLinkedinIn, url: 'https://linkedin.com/in/yourprofile' },
                        ].map(({ icon: Icon, url }, idx) => (
                            <a
                                key={idx}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-600 p-2 rounded-full hover:bg-gray-700"
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Nav Items */}
                <nav className="w-full space-y-2">
                    {MenuItems.map(({ label, href, icon: Icon }) => {
                        const isActive = pathname === href
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`flex items-center justify-between px-4 py-3 rounded-md transition-all ${isActive
                                    ? 'bg-blue-600 text-white font-semibold'
                                    : 'hover:bg-gray-800 text-gray-300'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-xl"><Icon /></span>
                                    <span>{label}</span>
                                </div>
                            </Link>
                        )
                    })}
                </nav>
            </aside>
        </>
    )
}
