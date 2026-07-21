import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import * as Icons from "lucide-react";

type IconName = "LayoutTemplate" | "Building2" | "Monitor" | "BarChart3" | "Settings" | "Code2";

interface ServiceCardProps {
  title: string;
  description: string;
  benefit: string;
  iconName: string;
}

export function ServiceCard({ title, description, benefit, iconName }: ServiceCardProps) {
  // @ts-ignore - Dynamic icon access
  const Icon = Icons[iconName as keyof typeof Icons] || Icons.Code;

  return (
    <Card className="h-full flex flex-col group hover:border-primary/50 transition-colors duration-300">
      <CardHeader>
        <div className="w-12 h-12 rounded-[12px] bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto pt-4 border-t border-border/50">
        <p className="text-sm font-medium text-text-secondary flex items-center gap-2">
          <Icons.CheckCircle2 size={16} className="text-success" />
          {benefit}
        </p>
      </CardContent>
    </Card>
  );
}