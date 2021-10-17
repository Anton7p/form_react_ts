import { DropdownType } from '../types/types';

export function search(value: string, data: DropdownType[]): DropdownType[] {
	if (!value || value.length < 3) return [];

	const regexp = new RegExp(value, 'gm');

	return data.filter((item) =>
		item.value.toString().toLowerCase().match(regexp)
	);
}
