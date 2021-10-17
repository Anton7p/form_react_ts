import React, { Dispatch, FC, SetStateAction } from 'react';
import close from '../../../assets/images/close.png';
import style from './style.module.scss';
import Chevron from '../Chevron/Chevron';
import { FieldNameType } from '../../../utils/types/types';

type Props = {
	active: boolean,
	name: FieldNameType,
	setActive: Dispatch<SetStateAction<boolean>>,
	clearInput: (value: string, name: FieldNameType, error: string) => void,
};

const CloseIcon: FC<Props> = ({ active, setActive, clearInput, name }) => {
	return (
		<div className={style.close}>
			<img src={close} alt={'close'} onClick={() => clearInput('', name, '')} />
			<span className={style.close} onClick={() => setActive(!active)}>
				<Chevron active={active} />
			</span>
		</div>
	);
};

export default CloseIcon;
