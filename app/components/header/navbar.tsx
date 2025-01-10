"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import {
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";


export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-inherit text-white shadow-md border-b border-neutral-800">
            <div className="container mx-auto px-4 md:px-8 flex h-14 items-center justify-between">
                {/* Left Section */}
                <div className="flex items-center space-x-12"> {/* Adjusted space-x */}
                    <Link href="/" className="text-lg font-bold">
                        <Image src="/logo.svg" alt="logo" width={150} height={150} />
                    </Link>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex">
                        <Button variant="ghost" size="sm">
                            About
                        </Button>
                        <Button variant="ghost" size="sm">
                            Blogs
                        </Button>
                        <Button size="sm" className="ml-2">
                            <Link href='/login'>
                                login
                            </Link>
                        </Button>
                    </div>
                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="md:hidden text-white border-neutral-700 hover:bg-neutral-800"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-neutral-900 text-white">
                            <MobileNav />
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-800 focus:bg-neutral-800",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-neutral-400">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

function MobileNav() {
    return (
        <div className="flex flex-col space-y-3 p-4">
            <Image src="/logo.svg" width={100} height={100} alt="logo" />
            <nav className="flex flex-col space-y-3">
                <Link href="/" className="text-sm">
                    About
                </Link>
                <Link href="/" className="text-sm">
                    Blogs
                </Link>
                <Link href="/" className="text-sm">
                    Sign up
                </Link>
            </nav>
        </div>
    );
}
