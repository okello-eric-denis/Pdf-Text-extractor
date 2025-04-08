import { Button } from "./ui/button"
import Link from "next/link";

export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      description: "Best for hobby projects or personal use.",
      price: "0$",
      features: ["1 user", "500MB of storage"],
      unavailable: ["Email support", "Help center access", "Phone support", "Community access"],
      cta: "Start for Free",
      href: "#",
    },
    {
      name: "Starter",
      description: "Great for small teams and companies getting started.",
      price: "12$",
      features: ["5 users", "2GB of storage", "Email support"],
      unavailable: ["Help center access", "Phone support", "Community access"],
      cta: "Choose Starter",
      href: "#",
    },
    {
      name: "Pro",
      description: "For growing teams who need more support and storage.",
      price: "30$",
      features: ["20 users", "5GB of storage", "Email support", "Help center access"],
      unavailable: ["Phone support", "Community access"],
      cta: "Get Started",
      href: "#",
    },
    {
      name: "Enterprise",
      description: "Advanced features and premium support for large teams.",
      price: "99$",
      features: ["Unlimited users", "50GB of storage", "Email support", "Help center access", "Phone support", "Community access"],
      unavailable: [],
      cta: "Contact Sales",
      href: "#",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {plans.map((plan) => (
        <div key={plan.name} className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-900">
              {plan.name}
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 text-700">{plan.description}</p>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-900 sm:text-4xl">{plan.price}</strong>
              <span className="text-sm font-medium text-700">/month</span>
            </p>
            <div className="mt-4 text-center hover:bg-transparent">
            <Button
              asChild
              size="sm"
              variant={"default"}
              disabled
              className="opacity-75 cursor-none pointer-events-none"
            >
              <Link href="/sign-in">{plan.cta}</Link>
            </Button> 
            </div>
           {/* <a
              className="mt-4 block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
              href={plan.href}
            >
              {plan.cta}
            </a> */}
          </div>

          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-900 sm:text-xl">What's included:</p>

            <ul className="mt-2 space-y-2 sm:mt-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-700">{feature}</span>
                </li>
              ))}
              {plan.unavailable.map((item) => (
                <li key={item} className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-red-700 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
