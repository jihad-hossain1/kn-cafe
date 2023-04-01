import React, { useEffect, useState } from 'react';
import SingleCart from '../Cart/SingleCart';
import SideCart from '../SideCart/SideCart';
import { addToDb, getShoppingCart } from '../utilites/fakedb';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [cart, setCart] = useState([]);
    const [times, setTimes] = useState([])


    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => {
            setBlogs(data);
        })
    }, []);
    useEffect(() => {
        // console.log(blogs);
        const storedCart = getShoppingCart();
        const savedBlog = [];
        // step-1: get id of the addedProduct
        // console.log(storedCart);
        for (const id in storedCart) {
            // step 2: get blog from blogs state by using id
            // console.log('blogs',blogs);
            const addedBlogs = blogs.find(blog => blog.id === id);
            // console.log(savedBlogs);
            if (addedBlogs) {
                // step 3: add quantity
                const quantity = storedCart[id]
                addedBlogs.quantity = quantity;
                // step 4: added the added blog to the saved cart
                savedBlog.push(addedBlogs);
            }
            // const quantity = storedCart[id];
            console.log(addedBlogs);
        }
        // step 5: set the cart
        setCart(savedBlog)
    },[blogs])
    const handleTime = (blog) => {
        const newTime = [...times, blog]
        setTimes(newTime);
    }
    const handleAddToCart = (blog) => {
        // setCart(blog);
        const newCart = [...cart, blog];
        setCart(newCart);
        addToDb(blog.id);
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

                <div className="border bottom-3 relative">
                 
                    <SideCart cart={cart}
                            times={times}
                    ></SideCart>
                    
                </div>
            </div>
        </>
    );
};

export default Home;