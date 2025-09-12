import type { ReactElement } from "react";
import Custom1 from "../../../components/static/customSVG/Custom1";
import Button from "../../../components/ui/button/Button";
import { FaAngleRight } from "react-icons/fa";
import { TbSeparator } from "react-icons/tb";

export default function CardServe({
	title,
	cap,
	icon,
}: {
	title: string;
	cap: string;
	icon: ReactElement;
}) {
	return (
		<div className="h-full">
			<div className="relative size-16 flex justify-center items-center translate-y-8 mx-auto z-50 bg-background rounded-lg rotate-45 border border-surface ">
				<span className={`text-white *:-rotate-45 *:text-4xl`}>
					{icon}
				</span>
			</div>
			<div className="bg-background-secondary border h-96 border-surface relative overflow-hidden flex flex-col justify-between items-center shadow-lg shadow-black gap-5 p-10 max-sm:px-5 pt-16">
				<span className="absolute z-10 -bottom-7 -left-7 size-fit">
					<Custom1 size={100} />
				</span>
				<div className="text-content-primary text-xl font-peyda-bold text-center ">
					{title}
				</div>
				<div className="">
					<TbSeparator className="text-gradient-start text-3xl" />
				</div>
				<div className="text-center text-sm line-clamp-3">{cap}</div>

				<div className="">
					<Button
						simple
						className="flex text-sm justify-center  items-center gap-3 bg-surface rounded-full px-6 py-3"
					>
						<span>
							<FaAngleRight />
						</span>
						<span>همکاری با این بخش</span>
					</Button>
				</div>
			</div>
		</div>
	);
}
