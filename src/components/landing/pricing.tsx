/* eslint-disable react/no-unescaped-entities */
import { Icon } from "@/components/ui/evervault-card";
import { Check } from "lucide-react";
import { Button } from "../ui/button";

export default function Pricing() {
  const featuresA = ["Up to 20 rooms", "Single user account", "24/7 support"];

  return (
    <>
      <div className="h-[40rem] w-full flex flex-col bg-background antialiased bg-grid-black/[0.04] dark:bg-grid-white/[0.04] relative overflow-hidden gap-20 py-8">
        <div className=" p-4 flex flex-col justify-center items-center max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h2 className="text-5xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-700 dark:from-white dark:to-neutral-300 bg-opacity-50">
            It's now, or later.
          </h2>
          <p className="mt-4 font-normal text-lg text-muted-foreground text-center mx-auto max-w-2xl">
            We understand that moving from one system to another is difficult.
            That's why we offer a free plan, allowing you to upgrade at any
            time.
          </p>
        </div>

        <div className="border bg-background flex flex-col justify-between w-full max-w-xs mx-auto p-8 relative h-[30rem]">
          <div className="flex flex-col">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <h4 className="text-muted-foreground mt-4 text-2xl font-semibold">
              Free
            </h4>
            <h3 className="text-foreground mt-3 mb-6 text-4xl font-semibold">
              $0/mo
            </h3>

            {featuresA.map((feature) => (
              <div
                className="flex w-full h-fit items-center mt-1.5"
                key={feature}
              >
                <Check className="text-accent-foreground size-4 mr-2 item" />
                <p className="font-normal text-base text-muted-foreground text-center max-w-2xl">
                  {feature}
                </p>
              </div>
            ))}
          </div>
          <Button variant={"ghost"}>Sign up </Button>
          <p className="text-xs text-border">
            Free properties are paused after 1 month of inactivity.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
