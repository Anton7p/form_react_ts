import React from 'react';
import style from './style.module.scss';
import arrow from '../../../assets/images/arrow.png';

function Chevron({ active }: { active: boolean }) {
	return (
		<img
			className={active ? style.icon_down : style.icon_up}
			src={arrow}
			alt={'arrow'}
		/>
	);
}

export default Chevron;
