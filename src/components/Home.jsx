import React from 'react'
import '../styles/Home.css'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const img1 = "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWI78aTg_jSf3D1jUJeJbAzi5C-dTdD54Xg&usqp=CAU'
const img3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT99AUTXuaw0UfsP3EJnpqacOanIdVJRx4d7Q&usqp=CAU'
const img4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwK2wavCbwIsSVwqIzFV0erLx-ZSX5wzsJCA&usqp=CAU'

const Home = () => {

  const productList = [
    {
      name: "Smart Watch",
      price: 850,
      imgSrc: img3,
      id: "mnbasdfaf",
    },
    {
      name: "Mac Book",
      price: 120000,
      imgSrc: img1,
      id: "qrwerrr"
    },
    {
      name: "Sport Shoes",
      price: 450,
      imgSrc: img2,
      id: "asdfaf",
    },
    
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({type: "addToCart", payload: options});
    dispatch({ type: "calculatePrice" });
    toast.success('added to cart')
  }


  return (
    <div className="home">
      {
        productList.map((item) => (
          <ProductCard
            key={item.id}
            imgSrc={item.imgSrc}
            name={item.name}
            price={item.price}
            id={item.id}
            handler={addToCartHandler}
          />
        ))
      }
    </div>
  )
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>₹{price}</h4>
    {/* <h4>${price}</h4> */}
    <button onClick={() => handler({name, price, id, quantity:1, imgSrc})}>Add to Cart</button>
  </div>
);



export default Home