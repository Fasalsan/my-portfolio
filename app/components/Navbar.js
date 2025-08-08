'use client'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import MobileMenu from './MobileMenu'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        // <div className="md:hidden bg-gray-800 text-white p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="md:hidden bg-gray-800 text-white p-4 flex justify-end items-end sticky top-0 z-50">
            {/* <h1 className="text-xl font-bold uppercase">Fasal San</h1> */}
            <button onClick={() => setOpen(true)}>
                <FiMenu className="text-2xl" />
            </button>

            <MobileMenu open={open} setOpen={setOpen} />
        </div>
    )
}
