import React, { FC } from 'react';
import style from './style.module.scss';
import { FieldNameType } from '../../../utils/types/types';

export interface Props {
	name: FieldNameType;
	setUrl?: (
		value: string | boolean,
		name: FieldNameType,
		error: string
	) => void;
}

export const UploadInput: FC<Props> = (props) => {
	const { name, setUrl } = props;

	function checkFile(files: FileList | null, name: FieldNameType) {
		if (files) {
			const file = files[0];
			if (
				file.type !== 'image/gif' &&
				file.type !== 'image/jpeg' &&
				file.type !== 'image/png' &&
				file.type !== 'image/tiff' &&
				file.type !== 'application/pdf' &&
				file.type !== 'application/msword' &&
				file.type !==
					'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
			) {
				// console.log('error');
			} else {
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = function (event) {
					if (
						event.target !== null &&
						typeof event.target.result === 'string' &&
						setUrl
					) {
						setUrl(event.target.result, name, '');
					}
				};
			}
		}
	}

	return (
		<label className={style.file}>
			<span>Документ: </span>
			&nbsp;
			<span>Загрузить файлы или </span>
			&nbsp;
			<span>открыть проводник</span>
			<input type="file" onChange={(e) => checkFile(e.target.files, name)} />
		</label>
	);
};
