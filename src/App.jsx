import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TextChainIntro from "../pages/animation/textChain";
import Nav from "./components/Nav";
import Image from"next/image";

const App = () => {
  const pages = ["Start", "Amazon"];
  return (
    <>
      <Parallax pages={pages.length} style={{ top: "0", left: "0" }}>
        <div id={pages[0]} />
        
        <ParallaxLayer
          offset={0}
          factor={0}
          speed={0.1}
          sticky={{ start: 0, end: pages.length + 1 }}
        >
          <Nav pages={pages} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          factor={1}
          speed={2.5}
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextChainIntro></TextChainIntro>
        </ParallaxLayer>

        
        <ParallaxLayer
          offset={1}
          factor={1}
          speed={0.05}
          style={{ backgroundColor: "#ff6d6d" }}
        >
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          factor={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <div id={pages[1]} />
          <p>Work in progrss</p>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default App;
