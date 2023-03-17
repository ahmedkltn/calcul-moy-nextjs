// sections for navbar
export type Section = {
  id : number;
  section : string;
  abbr : string;
  branches : string[];
  matieres : object;
}
export const sections: Section[] = [
  {
    id: 0,
    section: "Business Computing",
    branches: ["Tronc commun", "business intelligence", "E-Business"],
    abbr: "LBC",
    matieres: {
      Y1: {
        troncCommun: {
          S1: [
            {
              nom: "algorithmique et structures de données 1",
              coeff: 3,
            },
            {
              nom: "comptabilité générale",
              coeff: 1,
            },
            {
              nom: "principes de gestion",
              coeff: 1,
            },
            {
              nom: "statistiques et probabilité ",
              coeff: 1,
            },
            {
              nom: "analyse",
              coeff: 1,
            },
            {
              nom: "systémes logiques et architecture des ordinateurs",
              coeff: 1,
            },
            {
              nom: "systémes d'exploitation ",
              coeff: 1,
            },
            {
              nom: "compétences numériques",
              coeff: 1,
            },
            {
              nom: "business communication (en anglais)",
              coeff: 1,
            },
            {
              nom: "culture d'entreprise",
              coeff: 1,
            },
            {
              nom: "Organisation de l'Entreprise",
              coeff: 1,
            },
            {
              nom: "Développement IHM",
              coeff: 2,
            },
          ],
          S2: [
            {
              nom: "algébre",
              coeff: 1,
            },
            {
              nom: "logique mathématique",
              coeff: 1,
            },
            {
              nom: "introduction aux systémes d'information",
              coeff: 1,
            },
            {
              nom: "fondements des réseaux",
              coeff: 1,
            },
            {
              nom: "algorithmique et structure de données 2",
              coeff: 3,
            },
            {
              nom: "le systéme d'information comptable",
              coeff: 1,
            },
            {
              nom: "gestion financiére",
              coeff: 1,
            },
            {
              nom: "business communication (en anglais )",
              coeff: 2,
            },
            {
              nom: "techniques de créativité",
              coeff: 1,
            },
            {
              nom: "Contrôle Interne",
              coeff: 1,
            },
            {
              nom: "Framework IHM",
              coeff: 2,
            },
          ],
        },
      },
      Y2: {
        BI: {
          S3: [
            {
              nom: "Programmation Web 1",
              coeff: 1,
            },
            {
              nom: "Programmation OO",
              coeff: 1.5,
            },
            {
              nom: "Base de données",
              coeff: 1.5,
            },
            {
              nom: "Conception OO des systémes d'information",
              coeff: 1,
            },
            {
              nom: "Statistiques inférentielles",
              coeff: 1,
            },
            {
              nom: "Fondements de l'IA",
              coeff: 1,
            },
            {
              nom: "Marketing digital",
              coeff: 1,
            },
            {
              nom: "Economie numérique",
              coeff: 1,
            },
            {
              nom: "projet professionnel personnel (PPP)",
              coeff: 1,
            },
            {
              nom: "Ethique et lois des IT",
              coeff: 2,
            },
            {
              nom: "Gestion de Production",
              coeff: 2,
            },
            {
              nom: "Atelier Python",
              coeff: 1,
            },
          ],
          S4: [
            {
              nom: "SGBD",
              coeff: 1,
            },
            {
              nom: "modélisation multidimentionnelle et entrepôt des données",
              coeff: 1.5,
            },
            {
              nom: "atelier de génie logiciel",
              coeff: 1,
            },
            {
              nom: "architecture logicielle",
              coeff: 1,
            },
            {
              nom: "théorie des graphes et recherche opérationnelle",
              coeff: 2,
            },
            {
              nom: "analyse et fouille de données",
              coeff: 1,
            },
            {
              nom: "programmation web 2",
              coeff: 1.5,
            },
            {
              nom: "entreprenariat",
              coeff: 1,
            },
            {
              nom: "leadership (en anglais)",
              coeff: 1,
            },
            {
              nom: "développement personnel",
              coeff: 1,
            },
            {
              nom: "Programmation OO avancée",
              coeff: 2,
            },
            {
              nom: "Développement durable",
              coeff: 1,
            },
          ],
        },
        EB: {
          S3: [
            {
              nom: "Programmation Web 1",
              coeff: 1,
            },
            {
              nom: "Programmation OO",
              coeff: 1.5,
            },
            {
              nom: "Base de données",
              coeff: 1.5,
            },
            {
              nom: "Conception OO des systémes d'information",
              coeff: 1,
            },
            {
              nom: "Statistiques inférentielles",
              coeff: 1,
            },
            {
              nom: "Fondements de l'IA",
              coeff: 1,
            },
            {
              nom: "Marketing digital",
              coeff: 1,
            },
            {
              nom: "Economie numérique",
              coeff: 1,
            },
            {
              nom: "projet professionnel personnel (PPP)",
              coeff: 1,
            },
            {
              nom: "Ethique et lois des IT",
              coeff: 2,
            },
            {
              nom: "Gestion de Production",
              coeff: 2,
            },
            {
              nom: "Atelier Python",
              coeff: 1,
            },
          ],
          S4: [
            {
              nom: "Data warehouse",
              coeff: 1,
            },
            {
              nom: "E-customer relationship management",
              coeff: 1,
            },
            {
              nom: "IT management",
              coeff: 1,
            },
            {
              nom: "génie logiciel et outils d'AGL",
              coeff: 1.5,
            },
            {
              nom: "conception TB et scoring",
              coeff: 1,
            },
            {
              nom: "recherche opérationnelle",
              coeff: 1,
            },
            {
              nom: "SGBD",
              coeff: 1.5,
            },
            {
              nom: "programmation web 2",
              coeff: 1,
            },
            {
              nom: "entreprenariat",
              coeff: 1,
            },
            {
              nom: "business communication",
              coeff: 1,
            },
            {
              nom: "développement personnel",
              coeff: 1,
            },
            {
              nom: "Développement durable",
              coeff: 1,
            },
            {
              nom: "Programmation OO avancée",
              coeff: 2,
            },
          ],
        },
      },
      Y3: {
        BI: {
          S5: [
            {
              nom: "Techniques de prévision",
              coeff: 1,
            },
            {
              nom: "Fondements de la théorie de décision",
              coeff: 1,
            },
            {
              nom: "Langages de programmation évolués -BI",
              coeff: 1,
            },
            {
              nom: "Conception TB et scoring",
              coeff: 1,
            },
            {
              nom: "Les fondamentaux de la sécurité IT",
              coeff: 1,
            },
            {
              nom: "Gestion de la technologie de l'information",
              coeff: 1.5,
            },
            {
              nom: "Introduction au Big data et Cloud",
              coeff: 1.5,
            },
            {
              nom: "Développement Mobile",
              coeff: 1,
            },
            {
              nom: "Gestion de projet",
              coeff: 2,
            },
            {
              nom: "Psychology and sociology for online media applications",
              coeff: 1,
            },
            {
              nom: "Techniques d'aide à la décision",
              coeff: 2,
            },
            {
              nom: "PSE- Politique et Stratégie d'Entreprise",
              coeff: 1,
            },
          ],
        },
        EB: {
          S5: [
            {
              nom: "Introduction au Big data et Cloud",
              coeff: 1,
            },
            {
              nom: "Langage de programmation évolué BI",
              coeff: 1.5,
            },
            {
              nom: "IT Security fondamentals",
              coeff: 1,
            },
            {
              nom: "Gestion de projets",
              coeff: 1,
            },
            {
              nom: "Intelligence artificielle",
              coeff: 1.5,
            },
            {
              nom: "Analyse de données et Data Mininig",
              coeff: 1,
            },
            {
              nom: "Intégration Web",
              coeff: 1,
            },
            {
              nom: "Développement Mobile",
              coeff: 1,
            },
            {
              nom: "Laws and Ethics of IT",
              coeff: 1.5,
            },
            {
              nom: "Business Communication",
              coeff: 1.5,
            },
            {
              nom: "Initiation au Machine Learning",
              coeff: 1,
            },
            {
              nom: "Techniques d'aide à la décision",
              coeff: 2,
            },
          ],
        },
      },
    },
  },
  {
    id: 1,
    section: "Computer Science",
    branches: [
      "Tronc commun",
      "Génie Logiciel et Système d'info",
      "Informatique et Multimédia",
    ],
    abbr: "LCS",
    matieres: {
      Y1: {
        troncCommun: {
          S1: [
            {
              nom: "système d'exploitation 1",
              coeff: 1.5,
            },
            {
              nom: "systèmes logiques et architecture des ordinateurs",
              coeff: 2,
            },
            {
              nom: "technologies multimédias",
              coeff: 1.5,
            },
            {
              nom: "logique formelle",
              coeff: 1.5,
            },
            {
              nom: "algorithmique et structure de données",
              coeff: 2,
            },
            {
              nom: "atelier programmation 1",
              coeff: 1.5,
            },
            {
              nom: "analyse 1",
              coeff: 1.5,
            },
            {
              nom: "algèbre 1",
              coeff: 1.5,
            },
            {
              nom: "techniques de communication 1",
              coeff: 1,
            },
            {
              nom: "anglais 1",
              coeff: 1,
            },
          ],
          S2: [
            {
              nom: "analyse 2",
              coeff: 1.5,
            },
            {
              nom: "algèbre 2",
              coeff: 1.5,
            },
            {
              nom: "fondements des bases de données",
              coeff: 2,
            },
            {
              nom: "fondements des réseaux",
              coeff: 2,
            },
            {
              nom: "systéme d'exploitation 2",
              coeff: 1.5,
            },
            {
              nom: "programmation python",
              coeff: 1,
            },
            {
              nom: "algorithmique ,structure de données et complexité",
              coeff: 1.5,
            },
            {
              nom: "atelier de programmation 2",
              coeff: 1,
            },
            {
              nom: "culture et compétences numériques",
              coeff: 1,
            },
            {
              nom: "techniques de communication 2",
              coeff: 1,
            },
            {
              nom: "anglais 2",
              coeff: 1,
            },
          ],
        },
      },
      Y2: {
        GLSI: {
          S3: [
            {
              nom: "Probabilité et statistique",
              coeff: 2,
            },
            {
              nom: "Graphes et optimisation",
              coeff: 1,
            },
            {
              nom: "Théorie des langages des Automates",
              coeff: 1,
            },
            {
              nom: "Ingénierie des bases de données",
              coeff: 1.5,
            },
            {
              nom: "Services des réseaux",
              coeff: 1,
            },
            {
              nom: "Conception des systémes d'information",
              coeff: 1.5,
            },
            {
              nom: "Programmation Java",
              coeff: 2,
            },
            {
              nom: "Gestion d'entreprise",
              coeff: 1,
            },
            {
              nom: "Anglais 3",
              coeff: 1,
            },
            {
              nom: "Framework de développement",
              coeff: 1.5,
            },
            {
              nom: "Technique d'infographie",
              coeff: 1.5,
            },
          ],
          S4: [
            {
              nom: "Tests de logiciels (certification ISTQB)",
              coeff: 1,
            },
            {
              nom: "Techniques de compilation",
              coeff: 1.5,
            },
            {
              nom: "Technologies et programmation web",
              coeff: 1.5,
            },
            {
              nom: "Techniques d'indexation",
              coeff: 1,
            },
            {
              nom: "Administration des bases de données",
              coeff: 1,
            },
            {
              nom: "Entrepôts de données",
              coeff: 1,
            },
            {
              nom: "Fondements de l'intelligence artificielle (programmation IA)",
              coeff: 2,
            },
            {
              nom: "Projet fedéré (methode Agile)",
              coeff: 1,
            },
            {
              nom: "Anglais 4 ",
              coeff: 1,
            },
            {
              nom: "Droit d'informatique,protection des données et éthique",
              coeff: 1,
            },
            {
              nom: "Programmation Python avancée",
              coeff: 1.5,
            },
            {
              nom: "Introduction à l'IoT",
              coeff: 1.5,
            },
          ],
        },
        IM: {
          S3: [
            {
              nom: "Théorie des languages et des Automates",
              coeff: 1,
            },
            {
              nom: "Graphes et optimisation",
              coeff: 1,
            },
            {
              nom: "Probabilité et statistique",
              coeff: 2,
            },
            {
              nom: "Services des réseaux",
              coeff: 1,
            },
            {
              nom: "Ingénierie des bases de données",
              coeff: 1.5,
            },
            {
              nom: "Conception des systèmes d'information",
              coeff: 1.5,
            },
            {
              nom: "Programmation JAVA",
              coeff: 2,
            },
            {
              nom: "Anglais 3",
              coeff: 1,
            },
            {
              nom: "Gestion d'entreprise",
              coeff: 1,
            },
            {
              nom: "Framework de développement",
              coeff: 1.5,
            },
            {
              nom: "Technique d'infographie",
              coeff: 1.5,
            },
          ],
          S4: [
            {
              nom: "Tests de logiciels (certification ISTQB)",
              coeff: 1,
            },
            {
              nom: "Fondements & Programmation",
              coeff: 1.5,
            },
            {
              nom: "Technologies et programmation",
              coeff: 1.5,
            },
            {
              nom: "Développement d'applications mobiles",
              coeff: 1.5,
            },
            {
              nom: "Infographie",
              coeff: 1,
            },
            {
              nom: "Traitement d'images",
              coeff: 1.5,
            },
            {
              nom: "Numérisation et codage des objets Multimédia",
              coeff: 1,
            },
            {
              nom: "Droit informatique,protection des donnnées et éthique",
              coeff: 1,
            },
            {
              nom: "Projet féderé (méthode Agile)",
              coeff: 1,
            },
            {
              nom: "Anglais 4",
              coeff: 1,
            },
            {
              nom: "Technique Audio visuelles 1",
              coeff: 1.5,
            },
            {
              nom: "Montage Vidéo",
              coeff: 1.5,
            },
          ],
        },
      },
      Y3: {
        GLSI: {
          S5: [
            {
              nom: "Développement d'applications réparties ",
              coeff: 1.5,
            },
            {
              nom: "Développement Mobile",
              coeff: 1,
            },
            {
              nom: "Machine Learning",
              coeff: 1,
            },
            {
              nom: "Sécurité informatique",
              coeff: 1,
            },
            {
              nom: "Architecture SOA et service Web",
              coeff: 2,
            },
            {
              nom: "Virtualisation et Cloud",
              coeff: 1.5,
            },
            {
              nom: "Framework et techniques Big Data",
              coeff: 1,
            },
            {
              nom: "Préparation à l'environement professionnel",
              coeff: 1,
            },
            {
              nom: "Entreprenariat",
              coeff: 1,
            },
            {
              nom: "Anglais 5",
              coeff: 1,
            },
            {
              nom: "IoT:Applications et Plates formes",
              coeff: 1.5,
            },
            {
              nom: "Analyse des données avec le langage R",
              coeff: 1.5,
            },
          ],
        },
        IM: {
          S5: [
            {
              nom: "Développement d'applications Web et multimédia",
              coeff: 2,
            },
            {
              nom: "Maillage 2D/3D",
              coeff: 1,
            },
            {
              nom: "Réalité Virtuelle et réalité augmentée",
              coeff: 1,
            },
            {
              nom: "Techniques d'indexation et de référencement",
              coeff: 1.5,
            },
            {
              nom: "Architecture SOA et service Web",
              coeff: 1.5,
            },
            {
              nom: "Framework & Technologies Big Data",
              coeff: 1,
            },
            {
              nom: "Virtualisation et Cloud",
              coeff: 1,
            },
            {
              nom: "Anglais 5",
              coeff: 1,
            },
            {
              nom: "Entreprenariat",
              coeff: 1,
            },
            {
              nom: "Préparation à l'environnement professionnel",
              coeff: 1,
            },
            {
              nom: "Effets Spéciaux",
              coeff: 1.5,
            },
            {
              nom: "Techniques Audiovisuelles avancées",
              coeff: 1.5,
            },
          ],
        },
      },
    },
  },
  /*
  {
    id: 2,
    section: "Computer Engineering",
    branches: [
      "Tronc commun",
      "Ingénierie des réseaux et système",
      "Systèmes embarqués et IoT",
    ],
    abbr: "LCE",
  },
*/
];
