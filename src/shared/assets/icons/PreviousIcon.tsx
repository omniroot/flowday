import * as React from "react";

export const PreviousIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
			<g fill="none" stroke="currentColor" strokeWidth={1.5}>
				<path d="M7.34 9.353c-1.787 1.154-1.787 4.14 0 5.294l10.79 6.967c1.736 1.122 3.87-.338 3.87-2.647V5.033c0-2.31-2.134-3.769-3.87-2.648z" />
				<path strokeLinecap="round" d="M2 5v14" />
			</g>
		</svg>
	);
};
