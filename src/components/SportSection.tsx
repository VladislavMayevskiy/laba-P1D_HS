import {
  Flex,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiActivity } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";
import { GlassCard } from "./GlassCard";

export function SportSection() {
  const { t } = useLanguage();

  return (
    <Section id="sport">
      <SectionTitle
        eyebrow={t.sport.eyebrow}
        title={t.sport.title}
        align="left"
      />
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: 8, lg: 12 }}
        align="stretch"
      >
        <VStack flex={1.4} align="flex-start" spacing={5}>
          {t.sport.paragraphs.map((p, i) => (
            <Text key={i} fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800">
              {p}
            </Text>
          ))}
        </VStack>

        <GlassCard flex={1} hover={false}>
          <SimpleGrid columns={2} spacing={4}>
            {t.sport.highlights.map((item) => (
              <VStack
                key={item}
                spacing={2}
                p={4}
                borderRadius="xl"
                bg="whiteAlpha.50"
                borderWidth="1px"
                borderColor="whiteAlpha.100"
                _hover={{ borderColor: "brand.300" }}
                transition="all 0.2s"
              >
                <Flex
                  align="center"
                  justify="center"
                  w={10}
                  h={10}
                  borderRadius="full"
                  bgGradient="linear(135deg, brand.400, purple.500)"
                  color="white"
                >
                  <Icon as={FiActivity} boxSize={5} />
                </Flex>
                <Text fontWeight="600" textAlign="center" fontSize="sm">
                  {item}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </GlassCard>
      </Stack>
    </Section>
  );
}
