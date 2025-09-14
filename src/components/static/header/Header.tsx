import Info from "./info/Info";
import Navbar from "./nav/Navbar";

export default function Header() {
	return (
		<header className=" resp py-1.5 space-y-1.5 z-[999999999999999] bg-background-secondary">
			<Info />
			<nav className="py-3">
				<Navbar />
			</nav>
		</header>
	);
}
