import React, { useEffect } from 'react'
import Image from 'next/image'
import ReadByCollection from '../../components/firestore/readByCollection'
import { useState } from 'react'
import Nav from '../../components/nav'
import { useCartContext } from '../../context/cartContext'

const Product = () => {

    const [products, setProducts] = useState([]);
//Query data
    useEffect(() => {
        const getData = async () => {
            const querySnapshot: any = await ReadByCollection('products');
            var product_array: any = [];
            querySnapshot.forEach((doc) => {
                product_array.push({data:doc.data(), id: doc.id});
            });
            setProducts(product_array);
        }
        getData()
    }, []);
// In/decrease button
    const onDecreaseAmount = (e) => {
        const inputLocation: any = document.querySelectorAll('input[id]');
        inputLocation.forEach((item) =>{ 
            if(item.id == e.target.id){
                item.value = parseInt(item.value) - 1 
            }
        })
        
    }

    const onIncreaseAmount = (e) => {
        const inputLocation: any = document.querySelectorAll('input[id]');
        inputLocation.forEach((item) =>{ 
            if(item.id == e.target.id){
                item.value = parseInt(item.value) + 1 
            }
        })
    }
//Cart handle function

    const {amount , setAmount} = useCartContext();

    const addToCart = (e) => {
        const current_value = e.target.parentNode.childNodes[0].childNodes[1].value;
        const current_id = e.target.parentNode.parentNode.id
        setAmount(current_value)
        console.log(current_value, current_id);
    }

    const instantToCart = (e) => {

    }

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
                Your Cart: {amount}
                </div>
            </Nav>

            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-10 gap-y-24 pt-32 pb-32">
                    {
                        products.map((item, index) => {
                            return (
                                <div className="text-center font-bold" key={index} id={`${item.id}`}>
                                    <div className="">
                                        <Image
                                            src={`${item.data.image_url}`}
                                            width={250}
                                            height={300}
                                        />
                                    </div>
                                    <div className="capitalize">
                                        {item.data.name}
                                    </div>
                                    <div className="mt-5">
                                        {item.data.price}
                                    </div>
                                    <div className="">
                                    <div className="">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 border border-blue-700 rounded" id={`${index}`} onClick={onDecreaseAmount}>
                                        -
                                    </button>
                                    <input type="text" className="text-center border py-0.5 mx-1 w-1/12 my-4" name="" id={`${index}`} value={amount} />
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 border border-blue-700 rounded" id={`${index}`} onClick={onIncreaseAmount}>
                                        +
                                    </button>
                                    </div>

                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mr-4" onClick={addToCart}>
                                        Thêm 
                                    </button>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={instantToCart}>
                                        Mua
                                    </button>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Product
