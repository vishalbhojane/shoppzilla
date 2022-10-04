import { useContext } from "react";
import ShopContext from "../context/ShopContext";
import ProductCart from "../components/ProductCart";

const Cart = () => {
    const {cartData, TAX_CLOTHES, bagTotal, bagDiscount, taxTotal, orderTotal} = useContext(ShopContext)
    
    return (
        <>
        <div className="cart-container p-20-25 flex g-50">
            <section className="cart-products-container flex-grow">
                    {
                        cartData.map(el =><ProductCart key={el.id} data={el}/>)
                    }
            </section>
            <section className="price-details-container">
                <p>Price Details</p>

                <p className="flex-c-sb"><span>Bag Total</span> <span>{bagTotal}</span></p>
                <p className="flex-c-sb"><span>Bag Discount</span> <span>{bagDiscount}</span></p>
                <p className="flex-c-sb"><span>{`GST ${TAX_CLOTHES}%`}</span> <span>{taxTotal}</span></p>
                <p className="flex-c-sb"><span>Order Total</span> <span>{orderTotal}</span></p>
            </section>
        </div>
        </>
    );
}

export default Cart;