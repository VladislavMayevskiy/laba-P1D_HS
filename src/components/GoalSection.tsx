import {
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiTrendingUp, FiArrowUpRight } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";
import { GlassCard } from "./GlassCard";

export function GoalSection() {
  const { t } = useLanguage();

  return (
    <Section id="goal">
      <SectionTitle eyebrow={t.goal.eyebrow} title={t.goal.title} />
      <GlassCard hover={false}>
        <HStack spacing={4} mb={6} align="flex-start">
          <Icon as={FiTrendingUp} color="brand.300" boxSize={8} flexShrink={0} />
          <VStack align="flex-start" spacing={4}>
            {t.goal.paragraphs.map((p, i) => (
              <Text key={i} fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800">
                {p}
              </Text>
            ))}
          </VStack>
        </HStack>

        <Heading as="h3" size="md" mt={8} mb={5}>
          {t.goal.interestsTitle}
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
          {t.goal.interests.map((interest) => (
            <HStack
              key={interest}
              spacing={3}
              p={4}
              borderRadius="xl"
              bg="whiteAlpha.50"
              borderWidth="1px"
              borderColor="whiteAlpha.100"
              _hover={{ borderColor: "purple.300", transform: "translateY(-3px)" }}
              transition="all 0.2s"
            >
              <Icon as={FiArrowUpRight} color="purple.300" />
              <Text fontWeight="500">{interest}</Text>
            </HStack>
          ))}
        </SimpleGrid>
      </GlassCard>
    </Section>
  );
}
