import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ShareBackground from "../components/SharedBackground";

/**
 * Home page
 */
const Home = () => {
	// get params
	const { name = "HOME" } = useParams();

	useEffect(() => {
		// use per frame
		let frameFlag = 0;
		const usePerFrame = (cb: (time?: number) => void) => {
			frameFlag = requestAnimationFrame((time) => {
				cb(time);
				usePerFrame(cb);
			});
		};
		usePerFrame((time) => {});
		return () => {
			cancelAnimationFrame(frameFlag);
		};
	}, []);

	return (
		<div>
			<ShareBackground />
			<h1>{name}</h1>
			<div
				onClick={() => {
					window.open(
						"/about",
						"_blank",
						"width=100,height=100,left=100,top=1000"
					);
				}}
			>
				open new window in a new window, set width and height,and
				position is center
			</div>
		</div>
	);
};

export default Home;
