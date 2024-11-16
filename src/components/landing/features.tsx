"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Features() {
  const features = [
    {
      title: "Reservation Management",
      description:
        "Organize bookings and schedules with an intuitive interface.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-6 sm:col-span-3 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Analytics Dashboard",
      description: "View trends and metrics in one comprehensive dashboard.",
      skeleton: <SkeletonTwo />,
      className:
        "col-span-6 sm:col-span-3  lg:col-span-2 border-b dark:border-neutral-800",
    },
    {
      title: "Comment Collaboration",
      description:
        "Share feedback and collaborate with your team in real-time.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-6 sm:col-span-3 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Guest Bill",
      description: "Manage guest charges for smooth checkout experience.",
      skeleton: <SkeletonFour />,
      className:
        "col-span-6 sm:col-span-3 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with thousands of features
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full mt-8">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex h-40 lg:h-80">
      <div className="w-full relative mx-auto">
        <Image
          src="/feature-calendar.svg"
          alt="header"
          fill
          style={{ objectFit: "contain", objectPosition: "center center" }}
          sizes="800px"
        />
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className="relative flex h-40 lg:h-80">
      <div className="w-full relative mx-auto">
        <Image
          src="/feature-graph.png"
          alt="feature-graph"
          fill
          style={{ objectFit: "contain", objectPosition: "center center" }}
          sizes="800px"
        />
      </div>
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="relative flex h-40 lg:h-80">
      <div className="w-full relative max-w-sm mx-auto">
        <Image
          src="/feature-comment.png"
          alt="header"
          fill
          style={{ objectFit: "contain", objectPosition: "center center" }}
          sizes="600px"
        />
      </div>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="relative flex h-40 lg:h-80">
      <div className="w-full relative mx-auto">
        <Image
          src="/feature-graph.png"
          alt="feature-graph"
          fill
          style={{ objectFit: "contain", objectPosition: "center center" }}
          sizes="800px"
        />
      </div>
    </div>
  );
};
