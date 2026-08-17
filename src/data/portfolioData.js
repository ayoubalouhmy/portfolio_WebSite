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
  heroImage: '/images/ChatGPT Image 16 août 2026, 23_51_20.webp',
  aboutImage: '/images/ChatGPT Image 16 août 2026, 23_51_20.webp',
  bioParagraph1: "Formé au développement digital à l'OFPPT, je transforme des idées complexes en solutions web fluides. Mon approche est centrée sur l'équilibre entre une architecture robuste et un design intuitif.",
  bioParagraph2: "Mon passage chez Arm Tech Solutions m'a permis de perfectionner ma maîtrise du cycle de vie complet d'un produit, de la conception initiale au déploiement en production, en passant par l'optimisation des performances.",
};

export const TECH_STACK = [
  // Frontend
  { name: 'HTML5', icon: 'html', colorClass: 'text-orange-500', category: 'frontend' },
  { name: 'CSS3', icon: 'css', colorClass: 'text-blue-500', category: 'frontend' },
  { name: 'JavaScript', icon: 'javascript', colorClass: 'text-yellow-400', category: 'frontend' },
  { name: 'Bootstrap', icon: 'bootstrap', colorClass: 'text-purple-500', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'tailwind', colorClass: 'text-teal-400', category: 'frontend' },
  { name: 'React.js', icon: 'react', colorClass: 'text-cyan-400', category: 'frontend' },

  // Backend & BDD
  { name: 'Node.js', icon: 'node', colorClass: 'text-green-500', category: 'backend' },
  { name: 'Laravel', icon: 'laravel', colorClass: 'text-red-500', category: 'backend' },
  { name: 'PHP', icon: 'php', colorClass: 'text-indigo-400', category: 'backend' },
  { name: 'MySQL', icon: 'mysql', colorClass: 'text-blue-400', category: 'backend' },
  { name: 'MongoDB', icon: 'mongodb', colorClass: 'text-green-600', category: 'backend' },
  { name: 'Express.js', icon: 'express', colorClass: 'text-slate-200', category: 'backend' },
  { name: 'Python', icon: 'python', colorClass: 'text-blue-400', category: 'backend' },

  // Outils & DevOps
  { name: 'Git', icon: 'git', colorClass: 'text-orange-600', category: 'tools' },
  { name: 'GitHub', icon: 'github', colorClass: 'text-cyan-400', category: 'tools' },
  { name: 'Vercel', icon: 'vercel', colorClass: 'text-emerald-400', category: 'tools' },
  { name: 'GitLab', icon: 'gitlab', colorClass: 'text-orange-600', category: 'tools' },
];

export const PROJECTS = [
  {
    id: 'sakan',
    number: '01',
    title: 'SAKAN',
    tagline: 'Dashboard financier & gestion Charge et Vehicule',
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
  },{
    id: 'FlexStyle',
    number: '03',
    title: 'FlexStyle',
    tagline: 'Plateforme E-Commerce Frontend',
    description: "Plateforme e-commerce performante avec gestion de panier complexe.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv4bfC_zT5bZo6bqwv8l3AflCyv_9gQQ12L3mPCJNbUI24r0qhKTsEOopz1uqwjngSQ78nFxpHD4t_8Ery88bxqKB-AcazlK-3SYjyjqjk_bcw7gKg4trSWkxwaMzHrhR5v8uw9bDKRUEuPTsiQcTz-TjqINfJx35ABOFCs7yMKa0f8BvBbR1q2Pjl4tEZi8RJAehGZ71X70byFYjbAB6d9CguRyFCSWE2-2oEq8k_DN54aocuNYcDZf6LhqNNLjxMxw',
    tags: [ 'React', 'Tailwind CSS', 'Redux'],
    demoType: 'flex-store',
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
