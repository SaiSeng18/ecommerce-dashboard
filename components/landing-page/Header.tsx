"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
	useGSAP(() => {
		gsap.to("#header", {
			border: "1px solid black",
			duration: 1,
			scrollTrigger: {
				trigger: "#header",
				start: "top top",
				end: "bottom top",
				scrub: true,
			},
		});
	});
	return (
		<header
			id="header"
			className="mx-auto max-w-[1400px] w-full p-5 rounded-full justify-between flex items-center sticky top-5">
			<div>Logo</div>

			<nav>
				<ul>
					<li>
						<Link href="/admin">Dashboard</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Header;
