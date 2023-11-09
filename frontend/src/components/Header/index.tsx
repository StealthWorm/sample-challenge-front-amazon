import { NavLink } from "react-router-dom";
import { FormContainer, HeaderContainer, ErrorMessage, SearchButton, InputContainer } from "../../styles/components/header";

import logo from '../../assets/logo.png'

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useForm } from "react-hook-form";

interface FormInputs {
  keyword: string;
}

export function Header() {
  const { fetchProducts } = useContext(ProductsContext)
  const [searching, setSearching] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    defaultValues: {
      keyword: '',
    },
  })

  async function handleFetchProducts(data: FormInputs) {
    setSearching(true)
    await fetchProducts(data.keyword)
    setSearching(false)
  }

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const query = e.target.value
  //   changeText(query)
  // }

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
            placeholder="Search something..."
            {...register("keyword", {
              required: true,
              // onChange: (e) => {
              //   handleChange(e)
              // },
            })}
          />
          {errors.keyword && <ErrorMessage>This field is required</ErrorMessage>}
        </InputContainer>

        <SearchButton css={{ cursor: searching ? "not-allowed" : "pointer" }}>
          <input type="submit" value="" />
          <MagnifyingGlass size={18} weight="bold" />
        </SearchButton>
      </FormContainer>
    </HeaderContainer>
  )
}