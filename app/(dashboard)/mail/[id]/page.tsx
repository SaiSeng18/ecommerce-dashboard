import BackButton from "@/components/dashboard/mails-page/mail-page/BackButton";
import { Button } from "@/components/ui/button";
import { EllipsisVertical } from "lucide-react";

const MailPage = () => {
	return (
		<section className="bg-white min-h-screen">
			<div className="p-10">
				<div className="w-full"></div>
				<div className="flex gap-2">
					<BackButton />
					<div className="size-[50px] shrink-0 rounded-full overflow-hidden bg-gray-300"></div>
					<div className="w-full">
						<div className="mb-5 w-full justify-between flex">
							<div>
								<p>John Doe</p>
								<p className="text-gray-500 text-sm ">john@email.com</p>
							</div>

							<div className="flex gap-5">
								<p>{new Date().toLocaleString()}</p>
								<EllipsisVertical />
							</div>
						</div>

						<p className="mb-5">+959123456</p>
						<p className="max-w-[300px] text-gray-500 mb-10">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						</p>

						<div className="w-full h-[200px] rounded-lg border-2 border-dashed border-gray-500 min-h-[70vh] p-5 flex justify-center items-center bg-gray-100">
							<div className="min-w-[400px] max-w-[700px] bg-white rounded-md p-5">
								Thank you for the drinks.
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default MailPage;
