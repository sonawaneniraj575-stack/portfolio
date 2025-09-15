import { motion, useReducedMotion } from "framer-motion";
import { forwardRef } from "react";

type Props = React.PropsWithChildren<{
  id: string;
  className?: string;
}>;

export const Section = forwardRef<HTMLElement, Props>(function Section(
  { id, className, children },
  ref
) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

  return (
    <motion.section
      id={id}
      ref={ref as any}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={variants}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
});
