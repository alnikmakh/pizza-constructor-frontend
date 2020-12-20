import axios, { AxiosInstance } from "axios";
import {IPizzaDTO} from "./DTO/pizzaDTO";
import {IUserDTO} from "./DTO/userDTO";

export interface IPizzaAPI {
  client: AxiosInstance;
}

class API implements IPizzaAPI {
  client;

  constructor() {
    this.client = axios.create({
      baseURL: `http://localhost:5000`,
      responseType: `json`
    });
  }

  getPizzas = async (): Promise<any> => {
    const result = await this.client.get(`/pizzas`).then((res) => {
      return res.data;
    });

    return result;
  }

  createPizza = async (pizzaDTO: IPizzaDTO): Promise<void> => {
    await this.client.post(`/`).catch((err) => {
      console.log(err);
    });
  }

  login = async (user: IUserDTO): Promise<string> => {
    const token = await this.client.post(`/auth/login`, user).then((res) => res.data.access_token);
    return token;
  }
}

export const PizzaAPI = new API();
