import { Box, Container, Flex, Text, Link, HStack } from "@chakra-ui/react";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <Box
      as="footer"
      borderTopWidth="1px"
      borderColor="whiteAlpha.100"
      bg="rgba(10, 14, 26, 0.6)"
      py={8}
    >
      <Container maxW="6xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={4}
        >
          <Text color="whiteAlpha.600" fontSize="sm" textAlign="center">
            {t.footer}
          </Text>
          <HStack spacing={6}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                fontSize="sm"
                color="whiteAlpha.600"
                _hover={{ color: "brand.300", textDecoration: "none" }}
              >
                {link.label}
              </Link>
            ))}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
