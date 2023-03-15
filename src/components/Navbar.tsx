import { Container, Navbar , Nav } from "react-bootstrap";
import { sections } from "../../data/sections";
import Link from "next/link";
import Image from "next/image";
export default () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
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
