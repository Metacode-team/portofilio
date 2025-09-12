import Title from "../comp/Title";

export default function Works() {
	const data = [
		"ui ux",
		"golang",
		"node js",
		"django",
		"reat",
		"web dev",
	];
	return (
		<div className="resp flex flex-col justify-center  items-center gap-7">
			<Title
				title="درباره متا کد"
				subTitle="فرآیند کاری ما"
				cap="در متا کد، ما به یک فرآیند کاری شفاف و ساختاریافته باور داریم. هر پروژه، سفری است که با درک عمیق نیازهای شما آغاز شده و با آزمون و بهینه‌سازی مداوم، به یک نتیجه بی‌نقص و کارآمد ختم می‌شود. این رویکرد تضمین‌کننده کیفیت و موفقیت پروژه شماست."
			/>
			<div className="grid grid-cols-2 gap-y-32 justify-between w-11/12 mx-auto justify-items-center items-center md:grid-cols-6 *:rounded *:odd:translate-y-1/2 *:even:-translate-y-1/2 my-32">
				{data.map((item, idx) => (
					<div
						className="border border-dashed rounded p-4 size-fit rotate-45 border-img"
						key={idx + item}
					>
						<div className="border border-img size-24 flex justify-center items-center">
							<p className="-rotate-45 text-content-primary capitalize">
								{item}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
