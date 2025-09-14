import Head from "./head/Head";
import Services from "./services/Services";
import Speciality from "./speciality/Speciality";
import Works from "./works/Works";
import Team from "./team/Team";

export default function Landing() {
	return (
		<div className="space-y-20">
			<section id="home" className="scroll-mt-20">
				<Head />
			</section>

			<section id="skills" className="scroll-mt-20">
				<Speciality />
			</section>

			<section id="about" className="scroll-mt-20">
				<Works />
			</section>

			<section id="services" className="scroll-mt-20">
				<Services />
			</section>

			<section id="team" className="scroll-mt-20">
				<Team />
			</section>
		</div>
	);
}
