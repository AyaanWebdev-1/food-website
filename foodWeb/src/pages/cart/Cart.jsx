import { useContext } from "react"
import "./Cart.css"
import StoreContext from "../../context/StoreContext"

function Cart() {
  const {cartItems,removeToCart,food_list,getTotalAmount}=useContext(StoreContext)
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
      
      {food_list.map((item,index)=>{
        if(cartItems[item._id]>0){
          return(
            <>
            <div key={index} className="cart-items-title cart-items-item">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.price*cartItems[item._id]}</p>
              <p className="cross" onClick={()=>removeToCart(item._id)}>X</p>
            </div>
            <hr />
            </>
          )
        }
      })}
      </div>
      <div className="card-bottom">
        <div className="card-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
               <p>Delivery Fee</p>
               <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalAmount()+2}</b>
            </div>
     
          </div>
          <button>PROCEED TO CHECK OUT</button>
        </div>
        
        <div className="card-promo-code">
          <div>
            <p>If you have a promo code , Enter it here</p>
            <div className="cart-promocode-input">
                  <input type="text" placeholder="promocode" />
                  <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
