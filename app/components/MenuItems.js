import {  FaTools } from 'react-icons/fa'
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineUser, HiOutlineCog } from 'react-icons/hi'
import { RiContactsBook3Line } from "react-icons/ri";
import { GoProjectRoadmap } from "react-icons/go";

export const MenuItems = [
    { label: 'Home', href: '/', icon: IoHomeOutline },
    { label: 'About', href: '/pages/about', icon: HiOutlineUser },
    { label: 'Skill', href: '/pages/skill', icon: FaTools },
    { label: 'Projects', href: '/pages/project', icon: GoProjectRoadmap },
    { label: 'Contact', href: '/pages/contact', icon: RiContactsBook3Line },
]
