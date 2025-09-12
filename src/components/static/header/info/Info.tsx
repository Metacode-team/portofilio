import ContactInfo from "./ContactInfo";
import Social from "./Social";

export default function Info() {
	return (
		<div className="flex justify-between items-center max-xmd:hidden">
			<Social />

			<ContactInfo />
		</div>
	);
}
