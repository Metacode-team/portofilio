import { BsStars } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa6";
import Button from "../../../components/ui/button/Button";

export default function Head() {
	return (
		<div className="relative">
			{/* text $ img */}
			<div
				className="*:z-[99] z-[99] grid grid-cols-2 max-md:grid-cols-1 justify-between items-center"
				dir="rtl"
			>
				{/* img & icon */}
				<div className="relative">
					<img src="/imgs/head.png" alt="" />

					<div className="absolute top-10 z-30 right-4/5 ">
						<BsStars className="text-6xl text-gradient-start" />
					</div>
				</div>

				{/* info | text */}
				<div className="flex flex-col justify-between items-start gap-7 p-4 max-md:items-center *:max-md:text-center">
					<h2 className="font-peyda-bold text-3xl text-content-primary">
						معماران وب‌سایت رویایی شما
					</h2>

					<figcaption>
						تیمی یکپارچه از طراحان و توسعه‌دهندگان، متعهد به ساخت
						وب‌سایت‌های خلاقانه، کارآمد و واکنش‌گرا. ما به کیفیت و
						جزئیات اهمیت می‌دهیم.
					</figcaption>

					<div className="pt-10 flex justify-evenly items-center gap-8 flex-wrap w-full">
						<Button className="">
							<a href="mailto:metacodeteam@gmail.com">
								شروع یک پروژه
							</a>
						</Button>
						<Button className="" simple>
							<a
								href="https://github.com/Metacode-team"
								target="_blank"
								rel="noopener noreferrer"
								className="flex justify-center items-center gap-1"
							>
								مشاهده نمونه کار
								<FaAngleLeft />
							</a>
						</Button>
					</div>
				</div>
			</div>

			{/* background */}
			<div className="-z-0 h-1/2 absolute bottom-0 right-0 w-11/12 border border-white/10"></div>
			<div className="bg-gradient-to-bl -z-0 h-1/2 absolute bottom-10 left-0 w-11/12 from-white/10 to-white/0"></div>
		</div>
	);
}
