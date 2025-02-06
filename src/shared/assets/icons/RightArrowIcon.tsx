import * as React from "react";

export const RightArrowIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057"
				clipRule="evenodd"
			/>
		</svg>
	);
};
