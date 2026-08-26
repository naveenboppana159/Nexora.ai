import type { Feature } from "../types/feature";

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const Icon = feature.icon;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]">
      <div
        className="absolute inset-x-10 top-0 h-px opacity-70"
        style={{
          background: `linear-gradient(90deg, transparent, ${feature.accentColor}, transparent)`,
        }}
      />

      <div
        className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10"
        style={{
          backgroundColor: `${feature.accentColor}18`,
          boxShadow: `0 10px 40px ${feature.accentColor}12`,
        }}
      >
        <Icon
          className="h-7 w-7"
          style={{ color: feature.accentColor }}
          aria-hidden="true"
        />
      </div>

      <h3 className="font-geist text-xl font-semibold text-white">
        {feature.title}
      </h3>

      <p className="mt-3 leading-7 text-slate-400">
        {feature.description}
      </p>

      <div
        className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition duration-500 group-hover:opacity-30"
        style={{ backgroundColor: feature.accentColor }}
      />
    </article>
  );
};

export default FeatureCard;