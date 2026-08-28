
"use client"
import SideNav from "../../components/SideNav";
import TopNav from "../../components/TopNav";
import MetricCard from "../../components/MetricCard";
import ProductivityChart from "../../components/ProductivityChart";
import ActivityAndDeadlines from "../../components/ActivityAndDeadlines";
import MaterialSymbol from "../../components/MaterialSymbol";


const METRICS = [
  {
    label: "Total Projects",
    value: 12,
    icon: "folder_open",
    accent: "text-primary",
    glow: "bg-primary-container/10",
  },
  {
    label: "Active Tasks",
    value: 48,
    icon: "assignment",
    accent: "text-secondary",
    glow: "bg-secondary/10",
  },
  {
    label: "Completed",
    value: 156,
    icon: "check_circle",
    accent: "text-tertiary",
    glow: "bg-tertiary/10",
  },
];

interface DashboardProps {
  userName?: string;
  avatarUrl?: string;
}

export default function Dashboard({
  userName = "Sarah",
  avatarUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuB-Hw3AaGVq7AODfcxzkDC6_JV33RiOHZ4MYlNlFr2t-AELNSVItxetuKi-uSpuYaPobeiKDmWmBCbqL76JqQPrvrbDEuMpFtZX1pSVn7oMcZJvttq3d0ngN3jVp-dUzkm8qPAxH7Gp1n-gv60KSSpcxK0G3j4P6GqMB2i1DnX_Pmirc8obr5UKrNvl8bp_ySrwS3k-tCXDDb-GIExLPvfDyjLRy_kdGMy8S49k60PJEON29ymxnZeY3A",
}: DashboardProps) {
  return (
    <div className="bg-background text-on-background font-inter flex h-screen overflow-hidden antialiased dark">
      <SideNav />

      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <TopNav userName={userName} avatarUrl={avatarUrl} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 xl:p-8 2xl:px-16">
          <div className="max-w-7xl mx-auto space-y-8 pb-12">
            {/* Welcome */}
            <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="font-geist font-bold text-on-surface text-2xl md:text-5xl tracking-tight">
                  Welcome back, {userName}!
                </h2>
                <p className="text-lg text-on-surface-variant mt-2">
                  Here is what's happening with your workspace today.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-lg bg-surface-container border border-outline-variant/30 text-sm text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-2">
                  <MaterialSymbol icon="calendar_today" className="text-[18px]" />
                  Today
                </button>
              </div>
            </section>

            {/* Metrics */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {METRICS.map((m) => (
                <MetricCard key={m.label} {...m} />
              ))}
              <MetricCard
                label="Productivity Score"
                value={94}
                suffix="%"
                icon="auto_awesome"
                accent="text-primary"
                glow="bg-primary-container/10"
                highlight
              />
            </section>

            {/* Chart + Activity */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ProductivityChart />
              <ActivityAndDeadlines />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
