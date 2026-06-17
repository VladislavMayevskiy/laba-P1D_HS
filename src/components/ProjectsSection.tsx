import { VStack } from "@chakra-ui/react";
import { useLanguage } from "../context/LanguageContext";
import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <Section id="projects">
      <SectionTitle
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        subtitle={t.projects.subtitle}
      />
      <VStack spacing={8} align="stretch">
        {t.projects.items.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </VStack>
    </Section>
  );
}
