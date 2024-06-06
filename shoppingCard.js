// Componente Product
function Product(props) {
  const [quantity, setQuantity] = useState(props.quantity);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <p>{props.name}: ${props.price} x {quantity} = ${props.price * quantity}</p>
      <button onClick={handleIncreaseQuantity}>Aumentar cantidad</button>
    </div>
  );
}

// Componente ShoppingCart
function ShoppingCart(props) {
  const [products, setProducts] = useState(props.products);

  const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const handleEmptyCart = () => {
    setProducts([]);
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
      <p>Total: ${totalPrice}</p>
      <button onClick={handleEmptyCart}>Vaciar carrito</button>
    </div>
  );
}
