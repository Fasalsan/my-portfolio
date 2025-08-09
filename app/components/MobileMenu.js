'use client'
import Link from 'next/link'
import Image from 'next/image'
import { MenuItems } from './MenuItems'
import {
    FaFacebookF,
    FaInstagram,
    FaTelegramPlane,
    FaLinkedinIn,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import profile from '@/public/images/profile.jpg'

export default function MobileMenu({ open, setOpen }) {
    return (
        <div
            className={`fixed top-0 left-0 h-full w-72 bg-gray-800 text-white p-6 z-50 transition-transform transform ${open ? 'translate-x-0' : '-translate-x-full'
                } md:hidden`}
        >
            {/* Close Button */}
            <button
                onClick={() => setOpen(false)}
                className="mb-6 text-right w-full text-xl"
            >
                ✕
            </button>

            {/* Profile */}
            <div className="flex flex-col items-center space-y-2 mb-6">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-600">
                    <Image src={profile} alt="Profile" className="object-cover" />
                </div>
                <h2 className="text-xl font-semibold mt-2 uppercase">Fasal San</h2>

                {/* Socials */}
                <div className="flex gap-3 mt-3">
                    {[
                        { icon: FaXTwitter, url: 'https://twitter.com/yourprofile' },
                        { icon: FaFacebookF, url: 'https://www.facebook.com/share/1625YZSGab/?mibextid=wwXIfr' },
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
            <nav className="space-y-4">
                {MenuItems.map(({ label, href, icon: Icon }) => (
                    <Link
                        key={href}
                        href={href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-800 transition-colors"
                    >
                        <span className="text-xl"><Icon /></span>
                        <span>{label}</span>
                    </Link>
                ))}
            </nav>
        </div>
    )
}
