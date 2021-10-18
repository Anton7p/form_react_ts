import {DropdownType} from '../types/types';

export function search(str: string, data: DropdownType[]): DropdownType[] {
    if (!str || str.length < 3) return [];
    return data.filter((el) => {
        return (
            el.value.toLowerCase().split(' ').join('').indexOf(str.toLowerCase()) !== -1
        );
    });

}
