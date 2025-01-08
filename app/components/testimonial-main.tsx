"use client";

import { Testimonials } from "@/components/ui/testimonials";

export function TestimonalsDemo() {
    return (
        <div className="flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 h-[600px] w-full max-w-6xl overflow-hidden rounded-lg bg-background">
                <Testimonials />
            </div>
        </div>
    );
}
