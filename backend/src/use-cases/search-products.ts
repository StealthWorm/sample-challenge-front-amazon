import { api } from '../lib/axios';
import * as cheerio from 'cheerio';
import { NoKeywordProvided } from './errors/no-keyword-provided';
import { DataFetchError } from './errors/data-fetch-error';

export interface Product {
  title: string,
  rating?: string,
  reviews?: string,
  imgURL?: string,
  productASIN: string,
  position?: number,
}

interface SearchProductsUseCaseRequest {
  keyword: string
  asin?: string
  page: number
}

interface SearchProductsUseCaseResponse {
  products: Product[],
}

//creating a class declaration for future repository manipulation using dependency injection
export class SearchProductsUseCase {
  constructor() { }

  // async request because we're dealing with a promise coming from the Amazon environment
  async execute({ keyword, asin, page }: SearchProductsUseCaseRequest): Promise<SearchProductsUseCaseResponse> {

    // avoiding the search with no initial filter
    if (!keyword) {
      throw new NoKeywordProvided()
    }

    try {
      const response = await api.get(`s?k=${keyword.replace(' ', '+')}&page=${page}`);

      // destructuring the data manipulation into an isolated method, to make it cleaner to understand
      const products = this.extractProducts(response.data, asin, page);      
      return { products };
    } catch (error) {
      throw new DataFetchError();
    }
  }

  // data extraction using cheerio
  private extractProducts(html: string, asin: string = '', page: number): Product[] {
    const $ = cheerio.load(html);
    const products: Product[] = [];

    $('.s-result-item').each((index, element) => {
      const title = $(element).find('h2.a-size-mini a').text().trim();
      const rating = $(element).find('.a-popover-trigger .a-icon.a-icon-star-small .a-icon-alt').text().trim();
      const reviews = $(element).find('.a-link-normal.s-underline-text.s-underline-link-text.s-link-style .a-size-base.s-underline-text').text().trim();
      const imgURL = $(element).find('img.s-image').attr('src');
      const productASIN = String($(element).data('asin'));
      const position = (page - 1) * 48 + index + 1;

      // for some reason, Amazon retrieves some empty items, so this validation avoid to include items without title
      if (asin) {
        // Filter by ASIN if provided
        if (productASIN === asin) {
          products.push({
            title,
            rating,
            reviews,
            imgURL,
            productASIN,
            position
          });
        }
      } else {
        // Filter by keyword when ASIN is empty
        if (!!title && !products.some(product => product.productASIN === productASIN)) {
          products.push({
            title,
            rating,
            reviews,
            imgURL,
            productASIN,
            position
          });
        }
      }
    });

    return products;
  }
}

// if (!!title (!asin || productASIN === asin)) {
//   products.push({
//     title,
//     rating,
//     reviews,
//     imgURL,
//     productASIN,
//     position
//   });
// }