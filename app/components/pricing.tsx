"use client"
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useState } from 'react'

const pricingPlans = [
    {
        name: 'Foundation',
        description: '  ',
        monthlyPrice: 199,
        annualPrice: 1.99,
        link: '',
        features: [
            'Upload 1 motion video',
            "Get coach feedback", "Feedback via video / text", "1 Session", "Chat interactions"

        ],
    },
    {
        name: 'Advanced',
        description:
            '',
        monthlyPrice: 499,
        annualPrice: 4.99,
        link: '',
        features: [
            "Upload 1 motion video", "Get coach feedback", "Feedback via video / text", "1 Session", "Chat interactions", 'Former players, state level coaches'
        ],
    },
    {
        name: 'Elite',
        description:
            '',
        monthlyPrice: 999,
        annualPrice: 9.99,
        link: '',
        features: [
            "Upload 1 motion video", "Get coach feedback", "Feedback via video / text", "1 Session", "Chat interactions", "Former players, head coaches"
        ],
    },
]

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState<'M' | 'A'>('M')

    const Heading = () => (
        <div className="relative z-10 my-12 flex flex-col items-center justify-center gap-4">
            <div className="flex w-full flex-col items-start justify-center space-y-4 md:items-center">
                <div className="mb-2 inline-block rounded-full bg-red-500 px-3 py-[0.2rem] text-xs font-medium uppercase text-white">
                    Pricing
                </div>
                <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    Flexible Pricing
                </p>
                <p className="text-md max-w-xl text-center text-gray-200">
                    Only pay for the coaching you need, with no hidden fees.
                </p>
            </div>
            <div className="flex items-center justify-center gap-3">
                <button
                    onClick={() => setBillingCycle('M')}
                    className={cn(
                        `rounded-lg px-4 py-2 text-sm font-medium`,
                        billingCycle === 'M'
                            ? 'relative bg-white text-red-500'
                            : 'text-gray-300 hover:bg-white hover:text-red-500',
                    )}
                >
                    INDIA
                    {billingCycle === 'M' && <BackgroundShift shiftKey="monthly" />}
                </button>
                <button
                    onClick={() => setBillingCycle('A')}
                    className={cn(
                        `rounded-lg px-4 py-2 text-sm font-medium`,
                        billingCycle === 'A'
                            ? 'relative bg-white text-red-500'
                            : 'text-gray-300 hover:bg-white hover:text-red-500',
                    )}
                >
                    UK
                    {billingCycle === 'A' && <BackgroundShift shiftKey="annual" />}
                </button>
            </div>
        </div>
    )

    const PricingCards = () => (
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:gap-4">
            {pricingPlans.map((plan, index) => (
                <div
                    key={index}
                    className="w-full rounded-xl border-[1px] border-gray-500 p-6 text-left text-white"
                >
                    <p className="mb-1 mt-0 text-sm font-medium uppercase text-red-400">
                        {plan.name}
                    </p>
                    <p className="my-0 mb-6 text-sm text-gray-300">{plan.description}</p>
                    <div className="mb-8 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={billingCycle === 'M' ? 'monthly' : 'annual'}
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 100 }}
                                className="my-0 text-4xl font-bold text-white"
                            >
                                <span>
                                    ${billingCycle === 'M' ? plan.monthlyPrice : plan.annualPrice}
                                </span>
                                <span className="text-lg font-medium">
                                    /{billingCycle === 'M' ? 'month' : 'year'}
                                </span>
                            </motion.p>
                        </AnimatePresence>
                        <motion.button
                            whileTap={{ scale: 0.985 }}
                            onClick={() => {
                                window.open(plan.link)
                            }}
                            className="mt-8 w-full rounded-lg bg-red-500 py-2 text-sm font-medium text-white hover:bg-red-400"
                        >
                            Get Started
                        </motion.button>
                    </div>
                    {plan.features.map((feature, idx) => (
                        <div key={idx} className="mb-3 flex items-center gap-2">
                            <Check className="text-red-400" size={18} />
                            <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )

    return (
        <section className="relative w-full overflow-hidden py-12 text-white lg:px-2 lg:py-16">
            <Heading />
            <PricingCards />
        </section>
    )
}

const BackgroundShift = ({ shiftKey }: { shiftKey: string }) => (
    <motion.span
        key={shiftKey}
        layoutId="bg-shift"
        className="absolute inset-0 -z-10 rounded-lg bg-red-500"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    />
)

export default function PricingPage() {
    return <Pricing />
}
