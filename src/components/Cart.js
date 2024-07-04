import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    //dispatch to perform action in the cart body
    const dispatch = useDispatch((store)=> store.cart.items )
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
    //subsctiption to make changes in the  header
    const addedCartItems = useSelector((store)=>store.cart.items);
    return (
        <div >
            <h1 class="font-bold text-center text-xl">cart</h1>
            <div className="w-6/12 m-auto">
                <ItemsList items = {addedCartItems}/>
                
            </div>
            <div className="flex justify-center m-auto">
             <button className="bg-red-900 text-white p-3 rounded-md text-md" onClick={handleClearCart}>Clear</button>
             
            </div>
            {addedCartItems.length === 0 && (<h1 className="text-center">😋🍽️ cart is Hungry , Feed it 😉</h1>)}
        </div>
    );
};

export default Cart;
