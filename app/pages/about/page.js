'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import profileImage from '@/public/images/profile.jpg';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { FaSmile, FaClipboardList, FaHeadphonesAlt, FaUsers } from 'react-icons/fa';
import Skill from '../skill/page';

const stats = [
    { icon: FaSmile, number: 232, title: 'Happy Clients', desc: 'consequuntur quae' },
    { icon: FaClipboardList, number: 521, title: 'Projects', desc: 'adipisci atque cum quia aut' },
    { icon: FaHeadphonesAlt, number: 1453, title: 'Hours Of Support', desc: 'commodi quaerat' },
    { icon: FaUsers, number: 32, title: 'Hard Workers', desc: 'rerum asperiores dolor' },
];

const skills = [
    { name: 'HTML', percent: 100 },
    { name: 'CSS', percent: 90 },
    { name: 'JAVASCRIPT', percent: 75 },
    { name: 'PHP', percent: 80 },
    { name: 'WORDPRESS/CMS', percent: 90 },
    { name: 'PHOTOSHOP', percent: 55 },
];

const personalInfo = [
    { label: 'Birthday', value: '15 November 1998' },
    { label: 'Website', value: 'www.fasalsan.com' },
    { label: 'Phone', value: '+855 81 567 015' },
    { label: 'City', value: 'Phnom penh' },
    { label: 'Age', value: '26' },
    { label: 'Degree', value: 'Master' },
    { label: 'Email', value: 'sanfasal70@example.com' },
    { label: 'Freelance', value: 'Available' },
];

export default function About() {
    const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => 0));
    const statsRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    stats.forEach((stat, i) => {
                        let start = 0;
                        const end = stat.number;
                        const duration = 1000;
                        const step = end / (duration / 20);

                        const timer = setInterval(() => {
                            start += step;
                            if (start >= end) {
                                clearInterval(timer);
                                setAnimatedNumbers(prev => {
                                    const updated = [...prev];
                                    updated[i] = end;
                                    return updated;
                                });
                            } else {
                                setAnimatedNumbers(prev => {
                                    const updated = [...prev];
                                    updated[i] = Math.ceil(start);
                                    return updated;
                                });
                            }
                        }, 20);
                    });
                }
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) observer.observe(statsRef.current);
        return () => {
            if (statsRef.current) observer.unobserve(statsRef.current);
        };
    }, [hasAnimated]);

    return (
        <section className="px-6 md:px-12 py-10 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 relative inline-block border-b-4 border-blue-500 pb-1">
                About
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
            </p>

            <div className="grid md:grid-cols-2 gap-10 items-start">
                <div className="w-full max-w-md h-96 relative">
                    <Image src={profileImage} alt="Profile" fill className="rounded-lg object-contain" />
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-2">UI/UX Designer & Web Developer.</h3>
                    <p className="italic text-gray-700 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        {personalInfo.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm">
                                <HiOutlineChevronRight className="mt-1 text-blue-500" />
                                <p>
                                    <span className="font-semibold">{item.label}:</span> {item.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-600">
                        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero.
                    </p>
                </div>
            </div>

            <section className="py-12">
                {/* Stats */}
                <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
                    {stats.map(({ icon: Icon, title, desc }, idx) => (
                        <div key={idx}>
                            <Icon className="mx-auto text-blue-500 text-4xl mb-2" />
                            <h3 className="text-3xl font-bold">{animatedNumbers[idx]}</h3>
                            <p className="font-semibold text-gray-700">{title}</p>
                            <p className="text-sm text-gray-400">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* Skills */}

                <div className='p-6'>
                    <Skill />
                </div>
            </section>
        </section>
    );
}
