import './style.css'
import React, {useEffect, useState} from "react";
import {IPropsManageButton} from "../../types/types.ts";

import DELETE_INACTIVE from '../../assets/image/del1.png'
import DELETE_ACTIVE from '../../assets/image/del2.png'
import EDIT_INACTIVE from '../../assets/image/edit1.png'
import EDIT_ACTIVE from '../../assets/image/edit2.png'


const ManageButton:React.FC<IPropsManageButton>  = ({type, onClick, productId}) => {

    const [isHovered, setIsHovered] = useState(false);
    const [images, setImages] = useState({
        active: '',
        inactive: ''
    })

    useEffect(() => {
        type == 'edit' ? setImages({
            active: EDIT_ACTIVE,
            inactive: EDIT_INACTIVE
        }) : setImages({
            active: DELETE_ACTIVE,
            inactive: DELETE_INACTIVE
        })
    }, [])


    return (
        <div className="manage-button"
            onMouseEnter={() => {setIsHovered(true)}}
            onMouseLeave={() => {setIsHovered(false)}}
            onClick={() => onClick(productId, type)}
        >
            <img alt='' src={isHovered ? images.active : images.inactive} />
        </div>
    );
};

export default ManageButton;