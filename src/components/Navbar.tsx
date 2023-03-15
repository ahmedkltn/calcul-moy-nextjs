import { Container, Navbar , Nav } from "react-bootstrap";
import styles from "../styles/Navbar.module.css";
import { sections } from "../../data/sections";
import Link from "next/link";
export default () => {
  return (
    <Navbar bg="dark" variant="dark" className={styles.navbar} expand="md">
      <Container>
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand>Calcul Moyenne</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          {sections.map((section) => {
            return (
              <Link key={section.id} href={"/" + section.abbr} passHref legacyBehavior>
                <Nav.Link>{section.section}</Nav.Link>
              </Link>
            );
          })}
        </Nav>
      </Container>
    </Navbar>
  );
};
