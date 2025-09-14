import { IoSend } from "react-icons/io5";
import { PiPhoneFill } from "react-icons/pi";

export default function ContactInfo() {
	return (
		<div className="py-1 flex justify-center items-center gap-8">
			<div className="flex justify-center items-center gap-2.5">
				<PiPhoneFill />
				<a href="tel:+989140858042">+989140858042</a>
			</div>

			<div className="flex justify-center items-center gap-2.5">
				<IoSend />
				<a href="mailto:metacodeteam@gmail.com">metacodeteam@gmail.com</a>
			</div>
		</div>
	);
}
