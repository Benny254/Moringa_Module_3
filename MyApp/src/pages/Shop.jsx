import { useState } from "react";
import { useCoffee } from "../context/CoffeeContext";
import { locations } from "../data/coffees";
import CoffeeCard from "../components/CoffeeCard";
import "./Shop.css";

export default function Shop() {
  const { coffees } = useCoffee();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocations, setSelectedLocations] = useState([]);

  const toggleLocation = (loc) => {
    setSelectedLocations((prev) =>
      prev.includes(loc) ? prev.filter((l) => l !== loc) : [...prev, loc]
    );
  };

  const filtered = coffees.filter((coffee) => {
    const matchesSearch =
      coffee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coffee.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coffee.origin.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation =
      selectedLocations.length === 0 ||
      selectedLocations.includes(coffee.location);

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="shop-page">
      <aside className="sidebar">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="location-filters">
          {locations.map((loc) => (
            <label key={loc} className="location-label">
              <input
                type="checkbox"
                checked={selectedLocations.includes(loc)}
                onChange={() => toggleLocation(loc)}
              />
              <span>{loc}</span>
            </label>
          ))}
        </div>
      </aside>

      <section className="coffee-grid">
        {filtered.length > 0 ? (
          filtered.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))
        ) : (
          <p className="no-results">No coffees found.</p>
        )}
      </section>
    </div>
  );
}