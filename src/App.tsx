import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Landing from "./pages/landing/Landing";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route path="/" element={<Landing />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
