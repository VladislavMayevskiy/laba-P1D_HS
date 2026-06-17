export type Lang = "en" | "ua";

export interface NavContent {
  about: string;
  skills: string;
  projects: string;
  goal: string;
  contact: string;
}

export interface HeroContent {
  name: string;
  subtitle: string;
  text: string;
  viewProjects: string;
  contactMe: string;
  cardTitle: string;
  badges: string[];
}

export interface AboutContent {
  title: string;
  eyebrow: string;
  paragraphs: string[];
  focusTitle: string;
  focusAreas: string[];
}

export interface EducationContent {
  title: string;
  eyebrow: string;
  university: string;
  majorLabel: string;
  major: string;
  yearLabel: string;
  year: string;
  focusLabel: string;
  focusAreas: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface SkillsContent {
  title: string;
  eyebrow: string;
  groups: SkillGroup[];
}

export interface ProjectItem {
  name: string;
  tagline: string;
  description: string;
  featuresLabel: string;
  features: string[];
  aiLabel?: string;
  ai?: string[];
  techLabel: string;
  tech: string[];
  valueLabel: string;
  value: string;
}

export interface ProjectsContent {
  title: string;
  eyebrow: string;
  subtitle: string;
  items: ProjectItem[];
}

export interface SportContent {
  title: string;
  eyebrow: string;
  paragraphs: string[];
  highlights: string[];
}

export interface GoalContent {
  title: string;
  eyebrow: string;
  paragraphs: string[];
  interestsTitle: string;
  interests: string[];
}

export interface ContactContent {
  title: string;
  eyebrow: string;
  subtitle: string;
  nameLabel: string;
  name: string;
  emailLabel: string;
  email: string;
  locationLabel: string;
  location: string;
  emailBtn: string;
  githubBtn: string;
  companyName: string;
}

export interface LangContent {
  nav: NavContent;
  hero: HeroContent;
  about: AboutContent;
  education: EducationContent;
  skills: SkillsContent;
  projects: ProjectsContent;
  sport: SportContent;
  goal: GoalContent;
  contact: ContactContent;
  footer: string;
}

export type Content = Record<Lang, LangContent>;

export const content: Content = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      goal: "Goal",
      contact: "Contact",
    },
    hero: {
      name: "Vladyslav Maievskyi",
      subtitle:
        "Full-stack Developer | Applied Mathematics Student | AI & Web Development",
      text: "I am a first-year Applied Mathematics student at Uzhhorod National University. I build frontend interfaces, backend services, database-driven systems and AI-powered products — turning ideas into real, working software.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      cardTitle: "Full-stack Developer",
      badges: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker", "AI"],
    },
    about: {
      title: "About Me",
      eyebrow: "Who I am",
      paragraphs: [
        "I am Vladyslav Maievskyi, a first-year Applied Mathematics student at Uzhhorod National University and a developing full-stack developer.",
        "I work across the entire stack — frontend, backend, databases, APIs, Docker and AI-powered product ideas. I am driven by building real products that solve real problems, not just practice exercises.",
        "I am an athlete as well, and sport gives me the discipline, consistency, endurance and focus that I bring into every line of code I write.",
      ],
      focusTitle: "What I focus on",
      focusAreas: [
        "Full-stack development",
        "AI products",
        "Automation",
        "Educational platforms",
        "Sports tech",
        "SaaS products",
      ],
    },
    education: {
      title: "Education",
      eyebrow: "My academic path",
      university: "Uzhhorod National University",
      majorLabel: "Major",
      major: "Applied Mathematics",
      yearLabel: "Year",
      year: "First-year student",
      focusLabel: "Focus",
      focusAreas: [
        "Programming",
        "Algorithms",
        "Web development",
        "Backend",
        "Databases",
        "Artificial intelligence",
      ],
    },
    skills: {
      title: "Skills",
      eyebrow: "My technical toolkit",
      groups: [
        {
          title: "Programming Languages",
          items: ["TypeScript", "HTML", "CSS", "Python", "C++", "Ruby", "SQL"],
        },
        {
          title: "Frontend",
          items: [
            "React",
            "MobX",
            "Vite",
            "Responsive UI",
            "Forms",
            "API Integration",
            "Component Architecture",
          ],
        },
        {
          title: "Backend",
          items: [
            "Python",
            "FastAPI",
            "REST API",
            "Authentication",
            "User Roles",
            "Business Logic",
            "Backend Architecture",
          ],
        },
        {
          title: "Databases",
          items: [
            "PostgreSQL",
            "SQL",
            "Alembic",
            "Table Relations",
            "Database Migrations",
          ],
        },
        {
          title: "Tools",
          items: [
            "Docker",
            "Git",
            "GitHub",
            "VS Code",
            "Postman",
            "Terminal",
            "Environment Variables",
          ],
        },
        {
          title: "Additional",
          items: [
            "AI Tools",
            "LMS Systems",
            "SaaS Products",
            "Product Logic",
            "UX/UI Logic",
            "Startup Development",
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      eyebrow: "Real products, not just practice",
      subtitle:
        "A selection of products I am building — combining solid engineering, product thinking and AI.",
      items: [
        {
          name: "Coursa.ai",
          tagline: "AI-powered LMS platform",
          description:
            "Coursa.ai is an LMS (Learning Management System) for organizing online education. It is designed as an educational digital product for students, teachers, mentors, trainers and learning centers. The main idea is to make learning more structured, convenient and personalized using a modern web interface and AI tools.",
          featuresLabel: "Features",
          features: [
            "Course creation",
            "Lessons and modules",
            "User dashboard",
            "Roles: student, teacher, administrator",
            "Learning materials",
            "Assignments and tests",
            "Student progress tracking",
            "Modern frontend interface",
            "Backend logic for users, courses and learning data",
            "Possible AI assistant integration",
          ],
          aiLabel: "AI direction",
          ai: [
            "Generate explanations for difficult topics",
            "Create tests",
            "Suggest tasks based on student level",
            "Analyze progress",
            "Provide learning recommendations",
            "Help teachers create educational materials faster",
          ],
          techLabel: "Technologies",
          tech: [
            "React",
            "TypeScript",
            "Python",
            "FastAPI",
            "PostgreSQL",
            "Docker",
            "REST API",
            "Git/GitHub",
          ],
          valueLabel: "Value",
          value:
            "Coursa.ai shows product thinking, not only coding skills. It can grow into a complete SaaS LMS platform with roles, learning structure, backend logic and AI features.",
        },
        {
          name: "BuildCalcAI",
          tagline: "AI for construction calculations",
          description:
            "BuildCalcAI is an AI-powered platform for construction calculations and automation of construction-related tasks. The main idea is to help users quickly get calculations, explanations, work structure and recommendations for different construction processes.",
          featuresLabel: "Features",
          features: [
            "Construction calculations",
            "AI-generated explanations",
            "Work planning assistance",
            "Support for different types of construction tasks",
            "AI assistant for quick information",
            "Frontend for user interaction",
            "Backend for request processing and business logic",
          ],
          techLabel: "Technologies",
          tech: [
            "React",
            "TypeScript",
            "Python",
            "FastAPI",
            "PostgreSQL",
            "Docker",
            "REST API",
          ],
          valueLabel: "Value",
          value:
            "BuildCalcAI is a practical AI product idea for a real industry. It combines programming, construction logic, AI and a useful interface.",
        },
        {
          name: "Mavix-Fit",
          tagline: "Gym management platform",
          description:
            "Mavix-Fit is a platform for gyms, trainers, administrators, owners and clients. The main idea is to automate gym management: users, clients, memberships, roles, training processes and future AI assistance for trainers.",
          featuresLabel: "Features",
          features: [
            "User creation",
            "Client management",
            "Memberships",
            "Roles and permissions",
            "Backend logic for gyms",
            "Trainer management",
            "Future AI trainer assistant",
            "Possible mobile app expansion",
          ],
          aiLabel: "AI direction",
          ai: [
            "Generate workout programs",
            "Analyze client progress",
            "Give trainer recommendations",
            "Suggest exercises",
            "Help with training load planning",
          ],
          techLabel: "Technologies",
          tech: [
            "Python",
            "FastAPI",
            "PostgreSQL",
            "Docker",
            "Alembic",
            "REST API",
            "JWT Auth",
            "React",
            "TypeScript",
          ],
          valueLabel: "Value",
          value:
            "Mavix-Fit is a serious product project with architecture, roles, business logic and real-world use cases.",
        },
      ],
    },
    sport: {
      title: "Sport & Discipline",
      eyebrow: "Beyond the code",
      paragraphs: [
        "Sport is an important part of my life. It helps me build discipline, consistency, willpower, patience and the ability to progress step by step.",
        "I see a deep connection between sport and programming: both require regular practice, honest analysis of mistakes and long-term discipline. Progress in both comes from showing up every day and improving by small, consistent steps.",
      ],
      highlights: [
        "Discipline",
        "Consistency",
        "Willpower",
        "Patience",
        "Endurance",
        "Focus",
      ],
    },
    goal: {
      title: "Goal",
      eyebrow: "Where I'm heading",
      paragraphs: [
        "My main goal is to grow as a full-stack developer and build real digital products that people actually use.",
        "I want to keep combining strong engineering with product thinking and AI to create tools that make a difference.",
      ],
      interestsTitle: "Interests",
      interests: [
        "Educational platforms",
        "AI services",
        "Backend systems",
        "SaaS products",
        "Sports tech",
        "Business automation",
        "Startups",
      ],
    },
    contact: {
      title: "Contact",
      eyebrow: "Let's connect",
      subtitle:
        "Open to opportunities, collaborations and interesting product ideas.",
      nameLabel: "Name",
      name: "Vladyslav Maievskyi",
      emailLabel: "Email",
      email: "vladislavmaevski46@gmail.com",
      locationLabel: "Location",
      location: "Ukraine",
      emailBtn: "Email",
      githubBtn: "GitHub",
      companyName: "Devensis",
    },
    footer:
      "© 2026 Vladyslav Maievskyi. Built with React, TypeScript and Chakra UI.",
  },
  ua: {
    nav: {
      about: "Про мене",
      skills: "Навички",
      projects: "Проєкти",
      goal: "Мета",
      contact: "Контакти",
    },
    hero: {
      name: "Маєвський Владислав",
      subtitle:
        "Full-stack розробник | Студент прикладної математики | AI та Web-розробка",
      text: "Я студент першого курсу спеціальності «Прикладна математика» в Ужгородському національному університеті. Я створюю frontend-інтерфейси, backend-сервіси, системи з базами даних та продукти на основі AI — перетворюючи ідеї на реальне робоче програмне забезпечення.",
      viewProjects: "Переглянути проєкти",
      contactMe: "Зв'язатися зі мною",
      cardTitle: "Full-stack розробник",
      badges: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker", "AI"],
    },
    about: {
      title: "Про мене",
      eyebrow: "Хто я",
      paragraphs: [
        "Я Владислав Маєвський, студент першого курсу спеціальності «Прикладна математика» в Ужгородському національному університеті та full-stack розробник, що розвивається.",
        "Я працюю з усім стеком — frontend, backend, базами даних, API, Docker та ідеями продуктів на основі AI. Мене мотивує створення реальних продуктів, які вирішують справжні проблеми, а не просто навчальні вправи.",
        "Я також спортсмен, і спорт дає мені дисципліну, послідовність, витривалість і концентрацію, які я вкладаю в кожен рядок написаного коду.",
      ],
      focusTitle: "На чому я зосереджений",
      focusAreas: [
        "Full-stack розробка",
        "AI-продукти",
        "Автоматизація",
        "Освітні платформи",
        "Спортивні технології",
        "SaaS-продукти",
      ],
    },
    education: {
      title: "Освіта",
      eyebrow: "Мій академічний шлях",
      university: "Ужгородський національний університет",
      majorLabel: "Спеціальність",
      major: "Прикладна математика",
      yearLabel: "Курс",
      year: "Студент першого курсу",
      focusLabel: "Напрями",
      focusAreas: [
        "Програмування",
        "Алгоритми",
        "Web-розробка",
        "Backend",
        "Бази даних",
        "Штучний інтелект",
      ],
    },
    skills: {
      title: "Навички",
      eyebrow: "Мій технічний інструментарій",
      groups: [
        {
          title: "Мови програмування",
          items: ["TypeScript", "HTML", "CSS", "Python", "C++", "Ruby", "SQL"],
        },
        {
          title: "Frontend",
          items: [
            "React",
            "MobX",
            "Vite",
            "Адаптивний UI",
            "Форми",
            "Інтеграція API",
            "Архітектура компонентів",
          ],
        },
        {
          title: "Backend",
          items: [
            "Python",
            "FastAPI",
            "REST API",
            "Автентифікація",
            "Ролі користувачів",
            "Бізнес-логіка",
            "Архітектура backend",
          ],
        },
        {
          title: "Бази даних",
          items: [
            "PostgreSQL",
            "SQL",
            "Alembic",
            "Зв'язки таблиць",
            "Міграції баз даних",
          ],
        },
        {
          title: "Інструменти",
          items: [
            "Docker",
            "Git",
            "GitHub",
            "VS Code",
            "Postman",
            "Термінал",
            "Змінні середовища",
          ],
        },
        {
          title: "Додатково",
          items: [
            "AI-інструменти",
            "LMS-системи",
            "SaaS-продукти",
            "Логіка продукту",
            "UX/UI логіка",
            "Розробка стартапів",
          ],
        },
      ],
    },
    projects: {
      title: "Проєкти",
      eyebrow: "Реальні продукти, а не лише практика",
      subtitle:
        "Добірка продуктів, які я створюю — поєднання надійної інженерії, продуктового мислення та AI.",
      items: [
        {
          name: "Coursa.ai",
          tagline: "LMS-платформа на основі AI",
          description:
            "Coursa.ai — це LMS (система управління навчанням) для організації онлайн-освіти. Вона створена як освітній цифровий продукт для студентів, викладачів, менторів, тренерів та навчальних центрів. Головна ідея — зробити навчання більш структурованим, зручним і персоналізованим за допомогою сучасного web-інтерфейсу та AI-інструментів.",
          featuresLabel: "Можливості",
          features: [
            "Створення курсів",
            "Уроки та модулі",
            "Панель користувача",
            "Ролі: студент, викладач, адміністратор",
            "Навчальні матеріали",
            "Завдання та тести",
            "Відстеження прогресу студента",
            "Сучасний frontend-інтерфейс",
            "Backend-логіка для користувачів, курсів та навчальних даних",
            "Можлива інтеграція AI-асистента",
          ],
          aiLabel: "AI-напрям",
          ai: [
            "Генерація пояснень складних тем",
            "Створення тестів",
            "Пропозиція завдань відповідно до рівня студента",
            "Аналіз прогресу",
            "Рекомендації для навчання",
            "Допомога викладачам швидше створювати навчальні матеріали",
          ],
          techLabel: "Технології",
          tech: [
            "React",
            "TypeScript",
            "Python",
            "FastAPI",
            "PostgreSQL",
            "Docker",
            "REST API",
            "Git/GitHub",
          ],
          valueLabel: "Цінність",
          value:
            "Coursa.ai демонструє продуктове мислення, а не лише навички програмування. Проєкт може вирости в повноцінну SaaS LMS-платформу з ролями, структурою навчання, backend-логікою та AI-можливостями.",
        },
        {
          name: "BuildCalcAI",
          tagline: "AI для будівельних розрахунків",
          description:
            "BuildCalcAI — це платформа на основі AI для будівельних розрахунків та автоматизації завдань, пов'язаних із будівництвом. Головна ідея — допомогти користувачам швидко отримувати розрахунки, пояснення, структуру робіт та рекомендації для різних будівельних процесів.",
          featuresLabel: "Можливості",
          features: [
            "Будівельні розрахунки",
            "Пояснення, згенеровані AI",
            "Допомога в плануванні робіт",
            "Підтримка різних типів будівельних завдань",
            "AI-асистент для швидкої інформації",
            "Frontend для взаємодії з користувачем",
            "Backend для обробки запитів та бізнес-логіки",
          ],
          techLabel: "Технології",
          tech: [
            "React",
            "TypeScript",
            "Python",
            "FastAPI",
            "PostgreSQL",
            "Docker",
            "REST API",
          ],
          valueLabel: "Цінність",
          value:
            "BuildCalcAI — це практична ідея AI-продукту для реальної галузі. Вона поєднує програмування, будівельну логіку, AI та корисний інтерфейс.",
        },
        {
          name: "Mavix-Fit",
          tagline: "Платформа управління спортзалами",
          description:
            "Mavix-Fit — це платформа для спортзалів, тренерів, адміністраторів, власників та клієнтів. Головна ідея — автоматизувати управління спортзалом: користувачі, клієнти, абонементи, ролі, тренувальні процеси та майбутня AI-допомога для тренерів.",
          featuresLabel: "Можливості",
          features: [
            "Створення користувачів",
            "Управління клієнтами",
            "Абонементи",
            "Ролі та дозволи",
            "Backend-логіка для спортзалів",
            "Управління тренерами",
            "Майбутній AI-асистент тренера",
            "Можливе розширення до мобільного застосунку",
          ],
          aiLabel: "AI-напрям",
          ai: [
            "Генерація програм тренувань",
            "Аналіз прогресу клієнта",
            "Рекомендації для тренера",
            "Пропозиція вправ",
            "Допомога в плануванні навантаження",
          ],
          techLabel: "Технології",
          tech: [
            "Python",
            "FastAPI",
            "PostgreSQL",
            "Docker",
            "Alembic",
            "REST API",
            "JWT Auth",
            "React",
            "TypeScript",
          ],
          valueLabel: "Цінність",
          value:
            "Mavix-Fit — це серйозний продуктовий проєкт з архітектурою, ролями, бізнес-логікою та реальними сценаріями використання.",
        },
      ],
    },
    sport: {
      title: "Спорт і дисципліна",
      eyebrow: "Поза кодом",
      paragraphs: [
        "Спорт — важлива частина мого життя. Він допомагає мені будувати дисципліну, послідовність, силу волі, терпіння та здатність прогресувати крок за кроком.",
        "Я бачу глибокий зв'язок між спортом і програмуванням: обидва вимагають регулярної практики, чесного аналізу помилок та довгострокової дисципліни. Прогрес в обох сферах приходить від щоденної праці та невеликих послідовних кроків.",
      ],
      highlights: [
        "Дисципліна",
        "Послідовність",
        "Сила волі",
        "Терпіння",
        "Витривалість",
        "Концентрація",
      ],
    },
    goal: {
      title: "Мета",
      eyebrow: "Куди я рухаюся",
      paragraphs: [
        "Моя головна мета — рости як full-stack розробник і створювати реальні цифрові продукти, якими люди справді користуються.",
        "Я хочу й надалі поєднувати сильну інженерію з продуктовим мисленням та AI, щоб створювати інструменти, які мають значення.",
      ],
      interestsTitle: "Інтереси",
      interests: [
        "Освітні платформи",
        "AI-сервіси",
        "Backend-системи",
        "SaaS-продукти",
        "Спортивні технології",
        "Автоматизація бізнесу",
        "Стартапи",
      ],
    },
    contact: {
      title: "Контакти",
      eyebrow: "Зв'яжімося",
      subtitle:
        "Відкритий до можливостей, співпраці та цікавих продуктових ідей.",
      nameLabel: "Ім'я",
      name: "Владислав Маєвський",
      emailLabel: "Email",
      email: "vladislavmaevski46@gmail.com",
      locationLabel: "Локація",
      location: "Україна",
      emailBtn: "Email",
      githubBtn: "GitHub",
      companyName: "Devensis",
    },
    footer:
      "© 2026 Владислав Маєвський. Створено за допомогою React, TypeScript та Chakra UI.",
  },
};
