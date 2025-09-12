import { IoSend } from "react-icons/io5";
import { PiMapPinFill, PiPhoneFill } from "react-icons/pi";

export default function ContactInfo() {
	return (
		<div className="py-1 flex justify-center items-center gap-8">
			<div className="flex justify-center items-center gap-2.5">
				<PiPhoneFill />
				<span>+223 456 789</span>
			</div>
			<div className="flex justify-center items-center gap-2.5">
				<PiMapPinFill />
				<span>6391 Elgin St. Celina, Delaware</span>
			</div>
			<div className="flex justify-center items-center gap-2.5">
				<IoSend />
				<span>example@gmail.com</span>
			</div>
		</div>
	);
}
