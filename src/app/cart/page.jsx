"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../redux/cartSlice";
import CartComp from "../../components/cart/CartComp";
import Link from "next/link";
import CustomButton from "../../components/CustomButton";

const Cart = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.carts);
  // const totalAmount = useSelector((state) => state.carts.totalAmount);
  // const itemCount = useSelector((state) => state.carts.itemCount);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen border">
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="text-xl font-bold mt-4 md:mt-0 my-20 text-right">
            {/* Toplam: {totalAmount}TL */}

            <button className="text-black rounded-lg bg-white min-w-[130px] border p-2 mr-2 hover:bg-black hover:text-white mx-auto mt-5  ">
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
        <div className="text-xl mt-40  text-center ">
          <p>No products have been added</p>
          <Link href="/categories">
            <button className="text-white rounded-lg bg-black min-w-[130px] border p-2 mr-2 hover:bg-white hover:text-black mx-auto mt-5 ">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
