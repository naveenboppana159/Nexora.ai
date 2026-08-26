import { features } from "../data/features";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#4edea3]">
            Built for momentum
          </p>

          <h2 className="mt-5 font-geist text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Intelligent by Design
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Discover the core pillars that make Nexora AI the ultimate tool for
            high-performing teams.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;