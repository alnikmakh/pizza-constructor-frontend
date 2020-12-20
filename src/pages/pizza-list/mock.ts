import {toppings} from "../pizza-constructor/mock";

export interface IPizza {
  name: string;
  ingredients: string[];
}

export const pizzas: IPizza[] = [
  {
    name: "Пепперони на тонком тесте Пепперони на",
    ingredients: [
      toppings[0],
      toppings[11]
    ],
  }
];
