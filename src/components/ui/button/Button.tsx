import type { ReactNode } from "react";

export default function Button({
	simple = false,
	children,
	className = "",
}: {
	simple?: boolean;
	children: ReactNode;
	className?: string;
}) {
	return (
		<button
			className={`${
				simple
					? className
					: "bg-gradient-to-r rounded-full w-[164px] h-10 from-gradient-start to-gradient-end"
			}  text-content-primary`}
		>
			{children}
		</button>
	);
}
