import { Request, Response } from 'express'
import { z } from 'zod'
import { SearchProductsUseCase } from '../../../use-cases/search-products'

/* Controller to the search method
   I'm using zod to validate the params of my request, because with zod I can create schemas to each sequence 
   of expected data and create default values
*/

class SearchProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const searchProductsUseCase = new SearchProductsUseCase()

    const searchProductsQuerySchema = z.object({
      keyword: z.string(),
      asin: z.string().optional(),
      page: z.coerce.number().min(1).max(5).default(1),
    })

    const { keyword, asin, page } = searchProductsQuerySchema.parse(request.query)

    const { products } = await searchProductsUseCase.execute({ keyword, asin, page })

    return response.status(200).json({ products, });
  }
}

export { SearchProductsController };