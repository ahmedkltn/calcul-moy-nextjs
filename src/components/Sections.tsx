// Import the Section component and necessary Bootstrap components and styles
import Section from "@/components/Section";
import { Row, Container, Col } from "react-bootstrap";
import styles from "../styles/Section.module.css";

// Import the sections data from a separate file
import { sections } from "../../data/sections";

// Define the props interface for the component
interface Props {
  sectionSelected: string;
}

// Define the component function
export default ({ sectionSelected }: Props) => {
  // Create an array of years for the section
  const years: string[] = ["Première année", "Deuxieme année", "Troisième année"];

  // Filter the sections data to get the data for the selected section
  // Get the branches and abbreviation for the section
  const sectionData = sections.filter((section) => section.section == sectionSelected)[0];
  const brancheSelected = sectionData.branches;
  const abbr = sectionData.abbr;

  // Render the JSX for the component
  return (
    <Container fluid>
      {/* Render the section title */}
      <h1 className={"display-4 p-2 " + styles.ds}>Licence {sectionSelected} : </h1>

      {/* Render a Row of Section components */}
      <Row className="justify-content-md-center">
        {years.map((year, i) => {
          return (
            <Col xs={12} lg={3} className="mt-3" key={i}>
              {/* Render a Section component with the year, abbreviation, section, and branches */}
              <Section
                year={year}
                y={"Y" + (i + 1).toString()}
                abbr={abbr}
                section={sectionSelected}
                branches={brancheSelected}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
