type Props = {
  children: React.ReactNode;
};

export default function Pill({ children }: Props) {
  return (
    <span className="inline-flex items-center rounded-2xl border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs text-teal-300 shadow-sm shadow-black/10 dark:text-teal-200">
      {children}
    </span>
  );
}
