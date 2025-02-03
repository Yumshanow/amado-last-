import './style.css'
import React from "react";
import {IPropsProduct} from "../../types/types.ts";
import {SERVER_APP_URL} from '../../configuration'
import ManageButton from "../ManageButton/ManageButton.tsx";

import NO_PICTURE from '../../assets/image/no-picture.png'

const Product: React.FC<IPropsProduct & { isEditing: boolean }> = ({product, onManageClick, isEditing}) => {
    
    return (
            <div className={`product-details ${isEditing ? 'product-edit' : ''}`}>
                <img className='product-detail_image'
                     src={!product.image ? `${NO_PICTURE}` : `${SERVER_APP_URL}${product.image}`} alt=""/>

                <p className='product-detail-common product-detail-bold product-detail_name'>{product.title}</p>
                
                <p className='product-detail-common product-detail_desc'> <b>Описание:</b> {product.description}</p>

                <p className='product-detail-bold product-detail_price'>{product.price} ₽</p>

                <div className="product-buttons">
                    <ManageButton type={'edit'} productId={product.id} onClick={onManageClick}/>
                    <ManageButton type={'delete'} productId={product.id} onClick={onManageClick}/>
                </div>
            </div>
    );
};

export default Product;