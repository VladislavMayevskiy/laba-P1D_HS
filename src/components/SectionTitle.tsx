import { Box, Heading, Text, VStack } from "@chakra-ui/react";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  const isCenter = align === "center";
  return (
    <VStack
      spacing={3}
      align={isCenter ? "center" : "flex-start"}
      textAlign={isCenter ? "center" : "left"}
      mb={{ base: 10, md: 14 }}
      mx={isCenter ? "auto" : undefined}
      maxW={isCenter ? "2xl" : undefined}
    >
      {eyebrow && (
        <Text
          fontSize="sm"
          fontWeight="600"
          letterSpacing="widest"
          textTransform="uppercase"
          bgGradient="linear(to-r, brand.300, purple.300)"
          bgClip="text"
        >
          {eyebrow}
        </Text>
      )}
      <Heading
        as="h2"
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="800"
        letterSpacing="tight"
      >
        {title}
      </Heading>
      <Box
        w="60px"
        h="4px"
        borderRadius="full"
        bgGradient="linear(to-r, brand.400, purple.400)"
      />
      {subtitle && (
        <Text color="whiteAlpha.700" fontSize={{ base: "md", md: "lg" }}>
          {subtitle}
        </Text>
      )}
    </VStack>
  );
}
