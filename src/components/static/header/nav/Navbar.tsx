import { PiTextAlignJustifyBold } from "react-icons/pi";
import Button from "../../../ui/button/Button";
import Logo from "../../logo/Logo";
import SideBar from "./SideBar";
import { useLink, useOpen } from "../../../../store/store";

export default function Navbar() {
	const open = useOpen((state) => state.open)
	const setOpen = useOpen((state) => state.setOpen)
	const active = useLink((state) => state.active)
	const liksNav = useLink((state) => state.liksNav)

	return (
		<>
			<div className="py-2 flex justify-between items-center">
				<Logo />

				{/* links */}
				<ul
					className="flex justify-center items-center gap-[42px] max-xmd:hidden"
					dir="rtl"
				>
					{liksNav.map((i) => (
						<li key={i.href}>
							<button
								className={`${
									i.href === active
										? "text-gradient-start"
										: ""
								} hover:text-content-primary`}
							>
								<a href={"#"+i.href}>{i.title}</a>
							</button>
						</li>
					))}
				</ul>

				<span className="max-xmd:hidden">
					<Button>شروع یک پروژه </Button>
				</span>

				<div className="xmd:hidden">
					<button onClick={() => setOpen(!open)}>
						<PiTextAlignJustifyBold className="text-2xl" />
					</button>
				</div>

			</div>
			<SideBar />
		</>
	);
}
