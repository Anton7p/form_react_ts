import React from 'react';
import style from './style.module.scss';

const ErrorMessage = ({ error }: { error: string }) => {
	return <span className={style.error}>{error}</span>;
};

export default ErrorMessage;
