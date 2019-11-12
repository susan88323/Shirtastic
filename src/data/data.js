import shirtImage11 from "../images/mans-shirt-1-1.jpg"
import shirtImage12 from "../images/mans-shirt-1-2.jpg"
import shirtImage13 from "../images/mans-shirt-1-3.jpg"
import shirtImageW11 from "../images/w-shirt-1-1.jpg"
import shirtImageW12 from "../images/w-shirt-1-2.jpg"
import shirtImageW13 from "../images/w-shirt-1-3.jpg"

export const dataSource = [
  {
    id: 1,
    name: "Awesome T-Shirt",
    gender: "M",
    description:
      "Cotton tees in our signature slim fit. Featuring a crewneck and icon at left chest. Slim Fit. Imported",
    items: [
      { id: 11, image: shirtImage11, price: 10, qty: 3, size: ["S", "M", "L"] },
      { id: 12, image: shirtImage12, price: 11, qty: 1, size: ["S"] },
      { id: 13, image: shirtImage13, price: 9, qty: 5, size: ["M", "L"] },
    ],
  },
  {
    id: 2,
    name: "Awesome T-Shirt",
    gender: "W",
    description:
      "Cotton tees in our signature slim fit. Featuring a crewneck and icon at left chest. Slim Fit. Imported",
    items: [
      { id: 21, image: shirtImageW11, price: 13, qty: 3, size: ["S", "M", "L"] },
      { id: 22, image: shirtImageW12, price: 22, qty: 1, size: ["S"] },
      { id: 23, image: shirtImageW13, price: 14, qty: 5, size: ["M", "L"] },
    ],
  },
]
