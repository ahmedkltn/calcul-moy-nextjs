import { sections } from "../data/sections";
import { Section } from "../data/sections";
interface Matiere {
        nom : string;
        coeff : number;
}
interface Matieres {
    [key:string] : {
        [key:string] : {
            [key:string] : Matiere[];
        }
    }
}
function getMatieres(sectionAbbr : string,year : string,branche : string,semestre :string) : Matiere[] {
    const selectedSection : Section = sections.filter(section => section.abbr == sectionAbbr)[0];
    const selectedYear: Matieres = selectedSection.matieres as Matieres;
    if(selectedYear[year][branche][semestre]){
         return selectedYear[year][branche][semestre];
    }
    else {
    return [];
  }
}
export default getMatieres;