// components/ui/section.tsx
import { cn } from "@/lib/utils";

type SectionProps = {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
};

export default function Section({
    title,
    subtitle,
    children,
    className,
}: SectionProps) {
    return (
        <section className={cn("py-8 px-4 md:py-16 md:px-8", className)}>
            <div className="container mx-auto max-w-6xl">
                {title && (
                    <h2 className="text-center text-5xl font-bold tracking-tighter md:text-7xl">
                        {title}
                    </h2>
                )}
                {subtitle && (
                    <p className="mt-2 text-center text-lg text-green-500 md:text-xl">
                        {subtitle}
                    </p>
                )}
                <div className="mt-8">{children}</div>
            </div>
        </section>
    );
}
