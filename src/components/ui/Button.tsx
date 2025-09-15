import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "outline";
};

export default function Button({ className, variant = "primary", ...props }: Props) {
  const base = "rounded-2xl px-5 py-2.5 text-sm font-medium transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60";
  const styles =
    variant === "primary"
      ? "bg-teal-500 text-white shadow-[0_8px_24px_-8px_rgba(0,178,169,0.6)] hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-10px_rgba(0,178,169,0.55)]"
      : variant === "outline"
      ? "border border-teal-500/40 text-teal-200 hover:bg-teal-500/10"
      : "bg-transparent text-teal-300 hover:text-white";
  return <button className={cn(base, styles, className)} {...props} />;
}
