import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart,removeFromCart} from '../Slices/CartSlice'
import { AddToWishlist } from '../Slices/WishlistSlice'

// const products = [
//   {
//     id: 1,
//     name: 'Basic Tee',
//     href: '#',
//     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'Black',
//   },
//   // More products...
// ]

export default function Card({
  id,
  title,
  price,
  category,
  description,
  image,
}) {

  const Dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = () => {
    Dispatch(addToCart({
      id,
      title,
      price,
      image,
    }));
  }

  const handleWishlist = () => {
    Dispatch(AddToWishlist({
      id,
      title,
      price,
      image,
    }))
  }

  return (
    <div className="bg-white">
      
        <div className="mx-auto max-w-2xl px-2 py-5 sm:px-2 sm:py-9 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col justify-evenly">
          <Link to={"/ProductDetails"}>
            <div key={id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  // alt={product.imageAlt}
                  src={image}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex flex-col py-3 justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={"#"}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {title}
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                <p className="text-sm font-medium text-gray-900">{price}</p>
              </div>
            </div>
            </Link>
          </div>
          
          <div className='py-2 gap-2 flex flex-col justify-around'>
          <button onClick={handleAddToCart} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Add to Cart
          </button>
          <button onClick={handleWishlist} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Wishlist
          </button>
          </div>
        </div>
    </div>
  )
}
