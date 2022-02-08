import HomeStyle from "../../styles/Home.module.css";
import { Breadcrumb as BreadcrumbBoostrap } from "react-bootstrap";

export default function Breadcrumb() {
  return (<div className={HomeStyle.breadcrumbs}>
    <BreadcrumbBoostrap className={"m-0"}>
      <BreadcrumbBoostrap.Item href="#">Home</BreadcrumbBoostrap.Item>
      <BreadcrumbBoostrap.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </BreadcrumbBoostrap.Item>
      <BreadcrumbBoostrap.Item active>Data</BreadcrumbBoostrap.Item>
    </BreadcrumbBoostrap>
  </div>)
}