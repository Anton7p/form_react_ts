import React, { FC } from 'react';

type Props = {
	color?: string,
};

const StarIcon: FC<Props> = ({ color }) => {
	return (
		<svg
			width="8"
			height="8"
			viewBox="0 0 8 8"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4.42 0.47998L4.36 3.25998L7.02 2.35998L7.44 3.65998L4.78 4.49998L6.44 6.73998L5.32 7.51998L3.72
             5.25998L2.1 7.51998L1 6.73998L2.66 4.49998L0 3.65998L0.42 2.35998L3.06 3.25998L3.02 0.47998H4.42Z"
				fill={color}
			/>
		</svg>
	);
};

export default StarIcon;
