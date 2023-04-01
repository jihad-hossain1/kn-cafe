import React from 'react';

const SingleCart = (props) => {
    // console.log(props.blog);
    const { cover_image, author_image, authorName, readTime, blogTitle, id, tag_name } = props.blog;
    const handleAddToCart = props.handleAddToCart;
    const handleTime = props.handleTime;
    // console.log(props);
  

    return (
        <>
            <div className="card card-compact w-full bg-base-100 shadow mb-3 ">
                <figure><img src={cover_image} alt="blog" /></figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <div className="flex">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <img src={author_image} />
                                </div>
                            </label>
                            <div className="ml-3">
                                <h3 className="text-lg font-semibold">{authorName}</h3>
                                <p>Jun 4 (2 Days ago)</p>
                            </div>
                        </div>
                        <div>
                            <p>{readTime} min read <button onClick={()=> handleAddToCart(props.blog)} className="btn btn-info btn-xs btn-outline text-xs"><small className="lowercase">Book</small></button> </p>
                        </div>
                    </div>
                    <h2 className="card-title text-2xl font-bold">{blogTitle}</h2>
                    <p className="text-slate-400">{tag_name}</p>
                    <p onClick={() => handleTime(props.blog)} className="underline font-semibold text-blue-600 cursor-pointer">Mark as read</p>
                    
                </div>
            </div> 
        </>
    );
};

export default SingleCart;