"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
	const router = useRouter();
	return (
		<ChevronLeft
			size={35}
			className="text-gray-500 cursor-pointer"
			onClick={() => router.back()}
		/>
	);
};
export default BackButton;
