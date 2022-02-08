import {Pagination as PaginationBoostrap} from 'react-bootstrap';

export default function Pagination() {
  return (
    <PaginationBoostrap>
      {/*<Pagination.First />*/}
      {/*<Pagination.Prev />*/}
      <PaginationBoostrap.Item active>{1}</PaginationBoostrap.Item>
      {/*<Pagination.Ellipsis />*/}

      <PaginationBoostrap.Item>{2}</PaginationBoostrap.Item>
      <PaginationBoostrap.Item>{3}</PaginationBoostrap.Item>
      {/*<Pagination.Item>{12}</Pagination.Item>*/}
      {/*<Pagination.Item>{13}</Pagination.Item>*/}
      {/*<Pagination.Item>{14}</Pagination.Item>*/}

      <PaginationBoostrap.Ellipsis />
      <PaginationBoostrap.Item>{20}</PaginationBoostrap.Item>
      <PaginationBoostrap.Next />
      <PaginationBoostrap.Last />
    </PaginationBoostrap>
  )
}