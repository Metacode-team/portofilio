import { PiX } from "react-icons/pi";
import { useLink, useOpen } from "../../../../store/store";

export default function SideBar() {
	const open = useOpen((state) => state.open);
	const setOpen = useOpen((state) => state.setOpen);
	const liksNav = useLink((state) => state.liksNav);
	const active = useLink((state) => state.active);

	return (
		<div
			className={`fixed inset-0 z-[999999999999999] transition-transform duration-300 xmd:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}
		>
			{/* پس‌زمینه تار */}
			<div
				className="absolute inset-0 bg-background/60"
				onClick={() => setOpen(false)}
			></div>

			{/* خود سایدبار */}
			<div className="relative w-2/3 h-full bg-background-secondary p-4  min-h-fit overflow-y-auto">
				<button
					className="absolute top-4 right-4"
					onClick={() => setOpen(false)}
				>
					<PiX className="text-2xl" />
				</button>

				<ul className="flex flex-col gap-4 mt-10">
					{liksNav.map((i) => (
						<li key={i.href}>
							<a href={"#" + i.href} className="w-full">
								<button
									onClick={() => setOpen(false)}
									className={`${
										i.href === active
											? "text-gradient-start"
											: ""
									} hover:text-content-primary w-full hover:bg-surface rounded-full p-3`}
								>
									{i.title}
								</button>
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
