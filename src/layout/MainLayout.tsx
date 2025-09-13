import { Outlet } from "react-router-dom";
import Header from "../components/static/header/Header";
import Footer from "../components/static/footer/Footer";
import { useEffect } from "react";
import { useLink } from "../store/store";

export default function MainLayout() {
	const active = useLink((state) => state.active);
	const setActive = useLink((state) => state.setActive);

	useEffect(() => {
		const sections = document.querySelectorAll("section");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActive(entry.target.id);
					}
				});
			},
			{
				rootMargin: "-50% 0px -50% 0px", // یا هر مقدار مناسبی که نیاز داری
				threshold: 0,
			}
		);

		sections.forEach((section) => observer.observe(section));

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, []);

	return (
		<div className="bg-background text-content-secondary w-full font-iransans">
			<div className=" bg-background-secondary h-fit sticky w-full max-xmd:top-0  z-[999999999] -top-11 mb-2">
				<Header />
			</div>
			<div className="resp">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
