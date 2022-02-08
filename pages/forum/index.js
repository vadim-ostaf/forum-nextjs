import ContentLayout from "../../components/content-layout";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import Card from "../../components/card/card";
import Pagination from "../../components/pagination/paagination";

export default function Forum() {
  return (
    <ContentLayout>
      <Breadcrumb></Breadcrumb>
      <br/>
      <Pagination></Pagination>
      <Card></Card>
      <br/>
      <Pagination></Pagination>
      <Breadcrumb></Breadcrumb>
    </ContentLayout>
  );
}