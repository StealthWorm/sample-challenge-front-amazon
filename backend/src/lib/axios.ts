import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://www.amazon.com.br/',
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
})
