import { useMediaQuery } from "@uidotdev/usehooks";

export const SearchLayout = () => {
	const isMobile = useMediaQuery("only screen and (max-width: 768px)");
	// const { isOpened } = useSearchStore();
	return (
		<>
			{/* {(isTablet || isDesktop) && <FloatingSearchButton />} */}
			{/* <AnimatePresence>{isMobile && isOpened && <FloatingSearchBar />}</AnimatePresence> */}
		</>
	);
};
