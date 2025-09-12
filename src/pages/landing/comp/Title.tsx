export default function Title({title , subTitle , cap} : {title:string , subTitle:string , cap:string}) {
	return (
		<div className="text-center flex flex-col justify-center items-center gap-7" dir="rtl">
			<h3 className="py-7 text-sm">{title}</h3>
			<h2 className="text-4xl font-peyda-black text-gradient-start text-center">
				{subTitle}
			</h2>
			<figcaption className="text-center text-xs">
				{cap}
			</figcaption>
		</div>
	);
}
