import './style.css'
import FormAction from "../../components/FormAction/FormAction.tsx";
import {useProducts} from "../../hooks/useProducts.ts";
import Product from "../../components/Product/Product.tsx";
import {useEffect, useState} from "react";
import {IProductData} from "../../types/types.ts";
import Loader from "../../components/Loader/Loader.tsx";
import NoProducts from "../../components/NoProducts/NoProducts.tsx";


const MainPage = () => {

    const {products, removeProduct, isLoading} = useProducts()
    const [existingProduct, setExistingProduct] = useState<IProductData | undefined>(undefined)

    const getProduct = (id: number): IProductData => {
        const product: IProductData | undefined = products.find(product => product.id == id)

        if (!product) {
            throw new Error(`Продукт не найден`);
        }

        return product
    }

    // Клик для Удаления или Изменения товара
    const handleClickManageButton = (id: number | undefined, type: string | undefined) => {
        if(id){
            type == 'edit' ? setExistingProduct(getProduct(id)) : removeProduct(id)
        }
        
    }

    const handleClickCancel = () => {
        setExistingProduct(undefined)
    }


    return (


        <div className="mainpage">

            <FormAction existingProduct={existingProduct} onCancelEdit={handleClickCancel}/>
            <div className='controller-page'></div>

            {
                isLoading ? <Loader /> :
                    <>
                        {
                            products && products.length > 0 ? (
                                <div className="products">
                                    {products.map((product) => (
                                        product?.id ? (
                                            <Product
                                                key={product.id}
                                                product={product}
                                                onManageClick={handleClickManageButton}
                                                isEditing={existingProduct?.id === product.id}
                                            />
                                        ) : null
                                    ))}
                                </div>
                            ) : (
                                <NoProducts />
                            )
                        }
                    </>
            }


        </div>
    );
};

export default MainPage;