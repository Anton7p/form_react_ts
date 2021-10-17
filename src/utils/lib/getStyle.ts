export const getStyle = (
	custom: string | undefined,
	error: string,
	className: string,
	style: { [key: string]: string }
) => {
	return ` ${style[custom ? custom : '']} ${style[error ? 'error' : '']} ${style[className]}`;
};
