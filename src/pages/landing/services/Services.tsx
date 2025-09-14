import Title from "../comp/Title";
import CardServe from "./CardServe";
import { CiBezier, CiDatabase, CiDesktop, CiGrid32, CiMobile3, CiShop } from "react-icons/ci";

export default function Services() {
	const data = [
		{
			icon: <CiBezier />,
			id: 0,
			title: "طراحی رابط کاربری",
			cap: " خلق رابط‌های کاربری زیبا و تجربه‌های کاربری روان که باعث افزایش تعامل و رضایت کاربران شما می‌شود.",
		},
		{
			icon: <CiDesktop />,
			id: 1,
			title: "توسعه رابط کاربری",
			cap: " تبدیل طرح‌های بصری به کدهای تمیز، بهینه و واکنش‌گرا که بر روی تمام دستگاه‌ها بی‌نقص اجرا می‌شوند.",
		},
		{
			icon: <CiDatabase />,
			id: 2,
			title: "برنامه نویسی سرور",
			cap: " ساخت موتور قدرتمند و امن برای وب‌سایت شما؛ از مدیریت دیتابیس گرفته تا پیاده‌سازی منطق‌های پیچیده کسب‌وکار.",
		},
		{
			icon: <CiMobile3 />,
			id: 3,
			title: "وب اپلیکیشن سفارشی",
			cap: " اگر نیاز شما فراتر از یک وب‌سایت معمولی است، ما ابزارها و اپلیکیشن‌های تحت وب سفارشی برای حل مشکلات خاص شما می‌سازیم.",
		},
		{
			icon: <CiGrid32 />,
			id: 4,
			title: "بهینه‌سازی و پشتیبانی",
			cap: " پس از راه‌اندازی، وب‌سایت شما را از نظر سرعت و عملکرد بهینه‌سازی کرده و خدمات پشتیبانی فنی برای اطمینان از پایداری آن ارائه می‌دهیم.",
		},
		{
			icon: <CiShop />,
			id: 5,
			title: " راهکارهای فروشگاه آنلاین",
			cap: "طراحی و توسعه فروشگاه‌های آنلاین سفارشی، امن و مقیاس‌پذیر که تجربه خریدی بی‌نقص برای مشتریان شما فراهم می‌کنند.",
		},
	];

	return (
		<div className="flex flex-col gap-5 items-center justify-center" dir="rtl">
			<Title
				title="خدمات ما"
				subTitle="آنچه برای موفقیت آنلاین نیاز دارید"
				cap="ما در متا کد، مجموعه‌ای از خدمات کلیدی را ارائه می‌دهیم که هر کدام بخشی از پازل موفقیت دیجیتال شما را تکمیل می‌کنند. تمرکز ما بر ارائه راهکارهای خلاقانه و فنی است که برند شما را به سطح بالاتری می‌برد."
			/>

			<div className="grid grid-cols-1 justify-items-stretch justify-center items-stretch sm:grid-cols-2 lg:grid-cols-3 gap-8  ">
				{data.map((item) => (
					<CardServe
						key={item.id}
						cap={item.cap}
						title={item.title}
						icon={item.icon}
					/>
				))}
			</div>
		</div>
	);
}
