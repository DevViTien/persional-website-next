import React from "react";
import type { SvgProps } from "@/types/icon";

const ChevronDoubleUp = ({ width, height, color }: SvgProps) => {
	return (
		<svg style={{ width, height }} fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<path d="M273 47c-9.4-9.4-24.6-9.4-33.9 0L47 239c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l175-175L431 273c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L273 47zM465 431L273 239c-9.4-9.4-24.6-9.4-33.9 0L47 431c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l175-175L431 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z" />
		</svg>
	);
};

export default ChevronDoubleUp;
