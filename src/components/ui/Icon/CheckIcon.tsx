import React, { FC } from 'react';

type Props = {
	color?: string,
};

const CheckIcon: FC<Props> = ({ color }) => {
	return (
		<svg
			width="28"
			height="28"
			viewBox="0 0 28 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.5 13.5323L12.9516 18.9839L20.5 8.5"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default CheckIcon;
