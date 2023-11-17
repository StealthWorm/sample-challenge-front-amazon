import { useContext } from "react";
import { AlternativeText, Grid, HomeContainer, Item, RateStars, Reviews } from "../../styles/pages/home";
import { ProductsContext } from "../../contexts/ProductsContext";

import zeroStars from '../../assets/no-stars.png'
import oneStar from '../../assets/one-star.png'
import twoStars from '../../assets/two-stars.png'
import threeStars from '../../assets/three-stars.png'
import fourStars from '../../assets/four-stars.png'
import fiveStars from '../../assets/five-stars.png'
import { Pagination } from "../../components/Pagination";

// import { products as productsData } from "../../utils/products.ts";
export function Home() {
  const { products } = useContext(ProductsContext)

  function handleCalcNumberStars(rating: string) {
    if (rating) {
      const values = rating.match(/([\d,]+) de (\d+)/);

      if (values) {
        const difference = parseFloat(values[2]) - parseFloat(values[1].replace(',', '.'));

        if (difference === 0) {
          return fiveStars
        }
        if (difference <= 1) {
          return fourStars
        }
        if (difference <= 2 && difference > 1) {
          return threeStars
        }
        if (difference <= 3 && difference > 2) {
          return twoStars
        }
        if (difference <= 4 && difference > 3) {
          return oneStar
        }
      }
    }

    return zeroStars
  }

  return (
    <HomeContainer>
      <h2>Results</h2>
      <Pagination />
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
      {products.length ? (
        <Grid>
          {products.map((item) => (
            <Item key={item.productASIN}>
              <header>
                <img id="main-image" src={item.imgURL} alt={item.title} />
              </header>
              <h2>{item.title}</h2>
              <footer>
                {item.reviews &&
                  <Reviews title="Reviews">
                    <strong>{item.reviews}</strong>
                  </Reviews>
                }
                <p>{item.rating}</p>
                <RateStars css={{ border: 0}} alt={item.rating} src={handleCalcNumberStars(item.rating)}/>
                <span>{item.position}</span>
                <span>{item.productASIN}</span>
              </footer>
            </Item>
          ))}
        </Grid>
      ) : (
        <AlternativeText>NOTHING TO SHOW</AlternativeText>
      )}
    </HomeContainer>
  )
}