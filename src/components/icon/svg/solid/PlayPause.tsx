import React from "react";
import type { SvgProps } from "@/types/icon";

const PlayPause = ({ width, height, color }: SvgProps) => {
	return (
		<svg style={{ width, height }} fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
			<path d="M116.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S64 83.6 64 96V416c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4l192-160c7.3-6.1 11.5-15.1 11.5-24.6s-4.2-18.5-11.5-24.6l-192-160zM448 96c0-17.7-14.3-32-32-32s-32 14.3-32 32V416c0 17.7 14.3 32 32 32s32-14.3 32-32V96zm128 0c0-17.7-14.3-32-32-32s-32 14.3-32 32V416c0 17.7 14.3 32 32 32s32-14.3 32-32V96z" />
		</svg>
	);
};

export default PlayPause;
