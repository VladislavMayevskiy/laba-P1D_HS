import {
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Tag,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FiBookOpen, FiAward, FiCalendar, FiTarget } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";
import { GlassCard } from "./GlassCard";

export function EducationSection() {
  const { t } = useLanguage();

  const facts = [
    { icon: FiAward, label: t.education.majorLabel, value: t.education.major },
    { icon: FiCalendar, label: t.education.yearLabel, value: t.education.year },
  ];

  return (
    <Section id="education">
      <SectionTitle eyebrow={t.education.eyebrow} title={t.education.title} />
      <GlassCard hover={false}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          gap={5}
          mb={8}
        >
          <Flex
            align="center"
            justify="center"
            w={14}
            h={14}
            borderRadius="xl"
            bgGradient="linear(135deg, brand.400, purple.500)"
            color="white"
            flexShrink={0}
          >
            <Icon as={FiBookOpen} boxSize={7} />
          </Flex>
          <Heading as="h3" size="lg">
            {t.education.university}
          </Heading>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
          {facts.map((fact) => (
            <HStack
              key={fact.label}
              spacing={4}
              p={4}
              borderRadius="xl"
              bg="whiteAlpha.50"
              borderWidth="1px"
              borderColor="whiteAlpha.100"
            >
              <Icon as={fact.icon} color="brand.300" boxSize={6} />
              <VStack align="flex-start" spacing={0}>
                <Text fontSize="sm" color="whiteAlpha.600">
                  {fact.label}
                </Text>
                <Text fontWeight="700">{fact.value}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>

        <VStack align="flex-start" spacing={4}>
          <HStack spacing={3}>
            <Icon as={FiTarget} color="purple.300" boxSize={5} />
            <Text fontWeight="600" color="whiteAlpha.800">
              {t.education.focusLabel}
            </Text>
          </HStack>
          <Wrap spacing={3}>
            {t.education.focusAreas.map((area) => (
              <WrapItem key={area}>
                <Tag
                  size="lg"
                  borderRadius="full"
                  bg="whiteAlpha.100"
                  borderWidth="1px"
                  borderColor="whiteAlpha.200"
                  color="whiteAlpha.900"
                  px={4}
                  py={2}
                >
                  {area}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </VStack>
      </GlassCard>
    </Section>
  );
}
