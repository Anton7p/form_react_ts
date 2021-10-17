import {ChangeEvent, FormEvent} from "react";

export  type DropdownType = {
    value: string
}
export type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
export type FormSubmit = FormEvent<HTMLFormElement>

export type UserValueAndError = {
    value: string | boolean,
    error: string
    visible?: boolean
    required?: boolean
}

export type FieldNameType = | "year"
    | "education"
    | "university"
    | "series"
    | "number"
    | "speciality"
    | "qualification"
    | "notification"
    | "url"


export type User = {
    [key in FieldNameType]: UserValueAndError;
};