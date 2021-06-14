import React, { useState } from 'react'
import ReadById from '../../components/firestore/readById'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Nav from '../../components/nav'
import { useCartContext } from '../../context/cartContext'
import Link from "next/link";
import Image from 'next/image'
import Router from 'next/router'

const ProductDetail = ({ parseData, id }) => {

    const { totalAmount, setTotalAmount, totalProduct, setTotalProduct } = useCartContext()
    const [amount, setAmount] = useState(1);

    const increaseAmount = () => {
        setAmount(amount + 1)
    }

    const decreaseAmount = () => {
        if (amount > 1) {
            setAmount(amount - 1)
        }
    }

    const addToCart = (e) => {
        var value = e.target.parentNode.childNodes[0].childNodes[1].value;
        setTotalAmount(parseInt(totalAmount) + parseInt(value))

        totalProduct.push({
            ...parseData,
            amount: parseInt(value),
            id: id,
            total_price: parseInt(value) * parseInt(parseData.price)
        });
        for (var i = 0; i < totalProduct.length; i++) {
            for (var k = i + 1; k < totalProduct.length; k++) {
                if (totalProduct[i].id == totalProduct[k].id) {
                    var newAmount = parseInt(totalProduct[i].amount) + parseInt(totalProduct[k].amount)
                    totalProduct.splice(i, 1)
                    totalProduct.splice(k - 1, 1)
                    totalProduct.push({
                        ...parseData,
                        id: id,
                        amount: newAmount,
                        total_price: newAmount * parseInt(parseData.price),
                    });
                }
            }
        }

        if (e.target.id != "addToCart") {
            Router.push('/cart')
        }
    };

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
                <Link href="/cart">
                    <div className="nav-content flex items-center border rounded-2xl px-5 cursor-pointer">
                        <a href="">
                            Your Cart: {totalAmount}
                        </a>
                    </div>
                </Link>
            </Nav>
            <div className="container mx-auto">
                <div className="text-center pt-20">
                    <div className="" id={id}>
                        <Image className="rounded-2xl"
                            src={`${parseData.image_url}`}
                            width={300}
                            height={400}
                        />
                    </div>
                    <div className="font-bold text-3xl capitalize">{parseData.name}</div>
                    <div className="font-medium text-2xl">{parseData.price} $</div>
                    <div className="">
                        <div className="">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 border border-blue-700 rounded" onClick={decreaseAmount}>
                                -
                            </button>
                            <input type="text" className="text-center border py-0.5 mx-1 w-10 my-4" value={amount} name="" readOnly />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 border border-blue-700 rounded" onClick={increaseAmount}>
                                +
                            </button>
                        </div>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mr-4" onClick={addToCart} id="addToCart">
                            Add to cart
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={addToCart} id="instantToCart">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail

export const getServerSideProps = async ({ params }: any) => {
    var data = await ReadById('products', params.product_id)
    const parseData = JSON.parse(JSON.stringify(data.data()))
    return { props: { parseData: parseData, id: params.product_id } }
}
