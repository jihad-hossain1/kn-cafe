import React from 'react';

const SideCart = (props) => {
    const cart = props.cart;
    // console.log(props);
    const times = props.times;
    // console.log(cart);
    let total = 0;
    let quantity = 0;
    for (const tim of times) {
        total = total + tim.readTime

    }
    for (const qty of cart) {
        // qty.quantity = qty.quantity || 1;
        quantity = quantity + qty.quantity 
    }

    // let totalTime = 0;
    // for (const time of cart) {
    //     totalTime = totalTime + time.readTime
    // }
    // console.log(cart);
    return (
        <>
            <div className="sticky top-0 ">
                <div className="bg-slate-200 rounded p-2">
                    <h2>Total spend time: {total} min</h2>
                    <h3>Bookmarked items: {cart.length} </h3>
                    <p>TotalBK-Qty: { quantity}</p>
                </div>
                <div className="bg-slate-200  py-1">
                    {
                        cart.map(p => <h2 className="font-semibold rounded bg-slate-300 p-2 m-2">{p.blogTitle}</h2>)
                    }
                </div>
            </div>
        </>
    );
};

export default SideCart;