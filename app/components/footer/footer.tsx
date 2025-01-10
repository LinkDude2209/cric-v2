import React from "react";
import { QueryCard } from "./enquiry-card";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    return (
        <footer className="text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-8">
                    {/* Group FIND US and REGISTRATIONS */}
                    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 lg:mr-auto">
                        {/* FIND US Section */}
                        <div className="flex flex-col space-y-4 text-sm">
                            <Image src="/logo.svg" height={100} width={100} alt="logo" />
                            <h3 className="text-lg font-bold text-white">FIND US</h3>
                            <div>
                                <p><strong>Regd. Address:</strong></p>
                                <p>507, Vars Splendid, Old Madras Road, Bengaluru, India 560016</p>
                            </div>
                            <div>
                                <p><strong>Contact:</strong></p>
                                <p>+91 98861 02372</p>
                                <p className="text-blue-500 hover:underline">connect@crickzy.com</p>
                            </div>
                        </div>

                        {/* REGISTRATIONS Section */}
                        <div className="flex flex-col space-y-4 text-sm mt-6">
                            <h3 className="text-sm font-bold text-white ">About us</h3>
                            <h3 className="text-sm font-bold text-white ">Blogs</h3>
                            <h3 className="text-sm font-bold text-white ">Coach sign in</h3>
                            <h3 className="text-sm font-bold text-white ">Coach sign up</h3>

                        </div>
                        <div className="flex flex-col space-y-4 text-sm mt-6">
                            <Link href="/privacypolicy">
                                <h3 className="text-sm font-bold text-white">Privacy Policy</h3></Link>

                            <Link href="/termsandconditions"><h3 className="text-sm font-bold text-white">Terms & conditions</h3></Link>
                            <Link href="/refundpolicy"><h3 className="text-sm font-bold text-white">Refund Policy</h3></Link>


                        </div>
                    </div>

                    {/* ABOUT THIS SITE Section */}
                    <div className="flex flex-col space-y-4 md:items-start items-center text-sm sm:justify-center">
                        <QueryCard />
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-700 mt-6 pt-6 text-sm text-center">
                    <p className="text-white">
                        © {new Date().getFullYear()}  Crickzy. All rights reserved. Crickzy is a venture of RB Innovate LLP
                    </p>
                </div>
            </div>
        </footer>
    );
};

