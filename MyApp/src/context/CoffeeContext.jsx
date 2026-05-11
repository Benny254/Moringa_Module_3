import { createContext, useContext, useState } from "react";
import { initialCoffees } from "../data/coffees";

const CoffeeContext = createContext();

export function CoffeeProvider({ children }) {
  const [coffees, setCoffees] = useState(initialCoffees);

  const addCoffee = (coffee) => {
    setCoffees((prev) => [
      ...prev,
      { ...coffee, id: Date.now(), location: coffee.location || "Location 1" },
    ]);
  };

  return (
    <CoffeeContext.Provider value={{ coffees, addCoffee }}>
      {children}
    </CoffeeContext.Provider>
  );
}

export function useCoffee() {
  return useContext(CoffeeContext);
}