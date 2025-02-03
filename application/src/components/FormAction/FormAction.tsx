import React, { useEffect, useState } from 'react';
import Button from "../Button/Button.tsx";
import Input from "../Input/Input.tsx";
import './style.css'
import { IProductData, IPropsProductForm } from "../../types/types.ts";
import InputFile from "../InputFile/InputFile.tsx";
import TextArea from "../TextArea/TextArea.tsx";
import { useProducts } from "../../hooks/useProducts.ts";


const FormAction: React.FC<IPropsProductForm> = ({ existingProduct, onCancelEdit }) => {

    const { editProduct, addProduct } = useProducts()

    const [isResetting, setIsResetting] = useState(false);
    const [product, setProduct] = useState<IProductData>({
        id: existingProduct?.id,
        title: existingProduct?.title,
        price: existingProduct?.price,
        description: existingProduct?.description,
        image: existingProduct?.image,
        imageFile: null,
    })


    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, type } = e.target;
        if (type == 'file' && (e.target as HTMLInputElement).files) {
            const file = (e.target as HTMLInputElement).files[0];
            setProduct({
                ...product,
                image: file.name,
                imageFile: file,
            })
        } else {
            setProduct({
                ...product,
                [name]: e.target.value
            })
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        
        e.preventDefault();
        if (existingProduct) {
            editProduct(product);
        } else {
            addProduct(product);
        }
        resetter()
        onCancelEdit()

    }
    const resetter = () => {
        setProduct({
            id: undefined,
            title: "",
            price: "",
            description: "",
            image: "",
            imageFile: null,
        });
        setIsResetting(true);
        
    }
    const handleCancelEdit = () => {
        resetter()
        onCancelEdit();
        
    };

    useEffect(() => {

        setProduct({
            id: existingProduct?.id,
            title: existingProduct?.title,
            price: existingProduct?.price,
            description: existingProduct?.description,
            image: existingProduct?.image,
            imageFile: null,
        })
        setIsResetting(false)

    }, [existingProduct]);

    return (
        <div className='form-wrapper'>

            <form className='form-detail'>

                <h1 className='form-detail_tag'>{existingProduct ? 'Редактирование товара' : 'Добавление товара'}</h1>
                <h2 className='form-detail_obligation'>Заполните все обязательные поля с *</h2>


                <Input name={'title'}
                    type='text'
                    isRequired={true}
                    label={'Название'}
                    isResetting={isResetting}
                    value={product.title}
                    onChange={(e) => handleChangeInput(e)}
                />

                <Input name={'price'}
                    type='number'
                    isRequired={true}
                    isResetting={isResetting}
                    label={'Цена'}
                    value={product.price}
                    onChange={(e) => handleChangeInput(e)}
                />

                <InputFile name={'image'}
                    type='number'
                    isRequired={false}
                    isResetting={isResetting}
                    label={'Фото'}
                    value={product.image}
                    onChange={(e) => handleChangeInput(e)}
                />

                <TextArea
                    name={'description'}
                    type='text'
                    isRequired={false}
                    label={'Описание'}
                    value={product.description}
                    onChange={(e) => handleChangeInput(e)}
                />


                <Button
                    onClick={(e: any) => handleSubmit(e)}
                    type={'another'}
                    isDisabled={!(product.title && product.price)}
                    label={existingProduct ? 'Редактировать товар' : 'Добавить товар'}
                />

                {
                    existingProduct && <Button
                        type={'cancel'}
                        isDisabled={false}
                        onClick={handleCancelEdit}
                        label={'Отменить редактирование'}
                    />
                }

            </form>

        </div>
    );
};

export default FormAction;