import React from 'react'
import { useCartContext } from '../../context/cartContext'
import Nav from '../../components/nav'
import Image from 'next/image'
import { useState } from 'react'
import { useCallback } from 'react'

const Cart = () => {
    const { totalAmount, setTotalAmount, totalProduct, setTotalProduct } = useCartContext()


    const increaseAmount = (e) => {
        e.target.parentNode.childNodes[1].value = parseInt(e.target.parentNode.childNodes[1].value) + 1;
        calculate(e.target.parentNode.parentNode.childNodes[1].value, e.target.parentNode.childNodes[1].value, e.target.parentNode.parentNode.childNodes[4]);
        
    }

    const decreaseAmount = (e) => {
        if (parseInt(e.target.parentNode.childNodes[1].value) > 1) {
            e.target.parentNode.childNodes[1].value = parseInt(e.target.parentNode.childNodes[1].value) - 1;
            calculate(e.target.parentNode.parentNode.childNodes[1].value, e.target.parentNode.childNodes[1].value, e.target.parentNode.parentNode.childNodes[4]);
        }
    }

    const calculate = (unit_price, quantity, location) => {
        location.innerHTML = parseInt(unit_price)*parseInt(quantity) + "$"
    }

    return (
        <div>
            <Nav>
                <div className="nav-logo">
                    <Image
                        src="/images/logo.png"
                        width={60}
                        height={60}
                    />
                </div>
                <div className="nav-content flex items-center border rounded-2xl px-5 cursor-pointer">
                    Your Cart: {totalAmount}
                </div>
            </Nav>
            <div className="container mx-auto">
                <div className="text-center pt-20">
                    {
                        totalProduct.map((item, index) => {
                            return (
                                <>
                                    <div className="grid grid-cols-5 mb-10 items-center" key={index} id={item.id}>
                                        <div className="flex">
                                            <div className="">
                                                <Image className="rounded-2xl"
                                                    src={item.image_url}
                                                    width={120}
                                                    height={150}
                                                />
                                            </div>
                                            <div className="ml-10">
                                                <div className="text-3xl font-bold capitalize text-left">{item.name}</div>
                                                <div className="mt-3 text-xs text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                                            </div>

                                        </div>
                                        <input type="hidden" value={item.price} name="unit_price" id="" />
                                        <div className="mx-20 text-3xl font-bold">{item.price} $</div>
                                        <div className="">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 border border-blue-700 rounded" onClick={decreaseAmount}>
                                                -
                                            </button>
                                            <input type="text" className="text-center border py-0.5 mx-1 w-10 my-4" value={item.amount} id={item.id} name="" readOnly />
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 border border-blue-700 rounded" onClick={increaseAmount}>
                                                +
                                            </button>
                                        </div>
                                        <div className="mx-20 text-3xl font-bold">
                                            100 $
                                        </div>
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-0.5 px-2 border border-red-700 rounded w-2/12">
                                            x
                                        </button>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart
