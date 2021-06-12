import React, { useEffect } from 'react'
import Image from 'next/image'
import ReadByCollection from '../../components/firestore/readByCollection'
import { useState } from 'react'
import Nav from '../../components/nav'
import { useCartContext } from '../../context/cartContext'
import Link from "next/link";

const Product = () => {

    const [products, setProducts] = useState([]);
    //Query data
    useEffect(() => {
        const getData = async () => {
            const querySnapshot: any = await ReadByCollection('products');
            var product_array: any = [];
            querySnapshot.forEach((doc) => {
                product_array.push({ data: doc.data(), id: doc.id });
            });
            setProducts(product_array);
        }
        getData()
    }, []);

    const { totalAmount } = useCartContext()

    return (
        <>
            <Nav>
                <div className="nav-logo">
                    <Image
                        src="/images/logo.png"
                        width={60}
                        height={60}
                    />
                </div>
                <div className="nav-content flex items-center">
                    Your Cart: {totalAmount}
                </div>
            </Nav>

            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-10 gap-y-24 pt-32 pb-32">
                    {
                        products.map((item, index) => {
                            return (
                                <Link href={`/products/${item.id}`}>
                                    <a className="cursor-pointer">
                                        <div className="text-center font-bold" key={index} id={`${item.id}`}>
                                            <div className="">
                                                <Image className="rounded-xl"
                                                    src={`${item.data.image_url}`}
                                                    width={250}
                                                    height={300}
                                                />
                                            </div>
                                            <div className="capitalize">
                                                {item.data.name}
                                            </div>
                                            <div className="mt-5">
                                                {item.data.price} $
                                            </div>
                                        </div>
                                    </a>
                                </Link>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Product
