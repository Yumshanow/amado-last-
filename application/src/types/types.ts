import React from "react";

//

export interface IProductData {
    id: number | undefined;
    title: string | undefined;
    price: string | undefined;
    description: string | undefined;
    imageFile?: File | null;
    image?: string | undefined;
}

export interface IProductState {
    products: IProductData[];
    isLoading: boolean;
    isError: boolean;
}

//

// Props

export interface IPropsInput {
    name: string
    label: string
    type: string
    value: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isRequired: boolean;
}

export interface IPropsButton {
    label: string
    isDisabled: boolean
    type: 'cancel' | 'another'
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export interface IPropsProductForm {
    existingProduct?: IProductData;
    onCancelEdit: () => void;
}

export interface IPropsProduct {
    product: IProductData;
}

export interface IPropsProduct {
    product: IProductData;
    onManageClick: (id: number | undefined, type: string | undefined) => void;

}

export interface IPropsManageButton{
    type: 'edit' | 'delete'
    onClick: (id: number | undefined, type: string | undefined) => void
    productId: number | undefined
}


//