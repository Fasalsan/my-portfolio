'use client'
import Link from 'next/link'
import { MenuItems } from './MenuItems'

export default function Sidebar() {
    return (
        <div className="hidden md:flex flex-col w-64 bg-gray-900 text-white p-6 sticky left-0 top-0 h-screen z-50">
            <h1 className="text-2xl font-bold mb-8 uppercase">fasal san</h1>
            <nav className="space-y-6">
                {MenuItems.map(({ label, href, icon: Icon }) => (
                    <Link
                        key={href}
                        href={href}
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
