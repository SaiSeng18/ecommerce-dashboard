import Header from "@/components/landing-page/Header";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between w-full relative">
			<Header />
			{children}
		</main>
	);
}
