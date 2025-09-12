import { PiTextAlignJustifyBold } from "react-icons/pi";
import Button from "../../../ui/button/Button";
import Logo from "../../logo/Logo";
import SideBar from "./SideBar";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const scrollYRef = useRef(0);

	useEffect(() => {
		if (open) {
			scrollYRef.current = window.scrollY;
			document.body.className = "fixed w-full";
			document.documentElement.classList.add("scroll-auto");
			document.body.style.top = `-${scrollYRef.current}px`;
		} else {
			document.body.classList.toggle("fixed");
			document.body.classList.toggle("w-full");
			window.scrollTo(0, scrollYRef.current);
			document.documentElement.classList.toggle("scroll-auto");
		}
	}, [open]);
	return (
		<>
			<div className="py-2 flex justify-between items-center">
				<Logo />

				{/* links */}
				<ul className="flex justify-center items-center gap-[42px] max-xmd:hidden" dir="rtl">
					<li>
						<button className="hover:text-content-primary">
							خانه
						</button>
					</li>
					<li>
						<button className="hover:text-content-primary">
							تخصص ما
						</button>
					</li>
					<li>
						<button className="hover:text-content-primary">
							درباره ما
						</button>
					</li>
					<li>
						<button className="hover:text-content-primary">
							خدمات
						</button>
					</li>
					<li>
						<button className="hover:text-content-primary">
							اعضا تیم
						</button>
					</li>
				</ul>

				<span className="max-xmd:hidden">
					<Button>شروع یک پروژه </Button>
				</span>

				<div className="xmd:hidden">
					<button onClick={() => setOpen((p) => !p)}>
						<PiTextAlignJustifyBold className="text-2xl" />
					</button>
				</div>
			</div>
			<SideBar open={open} setOpen={setOpen} />
		</>
	);
}
