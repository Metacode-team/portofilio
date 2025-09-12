import { FaWhatsapp } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { PiTelegramLogoBold } from "react-icons/pi";

export default function Social() {
	return (
		<div className="flex justify-center items-center gap-3 *:flex *:justify-center *:items-center text-content-primary">
			<button className="bg-white/5 rounded-full size-8">
				<PiTelegramLogoBold />
			</button>
			<button className="bg-white/5 rounded-full size-8">
				<GrLinkedinOption />
			</button>
			<button className="bg-white/5 rounded-full size-8">
				<FaWhatsapp />
			</button>
		</div>
	);
}
