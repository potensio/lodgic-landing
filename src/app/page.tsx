/* eslint-disable react/no-unescaped-entities */

import React from "react";

import { Benefits } from "@/components/landing/benefits";
import { ThemeToggle } from "@/components/theme-toggle";
import Pricing from "@/components/landing/pricing";
import { Features } from "@/components/landing/features";
import Footer from "@/components/landing/footer";

import Hero from "@/components/landing/hero";

export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-background gap-40">
        <div className="fixed right-10 bottom-10 z-50">
          <ThemeToggle />
        </div>
        <Hero />
        <div className="flex flex-col gap-20 px-4 md:px-8 ">
          <Features />
        </div>

        {/* <div className="p-8"><Features /></div> */}
        <div className="flex flex-col gap-20 px-4 md:px-8 ">
          <div className="flex flex-col">
            <h2 className="text-5xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-700 dark:from-white dark:to-neutral-300 bg-opacity-50">
              Built by Hotelie, for hoteliers.
            </h2>
            <p className="mt-4 font-normal text-lg text-muted-foreground text-center mx-auto max-w-2xl">
              We provide straightforward products and features that you need to
              build your next big thing and hit your next milestone.
            </p>
          </div>
          <Benefits />
        </div>
        <div className="flex flex-col gap-20 px-4 md:px-8 ">
          <Pricing />
        </div>
        <Footer />
      </div>
    </>
  );
}
