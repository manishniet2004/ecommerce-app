import { toast } from "react-toastify";
import { createContext, createRef, useEffect, useState } from "react";
// import { products } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const ShopContext=createContext();
const ShopContextProvider= (props)=>{
    const currency = '$'; // Wrap the $ in single or double quotes
    const delivery_fee=10;
    const backend_url=import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch]=useState('');
    const [showSearch, setShowSearch]=useState(false);
    const [cartItems, setCartItems]=useState(()=>{
        try{
            return JSON.parse(localStorage.getItem('cartItems')) || {};
        }catch{
            return {};
        }
    });
    const [products, setProducts]=useState([]);
    const [token, setToken]=useState(()=>localStorage.getItem('token') || '');
    const navigate=useNavigate();

    const addToCart=async(itemId, size)=>{

        if(!size){
            toast.error('Select Product Size');
            return;
        }
        let cartData=structuredClone(cartItems);

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1;
            }else{
                cartData[itemId][size]=1;
            }
        }else{
            cartData[itemId]={}
            cartData[itemId][size]=1;
        }
        setCartItems(cartData);

        if(token){
            try{
                await axios.post(backend_url + '/api/cart/add', {itemId, size}, {headers:{token}})
            }catch(error){
                console.error(error);
                toast.error(error.message);
            }
        }
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            // Added 'const' before item to declare it
            for (const item in cartItems[items]) { 
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    // It's better to log errors during debugging
                    console.error(error);
                }
            }
        } 
        return totalCount;
    }

    const updateQuantity=async(itemId, size, quantity)=>{
        let cartData=structuredClone(cartItems);
        cartData[itemId][size]=quantity;
        setCartItems(cartData);

        if(token){
            try{
                await axios.put(backend_url + '/api/cart/update', {itemId, size, quantity}, {headers:{token}})
            }catch(error){
                console.error(error);
                toast.error(error.message);

            }
        }
    }

    // useEffect(()=>{
    //     console.log(cartItems);
    // },[cartItems]);

    const getCartAmount=()=>{
        let totalAmount=0;
        for(const items in cartItems){
            let itemInfo=products.find((product)=>product._id === items);
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalAmount+=itemInfo.price * cartItems[items][item]
                    }
                }catch(error){

                }
            }
        }
        return totalAmount;
    }

    const getProductsData=async()=>{
        try{
            const response=await axios.get(backend_url + '/api/product/list')
            if(response.data.success){
                setProducts(response.data.products);
            }else{
                toast.error(response.data.message);
            }
        }catch(error){
            console.error('Error fetching products data:', error);
            toast.error(error.message)
        }
    };


    const getUserCart=async(token)=>{
        try{
            const response=await axios.get(backend_url + '/api/cart/get', {headers:{token}})
            if(response.data.success){
                setCartItems(response.data.cartData || {});
            }
        }catch(error){
            console.error(error);
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        getProductsData();
    },[])

    useEffect(()=>{
        if(token){
            getUserCart(token);
        }
    },[token])

    useEffect(()=>{
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    },[cartItems])

    const value={
        products,
        currency, 
        delivery_fee,
        search, 
        setSearch, 
        showSearch, 
        setShowSearch,
        cartItems,
        setCartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        backend_url, 
        setToken,
        token
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider; 