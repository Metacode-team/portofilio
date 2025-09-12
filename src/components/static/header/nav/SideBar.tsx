import { PiX } from "react-icons/pi";

export default function SideBar({open , setOpen} : {open : boolean , setOpen : (val : boolean) => void}) {
  return (
     <div
        className={`fixed inset-0 z-[999999999999999] transition-transform duration-300 xmd:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* پس‌زمینه تار */}
        <div
          className="absolute inset-0 bg-background/60"
          onClick={() => setOpen(false)}
        ></div>

        {/* خود سایدبار */}
        <div className="relative w-2/3 h-full bg-background-secondary p-4 ">
          <button
            className="absolute top-4 right-4"
            onClick={() => setOpen(false)}
          >
            <PiX className="text-2xl" />
          </button>

          <nav className="flex flex-col gap-4 mt-10">
            <a href="#" className="hover:text-blue-600">خانه</a>
            <a href="#" className="hover:text-blue-600">تخصص ما</a>
            <a href="#" className="hover:text-blue-600">درباره ما</a>
            <a href="#" className="hover:text-blue-600">خدمات</a>
            <a href="#" className="hover:text-blue-600">اعضا تیم</a>
          </nav>
        </div>
      </div>

  )
}
