import { useContext } from "react";
import ShopContext from '../context/ShopContext'

const WishList = () => {
    const { wishlistData } = useContext(ShopContext)

    return (
        <>
            <div className="wishlist-container">
                <ul>
                    {
                        wishlistData.map(element =>
                            <li key={element.id}>
                                <h4>{element.title}</h4>
                            </li>)
                    }
                </ul>
            </div>
        </>
    );
}

export default WishList;