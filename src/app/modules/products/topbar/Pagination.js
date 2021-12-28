import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const ProductsTopbarPagination = () => {
  return (
    <Pagination className="justify-content-center align-items-center ml-auto">
      <PaginationItem disabled>
        <PaginationLink first>
          <FontAwesomeIcon icon={faCaretLeft} />
        </PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">4</PaginationLink>
      </PaginationItem>
      <PaginationItem >
        <PaginationLink href="#">5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#">
          <FontAwesomeIcon icon={faCaretRight} />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  )
}

export default ProductsTopbarPagination;
