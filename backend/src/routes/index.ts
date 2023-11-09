import { Router } from "express";
import { scrapeRoutes } from "./scrape.routes";

const router = Router();

/*
  This file would have all specific routes to my application. Since this project only have a GET request and
  only one Route, I've created only a file with the routes of scrape functions
*/
router.use('/api/scrape', scrapeRoutes);

export { router };