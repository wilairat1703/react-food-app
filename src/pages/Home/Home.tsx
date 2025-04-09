import Layout from "../../components/Layouts/Layout";
import "../../styles/HomeStyle.css";
import Section1 from "./Section1";
import Section2 from "./Section2";

function Home() {
  return (
    <Layout>
      {/* Home Section Hero Banner */}
      <Section1/>
      <Section2/>
      {/* <Section3/> */}
    </Layout>

  )
}

export default Home