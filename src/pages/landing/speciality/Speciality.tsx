import { FaReact } from "react-icons/fa6";
import CardSpeciality from "./CardSpeciality";
import { SiAltiumdesigner } from "react-icons/si";
import { PiCpu } from "react-icons/pi";
import Title from "../comp/Title";

export default function Speciality() {
	const dataSpe = [
		{
			title: " طراحی رابط و تجربه کاربری",
			icon: <SiAltiumdesigner />,
			caption:
				"ما رابط‌های کاربری زیبا و تجربه‌های کاربری بصری و جذابی خلق می‌کنیم که نه تنها چشم‌نوازند، بلکه استفاده از آن‌ها ساده و لذت‌بخش است.",
			id: 0,
		},
		{
			title: " توسعه فرانت‌اند ",
			icon: <FaReact />,
			caption:
				"طرح‌های شما را با استفاده از مدرن‌ترین تکنولوژی‌ها به کدهای تمیز و واکنش‌گرا تبدیل می‌کنیم تا وب‌سایت شما روی هر دستگاهی بی‌نقص نمایش داده شود.",
			id: 1,
		},
		{
			title: " توسعه بک‌اند و زیرساخت ",
			icon: <PiCpu />,
			caption:
				"زیرساخت‌های قدرتمند، امن و مقیاس‌پذیری می‌سازیم که موتور محرک وب‌سایت شما هستند و عملکردی پایدار و سریع را تضمین می‌کنند",
			id: 2,
		},
	];
	return (
		<div
			className="flex flex-col gap-7 justify-center items-center"
			dir="rtl"
		>
			<Title
				title="تخصص ما"
				subTitle="حوزه‌های تخصصی تیم ما"
				cap="ما راهکارهای دیجیتال یکپارچه، از استراتژی تا اجرا، برای کسب‌وکار
				شما طراحی و پیاده‌سازی می‌کنیم."
			/>

			<div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center justify-center items-center lg:grid-cols-3 gap-7 ">
				{dataSpe.map((item, idx) => (
					<div
						className={`${
							idx === 2 && "max-lg:col-span-full"
						} h-full`}
						key={item.id}
					>
						<CardSpeciality
							id={item.id}
							cap={item.caption}
							icon={item.icon}
							title={item.title}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
