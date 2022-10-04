import { useContext } from "react";
import ShopContext from '../context/ShopContext'
import {RiAddFill, RiSubtractFill} from 'react-icons/ri'

const ProductCart = ({ data}) => {

    const { handleRemoveFromCart, handleCartQuantity} = useContext(ShopContext)

    return (
        <>
            <div className="cart__product-card flex rel mb-20">
                <div className="cart__img-wrap rel">
                    <img className="cover-img" src={data.image} alt="" loading="lazy"/>
                </div>
                <div className="meta flex-col flex-grow">
                    <p className="product__title">{data.title}</p>
                    <p>
                        <span className="product__count"> Qty: {data.cartQuantity}</span>
                        <span>
                            <span onClick={()=>{handleCartQuantity(data, 'add')}}><RiAddFill/></span>
                            <span onClick={()=>{handleCartQuantity(data, 'remove')}}><RiSubtractFill/></span>
                        </span>
                    </p>
                </div>
                <div className="cart__product__price meta flex-c-sb flex-col flex-end">
                    <div className="cart__product__price--wrap flex flex-col flex-end">
                        <p className="discount__price">{data.discountPrice}</p>
                        <p className="mrp__price">{data.price}</p>
                    </div>
                    <button className="cta" onClick={() => {handleRemoveFromCart(data)}}>Remove</button>
                </div>
            </div>
        </>
    );
}

export default ProductCart;