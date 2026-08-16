export const HERO_STATS = [
  { value: '8+', label: 'Projets réalisés' },
  { value: '12+', label: "Mois d'expérience" },
  { value: '15+', label: 'Technologies' },
];

export const PROFILE_INFO = {
  name: 'Ayoub Alouhmy',
  initials: 'AA',
  title: 'Développeur Full Stack',
  subtitle: "Spécialiste de la conception d'applications web modernes, alliant performance backend et expérience utilisateur soignée.",
  status: 'Disponible',
  email: 'ayoubalouhmy02@gmail.com',
  phone: '+212 7 80 65 15 08',
  location: 'Maroc , CasaBlanca',
  heroImage: 'https://lh3.googleusercontent.com/aida/AP1WRLsly5Pg3ZtvnS3fK9F9B0N1eNt3fOz1Ky2ep0JTI4y_8wi3cU9Jxgm9ORul7gx0_HluHMul1Uhv3gHrm_Ju7946Ilpk9uvqnuVRG84-kzDYFZAWnM3zjCyrx73TA5G_JWXIs6X0r4oqtPoj-ljLptrGplR3rCNQ58vCHJmwMz_Y7l43L_YqnbF17cjFFLBXeHO90PAPYKfyBdiMIsLote5SwVJMep6aNnyadfAKkHK9tb9_lV5I5dGjYA',
  aboutImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_CvKVNjmshJ8-uI5a_xQ3AHmTtNTug85A4oszASvTdWwQw14LdnQADLo5zcm8z-_BnysWq4U_m1bRb-2zcxjDf3J3uEwm30hn96gzd2MiBf_RCm6Tb3dYFFtP8yh_POQMZ3uiMDhYjgWu5hMcDOR85xmljZdFOUV7AI2WsZcurPeGu7fjNRGbtVjKUd7qaDqmx069sTO35UWgsK9pUhir9LMtfSADXHM4ql0jC52JvuChinREYIW3UOJFi9GHoSZzVA',
  bioParagraph1: "Formé au développement digital à l'OFPPT, je transforme des idées complexes en solutions web fluides. Mon approche est centrée sur l'équilibre entre une architecture robuste et un design intuitif.",
  bioParagraph2: "Mon passage chez Arm Tech Solutions m'a permis de perfectionner ma maîtrise du cycle de vie complet d'un produit, de la conception initiale au déploiement en production, en passant par l'optimisation des performances.",
};

