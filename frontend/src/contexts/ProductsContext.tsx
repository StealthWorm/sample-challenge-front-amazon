import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Product {
  title: string,
  rating: string,
  reviews: string,
  imgURL: string,
  productASIN: string,
  position: number,
}

interface ProductsContextType {
  products: Product[],
  page: number
  fetchProducts: () => Promise<void>
  updateDataSearch: (data: FormInputs) => void
  nextPage: () => void
  previousPage: () => void
}

interface FormInputs {
  inputText: string;
  asin: string;
}

interface ProductsContextProviderProps {
  children: ReactNode
}

export const ProductsContext = createContext({} as ProductsContextType)

// Created a Context to manipulate my context data across the pages and components
export function ProductsContextProvider({ children }: ProductsContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [inputText, setInputText] = useState('');
  const [asin, setAsin] = useState('');

  function nextPage() {
    if (page < 5) {
      setPage((state) => state + 1)
    }
  }

  function previousPage() {
    if (page > 1) {
      setPage((state) => state - 1)
    }
  }

  /* 
    fetch function of the products coming from my endpoint. I'm using callback, 
    because it avoids re-rendering my function unless the data has changed
  */

  function updateDataSearch(data: FormInputs) {
    setInputText(data.inputText)
    setAsin(data.asin)
  }

  const fetchProducts = useCallback(async () => {
    if (inputText !== '') {
      try {
        const response = await api.get('scrape', {
          params: { keyword: inputText, asin, page }
        })

        const { products } = response.data

        setProducts(products)
      } catch (err) {
        alert('The request failed due to instability, please try again')
        console.log(err)
      }
    }
  },
    [asin, inputText, page]
  )

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts, page])

  return (
    <ProductsContext.Provider value={{
      products,
      page,
      nextPage,
      previousPage,
      fetchProducts,
      updateDataSearch
    }}>
      {children}
    </ProductsContext.Provider>
  )
}