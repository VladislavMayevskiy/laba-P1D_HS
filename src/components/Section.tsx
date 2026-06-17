import { Box, Container, type BoxProps } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface SectionProps extends BoxProps {
  id: string;
  children: ReactNode;
}

export function Section({ id, children, ...rest }: SectionProps) {
  return (
    <Box
      as="section"
      id={id}
      scrollMarginTop="80px"
      py={{ base: 16, md: 24 }}
      {...rest}
    >
      <Container maxW="6xl">{children}</Container>
    </Box>
  );
}
