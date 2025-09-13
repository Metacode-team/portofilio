import { FaGithub } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { PiTelegramLogoBold } from "react-icons/pi";

export default function Social() {
	return (
		<div className="flex justify-center items-center gap-3 *:flex *:justify-center *:items-center text-content-primary">
			<a href="https://t.me/TripleMDV" target="_blank" rel="noopener noreferrer" className="bg-white/5 rounded-full size-8">
				<PiTelegramLogoBold />
			</a>
			<a className="bg-white/5 rounded-full size-8">
				<GrLinkedinOption />
			</a>
			<a href="https://github.com/Metacode-team" target="_blank" rel="noopener noreferrer" className="bg-white/5 rounded-full size-8">
				<FaGithub />
			</a>
		</div>
	);
}
