import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (foods) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (foods.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const id in savedCart) {
                const addedProduct = foods.find(food => food.id === id);
                if (addedProduct) {
                    const quantity = savedCart[id];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [foods])
    return [cart, setCart];
};

export default useCart;