import { NavLink } from "react-router-dom";
import { FormContainer, HeaderContainer, ErrorMessage, SearchButton, InputContainer } from "../../styles/components/header";

import logo from '../../assets/logo.png'

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useForm } from "react-hook-form";

interface FormInputs {
  keyword: string;
  asin: string;
}

export function Header() {
  const { fetchProducts, updateDataSearch } = useContext(ProductsContext)
  const [searching, setSearching] = useState(false); //disable  search button when fetching

  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    defaultValues: {
      keyword: '',
      asin: ''
    },
  })

  async function handleFetchProducts(data: FormInputs) {
    setSearching(true)
    updateDataSearch({ inputText: data.keyword, asin: data.asin })
    setSearching(false)
  }

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="" />
      </NavLink>
      <FormContainer onSubmit={handleSubmit(handleFetchProducts)}>
        <InputContainer>
          <input
            id="keyword"
            type="text"
            title="Name of the product"
            placeholder="Search something..."
            {...register("keyword", { required: true })}
          />
          {errors.keyword && <ErrorMessage>Please select a valid name to search!</ErrorMessage>}
          <input
            id="asin"
            type="text"
            title="ASIN Code of the product"
            placeholder="Filter by ASIN Code..."
            {...register("asin")}
          />
        </InputContainer>

        <SearchButton css={{ cursor: searching ? "not-allowed" : "pointer" }}>
          <input type="submit" value="" />
          <MagnifyingGlass size={18} weight="bold" />
        </SearchButton>
      </FormContainer>
    </HeaderContainer>
  )
}