"use client";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const POINTS: [number, number][] = [
  [20, 75],
  [40, 50],
  [60, 60],
  [80, 30],
  [100, 20],
];

export default function ProductivityChart() {
  return (
    <div className="lg:col-span-2 glass-card rounded-xl p-6 flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-geist text-2xl font-semibold text-on-surface">
          Productivity Trends
       </h3>
        <button className="text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined">more_horiz</span>
        </button>
      </div>

      <div className="flex-1 min-h-[250px] relative w-full flex items-end justify-between pt-10 border-b border-l border-outline-variant/20 px-3 pb-1">
 <div className="absolute -left-6 top-0 bottom-0 flex flex-col justify-between text-xs text-outline-variant font-semibold py-4">
          <span>100</span>
          <span>75</span>
          <span>50</span>
          <span>25</span>
          <span>0</span>
        </div>

        <svg
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="chart-gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#c0c1ff" />
              <stop offset="100%" stopColor="#c0c1ff" stopOpacity={0} />
            </linearGradient>
          </defs>

          {[25, 50, 75].map((y) => (
            <line
              key={y}
              x1="0"
              x2="100"
              y1={y}
              y2={y}
              stroke="#464554"
              strokeDasharray="2,2"
              strokeWidth="0.2"
            />
          ))}

          <path
            d="M0,80 Q10,70 20,75 T40,50 T60,60 T80,30 T100,20"
            fill="none"
            stroke="#c0c1ff"
            strokeLinecap="round"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />

          <path
            d="M0,80 Q10,70 20,75 T40,50 T60,60 T80,30 T100,20 L100,100 L0,100 Z"
            fill="url(#chart-gradient)"
            opacity="0.2"
          />

          {POINTS.map(([cx, cy]) => (
            <circle key={cx} cx={cx} cy={cy} fill="#c0c1ff" r="1.5" className="ai-glow" />
          ))}
        </svg>
      </div>

      <div className="flex justify-between text-outline-variant text-xs mt-2 px-3">
        {DAYS.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
    </div>
  );
}
