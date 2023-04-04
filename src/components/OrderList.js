import { Link } from "react-router-dom";
import { useState } from "react";

const OrderList = ({orders}) => {
    //const orders = props.orders;

    return(
        <div className="order-list">
            {orders.sort((a,b) => a.paid > b.paid ? 1:-1).map((order) => (
                <div className={`order-preview ${order.fulfilled ? "fulfilled-order" : ""} ${order.paid ? "paid-order" : ""}`} key={order.id}>
                    <div className="order-content">
                        <Link to={`/orders/${order.id}`}>
                            <h2>{order.name}</h2>
                            <p>Address: { order.address }</p>
                            <hr />
                            <h4>Items Ordered:</h4>
                            <p>
                                { order.items.map((item, index) => (
                                    <span key={index}>
                                        { item.itemName } : { item.quantity }{ index + 1 != order.items.length && <span> | </span>} 
                                    </span>
                                ))}
                            </p>
                        </Link>
                    </div>
                    {/* <button onClick={() => handleDelete(order.id)}>Delete</button> */}
                </div>
            ))}
        </div>
    );
}

export default OrderList;