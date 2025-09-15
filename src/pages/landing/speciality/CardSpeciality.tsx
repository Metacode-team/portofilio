import { TbSeparator } from "react-icons/tb";
import Custom1 from "../../../components/static/customSVG/Custom1";
import type { ReactElement } from "react";

export default function CardSpeciality({
	title,
	cap,
	id,
	icon,
}: {
	title: string;
	cap: string;
	id: number;
	icon: ReactElement;
}) {
	return (
		<div className="bg-background-secondary flex flex-col h-full justify-between items-center shadow-lg shadow-black gap-3 p-10">
			<div className="relative size-fit -z-0">
				<span
					className={`${
						id % 2 === 0 ? "text-icon-even" : "text-icon-odd" // even => purple | odd => blue
					} *:text-4xl`}
				>
					{icon}
				</span>

				{/* background of our icon */}
				<span className="absolute z-10 top-0 right-0 size-fit">
					<Custom1 />
				</span>
			</div>
			<div className="text-content-primary text-xl font-peyda-bold text-center pt-10">
				{title}
			</div>
			<div className="">
				<TbSeparator className="text-gradient-start text-3xl" /> {/* divider */}
			</div>
			<div className="text-center">{cap}</div>
		</div>
	);
}
