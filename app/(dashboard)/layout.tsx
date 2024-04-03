import Navbar from "@/components/dashboard/Navbar";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="h-screen w-full bg-gray-100 flex">
			<Sidebar />
			<ScrollArea className="w-full">
				<div className="h-full w-full flex flex-col">
					<Navbar />
					{children}
				</div>
			</ScrollArea>
		</main>
	);
}
