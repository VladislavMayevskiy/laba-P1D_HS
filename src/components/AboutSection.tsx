import {
  SimpleGrid,
  Stack,
  Text,
  VStack,
  HStack,
  Icon,
  Heading,
} from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";
import { GlassCard } from "./GlassCard";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <Section id="about">
      <SectionTitle
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        align="left"
      />
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: 8, lg: 12 }}
        align="stretch"
      >
        <VStack flex={1.4} align="flex-start" spacing={5}>
          {t.about.paragraphs.map((p, i) => (
            <Text key={i} fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800">
              {p}
            </Text>
          ))}
        </VStack>

        <GlassCard flex={1} hover={false}>
          <Heading as="h3" size="md" mb={5}>
            {t.about.focusTitle}
          </Heading>
          <SimpleGrid columns={1} spacing={3}>
            {t.about.focusAreas.map((area) => (
              <HStack key={area} spacing={3}>
                <Icon as={FiCheckCircle} color="brand.300" boxSize={5} />
                <Text color="whiteAlpha.900" fontWeight="500">
                  {area}
                </Text>
              </HStack>
            ))}
          </SimpleGrid>
        </GlassCard>
      </Stack>
    </Section>
  );
}
