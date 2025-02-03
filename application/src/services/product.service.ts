import {instance} from "../api/axios.ts";
import {IProductData} from "../types/types.ts";

function AppendForm(product: IProductData): FormData {
    const formData = new FormData();
    formData.append('id', `${product.id}` || '');
    formData.append('title', product.title || '');
    formData.append('price', product.price || '');
    formData.append('description', product.description || '');
    if (product.imageFile) {
        formData.append('image', product.imageFile);
    }
    return formData
}

const headers = {
    'Content-Type': 'multipart/form-data'
}

export const ProductService = {

    async getAllProducts() {
        const {data} = await instance.get('products')
        if (data) return data;
    },

    async createProduct(productData: IProductData) {

        const formData = AppendForm(productData)

        const {data} = await instance.post('products', formData, {headers});
        if(data) return data;
    },

    async changeProduct(productData: IProductData) {

        const formData = AppendForm(productData)
    
        const {data} = await instance.put('products', formData, {headers});
        if(data) return data;
    },

    async deleteProduct(id: number) {
        const {data} = await instance.delete(`products/${id}`);
        if(data) return data;
    }
}