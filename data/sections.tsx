// sections for navbar
export type Section = {
  id : number;
  section : string;
  abbr : string;
  branche : string[];
}
export const sections: Section[] = [
  {
    id: 0,
    section: "Business Computing",
    branche: ["Business Computing", "business intelligence", "E-Business"],
    abbr: "LBC",
  },
  {
    id: 1,
    section: "Computer Science",
    abbr: "LCS",
    branche: ["Business Computing", "business intelligence", "E-Business"],
  },
  { id: 2, section: "computer Engineering", branche: [], abbr: "LCE" },
];
