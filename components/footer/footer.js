import {Button, Container, Navbar} from "react-bootstrap";
import footerStyle from './footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={footerStyle.footer}>
          <Navbar bg="dark" variant="dark" className={footerStyle.footerNav}>
            <p>
              Forum Copyright © 2022
            </p>
          </Navbar>
      </footer>
    </>
  )
}