import Contact from "../contact/Contact";
import Header from "../header/header";
import Hero from "../hero/Hero";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";


function Home() {
    return ( <>
        <section className=" bg-[#090E1C] scroll-smooth">
            <Header/>
            <Hero/>
            <Skills/>
            <Projects/>
            <Contact/>
        </section>
    </> );
}

export default Home;