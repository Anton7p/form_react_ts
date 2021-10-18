import React, {FC, useState} from 'react';
import {Input} from "../ui/Input/Input";
import SearchIcon from "../ui/Icon/SearchIcon";
import CloseIcon from "../ui/Icon/CloseIcon";
import Button from "../ui/Button/Button";
import Dropdown from "../ui/Dropdown/Dropdown";
import Checkbox from "../ui/Checkbox/Checkbox";
import StarIcon from "../ui/Icon/StarIcon";

import style from "./style.module.scss"
import {UploadInput} from "../ui/InputFile/UploadInput";

import IconWithText from "../ui/Icon/IconWithText";
import {FieldNameType, FormSubmit, User} from "../../utils/types/types";



const popupData = [
    {value: "Московский технический университет"},
    {value: "МОСиНТЕХ"},
    {value: "Третий московский филиал"},
    {value: "МОСГУ"},
    {value: "aaaaaaaaсе"},
    {value: "aaaaaсе"},
    {value: "aaaaaaaaaaaсе"},
    {value: "aaaaaсsssssssе"},
    {value: "aaaaaсsssssssе"},
    {value: "aaaaaсsssssssе"},
    {value: "aaaaafffffffсе"},

]

const dropdownData = [
    {value: "Среднее профессиональное"},
    {value: "Среднее профессиональное"},
    {value: "Среднее профессиональное"},
    {value: "Высшее"},
    {value: "Высшее"},
    {value: "Высшее"},
    {value: "Магистратура"},
    {value: "Магистратура"},
]
type Props = {
    showUserData: (user: User) => void
}

const Form: FC<Props> = ({showUserData}) => {
    const initialState = {
        year: {value: '', error: '', required: true},
        education: {value: '', error: '', required: true},
        university: {value: '', error: '', required: true},
        series: {value: '', error: '', required: true},
        number: {value: '', error: ''},
        speciality: {value: '', error: '', visible: true},
        qualification: {value: '', error: '', visible: true},
        notification: {value: false, error: ''},
        url: {value: '', error: ''}
    }
    const [user, setUser] = useState<User>(initialState)

    const {education, year, university, series, number, speciality, qualification, notification} = user


    const handleChangeInput = (value: string | boolean, name: FieldNameType, error: string) => {
        setUser({...user, [name]: {...user[name], value, error}})
    }


    const handleSubmit = (e: FormSubmit) => {
        e.preventDefault();
        let error = false
        const requiredField = ['year', 'education', 'series', 'university']
        let temp = JSON.parse(JSON.stringify(user))

        requiredField.forEach(el => {
            if (!user[el as FieldNameType].value) {
                temp = {...temp, [el]: {...temp[el as FieldNameType], error: 'Поле обязательное для заполнения'}}
                error = true

            }
        })
        for (const field in temp) {
            if (temp[field as FieldNameType].error) {
                error = true
            }
        }
        setUser(temp)
        !error && showUserData(user)
    }

    const handleClearForm = () => {
        setUser(initialState)
        showUserData(initialState)
    }

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.form_row__title}>
                <span>Образование</span>
            </div>
            <div className={style.form_row}>
                <Dropdown dropdown={dropdownData}
                          name={'education'}
                          handleChangeFieldValue={handleChangeInput}
                          field={education}/>
                <Input id={'Год окончания'}
                       name={'year'}
                       validation={'number'}
                       searchOrStarIcon={() => <StarIcon color={'#E62B25'}/>}
                       field={year} handleChangeFieldValue={handleChangeInput}
                />
            </div>
            <div className={style.form_row}>
                <Input id={'Введите для выбора ВУЗа'}
                       custom={"search"}
                       name={"university"}
                       validation={"string"}
                       dropdown={popupData}
                       field={university} handleChangeFieldValue={handleChangeInput}
                       searchOrStarIcon={(custom) => <SearchIcon custom={custom}/>}
                       closeIcon={(active, setActive, clearInput) =>
                           <CloseIcon
                               name={"university"}
                               active={active}
                               setActive={setActive}
                               clearInput={clearInput}

                           />}/>
            </div>


            <div className={style.form_row}>
                <Input id={'Серия диплома'}
                       name={"series"}
                       validation={"number"}
                       field={series} handleChangeFieldValue={handleChangeInput}
                       searchOrStarIcon={() => <StarIcon color={"#E62B25"}/>}
                />
                {
                    series.value && (<Input id={'Номер диплома'}
                                            name={"number"}
                                            validation={"number"}
                                            field={number} handleChangeFieldValue={handleChangeInput}
                                            searchOrStarIcon={() => <StarIcon color={"#F99B1C"}/>}
                    />)
                }

            </div>

            <div className={style.form_row}>
                {
                    series.value && number.value && (<Input id={'Специальность по диплому'}
                                                            name={"speciality"}
                                                            validation={"string"}
                                                            field={speciality}
                                                            handleChangeFieldValue={handleChangeInput}
                                                            searchOrStarIcon={() => <StarIcon color={"#F99B1C"}/>}
                    />)
                }


            </div>

            <div className={style.form_row}>

                {series.value && number.value && speciality.value && (<Input id={'Квалификация по диплому'}
                                                                             name={"qualification"}
                                                                             validation={"string"}
                                                                             field={qualification}
                                                                             handleChangeFieldValue={handleChangeInput}
                                                                             searchOrStarIcon={() => <StarIcon
                                                                                 color={"#F99B1C"}/>}
                />)}

            </div>


            <div className={style.form_row__checkbox}>
                <Checkbox title={"checkbox"}
                          label={'Нострификация'}
                          name={
                              "notification"}
                          field={notification} handleChecked={handleChangeInput}

                />
            </div>

            <div className={style.form_row}>
                <UploadInput name={"url"} setUrl={handleChangeInput} />
            </div>

            <div className={style.form_row__button}>
                <Button text={"Сохранить"}
                        type={"submit"}
                        custom={{
                            backgroundColor: "#E62B25",
                            borderColor: "#E62B25",
                            color: "#FFFFFF"
                        }}/>
                <Button text={"Отмена"}
                        handleClearForm={handleClearForm}
                        type={"button"}
                        custom={{
                            backgroundColor: "#FFFFFF",
                            borderColor: "#E5E5E5",
                            color: "#A2A2AE"
                        }}/>

            </div>
            <div className={style.form_row__text}>
                <IconWithText custom={"text"} color={"#E62B25"} text={"Поля обязательные для заполнения"}
                              icon={(color) => <StarIcon color={color}/>}/>

                <IconWithText custom={"text"} color={"#E78E24"} text={"Поля видны для всех пользователей"}
                              icon={(color) => <StarIcon color={color}/>}/>
            </div>

        </form>
    );
};

export default Form;