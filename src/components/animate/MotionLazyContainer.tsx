import { type ReactNode } from "react";
import { LazyMotion } from "framer-motion";

const loadFeatures = () => import("./features.ts").then((res) => res.default);

export default function MotionLazyContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <LazyMotion strict features={loadFeatures}>
      {children}
    </LazyMotion>
  );
}
