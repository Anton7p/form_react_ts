import React from 'react';
import style from './style.module.scss';

const IconWithText = ({
	text,
	color,
	icon,
	custom,
}: {
	color?: string,
	text: string,
	custom: string,
	icon: (color?: string) => React.ReactElement,
}) => {
	return (
		<small className={style[custom]}>
			{icon(color)}
			{text}
		</small>
	);
};

export default IconWithText;
