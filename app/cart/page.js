'use client'


export default function Cart(){
    return (
        <div>
            <h4 className="title">Cart</h4>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>
    )
}

function CartItem(){
    return (
        <div className="cart-item">
            <p>상품평</p>
            <p>$40</p>
            <p>2개</p>
        </div>
    )
}