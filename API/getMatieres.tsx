import { sections } from "../data/sections";
import { Section } from "../data/sections";
interface Matiere {
        nom : string;
        coeff : number;
}
interface Props {
    year : string;
    sectionAbbr:string;
    branche:string;
    semestre:string;

}
interface Matieres {
    [key:string] : {
        [key:string] : {
            [key:string] : Matiere[];
        }
    }
}
export default function getMatieres({sectionAbbr,year,branche,semestre}:Props) : Matiere[] {
    const selectedSection : Section = sections.filter(section => section.abbr == sectionAbbr)[0];
    const selectedYear: Matieres = selectedSection.matieres as Matieres;
    if(selectedYear[year][branche][semestre]){
         return selectedYear[year][branche][semestre];
    }
    else {
    return [];
  }
}