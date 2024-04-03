import { OverviewChart } from "./OverviewChart";

import { FinancialStats } from "./FinancialStats";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DataView = () => {
	return (
		<div className="w-full grid grid-cols-2 gap-5 mb-5">
			<div className="grid grid-cols-2 gap-5 grid-rows-2">
				<FinancialStats />
				<FinancialStats />
				<FinancialStats />
				<FinancialStats />
			</div>
			<div className="bg-white p-5 rounded-md flex flex-col justify-between">
				<div className="w-full flex justify-between items-center">
					<p className="text-xl">Products Overview</p>
					<Button variant="outline">
						<Download size={20} className="mr-2" />
						Download
					</Button>
				</div>
				<OverviewChart />
			</div>
		</div>
	);
};
export default DataView;
