import React from "react";
import type { SvgProps } from "@/types/icon";

const Gauge = ({ width, height, color }: SvgProps) => {
	return (
		<svg style={{ width, height }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill={color}>
			<path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm56-160c0-22.3-13.1-41.6-32-50.6V120c0-13.3-10.7-24-24-24s-24 10.7-24 24V301.4c-18.9 9-32 28.3-32 50.6c0 30.9 25.1 56 56 56s56-25.1 56-56zM160 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm256 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
		</svg>
	);
};

export default Gauge;
