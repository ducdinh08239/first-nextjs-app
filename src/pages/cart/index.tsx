import React, { useMemo } from 'react'
import { useCartContext } from '../../context/cartContext'
import Nav from '../../components/nav'
import Image from 'next/image'
import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import Link from "next/link";

const Cart = () => {
    const { totalAmount, setTotalAmount, totalPrice, setTotalPrice, totalProduct, setTotalProduct } = useCartContext();
    //Current item clicked
    const [currentItem, setCurrentItem] = useState<any>({});

    useEffect(() => {
        var sum_total: number = 0;
        for (var i = 0; i < totalProduct.length; i++) {
            sum_total += parseInt(totalProduct[i].total_price);
        }
        setTotalPrice(sum_total);
    }, [])

    const increaseAmount = (e) => {
        e.target.parentNode.childNodes[1].value = parseInt(e.target.parentNode.childNodes[1].value) + 1;
        calculatePrice(e.target.parentNode.childNodes[1].id,
            e.target.parentNode.childNodes[1].value);
    }

    const decreaseAmount = (e) => {
        if (parseInt(e.target.parentNode.childNodes[1].value) > 1) {
            e.target.parentNode.childNodes[1].value = parseInt(e.target.parentNode.childNodes[1].value) - 1;
            calculatePrice(e.target.parentNode.childNodes[1].id,
                e.target.parentNode.childNodes[1].value);
        }
    }

    const removeProduct = async (e) => {
        var data_filter = await totalProduct.filter(item => item.id != e.target.parentNode.parentNode.id);
        await setTotalProduct(data_filter);
        setCurrentItem({
            id: e.target.parentNode.parentNode.id,
            value: e.target.parentNode.parentNode.childNodes[3].childNodes[1].value,
        })
    }

    const calculatePrice = (current_id, current_amount) => {
        var sum_amount: number = 0;
        var sum_total: number = 0;
        for (var i = 0; i < totalProduct.length; i++) {
            if (totalProduct[i].id == current_id) {
                totalProduct[i].amount = current_amount;
                totalProduct[i].total_price = parseInt(totalProduct[i].amount) * parseInt(totalProduct[i].price);
            }
            sum_amount += parseInt(totalProduct[i].amount);
            sum_total += parseInt(totalProduct[i].total_price);
        }
        setTotalAmount(sum_amount);
        setTotalPrice(sum_total);
    }

    useEffect(() => {
        calculatePrice(currentItem.id, currentItem.value);
    }, [totalProduct])

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
                    <table className="w-full">
                        {(totalProduct.length > 0) ? (
                            <>
                                <thead>
                                    <tr className="text-2xl text-gray-500">
                                        <th className="text-left">Product</th>
                                        <th>Unit Price</th>
                                        <th>Amount</th>
                                        <th className="text-right">Into Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        totalProduct.map((item, index) => {
                                            return (
                                                <tr className="" key={index} id={item.id}>
                                                    <td className="flex">
                                                        <div className="">
                                                            <Image className="rounded-2xl"
                                                                src={item.image_url}
                                                                width={120}
                                                                height={150}
                                                            />
                                                        </div>
                                                        <div className="pl-10 text-left">
                                                            <div className="text-2xl capitalize">{item.name}</div>
                                                            <div className="mt-3 text-sm text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                                                        </div>
                                                    </td>
                                                    <input type="hidden" value={item.price} name="unit_price" id="" />
                                                    <td className="text-2xl">{item.price} $</td>
                                                    <td className="">
                                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 border border-blue-700 rounded" onClick={decreaseAmount}>
                                                            -
                                                        </button>
                                                        <input type="text" className="text-center border py-0.5 mx-1 w-10 my-4" value={item.amount} id={item.id} name="" readOnly />
                                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 border border-blue-700 rounded" onClick={increaseAmount}>
                                                            +
                                                        </button>
                                                    </td>
                                                    <td className="text-2xl text-right">
                                                        {item.total_price} $
                                                    </td>
                                                    <td>
                                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-0.5 px-2 border border-red-700 rounded w-3/12" onClick={removeProduct}>
                                                            x
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                <tfoot className="">
                                    <tr className="">
                                        {/* @ts-ignore */}
                                        <td colSpan="3" className="text-center text-2xl font-bold">
                                            Total Price:
                                        </td>
                                        <td className="text-right text-2xl font-bold">
                                            {totalPrice} $
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr className="">
                                        {/* @ts-ignore */}
                                        <td colSpan="3"></td>
                                        {/* @ts-ignore */}
                                        <td colSpan="2" className="text-2xl font-bold">
                                            <Link href="/checkout">
                                                <a href="" className="rounded border px-5 py-2">
                                                    Checkout &#8627;
                                                </a>
                                            </Link>
                                        </td>
                                    </tr>
                                </tfoot>
                            </>
                        ) : (
                            <>
                                <tr className="text-2xl font-medium text-gray-400">
                                    There are no product in the cart
                                </tr>
                            </>
                        )
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart
