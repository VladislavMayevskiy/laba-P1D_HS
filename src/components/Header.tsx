import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Collapse,
  VStack,
  Text,
  Container,
} from "@chakra-ui/react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface NavLink {
  label: string;
  href: string;
}

export function Header() {
  const { t } = useLanguage();
  const { isOpen, onToggle, onClose } = useDisclosure();

  const links: NavLink[] = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.goal, href: "#goal" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={1000}
      bg="rgba(10, 14, 26, 0.7)"
      backdropFilter="blur(14px)"
      borderBottomWidth="1px"
      borderColor="whiteAlpha.100"
    >
      <Container maxW="6xl">
        <Flex h={16} align="center" justify="space-between">
          <Link
            href="#home"
            _hover={{ textDecoration: "none" }}
            onClick={onClose}
          >
            <Flex
              align="center"
              justify="center"
              w={10}
              h={10}
              borderRadius="xl"
              fontWeight="900"
              fontSize="lg"
              letterSpacing="tight"
              color="white"
              bgGradient="linear(135deg, brand.400, purple.500)"
              boxShadow="0 4px 20px rgba(123, 97, 255, 0.4)"
            >
              VM
            </Flex>
          </Link>

          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                fontSize="sm"
                fontWeight="500"
                color="whiteAlpha.700"
                position="relative"
                _hover={{
                  color: "white",
                  textDecoration: "none",
                }}
                transition="color 0.2s"
              >
                {link.label}
              </Link>
            ))}
          </HStack>

          <HStack spacing={3}>
            <LanguageSwitcher />
            <IconButton
              aria-label="Toggle navigation"
              icon={isOpen ? <FiX /> : <FiMenu />}
              onClick={onToggle}
              variant="ghost"
              color="whiteAlpha.800"
              _hover={{ bg: "whiteAlpha.100" }}
              display={{ base: "inline-flex", md: "none" }}
            />
          </HStack>
        </Flex>
      </Container>

      <Collapse in={isOpen} animateOpacity>
        <Box
          display={{ base: "block", md: "none" }}
          pb={4}
          px={6}
          borderBottomWidth="1px"
          borderColor="whiteAlpha.100"
        >
          <VStack align="stretch" spacing={1}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                py={2}
                px={3}
                borderRadius="md"
                color="whiteAlpha.800"
                _hover={{ bg: "whiteAlpha.100", textDecoration: "none" }}
              >
                <Text fontWeight="500">{link.label}</Text>
              </Link>
            ))}
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
}
