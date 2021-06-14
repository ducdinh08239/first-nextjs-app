import React from 'react'
import { useCartContext } from '../../context/cartContext'
import Image from 'next/image'
import Link from "next/link";
import Router from 'next/router';

const Checkout = () => {

    const { totalPrice, totalProduct } = useCartContext();

    const removeLocalValue = async() => {
        localStorage.clear();
        await Router.push('/');
        location.reload();
    }
    return (
        <div>
            <div className="text-center container mx-auto">
                <table className="w-full px-20">
                    <thead className="text-3xl text-gray-500">
                        <th className="text-left" >Product</th>
                        <th>Unit Price</th>
                        <th>Amount</th>
                        <th className="text-right">Into Price</th>
                    </thead>
                    <tbody>
                        {totalProduct.map((item, index) => {
                            return (
                                <>
                                    <tr key={index} className="text-2xl">
                                        <td className="flex items-center">
                                            <Image className="rounded-2xl"
                                                src={item.image_url}
                                                width={70}
                                                height={100}
                                            />
                                            <div className="pl-10">
                                                {item.name}
                                            </div>
                                        </td>
                                        <td>
                                            {item.price} $
                                        </td>
                                        <td>
                                            {item.amount}
                                        </td>
                                        <td className="text-right">
                                            {item.total_price} $
                                        </td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                    <tfoot>
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
                            <td colSpan="1" className="text-right text-2xl font-bold cursor-pointer"onClick={removeLocalValue}>
                                <div className="rounded border px-5 py-2">
                                    Confirm to pay &#8627;
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default Checkout
