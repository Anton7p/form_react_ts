import React, { FC } from 'react';
import style from './style.module.scss';
import DownloadLink from '../ui/InputFile/DownloadLink';
import { User } from '../../utils/types/types';
import IconWithText from '../ui/Icon/IconWithText';
import CheckIcon from '../ui/Icon/CheckIcon';

type Props = {
	user: User | undefined,
};
const DataFormOutput: FC<Props> = ({ user }) => {
	return (
		<form className={style.output}>
			<section className={style.output_row__title}>
				<div>Образование</div>
			</section>

			<section className={style.output_row}>
				<div className={style.output_row__column}>
					<p>Уровень образования</p>
					<span>{user?.education.value}</span>
				</div>
				<div className={style.output_row__column}>
					<p>Год окончания</p>
					<span> {user?.year.value}</span>
				</div>
			</section>

			<section className={style.output_row}>
				<div className={style.output_row__row}>
					<small>{user?.university.value}</small>
				</div>
			</section>

			<section className={style.output_row}>
				<div className={style.output_row__row}>
					<small>Серия диплома</small>
					<span>{user?.series.value}</span>
				</div>
				<div className={style.output_row__row}>
					<small>Номер диплома</small>
					<span>{user?.number.value}</span>
				</div>
			</section>

			<section className={style.output_row}>
				{user?.speciality.value && (
					<div className={style.output_row__row}>
						<small>Специальность по диплому</small>
						<span>{user?.speciality.value}</span>
					</div>
				)}
			</section>

			<section className={style.output_row}>
				{user?.qualification.value && (
					<div className={style.output_row__row}>
						<small>Квалификация по диплому</small>
						<span>{user?.qualification.value}</span>
					</div>
				)}
			</section>

			<section className={style.output_row__checkbox}>
				{user?.notification.value && (
					<IconWithText
						color={'#E62B25'}
						text={'Нострификация'}
						custom={'check'}
						icon={(color) => <CheckIcon color={color} />}
					/>
				)}
			</section>

			<section className={style.form_row}>
				<DownloadLink url={(user?.url.value as string | undefined)}/>
			</section>
		</form>
	);
};

export default DataFormOutput;
