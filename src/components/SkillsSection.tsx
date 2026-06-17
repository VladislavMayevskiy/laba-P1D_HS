import {
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Tag,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiTool,
  FiCpu,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { useLanguage } from "../context/LanguageContext";
import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";
import { GlassCard } from "./GlassCard";

const groupIcons: IconType[] = [
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiTool,
  FiCpu,
];

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <Section id="skills">
      <SectionTitle eyebrow={t.skills.eyebrow} title={t.skills.title} />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {t.skills.groups.map((group, i) => (
          <GlassCard key={group.title}>
            <Flex align="center" gap={3} mb={5}>
              <Flex
                align="center"
                justify="center"
                w={10}
                h={10}
                borderRadius="lg"
                bg="whiteAlpha.100"
                color="brand.300"
                flexShrink={0}
              >
                <Icon as={groupIcons[i % groupIcons.length]} boxSize={5} />
              </Flex>
              <Heading as="h3" size="sm" fontWeight="700">
                {group.title}
              </Heading>
            </Flex>
            <Wrap spacing={2}>
              {group.items.map((item) => (
                <WrapItem key={item}>
                  <Tag
                    size="md"
                    borderRadius="full"
                    bg="whiteAlpha.50"
                    borderWidth="1px"
                    borderColor="whiteAlpha.200"
                    color="whiteAlpha.900"
                    px={3}
                    py={1}
                    _hover={{ borderColor: "brand.300", color: "white" }}
                    transition="all 0.2s"
                  >
                    {item}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </GlassCard>
        ))}
      </SimpleGrid>
    </Section>
  );
}
