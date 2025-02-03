import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../storages/hook.ts";
import {getAllProducts, createProduct, changeProduct, deleteProduct} from "../storages/Product/productSlice.ts";
import {IProductData} from "../types/types.ts";


export const useProducts = () => {
    const dispatch = useAppDispatch();
    const {products, isLoading, isError} = useAppSelector((state) => state.products)

    useEffect(() => {

        if (!products || products.length === 0) {
            dispatch(getAllProducts());
        }

    }, [dispatch])

    const addProduct = (productData: IProductData) => {
        dispatch(createProduct(productData))
    }

    const editProduct = (productData: IProductData) => {
        dispatch(changeProduct(productData))
    }

    const removeProduct = (id: number) => {
        dispatch(deleteProduct(id))
    }

    return {
        products,
        isLoading,
        isError,
        addProduct,
        editProduct,
        removeProduct,
    }

}
