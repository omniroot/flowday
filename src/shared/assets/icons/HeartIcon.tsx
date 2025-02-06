import * as React from "react";

export const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5C13 20.5 14 19.73 15.038 18.91C17.981 16.592 22 14 22 9.138C22 4.276 16.5 0.825 12 5.501C7.5 0.825 2 4.274 2 9.137Z"
				fill="currentColor"
			/>
		</svg>
	);
};
