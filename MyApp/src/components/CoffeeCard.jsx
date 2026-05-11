import "./CoffeeCard.css";

export default function CoffeeCard({ coffee }) {
  return (
    <div className="coffee-card">
      <h3 className="card-name">{coffee.name}</h3>
      <p className="card-description">{coffee.description}</p>
      <div className="card-meta">
        <span className="card-origin">{coffee.origin}</span>
        <span className="card-price">{coffee.price}</span>
      </div>
    </div>
  );
}