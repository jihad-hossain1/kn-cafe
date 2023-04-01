import React, { useEffect, useState } from 'react';
import SingleCart from '../Cart/SingleCart';
import SideCart from '../SideCart/SideCart';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [cart, setCart] = useState([]);
    const [times, setTimes] = useState([])


    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => {
            setBlogs(data);
        })
    }, []);
    const handleTime = (blog) => {
        const newTime = [...times, blog]
        setTimes(newTime);
    }
    const handleAddToCart = (blog) => {
        // setCart(blog);
        const newCart = [...cart, blog];
        setCart(newCart)
    }
    


    return (
        <>
            <div className="grid md:grid-cols-[2fr,1fr] lg:grid-cols-[4fr,1fr] m-2 gap-2">
                <div className="grid grid-cols-1  border border-spacing-1">
                    {
                        blogs.map(blog => <SingleCart
                            blog={blog}
                            key={blog.id}
                            handleAddToCart={handleAddToCart}
                            handleTime={handleTime}
                        ></SingleCart>)
                }    
                </div>

                <div className="border bottom-3 text-center relative">
                 
                    <SideCart cart={cart}
                            times={times}
                    ></SideCart>
                    
                </div>
            </div>
        </>
    );
};

export default Home;