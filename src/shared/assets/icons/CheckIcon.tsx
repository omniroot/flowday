import * as React from "react";

export const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth={2}
				d="m5 14l3.233 2.425a1 1 0 0 0 1.374-.167L18 6"
			/>
		</svg>
	);
};
