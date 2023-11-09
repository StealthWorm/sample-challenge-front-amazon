import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Product {
  title: string,
  rating: string,
  reviews: string,
  imgURL: string,
}

interface ProductsContextType {
  products: Product[],
  inputText: string,
  // page: number,
  changeText: (keyword: string) => void
  fetchProducts: (inputText: string) => Promise<void>
}

interface ProductsContextProviderProps {
  children: ReactNode
}

export const ProductsContext = createContext({} as ProductsContextType)

// Created a Context to manipulate my context data across the pages and components
export function ProductsContextProvider({ children }: ProductsContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [inputText, setInputText] = useState("");
  // const [page, setPage] = useState(1);

  // function to update my text state based on the search input
  function changeText(keyword: string) {
    setInputText(keyword);
  }

  /* 
  fetch function of the products coming from my endpoint. I'm using callback, 
  because it avoids re-rendering my function unless the data has changed
  */
  const fetchProducts = useCallback(
    async (inputText: string) => {
      try {
        const response = await api.get('scrape', {
          params: { keyword: inputText, page: 1 }
        })

        const { products } = response.data
        // console.log(response.data)
        setProducts(products)
      } catch (err) {
        alert('The request failed due to instability, please try again')
        console.log(err)
      }
    },
    []
  )

  return (
    <ProductsContext.Provider value={{
      products,
      inputText,
      changeText,
      fetchProducts
    }}>
      {children}
    </ProductsContext.Provider>
  )
}