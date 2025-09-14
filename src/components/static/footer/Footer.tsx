import Button from "../../ui/button/Button";

export default function Footer() {
	return (
		<div>
			<div className="min-h-40 overflow-hidden flex justify-center items-center p-8 bg-[linear-gradient(to_right,rgba(0,0,0,0.35),rgba(0,0,0,0.9)),url(/imgs/foter_back.jpg)] bg-center  bg-no-repeat bg-cover mt-20">
				{/* <div className="size-full h-full min-h-40 bg-gradient-to-r from-black/35 to-black/90 p-8"> */}
				<div className="resp relative  z-30 grid grid-cols-2 max-md:grid-cols-1 gap-5 gap-y-10 justify-items-end items-center h-full">
					<div className="w-full flex justify-start max-md:order-2 max-md:justify-center">
						<Button>
							<a href="tel:+989140858042">تماس با ما</a>
						</Button>
					</div>
					<div
						className="max-w-[450px] max-md:text-center *:max-md:text-center max-md:w-full max-md:mx-auto space-y-4 text-start max-md:order-1"
						dir="rtl"
					>
						<h2 className="text-white text-xl font-peyda-black ">
							ایده‌ای در ذهن دارید؟ بیایید آن را به واقعیت تبدیل
							کنیم.
						</h2>
						<h3 className="text-xs">
							ما همیشه برای شنیدن ایده‌های جدید و چالش‌های
							هیجان‌انگیز آماده‌ایم. با ما تماس بگیرید تا در مورد
							پروژه شما و راهکارهای ممکن صحبت کنیم.
						</h3>
					</div>
					{/* </div> */}
				</div>
			</div>
			<div className="mx-auto text-center text-sm p-5">
				Copyright 2025 | All Rights Reserved
			</div>
		</div>
	);
}
