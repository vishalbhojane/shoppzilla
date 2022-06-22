import { useContext } from "react";
import ShopContext from '../context/ShopContext'

const { CartSummaryData } = useContext(ShopContext)

const CartSummary = () => {
    return (
        <>
            <div className="wishlist-container">
                <ul>
                    {
                        CartSummaryData.map(element =>
                            <li key={element.id}>
                                <h4>{element.title}</h4>
                            </li>)
                    }
                </ul>
            </div>
        </>
    );
}

export default CartSummary;