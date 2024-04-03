import Link from "next/link";

export const Sidebar = () => {
	const links = [
		{ href: "/admin", label: "Home" },
		{ href: "/mail", label: "Mailbox" },
		{ href: "/products", label: "Products" },
		{ href: "/categories", label: "Categories" },
	];

	return (
		<div className="h-screen w-[300px] bg-white border-r p-5">
			<div className="mb-20">Logo</div>
			<nav className="flex flex-col gap-5">
				{links.map((link) => (
					<Link
						key={link.label}
						href={link.href}
						className="rounded-md hover:bg-[#225bf4] text-gray-500 py-2 px-5 w-full block hover:text-white duration-300">
						{link.label}
					</Link>
				))}
			</nav>
		</div>
	);
};
