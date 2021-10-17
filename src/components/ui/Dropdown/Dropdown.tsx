import React, { FC, useEffect, useRef, useState } from 'react';
import style from './style.module.scss';
import Chevron from '../Chevron/Chevron';

import {
	DropdownType,
	FieldNameType,
	UserValueAndError,
} from '../../../utils/types/types';
import StarIcon from '../Icon/StarIcon';
import { getStyle } from '../../../utils/lib/getStyle';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

type Props = {
	dropdown: Array<DropdownType>,
	name: FieldNameType,
	field: UserValueAndError,
	handleChangeFieldValue: (
		value: string,
		name: FieldNameType,
		error: string
	) => void,
};
const Dropdown: FC<Props> = ({
	dropdown,
	name,
	field,
	handleChangeFieldValue,
}) => {
	const [active, setActive] = useState<boolean>(false);

	const [height, setHeight] = useState<string>('0px');
	const [opacity, setOpacity] = useState<string>('0');
	const [error, setError] = useState(field.error);
	const content = useRef<HTMLDivElement>(null);

	function toggleAccordion() {
		setActive(!active);
		setOpacity(active ? '0' : `100%`);
		setError('');
		if (active) {
			if (content && content.current) {
				setHeight('0px');
			}
		}
		if (!active) {
			if (content && content.current) {
				setHeight(`${content.current.scrollHeight}px`);
			}
		}
	}

	useEffect(() => {
		setError(field.error);
	}, [field.error]);

	return (
		<div className={style.wrapper}>
			<div className={getStyle('', error, 'dropdown', style)}>
				<div className={style.dropdown_value}>
					<small>
						Уровень образования
						<StarIcon color={'#E62B25'} />
					</small>
					<span>{field.value}</span>
				</div>
				<span onClick={toggleAccordion}>
					<Chevron active={active} />
				</span>

				<div
					className={`${style.popup} ${style[active ? 'border' : 'noborder']}`}
				>
					<div
						className={style.popup_content}
						ref={content}
						style={{
							height: `${height}`,
							opacity: `${opacity}`,
						}}
					>
						<div className={style.popup_content__list}>
							{dropdown.map((el, idx) => (
								<span
									key={idx}
									onClick={() => {
										handleChangeFieldValue(el.value, name, '');
										toggleAccordion();
									}}
								>
									{el.value}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
			{error && <ErrorMessage error={error} />}
		</div>
	);
};

export default Dropdown;
