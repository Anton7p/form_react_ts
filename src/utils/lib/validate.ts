export const validate = (
	value: string,
	validation: string,
	callback: (error: string) => void
): void => {

	if (!value) return callback('');

	let regex = /^[a-z-A-ZА-Яа-я\s]+$/gi;
	if (validation !== 'string') {
		regex = /^[0-9]+$/g;
	}

	if (!value.match(regex)) {
		callback(validation === 'string' ? 'Введите буквы' : 'Введите цифры');
	} else {
		callback('');
	}
};
