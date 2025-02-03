import React, {useEffect, useState} from 'react';
import {IPropsInput} from "../../types/types.ts";
import IMAGE_ADD_FILE from '../../assets/image/ImageAddFile.png'
import './style.css'


const InputFile: React.FC<IPropsInput & { isResetting: boolean }> = ({name, label, value, onChange, isRequired, isResetting, type}) => {

    const [filename, setFilename] = useState<string>('');
    const [isError, setIsError] = useState({
        count: 0,
        error: false
    })

    useEffect(() => {
        isResetting && value === "" ? setFilename('') : ''
        if (isError.count != 0) {
            value ? setIsError({
                count: 1,
                error: false
            }) : setIsError({
                count: 1,
                error: true
            })
        } else {
            setIsError({
                count: 1,
                error: false
            })
        }
    }, [value])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setFilename(file ? file.name : '');
        onChange(e)
    }

    return (
        <div>
            <p className={`input-default_label ${value ? 'label-active' : ''}`}>{label}{isRequired && '*'}</p>
            <div className={`file-input-container ${value && 'input-ok'} ${isError.error && isRequired ? 'input-error' : ''}`}>
                <label className='custom-file-input'>
                    <input id='fileInputId'
                        name={name}
                        type="file"
                        onChange={(e) => handleFileChange(e)}
                        accept="image/*"
                    />
                    <span
                        className="file-label">{value ? 'Изменить фото' : filename || `Фото${isRequired ? '*' : ''}`}</span>
                    <img alt='' src={IMAGE_ADD_FILE} className="file-icon"/>
                </label>
            </div>
            <p className={`input-default_error-tag ${isError.error && isRequired ? 'label-active' : ''}`}>
                Обязательно для заполнения
            </p>
        </div>
    );
};

export default InputFile;