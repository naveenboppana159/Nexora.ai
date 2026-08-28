"use client";

import { ReactNode } from "react";
import MaterialSymbol from "./MaterialSymbol";

interface Activity {
  icon: string;
  iconBg: string;
  iconColor: string;
  text: ReactNode;
  time: string;
}

const ACTIVITIES: Activity[] = [
  {
    text: (
      <>
        Task{" "}
        <span className="font-semibold text-primary">
          &quot;Refactor API&quot;
        </span>{" "}
        completed.
      </>
    ),
    time: "2 hours ago",
  },
  {
    text: (
      <>
        Project{" "}
        <span className="font-semibold text-primary">
          &quot;Nexora v2&quot;
        </span>{" "}
        created.
      </>
    ),
    time: "5 hours ago",
  },
  {
    text: <>AI Assistant suggested 3 optimizations.</>,
    time: "Yesterday",
  },
];

interface Deadline {
  title: string;
  time: string;
  timeColor: string;
  border: string;
}

const DEADLINES: Deadline[] = [
  {
    title: "Client Presentation",
    time: "Today, 2:00 PM",
    timeColor: "text-error",
    border: "border-error",
  },
  {
    title: "Submit Design Specs",
    time: "Tomorrow, 5:00 PM",
    timeColor: "text-on-surface-variant",
    border: "border-secondary",
  },
];

export default function ActivityAndDeadlines() {
  return (
    <div className="flex flex-col space-y-6">
      {/* Recent Activity */}
      <div className="glass-card flex-1 rounded-xl p-6">
        <h3 className="mb-4 text-lg font-semibold text-on-surface">
          Recent Activity
        </h3>

        <div className="space-y-4">
          {ACTIVITIES.map((a, i) => (
            <div key={i} className="group flex items-start gap-3">
              <div
                className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${a.iconBg}`}
              >
                <MaterialSymbol
                  icon={a.icon}
                  className={`text-[16px] ${a.iconColor}`}
                />
              </div>

              <div>
                <p className="text-sm text-on-surface">{a.text}</p>
                <span className="text-[11px] text-on-surface-variant">
                  {a.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-6 w-full rounded border border-outline-variant/30 py-2 text-sm text-on-surface-variant transition-colors hover:bg-surface-container-high">
          View All
        </button>
      </div>

      {/* Upcoming Deadlines */}
      <div className="glass-card rounded-xl p-6">
        <h3 className="mb-4 text-lg font-semibold text-on-surface">
          Upcoming Deadlines
        </h3>

        <div className="space-y-3">
          {DEADLINES.map((d) => (
            <div
              key={d.title}
              className={`group flex cursor-pointer items-center justify-between rounded-lg border-l-2 bg-surface-container-highest p-3 transition-colors hover:bg-surface-bright ${d.border}`}
            >
              <div>
                <h4 className="text-sm text-on-surface">{d.title}</h4>

                <p className={`mt-0.5 text-[11px] ${d.timeColor}`}>
                  {d.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}