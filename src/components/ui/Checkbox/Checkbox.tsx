import React, { FC } from 'react';
import style from './style.module.scss';
import { FieldNameType, UserValueAndError } from '../../../utils/types/types';

type Props = {
	label: string,
	name: FieldNameType,
	title: string,
	field: UserValueAndError,
	handleChecked: (value: boolean, name: FieldNameType, error: string) => void,
};

const Checkbox: FC<Props> = ({ title, handleChecked, label, name }) => {
	return (
		<div className={style.checkbox}>
			<input
				className={style.checkbox_custom__checkbox}
				type="checkbox"
				name={name}
				id={title}
				onChange={(e) => handleChecked(e.target.checked, name, '')}
				value={title}
			/>
			<label htmlFor={title}>
				<span className={style.label}>{label}</span>
			</label>
		</div>
	);
};

export default Checkbox;
