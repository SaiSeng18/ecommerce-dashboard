import {
	columns,
	Payment,
} from "@/components/dashboard/admin-page/data-table/columns";
import { OrderPreviewTable } from "@/components/dashboard/admin-page/data-table/data-table";
import DataView from "@/components/dashboard/admin-page/DataView";

async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	return [
		{
			id: "728ed52f",
			amount: 100,
			status: "pending",
			email: "m@example.com",
		},
		{
			id: "728ed52f",
			amount: 100,
			status: "pending",
			email: "m@example.com",
		},
		{
			id: "728ed52f",
			amount: 100,
			status: "pending",
			email: "m@example.com",
		},
		{
			id: "728ed52f",
			amount: 100,
			status: "pending",
			email: "m@example.com",
		},
		{
			id: "728ed52f",
			amount: 100,
			status: "pending",
			email: "m@example.com",
		},
	];
}

const AdminPage = async () => {
	const data = await getData();

	return (
		<section className="p-10 bg-gray-100 min-h-screen">
			<div className="w-full flex justify-between items-center mb-5">
				<div className="">
					<p className="text-xl">Hello, John Doe!</p>
					<p className="text-gray-300">You have 120 products this week</p>
				</div>
			</div>

			<DataView />

			<OrderPreviewTable columns={columns} data={data} />
		</section>
	);
};
export default AdminPage;
