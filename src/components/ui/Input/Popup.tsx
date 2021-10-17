import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import style from './style.module.scss';
import { DropdownType, FieldNameType } from '../../../utils/types/types';
import { search } from '../../../utils/lib/search';

type Props = {
	dropdown: Array<DropdownType>,
	setInputValue: (value: string, name: FieldNameType, error: string) => void,
	setOpenPopup: Dispatch<SetStateAction<boolean>>,
	inputValue: string,
	openPopup: boolean,
	name: FieldNameType,
};

const Popup: FC<Props> = ({
	dropdown,
	setInputValue,
	inputValue,
	openPopup,
	setOpenPopup,
	name,
}) => {
	useEffect(() => {
		if (!openPopup && inputValue.length < 3) {
			setOpenPopup(true);
		}
	}, [inputValue, openPopup, setOpenPopup]);

	return (
		<>
			{openPopup && (
				<div
					className={style.popup}
					style={{
						border: `${openPopup ? 'none' : '1px solid rgba(0, 0, 0, 0.2)'}`,
					}}
				>
					<div className={style.popup_content}>
						{dropdown &&
							search(inputValue, dropdown).map((el, idx) => (
								<span
									key={idx}
									onClick={() => {
										setInputValue(el.value.toString(), name, '');
										setOpenPopup(false);
									}}
								>
									{el.value}
								</span>
							))}
					</div>
				</div>
			)}
		</>
	);
};

export default Popup;
