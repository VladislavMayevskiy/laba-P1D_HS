import { Box } from "@chakra-ui/react";
import { LanguageProvider } from "./context/LanguageContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { EducationSection } from "./components/EducationSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SportSection } from "./components/SportSection";
import { GoalSection } from "./components/GoalSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <Box minH="100vh" bg="#0a0e1a">
        <Header />
        <Box as="main">
          <Hero />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <SportSection />
          <GoalSection />
          <ContactSection />
        </Box>
        <Footer />
      </Box>
    </LanguageProvider>
  );
}

export default App;
