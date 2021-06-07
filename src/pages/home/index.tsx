import type { VFC } from "react";
import Layout from "../../components/layout";
import Banner from "../../components/banner";
import About from "../../components/about";
import Portfolio from "../../components/portfolio";
import Testimonial from "../../components/testimonial";

const Home: VFC = () => {
    return (
        <Layout>
            <Banner />
            <About />
            <Portfolio />
            <Testimonial/>
        </Layout>
    )
}

export default Home