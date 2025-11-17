import { useState } from "react";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { useSelector } from "react-redux";
import { selectProductsCount } from "../../redux/cart/cart.selector";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const productsCount = useSelector(selectProductsCount)

  return (
    <Styles.Container>
      <Styles.Logo>🛒Redux Store</Styles.Logo>
      <Styles.Buttons>
        <div>Login</div>
        <div onClick={handleCartClick}>Carrinho {productsCount > 0 && `(${productsCount})`}</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
