import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { PaginationContainer } from "../../styles/components/pagination";

export function Pagination() {
  const { products, page, nextPage, previousPage } = useContext(ProductsContext)

  function handleNextPage() { nextPage() }
  function handlePreviousPage() { previousPage() }

  return (
    <PaginationContainer>
      <button onClick={handlePreviousPage} disabled={page === 1 || products.length < 48} >
        <CaretLeft size={18} />
      </button>
      {page}
      <button onClick={handleNextPage} disabled={page === 5 || products.length < 48}>
        <CaretRight size={18} />
      </button>
    </PaginationContainer>
  )
}
