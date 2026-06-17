import { Box, type BoxProps } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface GlassCardProps extends BoxProps {
  children: ReactNode;
  hover?: boolean;
}

export function GlassCard({ children, hover = true, ...rest }: GlassCardProps) {
  return (
    <Box
      p={{ base: 6, md: 8 }}
      borderRadius="2xl"
      bg="rgba(255, 255, 255, 0.04)"
      backdropFilter="blur(14px)"
      borderWidth="1px"
      borderColor="whiteAlpha.200"
      boxShadow="0 10px 40px rgba(0, 0, 0, 0.35)"
      transition="all 0.3s ease"
      _hover={
        hover
          ? {
              transform: "translateY(-6px)",
              borderColor: "brand.400",
              boxShadow: "0 18px 50px rgba(26, 178, 255, 0.18)",
            }
          : undefined
      }
      {...rest}
    >
      {children}
    </Box>
  );
}
