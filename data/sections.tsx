// sections for navbar
export type Section = {
  id : number;
  section : string;
  abbr : string;
  branches : string[];
}
export const sections: Section[] = [
  {
    id: 0,
    section: "Business Computing",
    branches: ["Tronc commun", "business intelligence", "E-Business"],
    abbr: "LBC",
  },
  {
    id: 1,
    section: "Computer Science",
    branches: ["Tronc commun", "Génie Logiciel", "Informatique et Multimédia"],
    abbr: "LCS",
  },
  {
    id: 2,
    section: "computer Engineering",
    branches: [
      "Tronc commun",
      "Ingénierie des réseaux et système",
      "Systèmes embarqués et IoT",
    ],
    abbr: "LCE",
  },
];
