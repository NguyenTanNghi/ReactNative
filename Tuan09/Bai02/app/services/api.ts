// API service to fetch drinks
export interface Drink {
    id: number;
    name: string;
    price: number;
    image?: string;
}

export const fetchDrinks = async (): Promise<Drink[]> => {
  const response = await fetch('https://68e6175321dd31f22cc41c7a.mockapi.io/order');
  return response.json();
};
