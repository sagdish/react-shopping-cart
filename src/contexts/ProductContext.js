import { createContext } from 'react'

export const ProductContext = createContext(
  {
    id: 1,
    title: 'test title',
    price: 99.99,
    image: 'https'
  }
);