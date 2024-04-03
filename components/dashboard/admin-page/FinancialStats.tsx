import { Ellipsis } from "lucide-react";
import { StatsLineChart } from "./StatsLineChart";

export const FinancialStats = () => {
	return (
		<div className="bg-white p-5 rounded-md flex flex-col">
			<div className="w-full flex flex-col mb-5">
				<div className="w-full flex justify-between">
					<p>Total Revenue</p>
					<Ellipsis />
				</div>
				<div className="flex items-center gap-2">
					<p className="text-2xl">$47.00</p>
					<div className="p-[1px] rounded-md bg-green-100 text-green-500 w-fit flex justify-center items-center text-sm h-fit">
						<p>+3.56%</p>
					</div>
				</div>
			</div>
			<StatsLineChart />
		</div>
	);
};
