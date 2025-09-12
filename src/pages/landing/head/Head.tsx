import { BsStars } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa6";
import Button from "../../../components/ui/button/Button";

export default function Head() {
	return (
		<div className="relative">
			<div
				className="*:z-[99] z-[99] grid grid-cols-2 max-md:grid-cols-1 justify-between items-center"
				dir="rtl"
			>
				<div className="relative">
					<img src="/imgs/head.png" alt="" />

					<div className="absolute top-10 z-30 right-4/5 ">
						<BsStars className="text-6xl text-gradient-start" />
					</div>
				</div>
				<div className="flex flex-col justify-between items-start gap-7 p-4 max-md:items-center *:max-md:text-center">
					<h2 className="font-peyda-bold text-3xl text-content-primary">
						معماران وب‌سایت رویایی شما
					</h2>

					<figcaption>
						تیمی یکپارچه از طراحان و توسعه‌دهندگان، متعهد به ساخت
						وب‌سایت‌های خلاقانه، کارآمد و واکنش‌گرا. ما به کیفیت و
						جزئیات اهمیت می‌دهیم.
					</figcaption>

					<section className="pt-10 flex justify-evenly items-center gap-8 flex-wrap w-full">
						<Button className="">شروع یک پروژه </Button>
						<Button className="" simple>
							<span className="flex justify-center items-center gap-1">
								مشاهده نمونه کار
								<FaAngleLeft />
							</span>
						</Button>
					</section>
				</div>
			</div>
			<div className="-z-0 h-1/2 absolute bottom-0 right-0 w-11/12 border border-white/10"></div>
			<div className="bg-gradient-to-bl -z-0 h-1/2 absolute bottom-10 left-0 w-11/12 from-white/10 to-white/0"></div>
		</div>
	);
}
