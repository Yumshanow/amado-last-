import React, {useEffect, useState} from "react";
import {IPropsInput} from "../../types/types.ts";
import './style.css'

const Input: React.FC<IPropsInput & { isResetting: boolean }> = ({name, value, label, onChange, isRequired, isResetting, type}) => {

    const [isError, setIsError] = useState(false)

    useEffect(() => {
        if (isResetting) {
            setIsError(false);
        } else if (isRequired && value === "") {
            setIsError(true);
        } else {
            setIsError(false);
        }
    }, [value, isRequired, isResetting]);


    return (
        <div className='input'>
            <p className={`input-default_label ${value && 'label-active'}`}>{label}{isRequired && '*'}</p>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={`${label}${isRequired ? '*' : ''}`}
                required={isRequired}
                className={`input-default ${value && 'input-ok'} ${isError && isRequired && 'input-error'}`}
            />
            <p className={`input-default_error-tag ${isError && isRequired ? 'label-active' : ''}`}>
                Обязательно для заполнения
            </p>
        </div>
    );
};

export default Input;