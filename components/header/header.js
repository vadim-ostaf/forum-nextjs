import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import headerStyle from './header.module.css';

export default function Header() {

  return (
    <>
      <header className={headerStyle.header}>
        <Navbar bg="dark" variant="dark">
          <Container className={"justify-content-end"}>
          <div className={headerStyle.buttonNav}>
            <Button className={headerStyle.buttonNavButton} variant={"secondary"}>Sign in</Button>
            <Button className={headerStyle.buttonNavButton} variant={"warning"}>Sign up</Button>
          </div>
          </Container>
        </Navbar>
        <Container>
          <Row>
            <Col>
              <Navbar>
                <Navbar.Brand className={headerStyle.navbarBrandLogo} href={"#"}>Forum</Navbar.Brand>
              </Navbar>
            </Col>
          </Row>
        </Container>
        <Container>
          <Navbar bg="dark" variant="dark" className={headerStyle.navbarMenu}>
            <Nav className={headerStyle.navbarMenuNav}>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Users</Nav.Link>
              <Nav.Link href="#pricing">Garage</Nav.Link>
            </Nav>
            <Nav className={headerStyle.navbarMenuNav}>
              <Nav.Link href="#home">Gallery</Nav.Link>
              <Nav.Link href="#features">Instruction</Nav.Link>
              <Nav.Link href="#pricing">New messages</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </header>
    </>
  );
}