import { Router } from "express";
import { SearchProductsController } from "../http/controllers/scrape/search";

const scrapeRoutes = Router();

// I could have used class declaration here, but for this project I used the approach of function declaration
// Inside this files I would have all methods about the scrape route, each one calling it's controller
const searchProductsController = new SearchProductsController();

scrapeRoutes.get('/', searchProductsController.handle);

export { scrapeRoutes };