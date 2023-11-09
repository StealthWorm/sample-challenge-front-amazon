import * as cheerio from 'cheerio';
import { api } from '../lib/axios';
import { NoKeywordProvided } from './errors/no-keyword-provided';
import { DataFetchError } from './errors/data-fetch-error';

export interface Product {
  title: string,
  rating?: string,
  reviews?: string,
  imgURL?: string,
}

interface SearchProductsUseCaseRequest {
  keyword: string
  page: number
}

interface SearchProductsUseCaseResponse {
  products: Product[],
}

//creating a class declaration for future repository manipulation using dependency injection
export class SearchProductsUseCase {
  constructor() { }

  // async request because we're dealing with a promise coming from the Amazon environment
  async execute({ keyword, page }: SearchProductsUseCaseRequest): Promise<SearchProductsUseCaseResponse> {

    // avoiding the search with no initial filter
    if (!keyword) {
      throw new NoKeywordProvided()
    }

    //setting params into the baseURL
    const amazonURL = `s?k=${keyword.replace(' ', '+')}&page=${page}`

    try {
      const response = await api.get(amazonURL);

      // destructuring the data manipulation into an isolated method, to make it cleaner to understand
      const products = this.extractProducts(response.data);
      return { products };
    } catch (error) {
      throw new DataFetchError();
    }
  }

  // data extraction using cheerio
  private extractProducts(html: string): Product[] {
    const $ = cheerio.load(html);
    const products: Product[] = [];

    $('.s-result-item').each((_, element) => {
      const title = $(element).find('h2.a-size-mini a').text().trim();
      const rating = $(element).find('.a-popover-trigger .a-icon.a-icon-star-small .a-icon-alt').text().trim();
      const reviews = $(element).find('.a-link-normal.s-underline-text.s-underline-link-text.s-link-style .a-size-base.s-underline-text').text().trim();
      const imgURL = $(element).find('img.s-image').attr('src');

      // for some reason, Amazon retrieves some empty items, so this validation avoid to include items without title
      if (!!title) {
        products.push({
          title,
          rating,
          reviews,
          imgURL,
        });
      }
    });

    return products;
  }
}

