import React, { Dispatch, FC, SetStateAction } from 'react';
import style from './style.module.scss';

type Props = {
	url: string | undefined,
	setUrl: Dispatch<SetStateAction<string>>,
};
const DownloadLink: FC<Props> = ({ url, setUrl }) => {
	return (
		<label className={style.file}>
			<span>Документ: </span>
			&nbsp;
			<a
				href={url}
				download
				onClick={(e) => {
					if (!url) e.preventDefault();
					setTimeout(() => {
						if (setUrl) {setUrl('');}
					}, 0);
				}}
			>
				Скачать документ
			</a>
		</label>
	);
};

export default DownloadLink;
