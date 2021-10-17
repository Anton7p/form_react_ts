import React, { FC } from 'react';
import style from './style.module.scss';

type Props = {
	custom: {
		backgroundColor: string,
		borderColor: string,
		color: string,
	},
	text: string,
	type: 'submit' | 'button',
	handleClearForm?: () => void,
};

const Button: FC<Props> = ({ custom, type, handleClearForm, text }) => {
	return (
		<button
			type={type}
			className={style.button}
			onClick={() => {
				if (type === 'button' && handleClearForm) {
					handleClearForm();
				}
			}}
			style={{
				backgroundColor: `${custom.backgroundColor}`,
				border: `2px solid ${custom.borderColor}`,
				color: ` ${custom.color}`,
			}}
		>
			<span>{text}</span>
		</button>
	);
};

export default Button;
