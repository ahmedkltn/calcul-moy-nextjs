import { Card, Button, Col } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/Section.module.css";
interface Props {
  parcour: string; 
  abbr: string; 
  year: string;
}
interface semestres {
  [key:string] : string;
}
const semestre = ({ parcour, abbr, year}: Props) => {
  let semestres:string[] = [];
  if(year == "Y1"){
    semestres = ["S1","S2"]
  }else if(year == "Y2"){
    semestres = ["S3","S4"]
  }else{
    semestres = ["S5"]
  }
  let semestresCorrector : semestres  = {S1:"Semestre 1",S2:"Semestre 2",S3:"Semestre 1",S4:"Semestre 2",S5:"Semestre 1"}
  return (
    <>
        {semestres.map((semestre,i) =>{
          return (
            <Col xs={12} lg={4} key={i} className="mt-3">
              <Card
                bg="dark"
                text="white"
                className="text-center shadow"
                key={i}
                style={{ minHeight: "17rem" }}
              >
                <Card.Header className={"display-6 border-secondary " + styles.text}>
                  {semestresCorrector[semestre]}
                </Card.Header>
                <Card.Body>
                  {/* Display the path name */}
                  <Card.Text>
                    Calculer moyenne
                    <br />
                    {parcour == "troncCommun" ? "tronc commun" : parcour}
                    <b>
                      {" "}
                      {semestresCorrector[semestre].split("")[0] +
                        semestresCorrector[semestre].split("")[
                          semestresCorrector[semestre].length - 1
                        ]}
                    </b>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  {/* Add a Link component to navigate to the path page */}
                  <Link
                    href={
                      "/" +
                      abbr +
                      "/" +
                      year +
                      "/" +
                      parcour.split(" ").join("-") +
                      "/" +
                      semestre
                    }
                    passHref
                    legacyBehavior
                  >
                    <Button variant="outline-light">Choisir</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
    </>
  );
};
export default semestre;