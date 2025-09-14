import { create } from "zustand";

type LinkState = {
	active: string;
	liksNav: {
		title: string;
		href: string;
	}[];
	setActive: (newActive: string) => void;
};

export const useLink = create<LinkState>((set) => ({
	active: "home",
	liksNav: [
		{ title: "خانه", href: "home" },
		{ title: "تخصص ما", href: "skills" },
		{ title: "درباره ما", href: "about" },
		{ title: "خدمات", href: "services" },
		{ title: "اعضا تیم", href: "team" },
	],
	setActive: (newActive: string) => set({ active: newActive }),
}));




type OpenState = {
	open : boolean,
    setOpen : (val : boolean) => void
};

export const useOpen = create<OpenState>((set) => ({
        open : false, 
        setOpen : (newState : boolean) => set({open : newState})
}))