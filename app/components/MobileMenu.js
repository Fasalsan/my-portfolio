'use client'
import Link from 'next/link'
import { MenuItems } from './MenuItems'

export default function MobileMenu({ open, setOpen }) {
    return (
        <div
            className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 z-40 transition-transform transform ${open ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            <button
                onClick={() => setOpen(false)}
                className="mb-6 text-right w-full text-xl"
            >
                ✕
            </button>
            <nav className="space-y-4">
                {MenuItems.map(({ label, href, icon: Icon }) => (
                    <Link
                        key={href}
                        href={href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2 hover:text-gray-400"
                    >
                        <Icon />
                        {label}
                    </Link>
                ))}
            </nav>
        </div>
    )
}
