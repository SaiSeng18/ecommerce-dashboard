"use client";

import {
	XAxis,
	YAxis,
	Tooltip,
	Bar,
	Legend,
	BarChart,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "Mon",
		uv: 4000,
		pv: 2400,
	},
	{
		name: "Tue",
		uv: 3000,
		pv: 1398,
	},
	{
		name: "Wed",
		uv: 2000,
		pv: 9800,
	},
	{
		name: "Thu",
		uv: 2780,
		pv: 3908,
	},
	{
		name: "Fri",
		uv: 1890,
		pv: 4800,
	},
	{
		name: "Sat",
		uv: 2390,
		pv: 3800,
	},
	{
		name: "Sun",
		uv: 3490,
		pv: 4300,
	},
];

export const OverviewChart = () => {
	return (
		<ResponsiveContainer className="w-full" height={400}>
			<BarChart data={data}>
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip cursor={{ fill: "#f3f4f6" }} />
				<Legend
					verticalAlign="top"
					align="left"
					height={100}
					margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
				/>
				<Bar dataKey="pv" fill="#225bf4" radius={[10, 10, 0, 0]} barSize={20} />
				<Bar dataKey="uv" fill="#b0c0f5" radius={[10, 10, 0, 0]} barSize={20} />
			</BarChart>
		</ResponsiveContainer>
	);
};
