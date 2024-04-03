import {
	columns,
	Payment,
} from "@/components/dashboard/mails-page/data-table/columns";
import { MailTable } from "@/components/dashboard/mails-page/data-table/data-table";

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
		// ...
	];
}

const MailsPage = async () => {
	const data = await getData();
	return (
		<section className="w-full min-h-screen p-10 bg-white">
			<MailTable data={data} columns={columns} />
		</section>
	);
};
export default MailsPage;
