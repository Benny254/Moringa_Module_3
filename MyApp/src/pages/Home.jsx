import "./Home.css";

export default function Home({ onShopClick }) {
  return (
    <div className="home-page">
      <div className="hero">
        <h1 className="hero-title">Coffee R Us</h1>
        <p className="hero-subtitle">The go to store for your coffee needs</p>
        {onShopClick && (
          <button className="hero-cta" onClick={onShopClick}>
            Browse Our Collection
          </button>
        )}
      </div>
    </div>
  );
}