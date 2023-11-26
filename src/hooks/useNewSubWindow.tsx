/**
 * useNewSubWindow
 */
const useNewSubWindow = () => {
	const openNewSubWindow = (url: string) => {
		window.open(url, "_blank", "noopener,noreferrer");
	};
};

export default useNewSubWindow;
