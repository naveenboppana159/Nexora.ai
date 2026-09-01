"use client";

const DATA = [
  { day: "Mon", value: 75 },
  { day: "Tue", value: 50 },
  { day: "Wed", value: 60 },
  { day: "Thu", value: 30 },
  { day: "Fri", value: 20 },
];

const Y_AXIS_VALUES = [100, 75, 50, 25, 0];

export default function ProductivityChart() {
  // Convert actual values into SVG coordinates.
  // SVG y-axis starts from the top:
  // value 100 -> y 0
  // value 75  -> y 25
  // value 50  -> y 50
  // value 25  -> y 75
  // value 0   -> y 100
  const points = DATA.map((item, index) => {
    const x = (index / (DATA.length - 1)) * 100;
    const y = 100 - item.value;

    return {
      ...item,
      x,
      y,
    };
  });

  const linePath = points
    .map((point, index) => {
      if (index === 0) {
        return `M ${point.x} ${point.y}`;
      }

      const previousPoint = points[index - 1];

      const controlX1 =
        previousPoint.x + (point.x - previousPoint.x) / 2;

      const controlX2 =
        previousPoint.x + (point.x - previousPoint.x) / 2;

      return `
        C
        ${controlX1} ${previousPoint.y},
        ${controlX2} ${point.y},
        ${point.x} ${point.y}
      `;
    })
    .join(" ");

  const areaPath = `
    ${linePath}
    L 100 100
    L 0 100
    Z
  `;

  return (
    <div className="lg:col-span-2 glass-card rounded-xl p-6 flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-geist text-2xl font-semibold text-on-surface">
          Productivity Trends
        </h3>

        <button
          type="button"
          className="text-on-surface-variant hover:text-primary transition-colors"
          aria-label="More options"
        >
          <span className="material-symbols-outlined">
            more_horiz
          </span>
        </button>
      </div>

      <div className="flex-1 min-h-[250px] relative w-full">
        {/* Y Axis Labels */}
        <div className="absolute -left-1 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-outline-variant font-semibold py-0">
          {Y_AXIS_VALUES.map((value) => (
            <span
              key={value}
              className="leading-none -translate-y-1/2"
            >
              {value}
            </span>
          ))}
        </div>

        {/* Chart Area */}
        <div className="absolute left-10 right-0 top-0 bottom-0 border-l border-b border-outline-variant/20">
          <svg
            className="absolute inset-0 w-full h-full overflow-visible"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="productivity-chart-gradient"
                x1="0"
                x2="0"
                y1="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#c0c1ff"
                  stopOpacity="0.45"
                />

                <stop
                  offset="100%"
                  stopColor="#c0c1ff"
                  stopOpacity="0"
                />
              </linearGradient>

              <filter
                id="productivity-point-glow"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur
                  stdDeviation="1"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Horizontal Grid Lines */}
            {[0, 25, 50, 75, 100].map((y) => (
              <line
                key={y}
                x1="0"
                x2="100"
                y1={y}
                y2={y}
                stroke="#464554"
                strokeDasharray="2 2"
                strokeWidth="0.3"
                vectorEffect="non-scaling-stroke"
                opacity="0.45"
              />
            ))}

            {/* Gradient Area */}
            <path
              d={areaPath}
              fill="url(#productivity-chart-gradient)"
            />

            {/* Main Line */}
            <path
              d={linePath}
              fill="none"
              stroke="#c0c1ff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
            />

            {/* Data Points */}
            {points.map((point) => (
              <g key={point.day}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="2.2"
                  fill="#c0c1ff"
                  filter="url(#productivity-point-glow)"
                  vectorEffect="non-scaling-stroke"
                />

                <circle
                  cx={point.x}
                  cy={point.y}
                  r="0.9"
                  fill="#ffffff"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* X Axis Days */}
      <div className="ml-10 flex justify-between text-outline-variant text-xs font-medium mt-3">
        {DATA.map((item) => (
          <span
            key={item.day}
            className="text-center"
          >
            {item.day}
          </span>
        ))}
      </div>
    </div>
  );
}