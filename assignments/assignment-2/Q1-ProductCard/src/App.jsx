import "./App.css";

function ProductCard({
  name = "Unknown Product",
  price = 0,
  image = "https://placehold.co/250x180?text=Product",
  rating = 0
}) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <div className="product-info">
        <h2>{name}</h2>
        <p className="price">₹{price.toLocaleString("en-IN")}</p>
        <p className="rating">⭐ {rating}/5</p>
      </div>
    </div>
  );
}

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
      image: "https://placehold.co/250x180?text=Laptop",
      rating: 4.5
    },
    {
      id: 2,
      name: "Smartphone",
      price: 25000,
      image: "https://placehold.co/250x180?text=Smartphone",
      rating: 4.3
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
      image: "https://placehold.co/250x180?text=Headphones",
      rating: 4.2
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 5000,
      image: "https://placehold.co/250x180?text=Smartwatch",
      rating: 4.4
    }
  ];

  return (
    <main className="app">
      <h1>Product Store</h1>
      <p className="subtitle">Explore our products</p>

      <div className="product-container">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}

export default App;