'use client';
import Link from 'next/link';

export default function Card({ icon: Icon, title, count, href }) {
    return (
        <Link href={href}>
            <div className="relative rounded-2xl gradient-border animate-gradientShift cursor-pointer">

                <div className="w-full p-6 sm:p-9 bg-white rounded-2xl shadow-sm text-center transition-all duration-500 group">

                    <div className="text-pink-600 text-4xl transition-transform duration-500 group-hover:rotate-[360deg]">

                        {Icon && <Icon className="inline-block" />}
                    </div>
                    <h2 className="text-xl font-semibold mb-2 text-black">{title}</h2>
                    <p className="text-gray-500">{count}</p>
                </div>
            </div>
        </Link>
    );
}
