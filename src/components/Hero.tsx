import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <Box
      as="section"
      id="home"
      position="relative"
      overflow="hidden"
      pt={{ base: 20, md: 28 }}
      pb={{ base: 16, md: 24 }}
    >
      <Box
        position="absolute"
        top="-20%"
        left="-10%"
        w="500px"
        h="500px"
        bg="brand.500"
        opacity={0.18}
        filter="blur(120px)"
        borderRadius="full"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-30%"
        right="-10%"
        w="500px"
        h="500px"
        bg="purple.500"
        opacity={0.18}
        filter="blur(120px)"
        borderRadius="full"
        pointerEvents="none"
      />

      <Container maxW="6xl" position="relative">
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: 12, lg: 16 }}
          align="center"
        >
          <VStack
            flex={1}
            align={{ base: "center", lg: "flex-start" }}
            textAlign={{ base: "center", lg: "left" }}
            spacing={6}
          >
            <Tag
              size="md"
              borderRadius="full"
              px={4}
              py={2}
              bg="whiteAlpha.100"
              borderWidth="1px"
              borderColor="whiteAlpha.200"
              color="brand.200"
              fontWeight="600"
            >
              {t.hero.cardTitle}
            </Tag>

            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="900"
              lineHeight="1.05"
              letterSpacing="tight"
            >
              <Box
                as="span"
                bgGradient="linear(to-r, white, whiteAlpha.800)"
                bgClip="text"
              >
                {t.hero.name}
              </Box>
            </Heading>

            <Text
              fontSize={{ base: "md", md: "xl" }}
              fontWeight="600"
              bgGradient="linear(to-r, brand.300, purple.300)"
              bgClip="text"
            >
              {t.hero.subtitle}
            </Text>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="whiteAlpha.700"
              maxW="xl"
            >
              {t.hero.text}
            </Text>

            <HStack spacing={4} pt={2} flexWrap="wrap" justify="center">
              <Button
                as="a"
                href="#projects"
                size="lg"
                rightIcon={<FiArrowRight />}
                color="white"
                bgGradient="linear(to-r, brand.400, purple.500)"
                _hover={{
                  bgGradient: "linear(to-r, brand.300, purple.400)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 30px rgba(123, 97, 255, 0.4)",
                }}
                _active={{ transform: "translateY(0)" }}
                transition="all 0.2s"
              >
                {t.hero.viewProjects}
              </Button>
              <Button
                as="a"
                href="#contact"
                size="lg"
                variant="outline"
                leftIcon={<FiMail />}
                borderColor="whiteAlpha.300"
                color="white"
                _hover={{
                  bg: "whiteAlpha.100",
                  borderColor: "brand.300",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.2s"
              >
                {t.hero.contactMe}
              </Button>
            </HStack>
          </VStack>

          <Flex flex={1} justify="center" w="full">
            <HeroCard />
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}

function HeroCard() {
  const { t } = useLanguage();

  return (
    <Box
      w="full"
      maxW="sm"
      p={8}
      borderRadius="2xl"
      bg="rgba(255, 255, 255, 0.04)"
      backdropFilter="blur(16px)"
      borderWidth="1px"
      borderColor="whiteAlpha.200"
      boxShadow="0 20px 60px rgba(0, 0, 0, 0.5)"
      position="relative"
      transition="transform 0.3s ease"
      _hover={{ transform: "translateY(-6px)" }}
    >
      <VStack spacing={6}>
        <Flex
          align="center"
          justify="center"
          w={28}
          h={28}
          borderRadius="full"
          fontSize="5xl"
          fontWeight="900"
          color="white"
          bgGradient="linear(135deg, brand.400, purple.500)"
          boxShadow="0 10px 40px rgba(123, 97, 255, 0.5)"
        >
          VM
        </Flex>

        <VStack spacing={1}>
          <Heading as="h3" size="md" textAlign="center">
            {t.hero.name}
          </Heading>
          <Text color="brand.200" fontWeight="600">
            {t.hero.cardTitle}
          </Text>
        </VStack>

        <Wrap justify="center" spacing={2}>
          {t.hero.badges.map((badge) => (
            <WrapItem key={badge}>
              <Tag
                size="sm"
                borderRadius="full"
                bg="whiteAlpha.100"
                borderWidth="1px"
                borderColor="whiteAlpha.200"
                color="whiteAlpha.900"
                px={3}
                py={1}
              >
                {badge}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
    </Box>
  );
}
