"use client";

import { HiOutlineMapPin } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";

export default function Contact() {
    return (
        <section className="bg-white py-12 px-6">
            <div className="max-w-6xl mx-auto w-full">
                {/* Title */}
                <h2 className="text-3xl font-bold mb-4 relative inline-block border-b-4 border-blue-500 pb-1">Contact</h2>
                <p className="text-gray-600 mb-10">
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Side - Contact Info */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow">
                        <div className="mb-6">
                            <div className="flex items-start gap-4 group">
                                <span
                                    className="text-[#149ddd] text-2xl bg-[#bfebff] p-2 rounded-full group-hover:text-white group-hover:bg-[#166c94]  Ztransition-colors duration-300 ease-in-out"
                                >
                                    <HiOutlineMapPin />
                                </span>
                                <div>
                                    <h4 className="font-bold">Address</h4>
                                    <p>Chroy Changvar, Phnom penh</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-start gap-4 group">
                                <span
                                    className="text-[#149ddd] text-2xl bg-[#bfebff] p-2 rounded-full group-hover:text-white group-hover:bg-[#166c94]  Ztransition-colors duration-300 ease-in-out"
                                ><FiPhone /></span>
                                <div>
                                    <h4 className="font-bold">Call Us</h4>
                                    <p>+855 81 567 015</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-start gap-4 group">
                                <span
                                    className="text-[#149ddd] text-2xl bg-[#bfebff] p-2 rounded-full group-hover:text-white group-hover:bg-[#166c94]  Ztransition-colors duration-300 ease-in-out" >
                                    <GoMail />
                                </span>
                                <div>
                                    <h4 className="font-bold">Email Us</h4>
                                    <p>sanfasal70@gmail.com</p>
                                </div>
                            </div>
                        </div>


                        {/* Google Map */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9494538534145!2d-74.00601518459468!3d40.7127759793315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjQuMCJX!5e0!3m2!1sen!2sus!4v1634123456789!5m2!1sen!2sus"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <textarea
                                placeholder="Message"
                                rows="5"
                                className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                            <div className="flex w-full items-center justify-center">

                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
