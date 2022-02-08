import HomeStyle from '../styles/Home.module.css';
import {Accordion, Container} from "react-bootstrap";
import AccordionItem from '../components/accordion-item/accordion-item';
import Breadcrumb from "../components/breadcrumb/breadcrumb";

export default function Home() {
  return (
    <>
      <Container className={HomeStyle.mainContainer}>
        <Breadcrumb></Breadcrumb>
        <Accordion alwaysOpen={true}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Technical forum on models</Accordion.Header>
            <Accordion.Body>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Technical forum on models</Accordion.Header>
            <Accordion.Body>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Technical forum on models</Accordion.Header>
            <Accordion.Body>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Technical forum on models</Accordion.Header>
            <Accordion.Body>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
              <AccordionItem></AccordionItem>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className={HomeStyle.statDiv}>
          <div className={HomeStyle.statDivItem}>
            <p>
              <span>272 593</span> messages
            </p>
          </div>
          <div className={HomeStyle.statDivItem}>
            <p>
              <span>16,613</span> users
            </p>
          </div>
          <div className={HomeStyle.statDivItem}>
          <p>
            <span>Serzhyo</span> last
          </p>
        </div>
          <div className={HomeStyle.statDivItem}>
            <p>
              <span>12 235</span> simultaneously
            </p>
          </div>
        </div>
        <Breadcrumb></Breadcrumb>
      </Container>
    </>
  )
}
