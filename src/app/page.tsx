import { Hero } from "@/components/sections/Hero";
import { PhotoCardGrid } from "@/components/sections/PhotoCardGrid";
import { MagazineTeaser } from "@/components/sections/MagazineTeaser";
import { ResourcesTeaser } from "@/components/sections/ResourcesTeaser";
import { MissionTeaser } from "@/components/sections/MissionTeaser";
import { ScriptureSection } from "@/components/sections/ScriptureSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PhotoCardGrid />
      <MagazineTeaser />
      <ResourcesTeaser />
      <MissionTeaser />
      <ScriptureSection />
    </>
  );
}
