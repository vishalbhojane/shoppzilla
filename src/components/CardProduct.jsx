import { useContext } from "react";
import ShopContext from '../context/ShopContext'
import { AiOutlineHeart } from 'react-icons/ai'
import { useState } from "react";

const CardProduct = ({ data }) => {

    const [wlCtaView, setWlCtaView] = useState(false)
    const [wlCtaColor, setWlCtaColor] = useState("#000")

    const { handleAddToWishList } = useContext(ShopContext)

    return (
        <>
            <div className="product-card" onMouseEnter={() => { setWlCtaView(true) }} onMouseLeave={() => { setWlCtaView(false) }} >
                <div className="img-wrap rel">
                    <img className="product__img" src={data.image} alt="" loading="lazy"/>
                    {wlCtaView && <>
                        <div className="cta-wrap ab-br flex-c-sb">
                            <button className="flex-c-sb g-10 p-5-10" style={{ cursor: "pointer" }} onClick={() => { handleAddToWishList(data) }} onMouseEnter={() => setWlCtaColor("#ff517b")} onMouseLeave={() => setWlCtaColor("#000")}>Wishlist<AiOutlineHeart color={wlCtaColor} /> </button>
                        </div>
                    </>
                    }

                </div>
                <div className="meta flex-c-sb flex-col">
                    <h3 className="product__title">{data.brand}</h3>
                    <p className="product__desc">{data.description}</p>
                    <p className="product__price">{data.price}</p>
                </div>
            </div>
        </>
    );
}

export default CardProduct;