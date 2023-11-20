import { Product, taxCalculation } from './06-function-destructuring'

const shoppingCart: Product[] = [
  {
    description: 'Phone 1',
    price: 100,
  },
  {
    description: 'Phone 2',
    price: 200,
  },
  {
    description: 'Phone 3',
    price: 300,
  },
]

// Tax = 0.15

const [total, tax] = taxCalculation({ tax: 0.15, products: shoppingCart })

console.log(`Total: ${total}`)
console.log(`Tax: ${tax}`)
