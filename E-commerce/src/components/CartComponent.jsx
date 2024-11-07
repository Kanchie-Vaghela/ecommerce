import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../Slices/CartSlice'

export default function Card() {

    const Dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.items);


    return (
        <div className="bg-white">
            {cartItems === 0 ? (
                <p>Cart is empty............</p>
            ) : (
                cartItems.map((item) => (
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

                        </div>
                    </div>
                ))
            )}

        </div>
    )
}
