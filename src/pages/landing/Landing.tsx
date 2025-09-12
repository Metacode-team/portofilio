import Head from "./head/Head";
import Services from "./services/Services";
import Speciality from "./speciality/Speciality";
import Works from "./works/Works";
import Team from "./team/Team";

export default function Landing() {
  return (
    <div className="space-y-20">
        <Head />
        <Speciality/>
        <Works />
        <Services />
        <Team />
    </div>
  )
}
