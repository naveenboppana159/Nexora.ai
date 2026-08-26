import { Bot, BarChart3, Users } from "lucide-react";
import type { Feature } from "../types/feature";

export const features: Feature[] = [
  {
    title: "Smart Automation",
    description:
      "Eliminate repetitive work with context-aware AI agents that understand your workflows and execute tasks intelligently.",
    icon: Bot,
    accentColor: "#c0c1ff",
  },
  {
    title: "Team Collaboration",
    description:
      "Bring your team together with shared workspaces, seamless communication, and real-time collaboration.",
    icon: Users,
    accentColor: "#4edea3",
  },
  {
    title: "AI Insights",
    description:
      "Transform complex data into actionable insights with predictive analytics designed for faster decision-making.",
    icon: BarChart3,
    accentColor: "#ffb2b7",
  },
];