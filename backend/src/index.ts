import express, { NextFunction, Request, Response } from "express";
import { api } from "./lib/axios";
import cors from 'cors';
import { router } from "./routes";
import * as cheerio from 'cheerio';
import { ZodError } from "zod";
import { Product } from "./use-cases/search-products";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router); //isolating my routes into a separated folder. Make it easer to test in the future

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof ZodError) {
    return response.status(400).json({
      message: 'Validation Error.',
      // issues: err.format()
    });
  }

  return response.status(500).json({ message: 'Internal Server Error.' });
});

export { app };


// app.get('/api/scrape', async (req, res) => {
//   const { keyword, page } = req.query;

//   if (!keyword) {
//     res.status(400).json({ error: 'Please provide a valid keyword in the query parameter.' });
//     return;
//   }

//   const amazonURL = `s?k=${String(keyword).replace(' ', '+')}&page=${1}`

//   try {
//     const response = await api.get(amazonURL);
//     const $ = cheerio.load(response.data);

//     const products: Product[] = [];

//     $('.s-result-item').each((index, element) => {
//       const title = $(element).find('h2.a-size-mini a').text().trim();
//       const rating = $(element).find('div.a-section.a-spacing-none.a-spacing-top-micro > div > span').attr('aria-label');
//       const reviews = $(element).find('div.a-section.a-spacing-none.a-spacing-top-micro > div.a-row.a-size-small').children('span').last().attr('aria-label')
//       const imgURL = $(element).find('img.s-image').attr('src');

//       if (title !== '') {
//         products.push({
//           title,
//           rating,
//           reviews,
//           imgURL,
//         });
//       }
//     });

//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred while scraping Amazon.' });
//   }
// });

