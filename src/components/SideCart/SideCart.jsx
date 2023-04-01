import React from 'react';

const SideCart = (props) => {
    const cart = props.cart;
    console.log(props);
    const times = props.times;
    let total = 0;
    for (const tim of times) {
        total = total + tim.readTime
    }

    // let totalTime = 0;
    // for (const time of cart) {
    //     totalTime = totalTime + time.readTime
    // }
    // console.log(cart);
    return (
        <div className="sticky top-0 ">
            <h2>Time spend: {total}</h2>
            <h3>Bookmarked: {cart.length} </h3>
            <div className="bg-slate-200 m-2 ">
                {
                    cart.map(p => <h2 className="font-semibold rounded bg-slate-300 p-2 border">{p.blogTitle}</h2>)
                }
            </div>
        </div>
    );
};

export default SideCart;