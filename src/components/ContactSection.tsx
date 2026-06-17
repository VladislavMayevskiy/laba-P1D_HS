import {
  Button,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { FiMail, FiMapPin, FiUser } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";
import { GlassCard } from "./GlassCard";

export function ContactSection() {
  const { t } = useLanguage();

  const details = [
    { icon: FiUser, label: t.contact.nameLabel, value: t.contact.name },
    { icon: FiMail, label: t.contact.emailLabel, value: t.contact.email },
    {
      icon: FiMapPin,
      label: t.contact.locationLabel,
      value: t.contact.location,
    },
  ];

  return (
    <Section id="contact">
      <SectionTitle
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />
      <GlassCard hover={false}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
          {details.map((detail) => (
            <VStack
              key={detail.label}
              spacing={2}
              p={5}
              borderRadius="xl"
              bg="whiteAlpha.50"
              borderWidth="1px"
              borderColor="whiteAlpha.100"
              align="center"
              textAlign="center"
            >
              <Flex
                align="center"
                justify="center"
                w={12}
                h={12}
                borderRadius="full"
                bgGradient="linear(135deg, brand.400, purple.500)"
                color="white"
              >
                <Icon as={detail.icon} boxSize={5} />
              </Flex>
              <Text fontSize="sm" color="whiteAlpha.600">
                {detail.label}
              </Text>
              <Text fontWeight="600" wordBreak="break-word">
                {detail.value}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>

        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing={4}
          justify="center"
        >
          <Button
            as="a"
            href={`mailto:${t.contact.email}`}
            size="lg"
            leftIcon={<FiMail />}
            color="white"
            bgGradient="linear(to-r, brand.400, purple.500)"
            _hover={{
              bgGradient: "linear(to-r, brand.300, purple.400)",
              transform: "translateY(-2px)",
              boxShadow: "0 10px 30px rgba(123, 97, 255, 0.4)",
            }}
            transition="all 0.2s"
          >
            {t.contact.emailBtn}
          </Button>

          <Tooltip label={t.contact.comingSoon} hasArrow>
            <Button
              size="lg"
              leftIcon={<Icon as={FaGithub} />}
              variant="outline"
              borderColor="whiteAlpha.300"
              color="whiteAlpha.700"
              isDisabled
              _disabled={{
                opacity: 0.6,
                cursor: "not-allowed",
              }}
            >
              <HStack spacing={2}>
                <Text>{t.contact.githubBtn}</Text>
                <Text fontSize="xs" color="whiteAlpha.500">
                  · {t.contact.comingSoon}
                </Text>
              </HStack>
            </Button>
          </Tooltip>

          <Tooltip label={t.contact.comingSoon} hasArrow>
            <Button
              size="lg"
              leftIcon={<Icon as={FaLinkedin} />}
              variant="outline"
              borderColor="whiteAlpha.300"
              color="whiteAlpha.700"
              isDisabled
              _disabled={{
                opacity: 0.6,
                cursor: "not-allowed",
              }}
            >
              <HStack spacing={2}>
                <Text>{t.contact.linkedinBtn}</Text>
                <Text fontSize="xs" color="whiteAlpha.500">
                  · {t.contact.comingSoon}
                </Text>
              </HStack>
            </Button>
          </Tooltip>
        </Stack>
      </GlassCard>
    </Section>
  );
}
