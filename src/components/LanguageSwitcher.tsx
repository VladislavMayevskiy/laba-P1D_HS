import { ButtonGroup, Button } from "@chakra-ui/react";
import { useLanguage } from "../context/LanguageContext";
import type { Lang } from "../data/content";

const options: { value: Lang; label: string }[] = [
  { value: "ua", label: "UA" },
  { value: "en", label: "EN" },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <ButtonGroup
      isAttached
      size="sm"
      borderRadius="full"
      bg="whiteAlpha.100"
      borderWidth="1px"
      borderColor="whiteAlpha.200"
      p="2px"
    >
      {options.map((opt) => {
        const isActive = lang === opt.value;
        return (
          <Button
            key={opt.value}
            onClick={() => setLang(opt.value)}
            borderRadius="full"
            fontWeight="700"
            px={4}
            variant="unstyled"
            color={isActive ? "white" : "whiteAlpha.600"}
            bgGradient={
              isActive ? "linear(to-r, brand.400, purple.400)" : undefined
            }
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            transition="all 0.2s"
            _hover={{ color: "white" }}
            aria-pressed={isActive}
          >
            {opt.label}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}
