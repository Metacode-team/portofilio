import Custom2 from "../../../components/static/customSVG/Custom2";
import Title from "../comp/Title";

export default function Team() {
	const data = [
		{
			name: "مینا صالحی",
			title: "ui-ux designer",
			img: "/imgs/woman.png",
			cap: "طراحی UI/UX، هنر ساختن تکنولوژی برای انسان است؛ زیبا، ساده و قابل فهم. نتیجه آن محصولی است که کاربران را جذب و حفظ می‌کند و باعث رشد کسب‌وکار شما می‌شود.",
			id: 0,
		},
		{
			name: "محمد مهدی محمدی",
			title: "node js - react",
			img: "/imgs/man.png",
			cap: "قدرت یکپارچه جاوااسکریپت برای ساخت تجربه‌های دیجیتال زنده استفاده می‌کند (React + Node.js). مزیت آن، سرعت فوق‌العاده و قابلیت‌های real-time که کاربران را در لحظه درگیر نگه می‌دارد.",
			id: 1,
		},
		{
			name: "علی آزادی",
			title: "python - react",
			img: "/imgs/man.png",
			cap: "اتصال رابط‌های کاربری روان (React) به بک‌اندهای هوشمند و تطبیق‌پذیر (Python). این یعنی محصول شما برای مدیریت فرآیندهای پیچیده و رشد در آینده، کاملاً آماده است.",
			id: 2,
		},
		{
			name: "امیررضا خانی",
			title: "golang - react",
			img: "/imgs/man.png",
			cap: " ترکیب رابط‌های کاربری پویا (React) با موتورهای پردازشی فوق‌سریع (Golang) است. مزیت آن، سرعت بی‌نظیر و قدرتی است که اپلیکیشن شما را برای میلیون‌ها کاربر آماده می‌کند.",
			id: 3,
		},
	];
	return (
		<div>
			<Title
				cap="در متا کد، قدرت ما در تیم ماست. ما ترکیبی از یک طراح خلاق و توسعه‌دهندگان فول‌استک هستیم که با اشتیاق به تکنولوژی و تعهد به کیفیت، ایده‌های پیچیده را به محصولات دیجیتال ساده و قدرتمند تبدیل می‌کنیم. با اعضای کلیدی تیم ما آشنا شوید."
				subTitle="با متخصصان ما آشنا شوید"
				title="تیم متا کد"
			/>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12 mt-20">
				{data.map((item) => (
					<div className="" key={item.id}>
						<div className="px-12 relative overflow-hidden bg-none">
							<img
								src={item.img}
								alt=""
								className="relative z-[99]"
							/>
							<div className="absolute bottom-0 right-0 left-0 z-0">
								<Custom2 />
							</div>
						</div>
						<div className="p-5 flex flex-col gap-4 max-sm:justify-center items-center" dir="rtl">
							<h2 className="text-xl text-white font-peyda-black max-sm:text-center">
								{item.name}
							</h2>
							<h3 className="text-sm font-iransans-bold text-content-primary  max-sm:text-center">
								{item.title}
							</h3>
							<p className="font-iransans-light text-xs max-sm:text-center">
								{item.cap}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
