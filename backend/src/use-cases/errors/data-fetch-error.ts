export class DataFetchError extends Error {
  constructor() {
    super('Failed to fetch data from Amazon.');
  }
}