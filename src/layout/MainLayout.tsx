import { Outlet } from "react-router-dom";
import Header from "../components/static/header/Header";
import Footer from "../components/static/footer/Footer";

export default function MainLayout() {
	return (
		
			<div className="bg-background text-content-secondary w-full font-iransans">
				<div className=" bg-background-secondary h-fit sticky w-full max-xmd:top-0  z-[999999999] -top-11 mb-2">
					<Header />
				</div>
                <div className="resp">

				<Outlet />
                </div>
                <Footer />
			</div>
		
	);
}
