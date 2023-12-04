import { useCartContext } from '../../contexts/CartContext';
import './CartWidget.css' 

export const CartWidget = () => {
  const {cantidadProductos} = useCartContext();

  return (
    <div>
      {cantidadProductos() > 0 && <span className="contador-carrito">{cantidadProductos()}</span>}
      
    <img src="supercarrito-icon.jpg" alt="Imagen del super carrito de compras" />
    </div>
  )
  }