export const TECH_STACK = [
  // Frontend
  { name: 'HTML5', iconClass: 'devicon-html5-plain text-orange-500', colorClass: 'text-orange-500', category: 'frontend' },
  { name: 'CSS3', iconClass: 'devicon-css3-plain text-blue-500', colorClass: 'text-blue-500', category: 'frontend' },
  { name: 'JavaScript', iconClass: 'devicon-javascript-plain text-yellow-400', colorClass: 'text-yellow-400', category: 'frontend' },
  { name: 'Bootstrap', iconClass: 'devicon-bootstrap-plain text-purple-500', colorClass: 'text-purple-500', category: 'frontend' },
  { name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-plain text-teal-400', colorClass: 'text-teal-400', category: 'frontend' },
  { name: 'React.js', iconClass: 'devicon-react-original text-cyan-400', colorClass: 'text-cyan-400', category: 'frontend' },

  // Backend & BDD
  { name: 'Node.js', iconClass: 'devicon-nodejs-plain text-green-500', colorClass: 'text-green-500', category: 'backend' },
  { name: 'Laravel', iconClass: 'devicon-laravel-plain text-red-500', colorClass: 'text-red-500', category: 'backend' },
  { name: 'PHP', iconClass: 'devicon-php-plain text-indigo-400', colorClass: 'text-indigo-400', category: 'backend' },
  { name: 'MySQL', iconClass: 'devicon-mysql-plain text-blue-400', colorClass: 'text-blue-400', category: 'backend' },
  { name: 'MongoDB', iconClass: 'devicon-mongodb-plain text-green-600', colorClass: 'text-green-600', category: 'backend' },
  { name: 'Express.js', iconClass: 'devicon-express-original text-slate-200', colorClass: 'text-slate-200', category: 'backend' },
  { name: 'Python', iconClass: 'devicon-python-plain text-blue-400', colorClass: 'text-blue-400', category: 'backend' },

  // Outils & DevOps
  { name: 'Git', iconClass: 'devicon-git-plain text-orange-600', colorClass: 'text-orange-600', category: 'tools' },
  { name: 'GitHub', materialIcon: 'terminal', colorClass: 'text-cyan-400', category: 'tools' },
  { name: 'Vercel', materialIcon: 'cloud_done', colorClass: 'text-emerald-400', category: 'tools' },
  { name: 'GitLab', iconClass: 'devicon-gitlab-plain text-orange-600', colorClass: 'text-orange-600', category: 'tools' },
];

export const PROJECTS = [
  {
    id: 'sakan',
    number: '01',
    title: 'SAKAN',
    tagline: 'Dashboard financier & gestion immobilière',
    description: 'Un dashboard financier complet pour la gestion immobilière. Interface moderne avec visualisation de données complexes et intégration API en temps réel.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOGgEcjaSIaeRzSsSoGLLA79kWKDSzVVioP8beKBkwQUpygHTdO7pP2h9casD48rtMAyrLHTYBeOtQCNh50pw32qwvsXP4CukqUXXFUM1plWPxh9VzcS5vfNJ6QFvd2BVjw9Us2Km6T0SRSPb1U5hNUu2g8LCp3tGneh-Toxy0gAFbthrFIrLV8yB0apzUHtMHrCexMwopxVp8QKtKSZ6ZBxtssAKhlwZXfPNoHul2EQl2iYkvMFqNjSGWk26Fw1F7iA',
    tags: ['React', 'Tailwind CSS', 'Laravel', 'MySQL'],
    demoType: 'sakan-dashboard',
    githubUrl: 'https://github.com/ayoubalouhmy/sakan-real-estate',
    liveUrl: '#'
  },
  {
    id: 'shopflow',
    number: '02',
    title: 'ShopFlow',
    tagline: 'Plateforme E-Commerce Minimaliste & Éco-responsable',
    description: "Plateforme e-commerce performante avec gestion de panier complexe, authentification sécurisée et panel d'administration sur mesure pour les vendeurs.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv4bfC_zT5bZo6bqwv8l3AflCyv_9gQQ12L3mPCJNbUI24r0qhKTsEOopz1uqwjngSQ78nFxpHD4t_8Ery88bxqKB-AcazlK-3SYjyjqjk_bcw7gKg4trSWkxwaMzHrhR5v8uw9bDKRUEuPTsiQcTz-TjqINfJx35ABOFCs7yMKa0f8BvBbR1q2Pjl4tEZi8RJAehGZ71X70byFYjbAB6d9CguRyFCSWE2-2oEq8k_DN54aocuNYcDZf6LhqNNLjxMxw',
    tags: ['Laravel', 'React', 'Bootstrap', 'MySQL'],
    demoType: 'shopflow-store',
    githubUrl: 'https://github.com/ayoubalouhmy/shopflow-ecommerce',
    liveUrl: '#'
  }
];

export const TIMELINE = [
  {
    type: 'experience',
    typeLabel: 'Expérience Professionnelle',
    organization: 'Arm Tech Solutions',
    role: 'Stagiaire Développeur Full Stack',
    description: "Développement et maintenance d'applications web internes. Participation active aux revues de code et optimisation des requêtes base de données.",
    color: 'primary'
  },
  {
    type: 'education',
    typeLabel: 'Formation & Études',
    organization: 'OFPPT',
    role: 'BAC+2 Développement Digital',
    period: '2024 - 2026',
    description: "BAC+2 Développement Digital (OFPPT) — formation pratique couvrant le développement frontend et backend, la conception et la modélisation de bases de données, la modélisation UML, ainsi que les architectures logicielles MVC et microservices, le tout encadré par des méthodologies agiles.",
    color: 'secondary'
  }
];
