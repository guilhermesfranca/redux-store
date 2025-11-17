// Styles
import * as Styles from "./styles";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/index";
import { selectProductsTotalPrice } from "../../redux/cart/cart.selector";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const productsTotalPrice = useSelector(selectProductsTotalPrice)
  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        {products.map((product) => (
          <CartItem product={product} />
        ))}
        <Styles.CartTotal>Total: {productsTotalPrice}€</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
