import { Features } from "@/components/ui/working";
import Section from "@/components/ui/section";
import { PackageSearch, Settings, Eye } from "lucide-react";

const data = [
    {
        id: 1,
        title: "1. Select your coaching camp",
        content:
            "Each camp is led by one of the finest international cricket coach. Access their insights from wherever you are.",
        image:
            "/how-it-works-1.webp",
        icon: <PackageSearch className="size-6 text-white" />,
    },
    {
        id: 2,
        title: "2. Upload and get feedback",
        content:
            "Seamlessly upload your motion video and seek feedback.",
        image:
            "/how-it-works-2.webp",
        icon: <Settings className="size-6 text-white" />,
    },
    {
        id: 3,
        title: "3. Train anywhere",
        content:
            "Connect with your coach through motion video. Receive personalized insights.",
        image:
            "/how-it-works-3.webp",
        icon: <Eye className="size-6 text-white" />,
    },
];

export function Working() {
    return (
        <Section
            title="How It works"
            subtitle="Your pathway to excellence"
        >
            <Features data={data} />
        </Section>
    );
}
