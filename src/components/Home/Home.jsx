import React, { useEffect, useState } from 'react';
import SingleCart from '../Cart/SingleCart';
import SideCart from '../SideCart/SideCart';
import { addToDb, getShoppingCart } from '../utilites/fakedb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            // console.log(addedBlogs);
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
        let newCart = [];
        //
        // const newCart = [...cart, blog];
        // if product does't exist in the cart, then set quantity = 1;
        // if exist qudate quantiy by 1
        const exists = cart.find(pd => pd.id === blog.id);
        if (!exists) {
            
            blog.quantity = 1;   
            newCart = [...cart, blog]
            
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== blog.id);
            newCart = [...remaining, exists];
            // toast("already bookmark!!!!");
            toast.warning('You Already Bookmarked !', {
        position: toast.POSITION.TOP_LEFT
    });


        }
        setCart(newCart);
        addToDb(blog.id);
    }

    


    return (
        <>
            <div className="grid md:grid-cols-[2fr,1fr] gap-2">
                <div className="grid grid-cols-1 ">
                    {
                        blogs.map(blog => <SingleCart
                            blog={blog}
                            key={blog.id}
                            handleAddToCart={handleAddToCart}
                            handleTime={handleTime}
                        ></SingleCart>)
                }    
                </div>

                <div className="relative ">
                 
                    <SideCart cart={cart}
                            times={times}
                    ></SideCart>
                    
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Home;