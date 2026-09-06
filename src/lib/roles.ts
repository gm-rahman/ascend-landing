import {
  Shield,
  Users,
  ClipboardList,
  Compass,
  Apple,
  Stethoscope,
  Landmark,
  Brain,
  type LucideIcon,
} from "lucide-react";

export type RoleId =
  | "admin"
  | "leadership"
  | "plan"
  | "pc"
  | "nutritionist"
  | "mp"
  | "pt-im"
  | "scs";

export type RoleDefinition = {
  id: RoleId;
  name: string;
  icon: LucideIcon;
  description: string;
};

export const roles: RoleDefinition[] = [
  { id: "admin", name: "Admin", icon: Shield, description: "System administration and configuration" },
  { id: "leadership", name: "Leadership", icon: Users, description: "Executive oversight and command metrics" },
  { id: "plan", name: "Plan", icon: ClipboardList, description: "Strategic planning and scheduling" },
  { id: "pc", name: "Purpose Coach", icon: Compass, description: "Spiritual/purpose readiness — opt-in support pathway" },
  { id: "nutritionist", name: "Nutritionist", icon: Apple, description: "Nutritional tracking and planning" },
  { id: "mp", name: "MP", icon: Brain, description: "Mental performance coaching and readiness" },
  { id: "pt-im", name: "PT/IM", icon: Stethoscope, description: "Physical therapy and readiness" },
  { id: "scs", name: "SCS", icon: Landmark, description: "Support command services" },
];