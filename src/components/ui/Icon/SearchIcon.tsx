import React, { FC } from 'react';
import search from '../../../assets/images/searh.png';
import StarIcon from './StarIcon';
import style from './style.module.scss';

type Props = {
	custom: boolean,
};

const SearchIcon: FC<Props> = ({ custom }) => {
	return (
		<div className={style.icon}>
			{!custom && <StarIcon color={'#F99B1C'} />}
			<img src={search} alt={'search'} />
		</div>
	);
};

export default SearchIcon;
