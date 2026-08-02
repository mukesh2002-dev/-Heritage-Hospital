"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

function loader() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Skeleton className="h-40 w-40 rounded-full bg-primary/10" />
    </div>
  );
}

export const HeroSkeletonScene = dynamic(() => import("./skeleton-canvas").then((m) => m.SceneCanvas), {
  ssr: false,
  loading: loader,
});

export const SpineScene = dynamic(() => import("./spine-canvas").then((m) => m.SpineScene), {
  ssr: false,
  loading: loader,
});

export const DnaScene = dynamic(() => import("./dna-canvas").then((m) => m.DnaScene), {
  ssr: false,
  loading: loader,
});

export const KneeScene = dynamic(() => import("./knee-canvas").then((m) => m.KneeScene), {
  ssr: false,
  loading: loader,
});

export const MedicalParticles = dynamic(
  () => import("./medical-particles").then((m) => m.MedicalParticles),
  { ssr: false },
);
