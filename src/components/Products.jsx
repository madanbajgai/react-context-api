import Card from "./Card";

const Products = () => {
  const products = [
    { name: "vest", price: 50 },
    { name: "jacket", price: 70 },
    { name: "sweater", price: 20 },
    { name: "tshirt", price: 40 },
    { name: "necklace", price: 55 },
    { name: "jumper", price: 45 },
  ];
  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <Card key={product.price} name={product.name} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default Products;
