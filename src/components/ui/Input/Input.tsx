import React, {useEffect, useState} from 'react';
import style from './style.module.scss';
import {DropdownType, FieldNameType, UserValueAndError} from "../../../utils/types/types";
import Popup from "./Popup";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {getStyle} from "../../../utils/lib/getStyle";
import {validate} from "../../../utils/lib/validate";
import StarIcon from "../Icon/StarIcon";


export interface IInputProps {
    id: string,
    field: UserValueAndError;
    handleChangeFieldValue: (value: string, name: FieldNameType, error: string) => void;
    custom?: string,
    name: FieldNameType,
    validation: string,
    searchOrStarIcon: (changeInlineStyle: boolean) => React.ReactElement,
    closeIcon?: (active: boolean, setActive: React.Dispatch<React.SetStateAction<boolean>>,
                 setInputValue: (value: string, name: FieldNameType, error: string) => void, name: FieldNameType) => React.ReactElement,
    dropdown?: Array<DropdownType>
}


export const Input: React.FC<IInputProps> = ({
                                                 searchOrStarIcon,
                                                 id,
                                                 closeIcon,
                                                 name,
                                                 validation,
                                                 handleChangeFieldValue,
                                                 field,
                                                 custom,
                                                 dropdown
                                             }): JSX.Element => {

    const [changeInlineStyle, setChangeInlineStyle] = useState<boolean>(false)
    const [placeholder, setPlaceholder] = useState(id)
    const [openPopup, setOpenPopup] = useState<boolean>(false)
    const [error, setError] = useState('')


    const getCustomInlineStyleForInput = (changeInlineStyle: boolean, custom: string | undefined) => {
        return {
            color: field.value ? "#000000" : "#B2B2B2",
            paddingBottom: changeInlineStyle ? (custom ? 25 : 15) : 25,
            paddingRight: (custom ? 95 : 30),
            paddingLeft: changeInlineStyle ? (custom ? 80 : 30) : (custom ? 110 : 35)
        }
    }

    useEffect(() => {
        validate(field.value as string, validation, setError)
    }, [field])

    useEffect(() => {
        if (!error) {
            handleChangeFieldValue(field.value as string, name, error)
        }
    }, [error])


    useEffect(() => {
        if (!field.value) {
            setChangeInlineStyle(false)
        }
    }, [field.value])

    return (
        <div className={style.wrapper}>
            <span
                className={style[custom ? `${custom}_icon` : "icon"]}
                style={{display: !custom && changeInlineStyle ? 'none' : 'flex'}}>
                {(field.visible || field.required) && (searchOrStarIcon(changeInlineStyle))}

            </span>

            {custom && typeof field.value === "string" && field.value.length > 2 && (
                <span
                    className={style.close}>{closeIcon && closeIcon(openPopup, setOpenPopup, handleChangeFieldValue, name)}</span>)}
            <input className={getStyle(custom, field.error, "input", style)}
                   id={id}
                   name={name}
                   onFocus={() => {
                       if (error) setError('')
                       setChangeInlineStyle(true)
                       if (field.value)
                           setPlaceholder(placeholder)
                   }}
                   onBlur={() => {
                       if (field.value) return
                       setChangeInlineStyle(false)

                   }}
                   onChange={(e) => {
                       handleChangeFieldValue(e.target.value, name, error)
                   }
                   }
                   placeholder={placeholder}
                   value={field.value as string}
                   style={getCustomInlineStyleForInput(changeInlineStyle, custom)}
            />

            {
                !custom && (
                    <span className={style.value} style={{display: changeInlineStyle ? 'flex' : 'none'}}>
                        {placeholder}
                        {(field.visible || field.required) &&
                        <StarIcon color={field.required ? "#E62B25" : "#F99B1C"}/>}
                    </span>)

            }

            {field.error && <ErrorMessage error={field.error}/>}
            {dropdown && <Popup inputValue={field.value as string}
                                name={name}
                                setInputValue={handleChangeFieldValue}
                                dropdown={dropdown}
                                openPopup={openPopup}
                                setOpenPopup={setOpenPopup}

            />

            }
        </div>
    )

};
