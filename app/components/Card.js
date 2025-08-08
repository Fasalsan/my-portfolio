'use client';
import Link from 'next/link';

export default function Card({ icon: Icon, title, count, href }) {
    return (
        <Link href={href}>
            <div className="w-full sm:w-64 md:w-72 lg:w-100 p-6 sm:p-9 bg-white rounded-2xl border border-blue-100 shadow-sm text-center hover:shadow-xl transition-all duration-500 group cursor-pointer">
                <div className="text-pink-600 text-4xl mb-4 transition-transform duration-500 group-hover:rotate-[360deg]">
                    <Icon className="inline-block" />
                </div>
                <h2 className="text-xl font-semibold mb-2 text-black">{title}</h2>
                <p className="text-gray-500">{count}</p>
            </div>
        </Link>
    );
}
