import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLDivElement>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface-muted) px-3 py-1 text-xs font-medium text-(--foreground)/75 backdrop-blur transition-colors",
        className,
      )}
      {...props}
    />
  );
}