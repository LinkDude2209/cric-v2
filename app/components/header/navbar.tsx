"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
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
                    <div className="hidden md:flex">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                            <li className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-neutral-800 to-neutral-700 p-6 no-underline outline-none focus:shadow-md"
                                                        href="/"
                                                    >
                                                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                                                            Crickzy
                                                        </div>
                                                        <p className="text-sm leading-tight text-neutral-400">
                                                            Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
                                                        </p>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <ListItem href="/docs" title="Introduction">
                                                Re-usable components built using Radix UI and Tailwind CSS.
                                            </ListItem>
                                            <ListItem href="/docs/installation" title="Installation">
                                                How to install dependencies and structure your app.
                                            </ListItem>
                                            <ListItem href="/docs/primitives/typography" title="Typography">
                                                Styles for headings, paragraphs, lists...etc
                                            </ListItem>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/docs" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Documentation
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex">
                        <Button variant="ghost" size="sm">
                            Log in
                        </Button>
                        <Button size="sm" className="ml-2">
                            Sign up
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
            <Link href="/" className="text-lg font-bold">
                Crickzy
            </Link>
            <nav className="flex flex-col space-y-3">
                <Link href="/docs" className="text-sm">
                    Documentation
                </Link>
                <Link href="/components" className="text-sm">
                    Components
                </Link>
                <Link href="/examples" className="text-sm">
                    Examples
                </Link>
            </nav>
        </div>
    );
}
