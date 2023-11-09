export class NoKeywordProvided extends Error {
  constructor() {
    super('Please provide a valid keyword in the query parameter.');
  }
}