import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Tag,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FiCheck, FiCpu, FiStar } from "react-icons/fi";
import type { ProjectItem } from "../data/content";
import { GlassCard } from "./GlassCard";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <GlassCard hover p={{ base: 6, md: 10 }}>
      <Flex
        direction={{ base: "column", sm: "row" }}
        align={{ base: "flex-start", sm: "center" }}
        gap={4}
        mb={6}
      >
        <Flex
          align="center"
          justify="center"
          w={14}
          h={14}
          borderRadius="xl"
          fontWeight="900"
          fontSize="xl"
          color="white"
          bgGradient="linear(135deg, brand.400, purple.500)"
          boxShadow="0 8px 24px rgba(123, 97, 255, 0.4)"
          flexShrink={0}
        >
          {project.name.charAt(0)}
        </Flex>
        <Box>
          <Heading as="h3" size="lg">
            {project.name}
          </Heading>
          <Text color="brand.200" fontWeight="600">
            {project.tagline}
          </Text>
        </Box>
      </Flex>

      <Text color="whiteAlpha.800" fontSize={{ base: "md", md: "lg" }} mb={8}>
        {project.description}
      </Text>

      <SimpleGrid columns={{ base: 1, md: project.ai ? 2 : 1 }} spacing={8} mb={8}>
        <VStack align="flex-start" spacing={3}>
          <HStack spacing={2}>
            <Icon as={FiCheck} color="brand.300" />
            <Text fontWeight="700" textTransform="uppercase" fontSize="sm" letterSpacing="wide">
              {project.featuresLabel}
            </Text>
          </HStack>
          <List spacing={2}>
            {project.features.map((feature) => (
              <ListItem key={feature} color="whiteAlpha.800" display="flex">
                <ListIcon as={FiCheck} color="brand.300" mt={1} />
                {feature}
              </ListItem>
            ))}
          </List>
        </VStack>

        {project.ai && project.aiLabel && (
          <VStack align="flex-start" spacing={3}>
            <HStack spacing={2}>
              <Icon as={FiCpu} color="purple.300" />
              <Text fontWeight="700" textTransform="uppercase" fontSize="sm" letterSpacing="wide">
                {project.aiLabel}
              </Text>
            </HStack>
            <List spacing={2}>
              {project.ai.map((item) => (
                <ListItem key={item} color="whiteAlpha.800" display="flex">
                  <ListIcon as={FiCpu} color="purple.300" mt={1} />
                  {item}
                </ListItem>
              ))}
            </List>
          </VStack>
        )}
      </SimpleGrid>

      <VStack align="flex-start" spacing={3} mb={6}>
        <Text fontWeight="700" textTransform="uppercase" fontSize="sm" letterSpacing="wide" color="whiteAlpha.700">
          {project.techLabel}
        </Text>
        <Wrap spacing={2}>
          {project.tech.map((tech) => (
            <WrapItem key={tech}>
              <Tag
                size="md"
                borderRadius="full"
                bg="whiteAlpha.100"
                borderWidth="1px"
                borderColor="whiteAlpha.200"
                color="whiteAlpha.900"
                px={3}
                py={1}
              >
                {tech}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </VStack>

      <Box
        p={5}
        borderRadius="xl"
        bg="whiteAlpha.50"
        borderWidth="1px"
        borderColor="whiteAlpha.100"
        borderLeftWidth="3px"
        borderLeftColor="brand.400"
      >
        <HStack spacing={2} mb={1}>
          <Icon as={FiStar} color="yellow.300" />
          <Text fontWeight="700" fontSize="sm" textTransform="uppercase" letterSpacing="wide">
            {project.valueLabel}
          </Text>
        </HStack>
        <Text color="whiteAlpha.800">{project.value}</Text>
      </Box>
    </GlassCard>
  );
}
