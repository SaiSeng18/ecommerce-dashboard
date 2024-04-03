import { Input } from "@/components/ui/input";
import { Bell, Moon, Search } from "lucide-react";

const Navbar = () => {
	return (
		<div className="w-full bg-white px-10 py-5 flex justify-between items-center border-b">
			<div className="relative">
				<Input
					type="email"
					placeholder="Search products"
					className="h-12 w-[300px] focus-visible:ring-0 focus-visible:ring-transparent bg-gray-100 border-transparent placeholder:text-gray-300 pl-10"
				/>
				<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
			</div>

			<div className="flex gap-5">
				<div className="flex gap-5 items-center">
					<Moon size={30} className="text-gray-500" />
					<Bell size={30} className="text-gray-500" />
				</div>

				<div className="h-[50px] w-[1.5px] bg-gray-500 rounded-full"></div>

				<div className="flex gap-5 items-center">
					<p>John Doe</p>
					<div className="size-[50px] bg-gray-300 rounded-full overflow-hidden"></div>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
