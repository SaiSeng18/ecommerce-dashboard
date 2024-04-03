import Header from "@/components/landing-page/Header";
import Image from "next/image";

export default function Home() {
	return (
		<section className="min-h-screen w-full flex justify-center items-center flex-col">
			<p className="text-8xl">Admin Dashboard</p>
			<p className="text-gray-500">This is an admin dashboard</p>
		</section>
	);
}
