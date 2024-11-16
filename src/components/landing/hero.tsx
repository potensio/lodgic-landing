import { Spotlight } from "@/components/ui/spotlight";

export default function Hero() {
  return (
    <>
      <div className="h-[40rem] w-full flex bg-background antialiased bg-grid-black/[0.04] dark:bg-grid-white/[0.04] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="var(--foreground)"
        />
        <div className=" p-4 flex flex-col justify-center items-center max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0">
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block w-fit mb-8">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <span>Vote us on Product Hunt</span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
          <h1 className="text-7xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-700 dark:from-white dark:to-neutral-300 bg-opacity-50">
            Seamless System for
            <br />
            Growth Hotel
          </h1>
          <p className="mt-4 font-normal text-xl text-muted-foreground text-center mx-auto max-w-2xl">
            A modern hotel system that simplifies your day-to-day operations.
            Enjoy our free tier and upgrade whenever you’re ready.
          </p>
        </div>
      </div>
    </>
  );
}
