"use client";

import { Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const data = [
	{
		name: "Page A",
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page B",
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Page C",
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Page D",
		pv: 3908,
		amt: 2000,
	},
	{
		name: "Page E",
		pv: 4800,
		amt: 2181,
	},
	{
		name: "Page F",
		pv: 3800,
		amt: 2500,
	},
	{
		name: "Page G",
		pv: 4300,
		amt: 2100,
	},
];

export const StatsLineChart = () => {
	return (
		<ResponsiveContainer className="w-full" height={100}>
			<AreaChart data={data} margin={{}}>
				<defs>
					<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#b0c0f5" stopOpacity={0.8} />
						<stop offset="95%" stopColor="#b0c0f5" stopOpacity={0} />
					</linearGradient>
				</defs>
				<Tooltip />
				<Area
					type="monotone"
					dataKey="pv"
					stroke="#225bf4"
					fillOpacity={1}
					fill="url(#colorUv)"
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};
