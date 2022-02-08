import HomeStyle from "../styles/Home.module.css";
import {Container} from "react-bootstrap";

export default function ContentLayout({ children }) {
  return (
    <Container className={HomeStyle.mainContainer}>{children}</Container>
  )
}